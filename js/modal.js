$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  button.on('click', function(){
    modal.addClass('modal_active');
  });
  close.on('click', function(){
    modal.removeClass('modal_active');
  });
  //При нажатии на esc закрывает модальное окно
  $(document).keydown(function(event) {
    if(event.keyCode === 27 || modal.hasClass('modal_active')) {
      modal.removeClass('modal_active');
    };
  });
  //При нажатии левой кнопки мыши на что-то кроме модального окна, закрывает модальное окно
  $(document).mouseup(function (e) { 
	var modalDialog = $('.modal_dialog');
	if (e.target!=modalDialog[0]&&modalDialog.has(e.target).length === 0){
		modal.removeClass('modal_active');
	}
  });
});