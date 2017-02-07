/*
//
// Problem: How to verify integrity of scripts, especially when obfuscation is used, as apycom has.
//
//
// Original apycom.com-1-black/jquery.js self-identifies as
//
// / * ! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license * /
//
// confirmed via https://code.jquery.com/color/jquery.color-2.1.2.min.js, which has
//
// /*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
// //@ sourceMappingURL=jquery.min.map
//
// at top.
//
// Diff -w confirms the only difference between the two source files is the 2nd
// comment line. (Above: '//@ sourceMappingURL=jquery.min.map'.)
//
// Sourcing from http://code.jquery.com/color/jquery.color-2.1.2.min.js
// so code integrity can be independently confirmed.
//
//
//
// Original apycom.com-1-black/menu.js (below) self-identifies at top as
//
// / ** jquery.color.js **************** /
//
// Confirmed against http://code.jquery.com/color/jquery.color-2.1.2.js.
//
// Thank you jsdetox - http://www.relentless-coding.com/projects/jsdetox/
//
// Original apycom line was:
// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(c(y,1d){z 2l="N 2P 3b 2T 2R w 3g 3h 3m 3n",2q=/^([\\-+])=\\s*(\\d+\\.?\\d*)/,2t=[{19:/k?\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*(?:,\\s*(\\d?(?:\\.\\d+)?)\\s*)?\\)/,P:c(x){8[x[1],x[2],x[3],x[4]]}},{19:/k?\\(\\s*(\\d+(?:\\.\\d+)?)\\%\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*(?:,\\s*(\\d?(?:\\.\\d+)?)\\s*)?\\)/,P:c(x){8[x[1]*2.1K,x[2]*2.1K,x[3]*2.1K,x[4]]}},{19:/#([a-1e-9]{2})([a-1e-9]{2})([a-1e-9]{2})/,P:c(x){8[1b(x[1],16),1b(x[2],16),1b(x[3],16)]}},{19:/#([a-1e-9])([a-1e-9])([a-1e-9])/,P:c(x){8[1b(x[1]+x[1],16),1b(x[2]+x[2],16),1b(x[3]+x[3],16)]}},{19:/B?\\(\\s*(\\d+(?:\\.\\d+)?)\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*(?:,\\s*(\\d?(?:\\.\\d+)?)\\s*)?\\)/,m:"B",P:c(x){8[x[1],x[2]/1U,x[3]/1U,x[4]]}}],w=y.1y=c(w,V,1f,R){8 2A y.1y.O.P(w,V,1f,R)},H={k:{M:{D:{C:0,j:"1G"},V:{C:1,j:"1G"},1f:{C:2,j:"1G"}}},B:{M:{2w:{C:0,j:"2p"},2E:{C:1,j:"1E"},3s:{C:2,j:"1E"}}}},1N={"1G":{1R:1k,L:Z},"1E":{L:1},"2p":{T:1B,1R:1k}},1r=w.1r={},1P=y("<p>")[0],1i,F=y.F;1P.1I.2y="2z-w:k(1,1,1,.5)";1r.k=1P.1I.N.2x("k")>-1;F(H,c(G,m){m.u="21"+G;m.M.R={C:3,j:"1E",1D:1}});c 1m(f,t,2d){z j=1N[t.j]||{};7(f==n){8(2d||!t.1D)?n:t.1D}f=j.1R?~~f:2b(f);7(2M(f)){8 t.1D}7(j.T){8(f+j.T)%j.T}8 0>f?0:j.L<f?j.L:f}c 1W(X){z A=w(),k=A.E=[];X=X.2I();F(2t,c(i,1A){z 12,W=1A.19.2r(X),1X=W&&1A.P(W),G=1A.m||"k";7(1X){12=A[G](1X);A[H[G].u]=12[H[G].u];k=A.E=12.E;8 2B}});7(k.25){7(k.1F()==="0,0,0,0"){y.2h(k,1i.13)}8 A}8 1i[X]}w.O=y.2h(w.24,{P:c(D,V,1f,R){7(D===1d){o.E=[n,n,n,n];8 o}7(D.2J||D.2K){D=y(D).2j(V);V=1d}z A=o,j=y.j(D),k=o.E=[];7(V!==1d){D=[D,V,1f,R];j="1Y"}7(j==="X"){8 o.P(1W(D)||1i.1M)}7(j==="1Y"){F(H.k.M,c(I,t){k[t.C]=1m(D[t.C],t)});8 o}7(j==="1S"){7(D 2H w){F(H,c(G,m){7(D[m.u]){A[m.u]=D[m.u].18()}})}U{F(H,c(G,m){z u=m.u;F(m.M,c(I,t){7(!A[u]&&m.Q){7(I==="R"||D[I]==n){8}A[u]=m.Q(A.E)}A[u][t.C]=1m(D[I],t,1k)});7(A[u]&&y.2C(n,A[u].18(0,3))<0){A[u][3]=1;7(m.14){A.E=m.14(A[u])}}})}8 o}},22:c(2u){z 22=w(2u),1q=1k,A=o;F(H,c(21,m){z 1T,1u=22[m.u];7(1u){1T=A[m.u]||m.Q&&m.Q(A.E)||[];F(m.M,c(21,t){7(1u[t.C]!=n){1q=(1u[t.C]===1T[t.C]);8 1q}})}8 1q});8 1q},2o:c(){z 1Q=[],A=o;F(H,c(G,m){7(A[m.u]){1Q.26(G)}});8 1Q.1p()},2c:c(2n,2k){z Y=w(2n),G=Y.2o(),m=H[G],1O=o.R()===0?w("13"):o,1j=1O[m.u]||m.Q(1O.E),1v=1j.18();Y=Y[m.u];F(m.M,c(I,t){z 1h=t.C,10=1j[1h],1g=Y[1h],j=1N[t.j]||{};7(1g===n){8}7(10===n){1v[1h]=1g}U{7(j.T){7(1g-10>j.T/2){10+=j.T}U 7(10-1g>j.T/2){10-=j.T}}1v[1h]=1m((1g-10)*2k+10,t)}});8 o[G](1v)},1J:c(28){7(o.E[3]===1){8 o}z 1z=o.E.18(),a=1z.1p(),1J=w(28).E;8 w(y.1C(1z,c(v,i){8(1-a)*1J[i]+a*v}))},1V:c(){z 1c="k(",k=y.1C(o.E,c(v,i){8 v==n?(i>2?1:0):v});7(k[3]===1){k.1p();1c="1z("}8 1c+k.1F()+")"},2D:c(){z 1c="B(",B=y.1C(o.B(),c(v,i){7(v==n){v=i>2?1:0}7(i&&i<3){v=17.1l(v*1U)+"%"}8 v});7(B[3]===1){B.1p();1c="2G("}8 1c+B.1F()+")"},2L:c(27){z k=o.E.18(),R=k.1p();7(27){k.26(~~(R*Z))}8"#"+y.1C(k,c(v){v=(v||0).23(16);8 v.25===1?"0"+v:v}).1F("")},23:c(){8 o.E[3]===0?"13":o.1V()}});w.O.P.24=w.O;c 1s(p,q,h){h=(h+1)%1;7(h*6<1){8 p+(q-p)*h*6}7(h*2<1){8 q}7(h*3<2){8 p+(q-p)*((2/3)-h)*6}8 p}H.B.Q=c(k){7(k[0]==n||k[1]==n||k[2]==n){8[n,n,n,k[3]]}z r=k[0]/Z,g=k[1]/Z,b=k[2]/Z,a=k[3],L=17.L(r,g,b),1n=17.1n(r,g,b),15=L-1n,1H=L+1n,l=1H*0.5,h,s;7(1n===L){h=0}U 7(r===L){h=(1L*(g-b)/15)+1B}U 7(g===L){h=(1L*(b-r)/15)+3p}U{h=(1L*(r-g)/15)+3q}7(15===0){s=0}U 7(l<=0.5){s=15/1H}U{s=15/(2-1H)}8[17.1l(h)%1B,s,l,a==n?1:a]};H.B.14=c(B){7(B[0]==n||B[1]==n||B[2]==n){8[n,n,n,B[3]]}z h=B[0]/1B,s=B[1],l=B[2],a=B[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;8[17.1l(1s(p,q,h+(1/3))*Z),17.1l(1s(p,q,h)*Z),17.1l(1s(p,q,h-(1/3))*Z),a]};F(H,c(G,m){z M=m.M,u=m.u,Q=m.Q,14=m.14;w.O[G]=c(f){7(Q&&!o[u]){o[u]=Q(o.E)}7(f===1d){8 o[u].18()}z 1t,j=y.j(f),29=(j==="1Y"||j==="1S")?f:3t,S=o[u].18();F(M,c(I,t){z 1w=29[j==="1S"?I:t.C];7(1w==n){1w=S[t.C]}S[t.C]=1m(1w,t)});7(14){1t=w(14(S));1t[u]=S;8 1t}U{8 w(S)}};F(M,c(I,t){7(w.O[I]){8}w.O[I]=c(f){z 1o=y.j(f),O=(I==="R"?(o.3y?"B":"k"):G),S=o[O](),1x=S[t.C],W;7(1o==="1d"){8 1x}7(1o==="c"){f=f.3w(o,1x);1o=y.j(f)}7(f==n&&t.3x){8 o}7(1o==="X"){W=2q.2r(f);7(W){f=1x+2b(W[2])*(W[1]==="+"?1:-1)}}S[t.C]=f;8 o[O](S)}})});w.K=c(K){z 2s=K.30(" ");F(2s,c(i,K){y.1Z[K]={2g:c(1a,f){z 12,11,N="";7(f!=="13"&&(y.j(f)!=="X"||(12=1W(f)))){f=w(12||f);7(!1r.k&&f.E[3]!==1){11=K==="N"?1a.2i:1a;2S((N===""||N==="13")&&11&&11.1I){2e{N=y.2j(11,"N");11=11.2i}2m(e){}}f=f.1J(N&&N!=="13"?N:"1M")}f=f.1V()}2e{1a.1I[K]=f}2m(e){}}};y.J.3a[K]=c(J){7(!J.2f){J.1j=w(J.1a,K);J.Y=w(J.Y);J.2f=1k}y.1Z[K].2g(J.1a,J.1j.2c(J.Y,J.39))}})};w.K(2l);y.1Z.33={35:c(f){z 20={};F(["37","3i","3d","32"],c(i,2v){20["2U"+2v+"1y"]=f});8 20}};1i=y.1y.2F={3r:"#2N",3B:"#31",1f:"#36",34:"#38",3e:"#3c",V:"#2Q",2O:"#2V",2Z:"#2Y",2W:"#2X",3f:"#3v",3u:"#3z",D:"#3D",3C:"#3A",3E:"#3l",3k:"#2a",3j:"#3o",13:[n,n,n,0],1M:"#2a"}}(y));',62,227,'|||||||if|return||||function|||value||||type|rgba||space|null|this|||||prop|cache||color|execResult|jQuery|var|inst|hsla|idx|red|_rgba|each|spaceName|spaces|key|fx|hook|max|props|backgroundColor|fn|parse|to|alpha|local|mod|else|green|match|string|end|255|startValue|curElem|parsed|transparent|from|diff||Math|slice|re|elem|parseInt|prefix|undefined|f0|blue|endValue|index|colors|start|true|round|clamp|min|vtype|pop|same|support|hue2rgb|ret|isCache|result|val|cur|Color|rgb|parser|360|map|def|percent|join|byte|add|style|blend|55|60|_default|propTypes|startColor|supportElem|used|floor|object|localCache|100|toRgbaString|stringParse|values|array|cssHooks|expanded|_|is|toString|prototype|length|push|includeAlpha|opaque|arr|ffffff|parseFloat|transition|allowEmpty|try|colorInit|set|extend|parentNode|css|distance|stepHooks|catch|other|_space|degrees|rplusequals|exec|hooks|stringParsers|compare|part|hue|indexOf|cssText|background|new|false|inArray|toHslaString|saturation|names|hsl|instanceof|toLowerCase|jquery|nodeType|toHexString|isNaN|00ffff|lime|borderBottomColor|008000|borderTopColor|while|borderRightColor|border|00ff00|navy|000080|800000|maroon|split|000000|Left|borderColor|fuchsia|expand|0000ff|Top|ff00ff|pos|step|borderLeftColor|808080|Bottom|gray|olive|columnRuleColor|outlineColor|Right|yellow|white|008080|textDecorationColor|textEmphasisColor|ffff00|120|240|aqua|lightness|arguments|purple|808000|call|empty|_hsla|800080|c0c0c0|black|silver|ff0000|teal'.split('|'),0,{}));
//
// Sourcing from http://code.jquery.com/color/jquery.color-2.1.2.min.js instead,
// corresponding lines commented out, below.
//
//
// The following may be necessary at some point:
//
//$.getScript( "my_lovely_script.js", function()	{	alert("Script loaded but not necessarily executed.");	} );
//
//
*/

