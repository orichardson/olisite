//require('paper')
//require('angular')

/*var app1 = 	angular.module('app1', []);

app1.controller('ctrl1', function($scope, $interval) {
	$scope.valuet = "asdf";

	$scope.data = [];

});*/

//maybe some day: grab colorschemes automatically from a graphic design website.
// var MAIN_PAGE_INFO = {
// 	about : {
// 		colors: { fg :'#000000', bg :'#FFFFFF', menu :'#BBBBBB', nav :'#F8F8F8', border :'#E7E7E7', shadow :'#e7e7e7' },
// 		descr: "overview, contact info, bragging rights, contact info, links to relevant sites",
// 		glyph: "user"
// 	},
// 	blog : {
// 		colors: { fg :'#ffd5f2', bg :'#4d0036', menu :'#5E0042', nav :'#8c6d80', border :'#856879', shadow :'#f7c3e8' },
// 		descr: "my partially thought-through ideas that I needed to jot down and get feedback for",
// 		glyph: "comment"
// 	},
// 	art : {
// 		colors: { fg :'#ffd686', bg :'#2C2233', menu :'#2C2233', nav :'#9d71da', border :'#4a1754', shadow :'#f6e8ff' },
// 		descr: "a portfolio of artwork made by me and my code; I improvize a lot on the piano, and have some proficiency in both 2D and 3D digital artwork. My code has proficiency in nothing but does its best (if you anthropomorphize it. Otherwise, it's just me doing my best.)",
// 		glyph: "grain"
// 	},
// 	tutorials : {
// 		colors: { fg :'#a1e8ff', bg :'#003e6a', menu :'#005869', nav :'#f7e079', border :'#faff00', shadow :'#ffbf7c' },
// 		descr: "a chronacle of tech adventures: solutions to problems I couldn't solve immediately. Between my stubbornness and also strong (probably misplaced) sense of coding aesthetic, I generate more than my fair share of problems.",
// 		glyph: "apple"
// 	},
// 	research : {
// 		colors: { fg :'#082525', bg :'#a3f4cd', menu :'#00856A', nav :'#1e7c67', border :'#073600', shadow :'#e0fff9' },
// 		descr: "academic research, published papers, and supporting code",
// 		glyph: "education"
// 	},
// 	tools : {
// 		colors:{ fg :'#342608', bg :'#F9FABB', menu :'#8DB500', nav :'#E6C06F', border :'#CFB57B', shadow :'#253c05' },
// 		descr: "both a listing of utilities and a live sandbox with which to play with them",
// 		glyph: "cog"
// 	},
// 	games : {
// 		colors:{ fg :'#FFFFFF', bg :'#000000', menu :'#000000', nav :'#4a4a4a', border :'#636363', shadow :'#777777' },
// 		descr: "more light-hearted projects with stories. These probably count as art, but also have an interactive component",
// 		glyph: "knight"
// 	}
// };

/*{
	f : ['#000000', '#ffd5f2', '#ffd686', '#a1e8ff', '#082525', '#342608', '#FFFFFF' ],
	b : ['#FFFFFF', '#4d0036', '#2C2233', '#003e6a', '#a3f4cd', '#F9FABB', '#000000' ],
	m : ['#BBBBBB', '#5E0042', '#2C2233', '#005869', '#00856A', '#8DB500', '#000000', '#ffffff' ],
	n : ['#F8F8F8', '#8c6d80', '#9d71da', '#f7e079', '#1e7c67', '#E6C06F', '#4a4a4a' ],
	nb : ['#E7E7E7', '#856879', '#4a1754', '#faff00', '#073600', '#CFB57B', '#636363' ],
	s: ['#e7e7e7', '#f7c3e8', '#f6e8ff', '#ffbf7c', '#e0fff9', '#253c05', '#777777']
}*/

