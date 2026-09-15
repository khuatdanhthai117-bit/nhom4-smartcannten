import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "../src/server.js";

async function withServer(run) {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    return await run(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}

test("GET /api/health trả trạng thái hoạt động", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true, service: "smart-canteen" });
  });
});

test("GET /api/menu trả danh sách món", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/menu`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.ok(Array.isArray(data));
    assert.ok(data.length > 0);
  });
});

test("method không được hỗ trợ trả 405", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/health`, { method: "POST" });
    assert.equal(response.status, 405);
    assert.equal(response.headers.get("allow"), "GET, HEAD");
  });
});