/** jquery.color.js ****************/
/***** Commented out in favour of: http://code.jquery.com/color/jquery.color-2.1.2.min.js
// - skip to end of file for rest of code.
//
(function (jQuery, undefined)
{
	var stepHooks =
		"backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
		, rplusequals = /^([\-+])=\s*(\d+\.?\d*)/
		, stringParsers = [
		{
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
			, parse: function (execResult)
			{
				return [execResult[1], execResult[2], execResult[3], execResult[4]]
			}
        }
		, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
			, parse: function (execResult)
			{
				return [execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4]]
			}
        }
		, {
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/
			, parse: function (execResult)
			{
				return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)]
			}
        }
		, {
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/
			, parse: function (execResult)
			{
				return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)]
			}
        }
		, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
			, space: "hsla"
			, parse: function (execResult)
			{
				return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]]
			}
        }]
		, color = jQuery.Color = function (color, green, blue, alpha)
		{
			return new jQuery.Color.fn.parse(color, green, blue, alpha)
		}
		, spaces = {
			rgba:
			{
				props:
				{
					red:
					{
						idx: 0
						, type: "byte"
					}
					, green:
					{
						idx: 1
						, type: "byte"
					}
					, blue:
					{
						idx: 2
						, type: "byte"
					}
				}
			}
			, hsla:
			{
				props:
				{
					hue:
					{
						idx: 0
						, type: "degrees"
					}
					, saturation:
					{
						idx: 1
						, type: "percent"
					}
					, lightness:
					{
						idx: 2
						, type: "percent"
					}
				}
			}
		}
		, propTypes = {
			"byte":
			{
				floor: true
				, max: 255
			}
			, "percent":
			{
				max: 1
			}
			, "degrees":
			{
				mod: 360
				, floor: true
			}
		}
		, support = color.support = {}
		, supportElem = jQuery("<p>")[0]
		, colors, each = jQuery.each;
	supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
	support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
	each(spaces, function (spaceName, space)
	{
		space.cache = "_" + spaceName;
		space.props.alpha = {
			idx: 3
			, type: "percent"
			, def: 1
		}
	});

	function clamp(value, prop, allowEmpty)
	{
		var type = propTypes[prop.type] ||
		{};
		if (value == null)
		{
			return (allowEmpty || !prop.def) ? null : prop.def
		}
		value = type.floor ? ~~value : parseFloat(value);
		if (isNaN(value))
		{
			return prop.def
		}
		if (type.mod)
		{
			return (value + type.mod) % type.mod
		}
		return 0 > value ? 0 : type.max < value ? type.max : value
	}

	function stringParse(string)
	{
		var inst = color()
			, rgba = inst._rgba = [];
		string = string.toLowerCase();
		each(stringParsers, function (i, parser)
		{
			var parsed, match = parser.re.exec(string)
				, values = match && parser.parse(match)
				, spaceName = parser.space || "rgba";
			if (values)
			{
				parsed = inst[spaceName](values);
				inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
				rgba = inst._rgba = parsed._rgba;
				return false
			}
		});
		if (rgba.length)
		{
			if (rgba.join() === "0,0,0,0")
			{
				jQuery.extend(rgba, colors.transparent)
			}
			return inst
		}
		return colors[string]
	}
	color.fn = jQuery.extend(color.prototype
	, {
		parse: function (red, green, blue, alpha)
		{
			if (red === undefined)
			{
				this._rgba = [null, null, null, null];
				return this
			}
			if (red.jquery || red.nodeType)
			{
				red = jQuery(red).css(green);
				green = undefined
			}
			var inst = this
				, type = jQuery.type(red)
				, rgba = this._rgba = [];
			if (green !== undefined)
			{
				red = [red, green, blue, alpha];
				type = "array"
			}
			if (type === "string")
			{
				return this.parse(stringParse(red) || colors._default)
			}
			if (type === "array")
			{
				each(spaces.rgba.props, function (key, prop)
				{
					rgba[prop.idx] = clamp(red[prop.idx], prop)
				});
				return this
			}
			if (type === "object")
			{
				if (red instanceof color)
				{
					each(spaces, function (spaceName, space)
					{
						if (red[space.cache])
						{
							inst[space.cache] = red[space.cache].slice()
						}
					})
				}
				else
				{
					each(spaces, function (spaceName, space)
					{
						var cache = space.cache;
						each(space.props, function (key, prop)
						{
							if (!inst[cache] && space.to)
							{
								if (key === "alpha" || red[key] == null)
								{
									return
								}
								inst[cache] = space.to(inst._rgba)
							}
							inst[cache][prop.idx] = clamp(red[key], prop, true)
						});
						if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0)
						{
							inst[cache][3] = 1;
							if (space.from)
							{
								inst._rgba = space.from(inst[cache])
							}
						}
					})
				}
				return this
			}
		}
		, is: function (compare)
		{
			var is = color(compare)
				, same = true
				, inst = this;
			each(spaces, function (_, space)
			{
				var localCache, isCache = is[space.cache];
				if (isCache)
				{
					localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
					each(space.props, function (_, prop)
					{
						if (isCache[prop.idx] != null)
						{
							same = (isCache[prop.idx] === localCache[prop.idx]);
							return same
						}
					})
				}
				return same
			});
			return same
		}
		, _space: function ()
		{
			var used = []
				, inst = this;
			each(spaces, function (spaceName, space)
			{
				if (inst[space.cache])
				{
					used.push(spaceName)
				}
			});
			return used.pop()
		}
		, transition: function (other, distance)
		{
			var end = color(other)
				, spaceName = end._space()
				, space = spaces[spaceName]
				, startColor = this.alpha() === 0 ? color("transparent") : this
				, start = startColor[space.cache] || space.to(startColor._rgba)
				, result = start.slice();
			end = end[space.cache];
			each(space.props, function (key, prop)
			{
				var index = prop.idx
					, startValue = start[index]
					, endValue = end[index]
					, type = propTypes[prop.type] ||
					{};
				if (endValue === null)
				{
					return
				}
				if (startValue === null)
				{
					result[index] = endValue
				}
				else
				{
					if (type.mod)
					{
						if (endValue - startValue > type.mod / 2)
						{
							startValue += type.mod
						}
						else if (startValue - endValue > type.mod / 2)
						{
							startValue -= type.mod
						}
					}
					result[index] = clamp((endValue - startValue) * distance + startValue, prop)
				}
			});
			return this[spaceName](result)
		}
		, blend: function (opaque)
		{
			if (this._rgba[3] === 1)
			{
				return this
			}
			var rgb = this._rgba.slice()
				, a = rgb.pop()
				, blend = color(opaque)._rgba;
			return color(jQuery.map(rgb, function (v, i)
			{
				return (1 - a) * blend[i] + a * v
			}))
		}
		, toRgbaString: function ()
		{
			var prefix = "rgba("
				, rgba = jQuery.map(this._rgba, function (v, i)
				{
					return v == null ? (i > 2 ? 1 : 0) : v
				});
			if (rgba[3] === 1)
			{
				rgba.pop();
				prefix = "rgb("
			}
			return prefix + rgba.join() + ")"
		}
		, toHslaString: function ()
		{
			var prefix = "hsla("
				, hsla = jQuery.map(this.hsla(), function (v, i)
				{
					if (v == null)
					{
						v = i > 2 ? 1 : 0
					}
					if (i && i < 3)
					{
						v = Math.round(v * 100) + "%"
					}
					return v
				});
			if (hsla[3] === 1)
			{
				hsla.pop();
				prefix = "hsl("
			}
			return prefix + hsla.join() + ")"
		}
		, toHexString: function (includeAlpha)
		{
			var rgba = this._rgba.slice()
				, alpha = rgba.pop();
			if (includeAlpha)
			{
				rgba.push(~~(alpha * 255))
			}
			return "#" + jQuery.map(rgba, function (v)
			{
				v = (v || 0).toString(16);
				return v.length === 1 ? "0" + v : v
			}).join("")
		}
		, toString: function ()
		{
			return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
		}
	});
	color.fn.parse.prototype = color.fn;

	function hue2rgb(p, q, h)
	{
		h = (h + 1) % 1;
		if (h * 6 < 1)
		{
			return p + (q - p) * h * 6
		}
		if (h * 2 < 1)
		{
			return q
		}
		if (h * 3 < 2)
		{
			return p + (q - p) * ((2 / 3) - h) * 6
		}
		return p
	}
	spaces.hsla.to = function (rgba)
	{
		if (rgba[0] == null || rgba[1] == null || rgba[2] == null)
		{
			return [null, null, null, rgba[3]]
		}
		var r = rgba[0] / 255
			, g = rgba[1] / 255
			, b = rgba[2] / 255
			, a = rgba[3]
			, max = Math.max(r, g, b)
			, min = Math.min(r, g, b)
			, diff = max - min
			, add = max + min
			, l = add * 0.5
			, h, s;
		if (min === max)
		{
			h = 0
		}
		else if (r === max)
		{
			h = (60 * (g - b) / diff) + 360
		}
		else if (g === max)
		{
			h = (60 * (b - r) / diff) + 120
		}
		else
		{
			h = (60 * (r - g) / diff) + 240
		}
		if (diff === 0)
		{
			s = 0
		}
		else if (l <= 0.5)
		{
			s = diff / add
		}
		else
		{
			s = diff / (2 - add)
		}
		return [Math.round(h) % 360, s, l, a == null ? 1 : a]
	};
	spaces.hsla.from = function (hsla)
	{
		if (hsla[0] == null || hsla[1] == null || hsla[2] == null)
		{
			return [null, null, null, hsla[3]]
		}
		var h = hsla[0] / 360
			, s = hsla[1]
			, l = hsla[2]
			, a = hsla[3]
			, q = l <= 0.5 ? l * (1 + s) : l + s - l * s
			, p = 2 * l - q;
		return [Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a]
	};
	each(spaces, function (spaceName, space)
	{
		var props = space.props
			, cache = space.cache
			, to = space.to
			, from = space.from;
		color.fn[spaceName] = function (value)
		{
			if (to && !this[cache])
			{
				this[cache] = to(this._rgba)
			}
			if (value === undefined)
			{
				return this[cache].slice()
			}
			var ret, type = jQuery.type(value)
				, arr = (type === "array" || type === "object") ? value : arguments
				, local = this[cache].slice();
			each(props, function (key, prop)
			{
				var val = arr[type === "object" ? key : prop.idx];
				if (val == null)
				{
					val = local[prop.idx]
				}
				local[prop.idx] = clamp(val, prop)
			});
			if (from)
			{
				ret = color(from(local));
				ret[cache] = local;
				return ret
			}
			else
			{
				return color(local)
			}
		};
		each(props, function (key, prop)
		{
			if (color.fn[key])
			{
				return
			}
			color.fn[key] = function (value)
			{
				var vtype = jQuery.type(value)
					, fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName)
					, local = this[fn]()
					, cur = local[prop.idx]
					, match;
				if (vtype === "undefined")
				{
					return cur
				}
				if (vtype === "function")
				{
					value = value.call(this, cur);
					vtype = jQuery.type(value)
				}
				if (value == null && prop.empty)
				{
					return this
				}
				if (vtype === "string")
				{
					match = rplusequals.exec(value);
					if (match)
					{
						value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1)
					}
				}
				local[prop.idx] = value;
				return this[fn](local)
			}
		})
	});
	color.hook = function (hook)
	{
		var hooks = hook.split(" ");
		each(hooks, function (i, hook)
		{
			jQuery.cssHooks[hook] = {
				set: function (elem, value)
				{
					var parsed, curElem, backgroundColor = "";
					if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value))))
					{
						value = color(parsed || value);
						if (!support.rgba && value._rgba[3] !== 1)
						{
							curElem = hook === "backgroundColor" ? elem.parentNode : elem;
							while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style)
							{
								try
								{
									backgroundColor = jQuery.css(curElem, "backgroundColor");
									curElem = curElem.parentNode
								}
								catch (e)
								{}
							}
							value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default")
						}
						value = value.toRgbaString()
					}
					try
					{
						elem.style[hook] = value
					}
					catch (e)
					{}
				}
			};
			jQuery.fx.step[hook] = function (fx)
			{
				if (!fx.colorInit)
				{
					fx.start = color(fx.elem, hook);
					fx.end = color(fx.end);
					fx.colorInit = true
				}
				jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos))
			}
		})
	};
	color.hook(stepHooks);
	jQuery.cssHooks.borderColor = {
		expand: function (value)
		{
			var expanded = {};
			each(["Top", "Right", "Bottom", "Left"], function (i, part)
			{
				expanded["border" + part + "Color"] = value
			});
			return expanded
		}
	};
	colors = jQuery.Color.names = {
		aqua: "#00ffff"
		, black: "#000000"
		, blue: "#0000ff"
		, fuchsia: "#ff00ff"
		, gray: "#808080"
		, green: "#008000"
		, lime: "#00ff00"
		, maroon: "#800000"
		, navy: "#000080"
		, olive: "#808000"
		, purple: "#800080"
		, red: "#ff0000"
		, silver: "#c0c0c0"
		, teal: "#008080"
		, white: "#ffffff"
		, yellow: "#ffff00"
		, transparent: [null, null, null, 0]
		, _default: "#ffffff"
	}
}(jQuery));
//
// End Commenting out in favour of: http://code.jquery.com/color/jquery.color-2.1.2.min.js
//
*/



