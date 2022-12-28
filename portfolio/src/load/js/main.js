/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');
		$icons = $('#header2');
	
	// Icons lol
	// $('#header2').hide();
	var $window = $(window);
	var $icons0 = $('#iconorotador');
	var $icons2 = $('#iconorotador2');
	var $icons3 = $('#iconorotador3');
	$window.on('scroll', function () {
		var top = $window.scrollTop();
		var grados = top/20 - 40
		var grados2 = 180 - grados
		var grados3 = grados/100
		// console.log(grados3)

		if (grados < 90 ) {
			// console.log(top)
			$icons0.css('transform', 'rotate( ' + grados + 'deg)');
			$icons2.css('transform', 'rotate( ' + grados + 'deg)');
			$icons3.css('transform', 'rotate( ' + grados + 'deg)');

		} 
		else if (grados < 180) {
			$icons0.css('transform', 'rotate( ' + grados2 + 'deg)');
			$icons2.css('transform', 'rotate( ' + grados2 + 'deg)');
			$icons3.css('transform', 'rotate( ' + grados2 + 'deg)');

		}
		else if (grados > 180) {
			console.log(grados3)
			$icons0.css('transform', 'rotate( ' + grados3 + 'deg)');
			$icons2.css('transform', 'rotate( ' + grados3 + 'deg)');
			$icons3.css('transform', 'rotate( ' + grados3 + 'deg)');
		}


		// Rotan siempre
		// $icons0.css('transform', 'rotate( ' + (top/10-90) + 'deg)');
		// $icons2.css('transform', 'rotate( ' + (top/10-90) + 'deg)');
		// $icons3.css('transform', 'rotate( ' + (top/10-90) + 'deg)');

		// console.log($window.scrollTop());
	});

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0  &&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});
		}

	// Icons lol
	$(window).scroll(function () {
		var y = $(this).scrollTop();
		// console.log(y)
		if (y > 580) {
			$('#header2').fadeIn();
		} 
		else{
			$('#header2').fadeOut();
		}
	});




	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);

// only for animation
// only for animation
const circleDiagrams = document.querySelectorAll('.circle-diagram')
circleDiagrams.forEach(circleDiagram => {
  circleDiagram.addEventListener("click", (e)=> animProp(e.target))
  animProp(circleDiagram)
})

function animProp(el){
  gsap.from(el, {"--percent": 0, duration: 3});
}

