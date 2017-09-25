jQuery(function() {  
	$ = jQuery;

	Rou.Menu.init();
	Rou.ImgViewer.init();
	Rou.ProductConfig.init();

	// Search

	var $search = $('.c-search');

	$search.find('input')
		.focus(function() {
			$search.addClass('expand');
		})
		.blur(function() {
			$search.removeClass('expand');
		});

	// 

	/*
	$('.c-menu-sub .with-submenu .pays .t').click(function() {

		var 
			$this = $(this)
			$item = $this.closest('.item'),
			$pays = $this.closest('.pays');

		if(!$item.hasClass('active')) {

			$pays.find('.item.active').removeClass('active');
			$item.addClass('active');
		}
	});
	*/
});