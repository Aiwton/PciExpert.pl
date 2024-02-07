$(document).ready(function () {
  $(".navbar-collapse").on("show.bs.collapse", function () {
    $(this).addClass("show");
  });

  $(".navbar-collapse").on("hide.bs.collapse", function () {
    $(this).removeClass("show");
  });
});
$(document).ready(function () {
  $(".btn-primary").click(function (event) {
    event.preventDefault();

    // Ваш код для обработки покупки

    // Пример:
    alert("Produkt został dodany do koszyka!");
  });
});
function addToCart(productId) {
  // Ваш код для добавления товара в корзину

  // Пример:
  $.ajax({
    url: "/cart/add/" + productId,
    method: "POST",
    success: function (response) {
      // Обработка успешного ответа
    },
    error: function (error) {
      // Обработка ошибки
    },
  });
}
$(document).ready(function () {
  $("#filter-category").change(function () {
    var categoryId = $(this).val();

    // Ваш код для фильтрации товаров

    // Пример:
    $.ajax({
      url: "/products/filter/" + categoryId,
      method: "GET",
      success: function (response) {
        // Обновление списка товаров
      },
      error: function (error) {
        // Обработка ошибки
      },
    });
  });
});
$(document).ready(function () {
  $(".review-form").submit(function (event) {
    event.preventDefault();

    var productId = $(this).data("productId");
    var reviewText = $(this).find("textarea").val();

    // Ваш код для отправки отзыва

    // Пример:
    $.ajax({
      url: "/products/review/" + productId,
      method: "POST",
      data: {
        review: reviewText,
      },
      success: function (response) {
        // Обработка успешного ответа
      },
      error: function (error) {
        // Обработка ошибки
      },
    });
  });
});
$(".btn-primary").click(function (event) {
  event.preventDefault();

  // Добавление товара в корзину

  var productId = $(this).data("productId");
  var cartCount = parseInt($(".cart-count").text());

  // Пример:
  $.ajax({
    url: "/cart/add/" + productId,
    method: "POST",
    success: function (response) {
      // Обновление количества товаров в корзине
      $(".cart-count").text(cartCount + 1);

      // Отображение сообщения о добавлении товара
      alert("Produkt został dodany do koszyka!");
    },
    error: function (error) {
      // Обработка ошибки
    },
  });
});
function updateCartCount() {
  // Ваш код для обновления количества товаров в корзине

  // Пример:
  $.ajax({
    url: "/cart/count",
    method: "GET",
    success: function (response) {
      $(".cart-count").text(response.count);
    },
    error: function (error) {
      // Обработка ошибки
    },
  });
}
$(document).ready(function () {
  // Обновление количества товаров в корзине
  updateCartCount();

  // Обработка события "click" кнопки "Купить сейчас"
  $(".btn-primary").click(function (event) {
    event.preventDefault();

    // Добавление товара в корзину

    var productId = $(this).data("productId");
    var cartCount = parseInt($(".cart-count").text());

    // Пример:
    $.ajax({
      url: "/cart/add/" + productId,
      method: "POST",
      success: function (response) {
        // Обновление количества товаров в корзине
        $(".cart-count").text(cartCount + 1);

        // Отображение сообщения о добавлении товара
        alert("Produkt został dodany do koszyka!");
      },
      error: function (error) {
        // Обработка ошибки
      },
    });
  });

  // Функция для обновления количества товаров в корзине
  function updateCartCount() {
    // Ваш код для обновления количества товаров в корзине

    // Пример:
    $.ajax({
      url: "/cart/count",
      method: "GET",
      success: function (response) {
        $(".cart-count").text(response.count);
      },
      error: function (error) {
        // Обработка ошибки
      },
    });
  }
});
const newLocal = $(document).ready(function () {
  // Обновление количества товаров в корзине
  updateCartCount();

  // Обработка события "click" кнопки "Перейти к оплате"
  $(".btn-primary").click(function (event) {
    event.preventDefault();

    // Переход к странице оформления заказа
    window.location.href = "checkout.html";
  });

  // Функция для обновления количества товаров в корзине
  function updateCartCount() {
    // Пример:
    $.ajax({
      url: "/cart/count",
      method: "GET",
      success: function () {},
    });
  }
});
// Обновление количества товаров в корзине
$(document).ready(function () {
  // Обработка события "click" кнопки "Przejdź do płatności"
  $(".btn-primary").click(function (event) {
    event.preventDefault();

    // Получение ссылки из атрибута data-href
    var href = $(this).data("href");

    // Переход по ссылке
    window.location.href = href;
  });
});
