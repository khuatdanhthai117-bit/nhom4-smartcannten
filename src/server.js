import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { menu } from "./store.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const enhancementFile = path.join(publicDir, "js", "enhancements.js");
const defaultHost = process.env.HOST || "127.0.0.1";
const defaultPort = Number(process.env.PORT || 3000);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": type,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer"
  });
  response.end(body);
}

async function prepareHtml(body) {
  const html = body.toString("utf8");
  if (!html.includes("</body>")) return body;
  try {
    const enhancement = await readFile(enhancementFile, "utf8");
    return Buffer.from(html.replace("</body>", `<script src="/js/enhancements.js"></script>\n</body>`), "utf8");
  } catch {
    return body;
  }
}

export function createServer() {
  return http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

    if (request.method !== "GET" && request.method !== "HEAD") {
      response.setHeader("Allow", "GET, HEAD");
      return send(response, 405, "Method Not Allowed");
    }

    if (url.pathname === "/api/health") {
      const body = JSON.stringify({ ok: true, service: "smart-canteen" });
      return send(response, 200, request.method === "HEAD" ? "" : body, contentTypes[".json"]);
    }

    if (url.pathname === "/api/menu") {
      const body = JSON.stringify(menu);
      return send(response, 200, request.method === "HEAD" ? "" : body, contentTypes[".json"]);
    }

    const requested = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = path.resolve(publicDir, `.${requested}`);
    const publicRoot = `${publicDir}${path.sep}`;

    if (filePath !== publicDir && !filePath.startsWith(publicRoot)) {
      return send(response, 403, "Forbidden");
    }

    try {
      if (!(await stat(filePath)).isFile()) return send(response, 404, "Not Found");
      let body = request.method === "HEAD" ? Buffer.alloc(0) : await readFile(filePath);
      if (request.method === "GET" && path.extname(filePath) === ".html") body = await prepareHtml(body);
      return send(response, 200, body, contentTypes[path.extname(filePath)] || "application/octet-stream");
    } catch {
      return send(response, 404, "Not Found");
    }
  });
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const server = createServer();
  server.listen(defaultPort, defaultHost, () => {
    console.log(`Smart Canteen đang chạy tại http://${defaultHost}:${defaultPort}`);
  });
}
