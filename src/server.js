import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { menu } from "./store.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 3000);
const contentTypes = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8" };

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, { "Content-Type": type, "X-Content-Type-Options": "nosniff" });
  response.end(body);
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (url.pathname === "/api/health") return send(response, 200, JSON.stringify({ ok: true }), contentTypes[".json"]);
  if (url.pathname === "/api/menu") return send(response, 200, JSON.stringify(menu), contentTypes[".json"]);
  if (request.method !== "GET" && request.method !== "HEAD") return send(response, 405, "Method Not Allowed");

  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.resolve(publicDir, `.${requested}`);
  if (!filePath.startsWith(publicDir)) return send(response, 403, "Forbidden");
  try {
    if (!(await stat(filePath)).isFile()) return send(response, 404, "Not Found");
    const body = request.method === "HEAD" ? "" : await readFile(filePath);
    send(response, 200, body, contentTypes[path.extname(filePath)] || "application/octet-stream");
  } catch {
    send(response, 404, "Not Found");
  }
});

server.listen(port, host, () => console.log(`Smart Canteen đang chạy tại http://${host}:${port}`));
