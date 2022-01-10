	$(function () {

		var show = true;
		var countbox = ".innumber__inner-item";
		$(window).on("scroll load resize", function () {
				if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
				var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
				var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
				var w_height = $(window).height(); // Высота окна браузера
				var d_height = $(document).height(); // Высота всего документа
				var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
				if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
						$('.innumber__inner-numb').css('opacity', '1');
						$('.innumber__inner-numb').spincrement({
								thousandSeparator: "",
								duration: 2200
						});
	
						show = false;
				}
		});
	
	});



$(function () {
	$('.weekly__bottom-inner').slick({
		slidesToShow: 1,
		slidesToScroll:1,
		prevArrow: $(".p2"),
		nextArrow: $(".n2"),
	});

	$('.follower__inner').slick({
		slidesToShow: 3,
		slidesToScroll:3,
		prevArrow: $(".pp2"),
		nextArrow: $(".nn2"),
	});

	

		$(".rate-star").rateYo({
			rating: 5,
			starWidth: "15px",
			readOnly: true,
		});

		$('.like-toggle').click(function(){
			$(this).toggleClass('like-active');
			$(this).next().toggleClass('hidden');
		});

		$('.menu__burger').on('click',function(){
			$('.menu-list').slideToggle();
		});
	 


	var mixer = mixitup('.product__inner-box')

});