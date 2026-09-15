import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8');

test('frontend keeps the Smart Canteen core roles', () => {
  for (const role of ['Sinh viên', 'Giảng viên', 'Khách', 'Nhân viên / Admin']) {
    assert.match(html, new RegExp(role));
  }
});

test('frontend keeps the main ordering areas', () => {
  for (const marker of ['Thực đơn hôm nay', 'Giỏ hàng', 'Đơn hàng của tôi', 'Bảng điều khiển nhân viên', 'Quản trị hệ thống']) {
    assert.match(html, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('frontend keeps the order workflow states', () => {
  for (const status of ['waiting', 'confirmed', 'preparing', 'ready', 'received', 'rejected', 'cancelled']) {
    assert.match(html, new RegExp(`['"]${status}['"]`));
  }
});

test('frontend keeps demo checkout rules', () => {
  assert.match(html, /cancelDeadline:Date\.now\(\)\+5\*60\*1000/);
  assert.match(html, /pickupCode/);
  assert.match(html, /selectedPayment/);
  assert.match(html, /selectedSlot/);
});

test('frontend keeps the modal set used by the prototype', () => {
  for (const id of ['foodModal', 'checkoutModal', 'otpModal', 'ingredientModal', 'rejectModal', 'pickupModal', 'reviewModal']) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
});

test('frontend keeps browser demo session storage', () => {
  assert.match(html, /smartCanteenDemoUser/);
  assert.match(html, /localStorage/);
});
