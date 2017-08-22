Rou.ImgViewer = (function($) {

	var $el;

	function displayImage(img, big_img) {

		$el.find('.main img').attr('src', img);

		// Zoom on image
		
		$el.find('.main').zoom({
			url: big_img
		});
	}

	return {
		init: function() {

			$el = $('.c-img-viewer');

			$el.find('.thumbs li').click(function() {

				var $this = $(this);
				$el.find('.thumbs li.active').removeClass('active');
				$this.addClass('active');
				//console.log($this);
				console.log($this.data('img'));

				displayImage($this.data('img'), $this.data('img-zoom'));
			});

			// Zoom on image

			$el.find('.main').zoom({
				//target: $('.c-img-viewer .main-2'),
				url: $el.find('.thumbs li').first().data('img-zoom')
			});
		}
	};
})(jQuery);