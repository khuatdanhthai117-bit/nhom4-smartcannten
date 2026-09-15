import test from "node:test";
import assert from "node:assert/strict";
import { menu, roles } from "../src/store.js";

test("menu mẫu có dữ liệu hợp lệ", () => {
  assert.ok(menu.length > 0);
  for (const item of menu) {
    assert.equal(typeof item.id, "number");
    assert.equal(typeof item.name, "string");
    assert.equal(typeof item.price, "number");
    assert.ok(item.price >= 0);
    assert.equal(typeof item.category, "string");
    assert.equal(typeof item.available, "boolean");
  }
});

test("hệ thống có đủ năm vai trò demo", () => {
  assert.deepEqual(roles, ["student", "lecturer", "guest", "staff", "admin"]);
});