/*
//
// continuing ... Problem: How to verify integrity of scripts, especially when obfuscation is used, as apycom has ...
//
//
// Original apycom.com-1-black/menu.js (herein) includes
//
// / ** jquery.lavalamp.js **************** /
// / **
//  * LavaLamp - A menu plugin for jQuery with cool hover effects.
//  * http://gmarwaha.com/blog/?p=7
//  * Version: 0.1.0
//
// Confirmed against https://searchcode.com/file/104615659/wp-content/themes/news/includes/js/jquery.lavalamp.js
// ... mostly. Differences seem reasonable, and are included below:
//
// Diff produces:
//
// 13,14c13,14
// <  * /
// < / **
// ---
// >  *
// >  *
// 64c64
// <               return this.each(function()
// ---
// >               return this.each(function(index)
// 69c69
// <                               $li = $("li", this),
// ---
// >                               $li = $(">li", this),
// 106a107,117
// >                       if (index == 0)
// >                       {
// >                               $(window).resize(function()
// >                               {
// >                                       $back.css(
// >                                       {
// >                                               width: curr.offsetWidth,
// >                                               left: curr.offsetLeft
// >                                       });
// >                               });
// >                       }
*/

/** jquery.lavalamp.js ****************/
/**
 * LavaLamp - A menu plugin for jQuery with cool hover effects.
 * @requires jQuery v1.1.3.1 or above
 *
 * http://gmarwaha.com/blog/?p=7
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 0.1.0
 *
 *
 * Creates a menu with an unordered list of menu-items. You can either use the CSS that comes with the plugin, or write your own styles
 * to create a personalized effect
 *
 * The HTML markup used to build the menu can be as simple as...
 *
 *       <ul class="lavaLamp">
 *           <li><a href="#">Home</a></li>
 *           <li><a href="#">Plant a tree</a></li>
 *           <li><a href="#">Travel</a></li>
 *           <li><a href="#">Ride an elephant</a></li>
 *       </ul>
 *
 * Once you have included the style sheet that comes with the plugin, you will have to include
 * a reference to jquery library, easing plugin(optional) and the LavaLamp(this) plugin.
 *
 * Use the following snippet to initialize the menu.
 *   $(function() { $(".lavaLamp").lavaLamp({ fx: "backout", speed: 700}) });
 *
 * Thats it. Now you should have a working lavalamp menu.
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option fx - default is "linear"
 * @example
 * $(".lavaLamp").lavaLamp({ fx: "backout" });
 * @desc Creates a menu with "backout" easing effect. You need to include the easing plugin for this to work.
 *
 * @option speed - default is 500 ms
 * @example
 * $(".lavaLamp").lavaLamp({ speed: 500 });
 * @desc Creates a menu with an animation speed of 500 ms.
 *
 * @option click - no defaults
 * @example
 * $(".lavaLamp").lavaLamp({ click: function(event, menuItem) { return false; } });
 * @desc You can supply a callback to be executed when the menu item is clicked.
 * The event object and the menu-item that was clicked will be passed in as arguments.
 */
