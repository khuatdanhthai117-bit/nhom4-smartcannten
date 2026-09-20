import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexHtml = fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8');
const appHtml = fs.readFileSync(path.join(root, 'public', 'app.html'), 'utf8');
const loginJs = fs.readFileSync(path.join(root, 'public', 'js', 'login.js'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'public', 'js', 'app.js'), 'utf8');
const frontend = `${indexHtml}\n${appHtml}\n${loginJs}\n${appJs}`;

function hasText(value) {
  assert.ok(frontend.includes(value), `Thiếu thành phần frontend: ${value}`);
}

test('frontend loaders point to the JavaScript entry files', () => {
  assert.match(indexHtml, /<script src="\.\/js\/login\.js"><\/script>/);
  assert.match(appHtml, /<script src="\.\/js\/app\.js"><\/script>/);
});

test('frontend keeps the Smart Canteen core roles', () => {
  for (const role of ['Sinh viên', 'Giảng viên', 'Khách', 'Nhân viên / Admin']) hasText(role);
});

test('frontend keeps the main user areas', () => {
  for (const marker of ['Thực đơn hôm nay', 'Giỏ hàng', 'Đơn hàng của tôi', 'Trung tâm vận hành nhân viên', 'Trung tâm quản trị Smart Canteen']) hasText(marker);
});

test('frontend keeps the order workflow states', () => {
  for (const status of ['Chờ xác nhận', 'Đã xác nhận', 'Đang chuẩn bị', 'Sẵn sàng', 'Đã nhận', 'Đã từ chối', 'Đã hủy']) hasText(status);
});

test('frontend exposes the complete customer flow', () => {
  for (const fn of [
    'setMode',
    'login',
    'register',
    'renderHome',
    'renderMenu',
    'detail',
    'addCart',
    'changeQty',
    'renderCart',
    'checkout',
    'selectPay',
    'applyPromo',
    'finish',
    'renderOrders',
    'cancelOrder',
    'review'
  ]) {
    hasText(`function ${fn}`);
  }
});

test('frontend exposes the complete staff flow', () => {
  for (const fn of ['renderStaff', 'reject', 'pickup', 'ingredientsModal']) {
    hasText(`function ${fn}`);
  }
  hasText('Mã nhận món không đúng.');
  hasText("recordOrderEvent(o,'Đã nhận'");
});

test('frontend exposes the complete admin flow', () => {
  for (const fn of ['renderAdmin', 'adminTab', 'foodAdmin']) {
    hasText(`function ${fn}`);
  }
  hasText("currentUser.role!=='admin'");
  hasText('Xóa món này khỏi thực đơn demo?');
});

test('frontend keeps checkout and promotion rules', () => {
  hasText('cancelDeadline:now+5*60*1000');
  hasText("payment='Ví MoMo'");
  hasText("slot='11:00 – 11:15'");
  hasText('function totals()');
  hasText('STUDENT10');
  hasText('CAN20');
});

test('guest login toggles validation correctly', () => {
  hasText('$("password").required=!guest');
  hasText('$("otp").required=guest');
});

test('role-based page access is guarded in the frontend', () => {
  hasText("['staff','admin'].includes(currentUser.role)");
  hasText("currentUser.role==='admin'");
});

test('frontend persists demo application state', () => {
  hasText('smartCanteenDemoUser');
  hasText('smartCanteenState');
  hasText('const persist=');
  hasText('persist();');
});

test('frontend defines a shared dynamic modal container', () => {
  hasText('id="modal" class="overlay"');
  hasText('document.getElementById(\'modal\').innerHTML');
});

test('staff dashboard includes deeper operations', () => {
  for (const marker of [
    'Trung tâm vận hành nhân viên',
    'Cần xử lý gấp',
    'Hàng chờ xử lý',
    'Nhật ký trạng thái',
    'Xem chi tiết'
  ]) hasText(marker);
});

test('admin dashboard includes deeper management areas', () => {
  for (const marker of [
    'Trung tâm quản trị Smart Canteen',
    'Quản lý đơn hàng',
    'Quản lý người dùng',
    'Quản lý thực đơn',
    'Quản lý kho nguyên liệu',
    'Quản lý khuyến mãi',
    'Báo cáo vận hành',
    'Hướng dẫn quản trị'
  ]) hasText(marker);
});

test('admin can manage menu availability and richer stock fields', () => {
  hasText('Tắt bán');
  hasText('Tồn kho demo');
  hasText('Trạng thái');
  hasText('Đã bật bán');
});

test('login respects admin-managed account status', () => {
  assert.match(fs.readFileSync(path.join(root, 'public', 'js', 'login.js'), 'utf8'), /found.active===false/);
});
