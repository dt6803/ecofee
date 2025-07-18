/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function () {

  // Accordion
  var all_panels = $('.templatemo-accordion > li > ul').hide();

  $('.templatemo-accordion > li > a').click(function () {
    console.log('Hello world!');
    var target = $(this).next();
    if (!target.hasClass('active')) {
      all_panels.removeClass('active').slideUp();
      target.addClass('active').slideDown();
    }
    return false;
  });
  // End accordion

  // Product detail
  $('.product-links-wap a').click(function () {
    var this_src = $(this).children('img').attr('src');
    $('#product-detail').attr('src', this_src);
    return false;
  });
  $('#btn-minus').click(function () {
    var val = $("#var-value").html();
    val = (val == '1') ? val : val - 1;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $('#btn-plus').click(function () {
    var val = $("#var-value").html();
    val++;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $('.btn-size').click(function () {
    var this_val = $(this).html();
    $("#product-size").val(this_val);
    $(".btn-size").removeClass('btn-secondary');
    $(".btn-size").addClass('btn-success');
    $(this).removeClass('btn-success');
    $(this).addClass('btn-secondary');
    return false;
  });
  // End roduct detail

});

document.addEventListener('DOMContentLoaded', function () {
  // Lấy các phần tử cần thiết
  const sizeButtons = document.querySelectorAll('.btn-size');
  const priceElement = document.getElementById('product-price');

  // Thêm sự kiện click cho từng nút size
  sizeButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Xóa class active khỏi tất cả các nút
      sizeButtons.forEach(btn => btn.classList.remove('active'));

      // Thêm class active cho nút được chọn
      this.classList.add('active');

      // Cập nhật giá tiền tương ứng với size
      const sizeText = this.textContent.trim();
      let newPrice;

      switch (sizeText) {
        case '500':
          newPrice = '$2000.00';
          break;
        case '300':
          newPrice = '$1350.00';
          break;
        case '100':
          newPrice = '$500.00';
          break;
        default:
          newPrice = '$2000.00 - $500.00';
      }

      // Cập nhật giá tiền hiển thị
      priceElement.textContent = newPrice;

      // Cập nhật giá trị size trong form (nếu cần)
      document.getElementById('product-size').value = sizeText;
    });
  });

  // Khởi tạo giá trị mặc định (nếu cần)
  // sizeButtons[0].click(); // Chọn size đầu tiên mặc định
});

document.addEventListener('DOMContentLoaded', function () {
  // Lấy các phần tử cần thiết
  const sizeButtons = document.querySelectorAll('.btn-size');
  const priceElement = document.getElementById('product2-price');

  // Thêm sự kiện click cho từng nút size
  sizeButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Xóa class active khỏi tất cả các nút
      sizeButtons.forEach(btn => btn.classList.remove('active'));

      // Thêm class active cho nút được chọn
      this.classList.add('active');

      // Cập nhật giá tiền tương ứng với size
      const sizeText = this.textContent.trim();
      let newPrice;

      switch (sizeText) {
        case '500':
          newPrice = '$450.00';
          break;
        case '300':
          newPrice = '$285.00';
          break;
        case '100':
          newPrice = '$100.00';
          break;
        default:
          newPrice = '$450.00 - $100.00';
      }

      // Cập nhật giá tiền hiển thị
      priceElement.textContent = newPrice;

      // Cập nhật giá trị size trong form (nếu cần)
      document.getElementById('product-size').value = sizeText;
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lấy các phần tử cần thiết
  const sizeButtons = document.querySelectorAll('.btn-size');
  const priceElement = document.getElementById('product3-price');

  // Thêm sự kiện click cho từng nút size
  sizeButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Xóa class active khỏi tất cả các nút
      sizeButtons.forEach(btn => btn.classList.remove('active'));

      // Thêm class active cho nút được chọn
      this.classList.add('active');

      // Cập nhật giá tiền tương ứng với size
      const sizeText = this.textContent.trim();
      let newPrice;

      switch (sizeText) {
        case '500':
          newPrice = '$825.00';
          break;
        case '300':
          newPrice = '$555.00';
          break;
        case '100':
          newPrice = '$200.00';
          break;
        default:
          newPrice = '$825.00 - $200.00';
      }

      // Cập nhật giá tiền hiển thị
      priceElement.textContent = newPrice;

      // Cập nhật giá trị size trong form (nếu cần)
      document.getElementById('product-size').value = sizeText;
    });
  });

  // Khởi tạo giá trị mặc định (nếu cần)
  // sizeButtons[0].click(); // Chọn size đầu tiên mặc định
});