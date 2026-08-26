/* 个人网站 · 交互脚本：语言切换、导航状态 */
(function () {
  "use strict";

  /* ---------- 语言切换 ---------- */
  var lang = localStorage.getItem("site-lang") || "zh";
  document.documentElement.setAttribute("data-lang", lang);

  var toggle = document.querySelectorAll(".lang-toggle");
  toggle.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-lang");
      var next = current === "zh" ? "en" : "zh";
      document.documentElement.setAttribute("data-lang", next);
      localStorage.setItem("site-lang", next);
      btn.textContent = next === "zh" ? "EN" : "中文";
    });
  });
  toggle.forEach(function (btn) {
    btn.textContent = lang === "zh" ? "EN" : "中文";
  });

  /* ---------- 导航高亮 ---------- */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
})();

/* ---------- 滚动进场动画 ---------- */
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