function shadeColor2(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function blendColors(c0, c1, p) {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", "+  parseInt(result[3], 16);
}

$(function() {
    // navigation animation functions for sticking and un-sticking
    $('#navigation.sticky').data('animate-detach', function($sticky, $anchor, data){
        $sticky.delay( 0 ).queue(function() {
            var compressed = $('#nav-icon-list').outerWidth() + 70;
            $sticky.clearQueue().animate({'width': compressed+"px"}, 300)
                .dequeue();
        } );
    }).data('animate-atatch', function($sticky, $anchor, data){
        $sticky.clearQueue().stop(true,false).css({width:data.w})
            .animate({'width': $anchor.width()}, 300).queue(function() {
                $(this).css({'width':'100%'}).dequeue(); });

    }).data('animate-post-atatch', function($sticky, $anchor, data){
        setColors(400, window.page);
    });


    // General stick and unstick handling
    function stickify(index, element) {
        var $sticky = element ? $(element) : $(this);

        if($sticky.data('sticking-setup'))
            return;

        var $anchor = $sticky.closest('.sticky-anchor');
        var aniA = $sticky.data('animate-atatch'),
            aniD = $sticky.data('animate-detach'),
            aniRe = $sticky.data('animate-post-atatch');
        var stick_mem = false;
        var marginTop = parseInt($sticky.css('marginTop'));
        var prevDiff = 0;
        $anchor.css({marginTop:marginTop})

        var relocate = function() {
            var window_top = $(window).scrollTop();

            var div_top = $anchor.offset().top -marginTop;
            if (window_top > div_top) {
                if (!stick_mem) {
                    var left = $sticky.offset().left, wid = $sticky.width();

                    $anchor.height($sticky.outerHeight(true)-marginTop);
                    $sticky.detach();

                    if(aniD) aniD($sticky, $anchor);
                    else
                        $sticky.css({left: left, width: wid});


                    $sticky.addClass('stick').prependTo('body');
                    stick_mem = true;
                }

            } else {
                if(stick_mem) {
                    var w = $sticky.css('width');

                    $sticky.detach().removeClass('stick');
                    if(aniA) aniA($sticky, $anchor, {w:w});
                    $anchor.css({height:'auto'});
                    $sticky.css({width: 'auto'}).prependTo($anchor);
                    stick_mem = false;
                    if(aniRe) aniRe($sticky, $anchor);

                }
            }

            prevDiff = window_top > div_top;
        }

        $(window).scroll(relocate);
        $('.parallax').scroll(relocate);
        relocate();
        $sticky.data('sticking-setup', true);

        function unstick() {
            $sticky.detach().removeClass('stick').css({width: 'auto'}).prependTo($anchor);
            $(window).off('scroll', relocate);
            $sticky.data('sticking-setup', false);
            $('.parallax').off('scroll', relocate);
        }

        $sticky.on('remove', unstick);
        $sticky.data('unstick', unstick);
    }
    $('.sticky').each(stickify);
    window.stickify = stickify;

	// now,  do all the sticky navbar things.
	/*var sticky = $('#sticky');
	var anchor = $('#sticky-anchor');
	var stick_mem = false;

	function sticky_relocate() {
	    var window_top = $(window).scrollTop();

	    var div_top = anchor.offset().top;
	    if (window_top > div_top) {
			if (!stick_mem) {
                anchor.height(sticky.outerHeight(true));
                sticky.detach().appendTo('body');
		        sticky.addClass('stick');
				sticky.delay( 100 ).queue(function() {
					var compressed = $('#nav-icon-list').outerWidth() + 70;
					$(this).clearQueue().animate({'width': compressed+"px"}, 300)
                        .dequeue();
				} )
				stick_mem = true;
			}

	    } else {
			if(stick_mem) {
                var w = sticky.css('width');
                sticky.detach();
	        	sticky.clearQueue().stop(true,false).removeClass('stick').css({width:w})
                    .animate({'width': anchor.width()}, 300).queue(function() {
                        $(this).css({'width':'100%'}).dequeue(); })
                sticky.prependTo(anchor);
                setColors(400, window.page);

				stick_mem = false;
			}
	    }
	}

	$(window).scroll(sticky_relocate);
    $('.parallax').scroll(sticky_relocate);
	sticky_relocate();*/


	var $canvas = $('canvas#background');

	// Next, add handlers to all the menus. Also, complicated styling on change

	var page = window.location.pathname.split("/")[1];
	var $active = $("#nav-"+page);
	$active.addClass('active');

	function setActive($newelement) {
		$active.removeClass('active');
		$newelement.addClass('active');
		$active = $newelement;
	}

	function setColors(time, page) {
		// IMPORTANT: when mnodifying this,
        // make sure that you also modify index.ejs to get the initial values.
		$('body').stop('colors', true,false).animate({
			'background-color': MAIN_PAGE_INFO[page].colors.bg,
			'color' : MAIN_PAGE_INFO[page].colors.fg
		}, {duration:time, queue: 'colors'} ).dequeue('colors');

		$('nav').stop('colors', true,false).animate({
			'background-color' : MAIN_PAGE_INFO[page].colors.nav,
			'border-color': MAIN_PAGE_INFO[page].colors.border
		},{duration:time*1.5, queue: 'colors'}).dequeue('colors');
	}


	function typeText($elem, textTo, msdelay) {
		$elem.css({ 'border-right': '0.08em solid #fff'})
		if($elem.data('textTo')) {
			$elem.data('textTo', textTo); // update to the newest text, for the other guy.
			return; // don't interfere with the previous timer; let it handle this.
		}
		$elem.data('textTo', textTo);
		typing($elem, msdelay);
	}

	function isLetter(c) {
		return c.toLowerCase() != c.toUpperCase();
	}

	function typing($elem, msdelay) {
		var now = $elem.text();
		var textTo = $elem.data('textTo')
		var delay = msdelay*(Math.random() + 0.7)

		if(textTo == now) {
			$elem.css({'border-right-width' : 0});
			$elem.removeData('textTo');
			return;
		} else if(now.length > textTo.length || textTo.substring(0, now.length) != now) {
			now = now.substring(0, now.length-1);
			$elem.text(now);
			if(textTo.substring(0, now.length) == now)
				delay *= 3;
			else
				delay /= 3;
		} else {
			var c = textTo.charAt(now.length);

			/*if(Math.random()<0.05) {
				c = Math.random().toString(36).charAt(2);
				delay *= 3;
			} else*/ if(!isLetter(c))
				delay *= 4;
			$elem.text(now + c);
		}

		setTimeout(function() {typing($elem, msdelay); }, delay);
	}

	function semiload(page, skippush=false) {
		$.get(window.location.origin+'/main_pages/'+page, function(data) {
			new_jumbo = window.MAIN_PAGE_INFO[page].display
			typeText($('.title>.wrap'), new_jumbo, 40);

            $('.sticky').not('#navigation').remove();

			$('#everything').empty().html(data);
			//$('.matt').hide().fadeIn(700)
            paper.view.viewSize.set($canvas.width(), $canvas.height());
            setTimeout(function() {
                paper.view.viewSize.set($canvas.width(), $canvas.height());
            }, 50);

            // make vine colors monochrome except on original page
            var colorizor = function(vine) {
				if(window.page) {
					vine.color.hue += new paper.Color(MAIN_PAGE_INFO[page].colors.menu).hue
						- new paper.Color(MAIN_PAGE_INFO[window.page].colors.menu).hue;
				}
                /*vine.color.saturation *= (0.05 + new paper.Color(MAIN_PAGE_INFO[window.page].colors.menu).saturation)
                    / (0.05 + new paper.Color(MAIN_PAGE_INFO[page].colors.menu).saturation)
                vine.color.lightness *= (0.05 + new paper.Color(MAIN_PAGE_INFO[window.page].colors.menu).lightness)
                    / (0.05 + new paper.Color(MAIN_PAGE_INFO[page].colors.menu).lightness)*/
            }

            for(var i = 0; i < vines.length; i++){
                vines[i].agg(colorizor)
            }

            $('.sticky').each(stickify);
			setActive($('#nav-'+page));
            window.page = page;
			if(!skippush)
				window.history.pushState({page:page}, "", '/'+page);
		});
		setColors(400, page);
	}

	var cssstr = '<style>';
	$("nav li>a").each(function(index, value) {
		var id = value.parentNode.id;
		var name = id.substr(4);
		console.log(name);

        if(MAIN_PAGE_INFO[name]) {
            var menucolor = MAIN_PAGE_INFO[name].colors.menu;
    		cssstr += '#'+id+'> a { color :  '+menucolor +'; }\n'
//                + '#'+id+'> a:hover { text-shadow : 2px 2px 5px rgba('+ hexToRgb(menucolor) +', 0.5); }\n'
    		 	+ '#'+id+'.active > a { background-color :  '+MAIN_PAGE_INFO[name].colors.shadow +' !important; }\n';

    		$(value).click(function(event) {
    			event.preventDefault();
    			semiload(name);
    		});
        }
	});
	cssstr += '</style>'
	$('head').append(cssstr);

	$(window).on('popstate', function(evt) {
		if(history.state && history.state.page) {
			semiload(history.state.page, true);
		}
	});
    window.page = page;
});
