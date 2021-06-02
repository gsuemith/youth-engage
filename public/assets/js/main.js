/*
	Faction by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/



(function($) {





	var	$window = $(window),
		$header = $('#header'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul')
			.dropotron({
				alignment: 'right',
				hideDelay: 350
			});


	// Menu.
		$('<a href="#navPanel" class="navPanelToggle">Menu</a>')
			.appendTo($header);

		$('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '<a href="#navPanel" class="close"></a>' + '</div>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);