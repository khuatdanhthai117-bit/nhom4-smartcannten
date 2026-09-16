import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8');

function hasText(value) {
  assert.ok(html.includes(value), `Thiếu thành phần frontend: ${value}`);
}

test('frontend keeps the Smart Canteen core roles', () => {
  for (const role of ['Sinh viên', 'Giảng viên', 'Khách', 'Nhân viên / Admin']) hasText(role);
});

test('frontend keeps the main user areas', () => {
  for (const marker of ['Thực đơn hôm nay', 'Giỏ hàng', 'Đơn hàng của tôi', 'Bảng điều khiển nhân viên', 'Quản trị hệ thống']) hasText(marker);
});

test('frontend keeps the order workflow states', () => {
  for (const status of ['Chờ xác nhận', 'Đã xác nhận', 'Đang chuẩn bị', 'Sẵn sàng', 'Đã nhận', 'Đã từ chối', 'Đã hủy']) hasText(status);
});

test('frontend exposes the complete customer flow', () => {
  for (const fn of ['setLoginType', 'login', 'register', 'renderMenu', 'openFood', 'addToCart', 'changeQty', 'removeCart', 'openCheckout', 'selectSlot', 'selectPayment', 'applyDiscount', 'finishPayment', 'renderOrders', 'cancelOrder', 'openReview', 'submitReview']) {
    hasText(`function ${fn}`);
  }
});

test('frontend exposes the complete staff flow', () => {
  for (const fn of ['renderStaff', 'acceptOrder', 'updateOrderStatus', 'openReject', 'confirmReject', 'openPickup', 'verifyPickup', 'openIngredientUpdate', 'saveIngredients']) {
    hasText(`function ${fn}`);
  }
  hasText('id="pickupCodeInput"');
  hasText('input!==o.code');
});

test('frontend exposes the complete admin flow', () => {
  for (const fn of ['renderAdminFoods', 'openFoodAdmin', 'saveFoodAdmin', 'deleteFood', 'renderAdminIngredients', 'renderAdminReports', 'renderAdminPromotions', 'renderAdminReviews']) {
    hasText(`function ${fn}`);
  }
  hasText('function adminOnly()');
});

test('frontend keeps checkout and promotion rules', () => {
  hasText('cancelDeadline:Date.now()+5*60*1000');
  hasText('makePickupCode()');
  hasText('selectedPayment');
  hasText('selectedSlot');
  hasText('calculateTotals()');
  hasText('STUDENT10');
  hasText('CAN20');
});

test('guest login toggles validation correctly', () => {
  hasText('pw.required=!guest');
  hasText('otp.required=guest');
});

test('role-based page access is guarded in the frontend', () => {
  hasText('const access={staff:["staff","admin"],admin:["admin"]}');
  hasText('if(!adminOnly())return');
});

test('frontend persists demo application state', () => {
  hasText('smartCanteenDemoUser');
  hasText('smartCanteenState');
  hasText('function persist()');
  hasText('persist();');
});

test('frontend defines the expected modal containers', () => {
  for (const id of ['foodModal', 'checkoutModal', 'ingredientModal', 'rejectModal', 'pickupModal', 'reviewModal']) {
    hasText(`id="${id}"`);
  }
});
