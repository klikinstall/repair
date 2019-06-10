//var button = document.querySelector('.button');
//var modal = document.querySelector('#modal');
//var close = document.querySelector('#close')
//
//button.addEventListener('click', function() {
//  modal.classList.add('modal_active');
//});
//close.addEventListener('click', function() {
//  modal.classList.remove('modal_active');
//});
// Инициализация WOW.js
new WOW().init();

$(document).ready(function(){
  //Скрипт для кнопки "Наверх"
  
  var topShow = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(window).scroll(function () {
    /* В зависимости от положения полосы прокрукти и значения topShow, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > topShow) $('#button_up').fadeIn();
    else $('#button_up').fadeOut();
  });
  $('#button_up').click(function () {
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
  
  //Скрипт для слайдера
  $('.portfolio_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  /* Скрипт для валидации форм */
  $("#brif_form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
        username: {
          required: "Укажите имя",
          minlength: jQuery.validator.format("Необходимо ввести минимум символов: {0}"),
          maxlength: jQuery.validator.format("Возможный максимум символов: {0}")
        },
        phone: {
          required: "Укажите телефон"
        },
        email: "Введите корректный email"
      },
    errorClass: "invalid",
    errorElement: "div"
  });
  
  $("#offer_form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
        username: {
          required: "Укажите имя",
          minlength: jQuery.validator.format("Необходимо ввести минимум символов: {0}"),
          maxlength: jQuery.validator.format("Возможный максимум символов: {0}")
        },
        phone: {
          required: "Укажите телефон"
        }
      },
    errorClass: "invalid",
    errorElement: "div"
  });
  
  
  /* Скрипт для маски телефона */
  $(".phone").mask("8 (999) 999-99-99");
  
});