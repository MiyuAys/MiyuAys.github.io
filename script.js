$(".mil-menu-btn").on("click", function () {
  $(this).toggleClass('mil-active');          // 切換漢堡圖標為 X
  $('.mil-navigation').toggleClass('mil-active'); // 切換導航欄樣式
});