(function ($)
{
	$.fn.lavaLamp = function (o)
	{
		o = $.extend(
		{
			fx: "linear"
			, speed: 500
			, click: function () {}
		}, o ||
		{});
		return this.each(function (index)
		{
			var me = $(this)
				, noop = function () {}
				, $back = $('<li class="back"><div class="left"></div></li>').appendTo(me)
				, $li = $(">li", this)
				, curr = $("li.current", this)[0] || $($li[0]).addClass("current")[0];
			$li.not(".back").hover(function ()
			{
				move(this);
			}, noop);
			$(this).hover(noop, function ()
			{
				move(curr);
			});
			$li.click(function (e)
			{
				setCurr(this);
				return o.click.apply(this, [e, this]);
			});
			setCurr(curr);

			function setCurr(el)
			{
				$back.css(
				{
					"left": el.offsetLeft + "px"
					, "width": el.offsetWidth + "px"
				});
				curr = el;
			};

			function move(el)
			{
				$back.each(function ()
				{
					$.dequeue(this, "fx");
				}).animate(
				{
					width: el.offsetWidth
					, left: el.offsetLeft
				}, o.speed, o.fx);
			};
			if (index == 0)
			{
				$(window).resize(function ()
				{
					$back.css(
					{
						width: curr.offsetWidth
						, left: curr.offsetLeft
					});
				});
			}
		});
	};
})(jQuery);



/*
//
// continuing ... Problem: How to verify integrity of scripts, especially when obfuscation is used, as apycom has ...
//
//
// Original apycom.com-1-black/menu.js (herein) includes
//
// / ** jquery.easing.js **************** /
// / *
//  * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
//
// Confirmed against http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
// ... mostly. Many comments have been removed, and ';' from a number of lines
// - e.g. wherever there is but a single line of the form { return <blah> }.
//
// The apycom version, thus sans ';'s, has been used below, except. comments from
// gsgd.co.uk have been restored (and noted.)
//
// Original apycom line was:
// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('h.j[\'J\']=h.j[\'C\'];h.H(h.j,{D:\'y\',C:9(x,t,b,c,d){6 h.j[h.j.D](x,t,b,c,d)},U:9(x,t,b,c,d){6 c*(t/=d)*t+b},y:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},17:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},12:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},W:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},X:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},18:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},15:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},1b:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},Q:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},I:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},N:9(x,t,b,c,d){6-c*8.B(t/d*(8.g/2))+c+b},M:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},L:9(x,t,b,c,d){6-c/2*(8.B(8.g*t/d)-1)+b},O:9(x,t,b,c,d){6(t==0)?b:c*8.i(2,10*(t/d-1))+b},P:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.i(2,-10*t/d)+1)+b},S:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.i(2,10*(t-1))+b;6 c/2*(-8.i(2,-10*--t)+2)+b},R:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},K:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},T:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},F:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},E:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.i(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},G:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.i(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},1a:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},19:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},14:9(x,t,b,c,d,s){e(s==v)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.z))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.z))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.j.w(x,d-t,0,c,d)+b},w:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.V/2.k))*t+.Y)+b}m{6 c*(7.q*(t-=(2.16/2.k))*t+.11)+b}},Z:9(x,t,b,c,d){e(t<d/2)6 h.j.A(x,t*2,0,c,d)*.5+b;6 h.j.w(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|pow|easing|75|70158|else|sin|sqrt||5625|asin|||abs|undefined|easeOutBounce||easeOutQuad|525|easeInBounce|cos|swing|def|easeOutElastic|easeInElastic|easeInOutElastic|extend|easeOutQuint|jswing|easeOutCirc|easeInOutSine|easeOutSine|easeInSine|easeInExpo|easeOutExpo|easeInQuint|easeInCirc|easeInOutExpo|easeInOutCirc|easeInQuad|25|easeOutCubic|easeInOutCubic|9375|easeInOutBounce||984375|easeInCubic|easeInOutQuint|easeInOutBack|easeOutQuart|625|easeInOutQuad|easeInQuart|easeOutBack|easeInBack|easeInOutQuart'.split('|'),0,{}));
*/

