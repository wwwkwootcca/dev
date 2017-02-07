/*
 * .js minified (https://jscompress.com/), then beautified
 * (http://jsbeautifier.org/) to clear out cruft and confirm
 * things are as they should be.
 */

! function (a)
{
	a.fn.lavaLamp = function (b)
	{
		return b = a.extend(
		{
			fx: "linear",
			speed: 500,
			click: function () {}
		}, b ||
		{}), this.each(function (c)
		{
			function i(a)
			{
				f.css(
				{
					left: a.offsetLeft + "px",
					width: a.offsetWidth + "px"
				}), h = a
			}

			function j(c)
			{
				f.each(function ()
				{
					a.dequeue(this, "fx")
				}).animate(
				{
					width: c.offsetWidth,
					left: c.offsetLeft
				}, b.speed, b.fx)
			}
			var d = a(this),
				e = function () {},
				f = a('<li class="back"><div class="left"></div></li>').appendTo(d),
				g = a(">li", this),
				h = a("li.current", this)[0] || a(g[0]).addClass("current")[0];
			g.not(".back").hover(function ()
			{
				j(this)
			}, e), a(this).hover(e, function ()
			{
				j(h)
			}), g.click(function (a)
			{
				return i(this), b.click.apply(this, [a, this])
			}), i(h), 0 == c && a(window).resize(function ()
			{
				f.css(
				{
					width: h.offsetWidth,
					left: h.offsetLeft
				})
			})
		})
	}
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing,
{
	def: "easeOutQuad",
	swing: function (a, b, c, d, e)
	{
		return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
	},
	easeInQuad: function (a, b, c, d, e)
	{
		return d * (b /= e) * b + c
	},
	easeOutQuad: function (a, b, c, d, e)
	{
		return -d * (b /= e) * (b - 2) + c
	},
	easeInOutQuad: function (a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) +
			c
	},
	easeInCubic: function (a, b, c, d, e)
	{
		return d * (b /= e) * b * b + c
	},
	easeOutCubic: function (a, b, c, d, e)
	{
		return d * ((b = b / e - 1) * b * b + 1) + c
	},
	easeInOutCubic: function (a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b *
			b + 2) + c
	},
	easeInQuart: function (a, b, c, d, e)
	{
		return d * (b /= e) * b * b * b + c
	},
	easeOutQuart: function (a, b, c, d, e)
	{
		return -d * ((b = b / e - 1) * b * b * b - 1) + c
	},
	easeInOutQuart: function (a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) *
			b * b * b - 2) + c
	},
	easeInQuint: function (a, b, c, d, e)
	{
		return d * (b /= e) * b * b * b * b + c
	},
	easeOutQuint: function (a, b, c, d, e)
	{
		return d * ((b = b / e - 1) * b * b * b * b + 1) + c
	},
	easeInOutQuint: function (a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) *
			b * b * b * b + 2) + c
	},
	easeInSine: function (a, b, c, d, e)
	{
		return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
	},
	easeOutSine: function (a, b, c, d, e)
	{
		return d * Math.sin(b / e * (Math.PI / 2)) + c
	},
	easeInOutSine: function (a, b, c, d, e)
	{
		return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
	},
	easeInExpo: function (a, b, c, d, e)
	{
		return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
	},
	easeOutExpo: function (a, b, c, d, e)
	{
		return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
	},
	easeInOutExpo: function (a, b, c, d, e)
	{
		return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2,
			10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
	},
	easeInCirc: function (a, b, c, d, e)
	{
		return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
	},
	easeOutCirc: function (a, b, c, d, e)
	{
		return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
	},
	easeInOutCirc: function (a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 *
			(Math.sqrt(1 - (b -= 2) * b) + 1) + c
	},
	easeInElastic: function (a, b, c, d, e)
	{
		var f = 1.70158,
			g = 0,
			h = d;
		if (0 == b) return c;
		if (1 == (b /= e)) return c + d;
		if (g || (g = .3 * e), h < Math.abs(d))
		{
			h = d;
			var f = g / 4
		}
		else var f = g / (2 * Math.PI) * Math.asin(d / h);
		return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math
			.PI) / g)) + c
	},
	easeOutElastic: function (a, b, c, d, e)
	{
		var f = 1.70158,
			g = 0,
			h = d;
		if (0 == b) return c;
		if (1 == (b /= e)) return c + d;
		if (g || (g = .3 * e), h < Math.abs(d))
		{
			h = d;
			var f = g / 4
		}
		else var f = g / (2 * Math.PI) * Math.asin(d / h);
		return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) +
			d + c
	},
	easeInOutElastic: function (a, b, c, d, e)
	{
		var f = 1.70158,
			g = 0,
			h = d;
		if (0 == b) return c;
		if (2 == (b /= e / 2)) return c + d;
		if (g || (g = e * (.3 * 1.5)), h < Math.abs(d))
		{
			h = d;
			var f = g / 4
		}
		else var f = g / (2 * Math.PI) * Math.asin(d / h);
		return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) *
			(2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b *
			e - f) * (2 * Math.PI) / g) * .5 + d + c
	},
	easeInBack: function (a, b, c, d, e, f)
	{
		return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) +
			c
	},
	easeOutBack: function (a, b, c, d, e, f)
	{
		return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) *
			b + f) + 1) + c
	},
	easeInOutBack: function (a, b, c, d, e, f)
	{
		return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (
			((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) +
			1) * b + f) + 2) + c
	},
	easeInBounce: function (a, b, c, d, e)
	{
		return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
	},
	easeOutBounce: function (a, b, c, d, e)
	{
		return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d *
			(7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 *
				(b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) *
				b + .984375) + c
	},
	easeInOutBounce: function (a, b, c, d, e)
	{
		return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c :
			.5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
	}
}), jQuery.extend(jQuery.easing,
{
	easeIn: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInQuad(a, b, c, d, e)
	},
	easeOut: function (a, b, c, d, e)
	{
		return jQuery.easing.easeOutQuad(a, b, c, d, e)
	},
	easeInOut: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInOutQuad(a, b, c, d, e)
	},
	expoin: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInExpo(a, b, c, d, e)
	},
	expoout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeOutExpo(a, b, c, d, e)
	},
	expoinout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInOutExpo(a, b, c, d, e)
	},
	bouncein: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInBounce(a, b, c, d, e)
	},
	bounceout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeOutBounce(a, b, c, d, e)
	},
	bounceinout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInOutBounce(a, b, c, d, e)
	},
	elasin: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInElastic(a, b, c, d, e)
	},
	elasout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeOutElastic(a, b, c, d, e)
	},
	elasinout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInOutElastic(a, b, c, d, e)
	},
	backin: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInBack(a, b, c, d, e)
	},
	backout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeOutBack(a, b, c, d, e)
	},
	backinout: function (a, b, c, d, e)
	{
		return jQuery.easing.easeInOutBack(a, b, c, d, e)
	}
}), jQuery.uaMatch || (jQuery.uaMatch = function (a)
{
	a = a.toLowerCase();
	var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) ||
		a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
	return {
		browser: b[1] || "",
		version: b[2] || "0"
	}
}), jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent), browser = {},
	matched.browser && (browser[matched.browser] = !0, browser.version =
		matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (
		browser.safari = !0), jQuery.browser = browser), jQuery(function ()
{
	var a = jQuery;
	a.fn.retarder = function (a, b)
	{
		var c = this;
		return c.length && (c[0]._timer_ && clearTimeout(c[0]._timer_), c[0]._timer_ =
			setTimeout(function ()
			{
				b(c)
			}, a)), this
	}, a("ul ul", "#menu").css(
	{
		display: "none",
		left: -2
	}), a("li", "#menu").hover(function ()
	{
		var b = a("ul:first", this);
		a("span", b).css("color", "Silver"), b.length && (b[0].wid || (b[0].wid =
			b.width(), b[0].hei = b.height()), b.css(
		{
			width: 0,
			height: 0,
			overflow: "hidden",
			display: "block"
		}).retarder(100, function (a)
		{
			a.animate(
			{
				width: b[0].wid,
				height: b[0].hei
			},
			{
				duration: 300,
				complete: function ()
				{
					b.css("overflow", "visible")
				}
			})
		}))
	}, function ()
	{
		var b = a("ul:first", this);
		if (b.length)
		{
			var c = {
				display: "none",
				width: b[0].wid,
				height: b[0].hei
			};
			b.stop().css("overflow", "hidden").retarder(50, function (b)
			{
				b.animate(
				{
					width: 0,
					height: 0
				},
				{
					duration: 100,
					complete: function ()
					{
						a(this).css(c)
					}
				})
			})
		}
	}), a("#menu ul.menu").lavaLamp(
	{
		fx: "backout",
		speed: 800
	}), a.browser.msie && "6" == a.browser.version.substr(0, 1) || a(
		"ul ul a span", "#menu").css("color", "Red").hover(function ()
	{
		a(this).animate(
		{
			color: "White"
		}, 500)
	}, function ()
	{
		a(this).animate(
		{
			color: "Silver"
		}, 200)
	})
});
