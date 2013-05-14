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

		  $('.js-box-nav').each(function() {
			$(this).find('span').each(function(i) {
			  $(this).click(function(){
				$(this).addClass('active').siblings().removeClass('active')
				  .parents('.js-box').find('.js-box-item').hide().end().find('.js-box-item:eq('+i+')').fadeIn(150);
			  });
			});
		  });

});