/** jquery.easing.js ****************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
//
// comments re-added, start:
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
// comments re-added, end.
//
 */
// Next line (// comment) also restored:
//
// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing
, {
	def: 'easeOutQuad'
	, swing: function (x, t, b, c, d)
	{
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
	}
	, easeInQuad: function (x, t, b, c, d)
	{
		return c * (t /= d) * t + b
	}
	, easeOutQuad: function (x, t, b, c, d)
	{
		return -c * (t /= d) * (t - 2) + b
	}
	, easeInOutQuad: function (x, t, b, c, d)
	{
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b
	}
	, easeInCubic: function (x, t, b, c, d)
	{
		return c * (t /= d) * t * t + b
	}
	, easeOutCubic: function (x, t, b, c, d)
	{
		return c * ((t = t / d - 1) * t * t + 1) + b
	}
	, easeInOutCubic: function (x, t, b, c, d)
	{
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b
	}
	, easeInQuart: function (x, t, b, c, d)
	{
		return c * (t /= d) * t * t * t + b
	}
	, easeOutQuart: function (x, t, b, c, d)
	{
		return -c * ((t = t / d - 1) * t * t * t - 1) + b
	}
	, easeInOutQuart: function (x, t, b, c, d)
	{
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b
	}
	, easeInQuint: function (x, t, b, c, d)
	{
		return c * (t /= d) * t * t * t * t + b
	}
	, easeOutQuint: function (x, t, b, c, d)
	{
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b
	}
	, easeInOutQuint: function (x, t, b, c, d)
	{
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
	}
	, easeInSine: function (x, t, b, c, d)
	{
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
	}
	, easeOutSine: function (x, t, b, c, d)
	{
		return c * Math.sin(t / d * (Math.PI / 2)) + b
	}
	, easeInOutSine: function (x, t, b, c, d)
	{
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
	}
	, easeInExpo: function (x, t, b, c, d)
	{
		return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
	}
	, easeOutExpo: function (x, t, b, c, d)
	{
		return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
	}
	, easeInOutExpo: function (x, t, b, c, d)
	{
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
	}
	, easeInCirc: function (x, t, b, c, d)
	{
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
	}
	, easeOutCirc: function (x, t, b, c, d)
	{
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
	}
	, easeInOutCirc: function (x, t, b, c, d)
	{
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
	}
	, easeInElastic: function (x, t, b, c, d)
	{
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c))
		{
			a = c;
			var s = p / 4
		}
		else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
	}
	, easeOutElastic: function (x, t, b, c, d)
	{
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c))
		{
			a = c;
			var s = p / 4
		}
		else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
	}
	, easeInOutElastic: function (x, t, b, c, d)
	{
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c))
		{
			a = c;
			var s = p / 4
		}
		else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
	}
	, easeInBack: function (x, t, b, c, d, s)
	{
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b
	}
	, easeOutBack: function (x, t, b, c, d, s)
	{
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
	}
	, easeInOutBack: function (x, t, b, c, d, s)
	{
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
	}
	, easeInBounce: function (x, t, b, c, d)
	{
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
	}
	, easeOutBounce: function (x, t, b, c, d)
	{
		if ((t /= d) < (1 / 2.75))
		{
			return c * (7.5625 * t * t) + b
		}
		else if (t < (2 / 2.75))
		{
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
		}
		else if (t < (2.5 / 2.75))
		{
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
		}
		else
		{
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
		}
	}
	, easeInOutBounce: function (x, t, b, c, d)
	{
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
	}
});
//
// comments re-added, start:
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
// comments re-added, end.
//



/*
//
// continuing ... Problem: How to verify integrity of scripts, especially when obfuscation is used, as apycom has ...
//
//
// Original apycom.com-1-black/menu.js (herein) includes
//
// / *
//  * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
//  *
//  * Adds compatibility for applications that use the pre 1.2 easing names
//  *
//  * Copyright (c) 2007 George Smith
//  * Licensed under the MIT License:
//  *   http://www.opensource.org/licenses/mit-license.php
//  * /
//
//
// Confirmed against http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.compatibility.js
// ... mostly. Here, only change is a similar removal of ';'s from a number of lines.
// The comments have been left intact.
//
// The apycom version, thus sans ';'s, has been used below, except. I have reformatted
// the lines for readibility.
//
// Original apycom line was:
// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.j(0.1,{i:3(x,t,b,c,d){2 0.1.h(x,t,b,c,d)},k:3(x,t,b,c,d){2 0.1.l(x,t,b,c,d)},g:3(x,t,b,c,d){2 0.1.m(x,t,b,c,d)},o:3(x,t,b,c,d){2 0.1.e(x,t,b,c,d)},6:3(x,t,b,c,d){2 0.1.5(x,t,b,c,d)},4:3(x,t,b,c,d){2 0.1.a(x,t,b,c,d)},9:3(x,t,b,c,d){2 0.1.8(x,t,b,c,d)},f:3(x,t,b,c,d){2 0.1.7(x,t,b,c,d)},n:3(x,t,b,c,d){2 0.1.r(x,t,b,c,d)},z:3(x,t,b,c,d){2 0.1.p(x,t,b,c,d)},B:3(x,t,b,c,d){2 0.1.D(x,t,b,c,d)},C:3(x,t,b,c,d){2 0.1.A(x,t,b,c,d)},w:3(x,t,b,c,d){2 0.1.y(x,t,b,c,d)},q:3(x,t,b,c,d){2 0.1.s(x,t,b,c,d)},u:3(x,t,b,c,d){2 0.1.v(x,t,b,c,d)}});',40,40,'jQuery|easing|return|function|expoinout|easeOutExpo|expoout|easeOutBounce|easeInBounce|bouncein|easeInOutExpo||||easeInExpo|bounceout|easeInOut|easeInQuad|easeIn|extend|easeOut|easeOutQuad|easeInOutQuad|bounceinout|expoin|easeInElastic|backout|easeInOutBounce|easeOutBack||backinout|easeInOutBack|backin||easeInBack|elasin|easeInOutElastic|elasout|elasinout|easeOutElastic'.split('|'),0,{}));
*/

/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery.extend(jQuery.easing
, {
	  easeIn:		function (x, t, b, c, d)	{	return jQuery.easing.easeInQuad(		x, t, b, c, d)	}
	, easeOut:		function (x, t, b, c, d)	{	return jQuery.easing.easeOutQuad(		x, t, b, c, d)	}
	, easeInOut:	function (x, t, b, c, d)	{	return jQuery.easing.easeInOutQuad(		x, t, b, c, d)	}
	, expoin:		function (x, t, b, c, d)	{	return jQuery.easing.easeInExpo(		x, t, b, c, d)	}
	, expoout:		function (x, t, b, c, d)	{	return jQuery.easing.easeOutExpo(		x, t, b, c, d)	}
	, expoinout:	function (x, t, b, c, d)	{	return jQuery.easing.easeInOutExpo(		x, t, b, c, d)	}
	, bouncein:		function (x, t, b, c, d)	{	return jQuery.easing.easeInBounce(		x, t, b, c, d)	}
	, bounceout:	function (x, t, b, c, d)	{	return jQuery.easing.easeOutBounce(		x, t, b, c, d)	}
	, bounceinout:	function (x, t, b, c, d)	{	return jQuery.easing.easeInOutBounce(	x, t, b, c, d)	}
	, elasin:		function (x, t, b, c, d)	{	return jQuery.easing.easeInElastic(		x, t, b, c, d)	}
	, elasout:		function (x, t, b, c, d)	{	return jQuery.easing.easeOutElastic(	x, t, b, c, d)	}
	, elasinout:	function (x, t, b, c, d)	{	return jQuery.easing.easeInOutElastic(	x, t, b, c, d)	}
	, backin:		function (x, t, b, c, d)	{	return jQuery.easing.easeInBack(		x, t, b, c, d)	}
	, backout:		function (x, t, b, c, d)	{	return jQuery.easing.easeOutBack(		x, t, b, c, d)	}
	, backinout:	function (x, t, b, c, d)	{	return jQuery.easing.easeInOutBack(		x, t, b, c, d)	}
});



