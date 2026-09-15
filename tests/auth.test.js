import test from "node:test";
import assert from "node:assert/strict";
import { canAccess, sanitizeUser } from "../src/auth.js";

test("quyền admin được nhận diện", () => {
  assert.equal(canAccess("admin", ["admin"]), true);
  assert.equal(canAccess("student", ["admin"]), false);
});

test("không trả mật khẩu cho client", () => {
  assert.deepEqual(sanitizeUser({ id: 1, name: "An", password: "secret" }), { id: 1, name: "An" });
});
