(() => {
  "use strict";

  const STYLE_ID = "smart-canteen-enhancements";
  const STYLE = `
    :root { --focus-ring: 0 0 0 3px rgba(69,123,157,.25); }
    button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: none; box-shadow: var(--focus-ring); }
    .sc-loading { position: relative; pointer-events: none; }
    .sc-loading::after { content: ""; width: 15px; height: 15px; margin-left: 8px; display: inline-block; vertical-align: -2px; border: 2px solid currentColor; border-right-color: transparent; border-radius: 50%; animation: sc-spin .65s linear infinite; }
    .sc-empty { padding: 28px 18px; text-align: center; color: var(--muted, #6c757d); background: #fff; border: 1px dashed var(--border, #dee2e6); border-radius: 12px; }
    .sc-empty strong { display: block; color: var(--secondary, #1d3557); margin-bottom: 4px; }
    .data-table { min-width: 620px; }
    .table-wrap { -webkit-overflow-scrolling: touch; }
    @keyframes sc-spin { to { transform: rotate(360deg); } }
    @media (max-width: 600px) {
      .page { padding: 16px 12px; }
      .hero { padding: 22px 18px; border-radius: 15px; }
      .search-row { flex-direction: column; }
      .hero-actions, .header-actions { gap: 6px; }
      .hero-actions .btn, .header-actions .header-btn { min-height: 42px; }
      .modal { padding: 18px; border-radius: 14px; max-height: 95vh; }
      .modal-head { position: sticky; top: -18px; background: #fff; padding: 4px 0 12px; z-index: 2; }
      .cart { margin-top: 4px; }
      .timeline { overflow-x: auto; padding-bottom: 4px; }
      .timeline-step { min-width: 76px; }
    }
  `;

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = STYLE;
    document.head.appendChild(style);
  }

  function showEmptyStates() {
    const targets = [
      [".order-list", "Chưa có đơn hàng", "Các đơn bạn đặt sẽ xuất hiện tại đây."],
      [".menu-grid:empty", "Chưa có món phù hợp", "Hãy thử chọn danh mục khác hoặc xóa bộ lọc."],
    ];
    for (const [selector, title, message] of targets) {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.children.length === 0 && !el.querySelector(".sc-empty")) {
          el.innerHTML = `<div class="sc-empty"><strong>${title}</strong><span>${message}</span></div>`;
        }
      });
    }
  }

  function improveButtons() {
    document.querySelectorAll("button").forEach((button) => {
      if (!button.getAttribute("aria-label") && !button.textContent.trim()) {
        const title = button.getAttribute("title");
        if (title) button.setAttribute("aria-label", title);
      }
    });
  }

  function bindLoading() {
    document.addEventListener("submit", (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      const submit = form.querySelector('button[type="submit"], button:not([type])');
      if (!submit || submit.dataset.noLoading === "true") return;
      window.setTimeout(() => {
        if (!submit.isConnected || !form.isConnected) return;
        submit.classList.add("sc-loading");
        submit.dataset.originalText = submit.textContent;
        submit.setAttribute("aria-busy", "true");
      }, 0);
    }, true);
  }

  function bindEscape() {
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const overlay = document.querySelector(".overlay.show");
      if (!overlay) return;
      const close = overlay.querySelector(".close");
      if (close) close.click();
    });
  }

  function bindRuntimeErrors() {
    const report = (message) => {
      if (typeof window.showToast === "function") {
        window.showToast(`Có lỗi xảy ra: ${message}`);
      }
    };
    window.addEventListener("error", (event) => {
      if (event.error) report("vui lòng thử lại");
    });
    window.addEventListener("unhandledrejection", () => report("vui lòng thử lại"));
  }

  function fixPromotionDisplay() {
    const originalApplyDiscount = window.applyDiscount;
    if (typeof originalApplyDiscount !== "function" || originalApplyDiscount.__smartCanteenPatched) return;

    const patchedApplyDiscount = function () {
      const input = document.getElementById("discountInput");
      if (!input || typeof window.calculateTotals !== "function") {
        return originalApplyDiscount.apply(this, arguments);
      }

      const code = input.value.trim().toUpperCase();
      const previous = window.discountCode || "";
      window.discountCode = code;
      const totals = window.calculateTotals();

      if (totals.discount) {
        const subtotal = document.getElementById("checkoutSubtotal");
        const discount = document.getElementById("checkoutDiscount");
        const total = document.getElementById("checkoutTotal");
        if (subtotal) subtotal.textContent = window.formatPrice(totals.sub);
        if (discount) discount.textContent = `-${window.formatPrice(totals.discount)}`;
        if (total) total.textContent = window.formatPrice(totals.total);
        if (typeof window.showToast === "function") window.showToast(`Áp dụng ${totals.discountLabel} thành công.`);
        return;
      }

      window.discountCode = previous;
      const restored = window.calculateTotals();
      const discount = document.getElementById("checkoutDiscount");
      const total = document.getElementById("checkoutTotal");
      if (discount) discount.textContent = restored.discount ? `-${window.formatPrice(restored.discount)}` : "0 ₫";
      if (total) total.textContent = window.formatPrice(restored.total);
      if (typeof window.showToast === "function") window.showToast("Mã khuyến mãi không hợp lệ.", true);
    };

    patchedApplyDiscount.__smartCanteenPatched = true;
    window.applyDiscount = patchedApplyDiscount;
  }

  function init() {
    addStyles();
    improveButtons();
    bindLoading();
    bindEscape();
    bindRuntimeErrors();
    fixPromotionDisplay();
    showEmptyStates();
    const observer = new MutationObserver(() => {
      improveButtons();
      showEmptyStates();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