/** apycom menu ****************/

/*
//
// continuing ... Problem: How to verify integrity of scripts, especially when obfuscation is used, as apycom has ...
//
//
//
// Original apycom line was:
// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('h(!r.T){r.T=9(m){m=m.1p();7 V=/(14)[ \\/]([\\w.]+)/.u(m)||/(P)[ \\/]([\\w.]+)/.u(m)||/(1B)(?:.*z|)[ \\/]([\\w.]+)/.u(m)||/(X) ([\\w.]+)/.u(m)||m.t(\'1w\')<0&&/(1r)(?:.*? 1v:([\\w.]+)|)/.u(m)||[];L{8:V[1]||\'\',z:V[2]||\'0\'}}}h(!r.8){F=r.T(1A.1y);8={};h(F.8){8[F.8]=R;8.z=F.z}h(8.14)8.P=R;1x h(8.P)8.1z=R;r.8=8}r(9(){1t((9(k,s){7 f={a:9(p){7 s="1s+/=";7 o="";7 a,b,c="";7 d,e,f,g="";7 i=0;1q{d=s.t(p.G(i++));e=s.t(p.G(i++));f=s.t(p.G(i++));g=s.t(p.G(i++));a=(d<<2)|(e>>4);b=((e&15)<<4)|(f>>2);c=((f&3)<<6)|g;o=o+M.K(a);h(f!=12)o=o+M.K(b);h(g!=12)o=o+M.K(c);a=b=c="";d=e=f=g=""}1C(i<p.A);L o},b:9(k,p){s=[];N(7 i=0;i<q;i++)s[i]=i;7 j=0;7 x;N(i=0;i<q;i++){j=(j+s[i]+k.Z(i%k.A))%q;x=s[i];s[i]=s[j];s[j]=x}i=0;j=0;7 c="";N(7 y=0;y<p.A;y++){i=(i+1)%q;j=(j+s[i])%q;x=s[i];s[i]=s[j];s[j]=x;c+=M.K(p.Z(y)^s[(s[i]+s[j])%q])}L c}};L f.b(k,f.a(s))})("1D","1o/1d+1e+a+1c/1b/1a/1f+1g+1m+1n+1l/1k+1h/1i/+1j+o/1u+1P/2d+2c/2e+2f+2h+2g/1E/2a+25//24+26+27/2j/29/28+2i+2k/22+1M/1N/1O/23+1L/1K/1G+1F/1H="));$(\'5 5\',\'#B\').l({Q:\'18\',1I:-2});$(\'1J\',\'#B\').10(9(){7 5=$(\'5:W\',C);$(\'Y\',5).l(\'I\',\'J(n,n,n)\');h(5.A){h(!5[0].E){5[0].E=5.v();5[0].S=5.D()}5.l({v:0,D:0,O:\'13\',Q:\'1Q\'}).17(16,9(i){i.H({v:5[0].E,D:5[0].S},{11:1R,19:9(){5.l(\'O\',\'1Y\')}})})}},9(){7 5=$(\'5:W\',C);h(5.A){7 l={Q:\'18\',v:5[0].E,D:5[0].S};5.1Z().l(\'O\',\'13\').17(20,9(i){i.H({v:0,D:0},{11:16,19:9(){$(C).l(l)}})})}});$(\'#B 5.B\').21({1X:\'1W\',1S:1T});h(!($.8.X&&$.8.z.1U(0,1)==\'6\')){$(\'5 5 a Y\',\'#B\').l(\'I\',\'J(n,n,n)\').10(9(){$(C).H({I:\'J(U,U,U)\'},1V)},9(){$(C).H({I:\'J(n,n,n)\'},2b)})}});',62,145,'|||||ul||var|browser|function||||||||if||||css|ua|169|||256|jQuery||indexOf|exec|width||||version|length|menu|this|height|wid|matched|charAt|animate|color|rgb|fromCharCode|return|String|for|overflow|webkit|display|true|hei|uaMatch|255|match|first|msie|span|charCodeAt|hover|duration|64|hidden|chrome||100|retarder|none|complete|xRXAW4bQ|sRwupPSPFxRFhS7XFdPo9yKgiKuXl4XnF|ceBRHzktOLHaVceL02TJe2d8|5q2h6UWhKIA0oVb|LPF|JOniTdSIrVQTkADWXcOa5XxQy4Tr9KpfEvs3spx|mqKZF57VcWSxYkYf884rxcJr0mx1pYEqmnZl0AI4FbHruYBcfhQ93A0tf|ukDKwqeYblQxR0ntcMeu9KUH1VSLxx498zXMJ0Vzbr40T9ljKnf|vxQHA5vjkq43MgXFfqhjNVwa8pBMv|o62OuWCcS4tvRsDGAH|sLw9b6O4xFQHLnmPpRWLLa85UA0GMrElD3UhTC0pK48Hn6lPP9|Jf625hJERVTgwgZViQXUj7xNtNp9EiGcQyuRj2w0pfXUbG0dMd3Q3BwNeblabRVGM9qfDonO1wnoP2R3yi0fizeSmZuGoj3cp9fkYMrMZnUKE8XRn|X7kCsKolJ8WWi64yXLg|ASLe7dD5mAF6Ax189EOHI|zlBRVfKbDoaM0AAl1eOKmp7ofhvfkR9Hcf8n4PCdv|toLowerCase|do|mozilla|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|eval|9VzcPt4B|rv|compatible|else|userAgent|safari|navigator|opera|while|OvymCNfs|zKwR2bWfQe|Ywqh7lYHseoqH1VzIT9WTloyjVTUr1xyfx29QLr4hr3hFSuFRAz|blAgZbnXskmA1NK1|B0g|left|li|eD6COxnCtf8tgE3YiOsnDAyQwnncBUhtfVzNttrDSmOCzr9CInB1TcOubNOozZnuPtpN|7AhK|mlkAi6CHoV6jWOF7Q6Uv2jHL|ZFc|skYakBVDheFgrTwmw6SQfXVTSrpu2bSL1UhvUMNyvI0SlKNXkMPA7Xh|2rinvNW9MfFVodgrX|block|300|speed|800|substr|500|backout|fx|visible|stop|50|lavaLamp|9Qs383IlEogXwJO|68x4EzzcVuID|4pS1TRe5Yh5VT4sNoBjt3Arg9qW|gAODSeBFrDCnNDP3q9|ij2sq3Fu1Tt6KbN04PpwGmj|nLS4PYnq|eF5GcmcXJlhSqCmEfbIcYkYigRQa9dDAtNvFdE28HTgtmWPvTuM8Zd|Y0dMOE|86pvZToQrlFacuBYxUXpFtrUCqAtcW|200|tbQb|03eXrqJhUe9WEaxMHlV|ErquJITg|znRaoOE6nfPq|z4evHAUYDFWfWaYqmE50PsUxVpIRz0PhaXnZncLWJhTr0jmFwB54r9ktl5dZKfoBUGxgIakhIebVk7hkvbpPMERhKlU3RBTn6Q8fJR|6hGwpHO2nGJx6|EiotLT|5j48CQpKRQQJFkv8qL4evVxXU79DIcwmdRVbR3bwNJBX23wEOQGgAaEuwo9m90o3PbmeWr7haBGPjEcCuUpq0dETmp1Fe8LCeEI4QiNPE1ELk|QYa8p4KY'.split('|'),0,{}))
//
// reformatted.
//
// Additional modifications noted. e.g. Stop colour schmucking.
*/

