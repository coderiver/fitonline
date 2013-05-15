$(document).ready(function() {

	// ---------- function element exists -------------------- //
		jQuery.fn.exists = function() {
			return $(this).length;
		}

	// ---------- Scrollable for .success block -------------------- //
		if ($('.js-scrollable').exists()){
			$('.js-scrollable .js-scroll').scrollable({
				next:'.js-scrollable .js-scroll-next',
				prev:'.js-scrollable .js-scroll-prev',
			}).navigator();
		};

	// ---------- Scroll for blocks in header -------------------- //
		$('.carousel__nav').each(function() {
			$(this).find('span').each(function(i) {
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active')
					.parents('.js-carousel').find('.carousel__item').hide().end().find('.carousel__item:eq('+i+')').fadeIn("fast");
				});
			});
		});


	// ---------- DATEPICKER -------------------- //
		$('#simple-calendar').DatePicker({
		  mode: 'multiple',
		  inline: true,
		  // date: new Date()
		  date: [new Date(), new Date() - 172800000, new Date() - 345600000]
		});

});

