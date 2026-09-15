/* Smart Canteen - frontend enhancement layer
   Giữ nguyên toàn bộ nghiệp vụ demo trong index.html.
   File này chỉ bổ sung các cải thiện không làm thay đổi luồng đặt món.
*/
(function () {
  'use strict';

  // Hiển thị lỗi JavaScript rõ ràng thay vì để giao diện im lặng khi demo gặp lỗi.
  window.addEventListener('error', function (event) {
    console.error('[Smart Canteen]', event.error || event.message);
  });

  // Cho phép đóng modal bằng phím Escape, phù hợp với các modal có sẵn trong HTML.
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var overlays = document.querySelectorAll('.overlay.show');
    overlays.forEach(function (overlay) {
      overlay.classList.remove('show');
    });
  });

  // Chống gửi form liên tục do người dùng bấm nút nhiều lần trong demo.
  document.addEventListener('submit', function (event) {
    var button = event.target.querySelector('button[type="submit"]');
    if (!button) return;
    window.setTimeout(function () {
      if (button.disabled) button.disabled = false;
    }, 1500);
  });
})();