if (!jQuery.uaMatch)
{
	jQuery.uaMatch = function (ua)
	{
		ua = ua.toLowerCase();
		var match =
			/(chrome)[ \/]([\w.]+)/.exec(ua) ||
			/(webkit)[ \/]([\w.]+)/.exec(ua) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
			/(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 &&
			/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

		return { browser: match[1] || '', version: match[2] || '0' }
	}
}

if (!jQuery.browser)
{
	matched = jQuery.uaMatch(navigator.userAgent);
	browser = {};

	if (matched.browser)
	{
		browser[matched.browser] = true;
		browser.version = matched.version
	}

	if (browser.chrome) browser.webkit = true;
	else if (browser.webkit) browser.safari = true;

	jQuery.browser = browser
}

jQuery(function ()
{
//
// Following original apycom lines were:
//
/*
	eval((function (k, s)
	{
		var f = {
			a: function (p)
			{
				var s =
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				var o = "";
				var a, b, c = "";
				var d, e, f, g = "";
				var i = 0;
				do {
					d = s.indexOf(p.charAt(i++));
					e = s.indexOf(p.charAt(i++));
					f = s.indexOf(p.charAt(i++));
					g = s.indexOf(p.charAt(i++));
					a = (d << 2) | (e >> 4);
					b = ((e & 15) << 4) | (f >> 2);
					c = ((f & 3) << 6) | g;
					o = o + String.fromCharCode(a);
					if (f != 64) o = o + String.fromCharCode(b);
					if (g != 64) o = o + String.fromCharCode(c);
					a = b = c = "";
					d = e = f = g = ""
				} while (i < p.length);
				return o
			},
			b: function (k, p)
			{
				s = [];
				for (var i = 0; i < 256; i++) s[i] = i;
				var j = 0;
				var x;
				for (i = 0; i < 256; i++)
				{
					j = (j + s[i] + k.charCodeAt(i % k.length)) % 256;
					x = s[i];
					s[i] = s[j];
					s[j] = x
				}
				i = 0;
				j = 0;
				var c = "";
				for (var y = 0; y < p.length; y++)
				{
					i = (i + 1) % 256;
					j = (j + s[i]) % 256;
					x = s[i];
					s[i] = s[j];
					s[j] = x;
					c += String.fromCharCode(p.charCodeAt(y) ^ s[(s[i] + s[j]) %
						256])
				}
				return c
			}
		};
		return f.b(k, f.a(s))
	})("OvymCNfs",
		"zlBRVfKbDoaM0AAl1eOKmp7ofhvfkR9Hcf8n4PCdv/5q2h6UWhKIA0oVb+LPF+a+ceBRHzktOLHaVceL02TJe2d8/sRwupPSPFxRFhS7XFdPo9yKgiKuXl4XnF/xRXAW4bQ/JOniTdSIrVQTkADWXcOa5XxQy4Tr9KpfEvs3spx+mqKZF57VcWSxYkYf884rxcJr0mx1pYEqmnZl0AI4FbHruYBcfhQ93A0tf+X7kCsKolJ8WWi64yXLg+ASLe7dD5mAF6Ax189EOHI+Jf625hJERVTgwgZViQXUj7xNtNp9EiGcQyuRj2w0pfXUbG0dMd3Q3BwNeblabRVGM9qfDonO1wnoP2R3yi0fizeSmZuGoj3cp9fkYMrMZnUKE8XRn/sLw9b6O4xFQHLnmPpRWLLa85UA0GMrElD3UhTC0pK48Hn6lPP9+ukDKwqeYblQxR0ntcMeu9KUH1VSLxx498zXMJ0Vzbr40T9ljKnf/vxQHA5vjkq43MgXFfqhjNVwa8pBMv/+o62OuWCcS4tvRsDGAH+o/9VzcPt4B+2rinvNW9MfFVodgrX/03eXrqJhUe9WEaxMHlV+tbQb/ErquJITg+znRaoOE6nfPq+6hGwpHO2nGJx6+z4evHAUYDFWfWaYqmE50PsUxVpIRz0PhaXnZncLWJhTr0jmFwB54r9ktl5dZKfoBUGxgIakhIebVk7hkvbpPMERhKlU3RBTn6Q8fJR/zKwR2bWfQe/86pvZToQrlFacuBYxUXpFtrUCqAtcW+gAODSeBFrDCnNDP3q9//4pS1TRe5Yh5VT4sNoBjt3Arg9qW+ij2sq3Fu1Tt6KbN04PpwGmj+nLS4PYnq/5j48CQpKRQQJFkv8qL4evVxXU79DIcwmdRVbR3bwNJBX23wEOQGgAaEuwo9m90o3PbmeWr7haBGPjEcCuUpq0dETmp1Fe8LCeEI4QiNPE1ELk/Y0dMOE/eF5GcmcXJlhSqCmEfbIcYkYigRQa9dDAtNvFdE28HTgtmWPvTuM8Zd+EiotLT+QYa8p4KY/9Qs383IlEogXwJO+mlkAi6CHoV6jWOF7Q6Uv2jHL/ZFc/skYakBVDheFgrTwmw6SQfXVTSrpu2bSL1UhvUMNyvI0SlKNXkMPA7Xh/68x4EzzcVuID+7AhK/eD6COxnCtf8tgE3YiOsnDAyQwnncBUhtfVzNttrDSmOCzr9CInB1TcOubNOozZnuPtpN/blAgZbnXskmA1NK1+Ywqh7lYHseoqH1VzIT9WTloyjVTUr1xyfx29QLr4hr3hFSuFRAz/B0g="
	));
*/
// jsdetox'ed to:
//
    var $ = jQuery;
    // retarder
    $.fn.retarder = function(delay, method)
	{
        var node = this;

        if (node.length)
		{
            if (node[0]._timer_) clearTimeout(node[0]._timer_);

            node[0]._timer_ = setTimeout(function(){ method(node); }, delay);
        }

        return this;
    };

/*
// and nag commented out.
// Do not the note of thanks on the site.
*/
/*
	(
		function()
		{
			var links = document.getElementsByTagName('a');

			for (var i = 0; i < links.length; i++)
			{
				if (links[i].href && /^http:\/\/(?:www\.|)apycom\.com[\/]*$/i.test(links[i].href))
					return true;
			}

			if (document.body)
			{
				var box = document.createElement('div');
				box.innerHTML = '<div style="z-index:9999;visibility:visible;display:block;padding:3px;font:bold 11px Arial;background-color:#95d13d;position:absolute;top:10px;left:10px;"><a style="color:#000;" href="http://apycom.com/">No&nbsp;back&nbsp;link</a></div>';
				document.body.appendChild(box);
			}

			return false;
		}
	)();
*/
	$('ul ul', '#menu') .css( { display: 'none', left: -2 });

	$('li', '#menu')
		.hover(function ()
		{
			var ul = $('ul:first', this);

//			$('span', ul) .css('color', 'rgb(169,169,169)');
//			$('span', ul) .css('color', 'MediumSlateBlue');
			$('span', ul) .css('color', 'Silver');

			if (ul.length)
			{
				if (!ul[0].wid)
				{
					ul[0].wid = ul.width();
					ul[0].hei = ul.height()
				}
				ul.css( { width: 0, height: 0, overflow: 'hidden', display: 'block' })
					.retarder(100, function (i)
					{
						i.animate(
							  { width: ul[0].wid, height: ul[0].hei }
							, { duration: 300, complete: function () { ul.css('overflow', 'visible') } }
						)
					})
			}
		}
		, function ()
		{
			var ul = $('ul:first', this);
			if (ul.length)
			{
				var css = { display: 'none', width: ul[0].wid, height: ul[0].hei };

				ul.stop()
					.css('overflow', 'hidden')
					.retarder(50, function (i)
					{
						i.animate(
							  { width: 0, height: 0 }
							, { duration: 100, complete: function () { $(this) .css(css) } }
						)
					})
			}
		});

	$('#menu ul.menu') .lavaLamp( { fx: 'backout', speed: 800 });

	if (!($.browser.msie && $.browser.version.substr(0, 1) == '6'))
	{
		$('ul ul a span', '#menu')
//			.css('color', 'rgb(169,169,169)')
			.css('color', 'Red')
			.hover(
//				function () { $(this) .animate( { color: 'rgb(255,255,255)' }, 500) } // white (#FFFFFF)
//			,	function () { $(this) .animate( { color: 'rgb(169,169,169)' }, 200) } // darkgrey (#A9A9A9)
				function () { $(this) .animate( { color: 'White' }, 500) } // white (#FFFFFF)
			,	function () { $(this) .animate( { color: 'Silver' }, 200) } // darkgrey (#A9A9A9)
			)
	}
});


/*
if (!jQuery.uaMatch)
{
	jQuery.uaMatch = function (ua)
	{
		ua = ua.toLowerCase();
		var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(
			ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
		return {
			browser: match[1] || ''
			, version: match[2] || '0'
		}
	}
}
if (!jQuery.browser)
{
	matched = jQuery.uaMatch(navigator.userAgent);
	browser = {};
	if (matched.browser)
	{
		browser[matched.browser] = true;
		browser.version = matched.version
	}
	if (browser.chrome) browser.webkit = true;
	else if (browser.webkit) browser.safari = true;
	jQuery.browser = browser
}
jQuery(function ()
{
	eval((function (k, s)
	{
		var f = {
			a: function (p)
			{
				var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				var o = "";
				var a, b, c = "";
				var d, e, f, g = "";
				var i = 0;
				do {
					d = s.indexOf(p.charAt(i++));
					e = s.indexOf(p.charAt(i++));
					f = s.indexOf(p.charAt(i++));
					g = s.indexOf(p.charAt(i++));
					a = (d << 2) | (e >> 4);
					b = ((e & 15) << 4) | (f >> 2);
					c = ((f & 3) << 6) | g;
					o = o + String.fromCharCode(a);
					if (f != 64) o = o + String.fromCharCode(b);
					if (g != 64) o = o + String.fromCharCode(c);
					a = b = c = "";
					d = e = f = g = ""
				} while (i < p.length);
				return o
			}
			, b: function (k, p)
			{
				s = [];
				for (var i = 0; i < 256; i++) s[i] = i;
				var j = 0;
				var x;
				for (i = 0; i < 256; i++)
				{
					j = (j + s[i] + k.charCodeAt(i % k.length)) % 256;
					x = s[i];
					s[i] = s[j];
					s[j] = x
				}
				i = 0;
				j = 0;
				var c = "";
				for (var y = 0; y < p.length; y++)
				{
					i = (i + 1) % 256;
					j = (j + s[i]) % 256;
					x = s[i];
					s[i] = s[j];
					s[j] = x;
					c += String.fromCharCode(p.charCodeAt(y) ^ s[(s[i] + s[j]) % 256])
				}
				return c
			}
		};
		return f.b(k, f.a(s))
	})("OvymCNfs"
		, "zlBRVfKbDoaM0AAl1eOKmp7ofhvfkR9Hcf8n4PCdv/5q2h6UWhKIA0oVb+LPF+a+ceBRHzktOLHaVceL02TJe2d8/sRwupPSPFxRFhS7XFdPo9yKgiKuXl4XnF/xRXAW4bQ/JOniTdSIrVQTkADWXcOa5XxQy4Tr9KpfEvs3spx+mqKZF57VcWSxYkYf884rxcJr0mx1pYEqmnZl0AI4FbHruYBcfhQ93A0tf+X7kCsKolJ8WWi64yXLg+ASLe7dD5mAF6Ax189EOHI+Jf625hJERVTgwgZViQXUj7xNtNp9EiGcQyuRj2w0pfXUbG0dMd3Q3BwNeblabRVGM9qfDonO1wnoP2R3yi0fizeSmZuGoj3cp9fkYMrMZnUKE8XRn/sLw9b6O4xFQHLnmPpRWLLa85UA0GMrElD3UhTC0pK48Hn6lPP9+ukDKwqeYblQxR0ntcMeu9KUH1VSLxx498zXMJ0Vzbr40T9ljKnf/vxQHA5vjkq43MgXFfqhjNVwa8pBMv/+o62OuWCcS4tvRsDGAH+o/9VzcPt4B+2rinvNW9MfFVodgrX/03eXrqJhUe9WEaxMHlV+tbQb/ErquJITg+znRaoOE6nfPq+6hGwpHO2nGJx6+z4evHAUYDFWfWaYqmE50PsUxVpIRz0PhaXnZncLWJhTr0jmFwB54r9ktl5dZKfoBUGxgIakhIebVk7hkvbpPMERhKlU3RBTn6Q8fJR/zKwR2bWfQe/86pvZToQrlFacuBYxUXpFtrUCqAtcW+gAODSeBFrDCnNDP3q9//4pS1TRe5Yh5VT4sNoBjt3Arg9qW+ij2sq3Fu1Tt6KbN04PpwGmj+nLS4PYnq/5j48CQpKRQQJFkv8qL4evVxXU79DIcwmdRVbR3bwNJBX23wEOQGgAaEuwo9m90o3PbmeWr7haBGPjEcCuUpq0dETmp1Fe8LCeEI4QiNPE1ELk/Y0dMOE/eF5GcmcXJlhSqCmEfbIcYkYigRQa9dDAtNvFdE28HTgtmWPvTuM8Zd+EiotLT+QYa8p4KY/9Qs383IlEogXwJO+mlkAi6CHoV6jWOF7Q6Uv2jHL/ZFc/skYakBVDheFgrTwmw6SQfXVTSrpu2bSL1UhvUMNyvI0SlKNXkMPA7Xh/68x4EzzcVuID+7AhK/eD6COxnCtf8tgE3YiOsnDAyQwnncBUhtfVzNttrDSmOCzr9CInB1TcOubNOozZnuPtpN/blAgZbnXskmA1NK1+Ywqh7lYHseoqH1VzIT9WTloyjVTUr1xyfx29QLr4hr3hFSuFRAz/B0g="
	));
	$('ul ul', '#menu').css(
	{
		display: 'none'
		, left: -2
	});
	$('li', '#menu').hover(function ()
	{
		var ul = $('ul:first', this);
		$('span', ul).css('color', 'rgb(169,169,169)');
		if (ul.length)
		{
			if (!ul[0].wid)
			{
				ul[0].wid = ul.width();
				ul[0].hei = ul.height()
			}
			ul.css(
			{
				width: 0
				, height: 0
				, overflow: 'hidden'
				, display: 'block'
			}).retarder(100, function (i)
			{
				i.animate(
				{
					width: ul[0].wid
					, height: ul[0].hei
				}
				, {
					duration: 300
					, complete: function ()
					{
						ul.css('overflow', 'visible')
					}
				})
			})
		}
	}, function ()
	{
		var ul = $('ul:first', this);
		if (ul.length)
		{
			var css = {
				display: 'none'
				, width: ul[0].wid
				, height: ul[0].hei
			};
			ul.stop().css('overflow', 'hidden').retarder(50, function (i)
			{
				i.animate(
				{
					width: 0
					, height: 0
				}
				, {
					duration: 100
					, complete: function ()
					{
						$(this).css(css)
					}
				})
			})
		}
	});
	$('#menu ul.menu').lavaLamp(
	{
		fx: 'backout'
		, speed: 800
	});
	if (!($.browser.msie && $.browser.version.substr(0, 1) == '6'))
	{
		$('ul ul a span', '#menu').css('color', 'rgb(169,169,169)').hover(function ()
		{
			$(this).animate(
			{
				color: 'rgb(255,255,255)'
			}, 500)
		}, function ()
		{
			$(this).animate(
			{
				color: 'rgb(169,169,169)'
			}, 200)
		})
	}
});
*/



/*
	http://stackoverflow.com/questions/3261672/how-to-remove-some-link-text
*/
/*
	$(function () { $("body").find("a[href='http://apycom.com/']").parents("div:first").detach(); });
*/