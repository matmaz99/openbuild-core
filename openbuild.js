/**
 * @file openBuild Framework JS utilities
 * @copyright Matt Mazzege / Tinkso 2022
 */

window.onmessage = function(e){

    if(e.data.type == 'generate' ){
     // alert("test:" + JSON.stringify(e))
     const msg = e.data.json
        console.log(msg)
var fonts = `;--font_OB001_default:${msg.font1}; --font_OB002_default:${msg.font2}; --font_OB003_default:${msg.font3}; --font_OB004_default:${msg.font4}`
    var inlineCSS = "height: 100%;"+jsontocss(generateStyles(msg))+fonts
    document.querySelector("html").setAttribute('style', inlineCSS)
        WebFont.load({
		google: {
			families: [`${msg.font1}:300,400,600,700,800`,`${msg.font2}:300,400,600,700,800`,`${msg.font3}:300,400,600,700,800`,`${msg.font4}:300,400,600,700,800`]
		}
	});
        }}


var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://s3.amazonaws.com/appforest_uf/f1675239833989x126185156287731200/open.css';
    link.media = 'all';
    head.appendChild(link);
}

const location3 = new URL(window.location.href);
//check if location have path 'version-test' and url parameter 'openbuild'
if (location3.pathname.includes('version-test') && location3.searchParams.get('openbuild')) {
var url = "https://openbuild-app.bubbleapps.io/version-test/bstyles"
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', url);
    iframe.setAttribute('id', 'openpanel');
    iframe.style.display = 'block';

    //creating the openbuild icon on far right
    const icon = document.createElement('img');
    icon.setAttribute('id', 'toggle');
    icon.src = 'https://s3.amazonaws.com/appforest_uf/f1664868538374x221373726896002750/Group%20308.png';
    icon.addEventListener('click', () => showPanel());
    document.body.appendChild(iframe);
    document.body.appendChild(icon);
    // iframe.style.display = 'none';
}

function showPanel() {
    const ifr = document.getElementById('openpanel');
    if (ifr != null) {
        ifr.style.right = '0px';
        ifr.style.display = 'block';
    }
}

var bvars = [
    {
      "id": "OB001",
      "bubblename": "◩ Shades / Primary",
      "description": "Highest contrasted shades - Mainly used for headers and input label",
      "path": "Primary",
      "order": 0
    },
    {
      "id": "OB002",
      "bubblename": "◩ Shades / Secondary 1",
      "description": " Medium Shade - Mainly used for body texts and subtitles",
      "path": "Secondary 1",
      "order": 1
    },
    {
      "id": "OB003",
      "bubblename": "◩ Shades / Secondary 2",
      "description": "Medium shade - Mainly used for inactive text or button and secondary text",
      "path": "Secondary 2",
      "order": 2
    },
    {
      "id": "OB004",
      "bubblename": "◩ Shades / Secondary 3",
      "description": "Light shade - Mainly used for dividers or borders",
      "path": "Secondary 3",
      "order": 3
    },
    {
      "id": "OB005",
      "bubblename": "◩ Shades / Secondary 4",
      "description": "Light shade - Mainly used for cards, light section background or dividers",
      "path": "Secondary 4",
      "order": 4
    },
    {
      "id": "OB006",
      "bubblename": "◩ Shades / Negative",
      "description": "Negative color - Usually white or black depending on the color mode of the app",
      "path": "Negative",
      "order": 5
    },
    {
      "id": "OB007",
      "bubblename": "◩ Page Background",
      "description": "Background color of all pages",
      "path": "Page background",
      "order": 6
    },
    {
      "id": "OB008",
      "bubblename": "◩ Color / Main",
      "description": "Principal color - Mainly used for CTA's",
      "path": "Color Main",
      "order": 7
    },
    {
      "id": "OB009",
      "bubblename": "◩ Color / Secondary",
      "description": "Secondary color",
      "path": "Color Secondary",
      "order": 8
    },
    {
      "id": "OB010",
      "bubblename": "◩ Color / Tertiary",
      "description": "Tertiary color",
      "path": "Color Tertiary",
      "order": 9
    },
    {
      "id": "OB011",
      "bubblename": "◩ Input / Label",
      "description": "Color used for inputs labels",
      "path": "Input label",
      "order": 10
    },
    {
      "id": "OB012",
      "bubblename": "◩ Input / Text",
      "description": "Color used for inputs text",
      "path": "Input text",
      "order": 11
    },
    {
      "id": "OB013",
      "bubblename": "◩ Input / Background",
      "description": "Color used for inputs background",
      "path": "Input bg",
      "order": 12
    },
    {
      "id": "OB014",
      "bubblename": "◩ Input / Border",
      "description": "Color used for inputs borders",
      "path": "Input border",
      "order": 13
    },
    {
      "id": "OB015",
      "bubblename": "◩ Input / Focus",
      "description": "Color used for borders when inputs are hovered or focused",
      "path": "Input border hover",
      "order": 14
    },
    {
      "id": "OB016",
      "bubblename": "◩ Button / Primary / Text",
      "description": "Text color used for primary buttons",
      "path": "btn-Primary-Text",
      "order": 15
    },
    {
      "id": "OB017",
      "bubblename": "◩ Button / Primary / Background",
      "description": "Background color used for primary buttons",
      "path": "btn-Primary",
      "order": 16
    },
    {
      "id": "OB018",
      "bubblename": "◩ Button / Primary / Hover",
      "description": "Background color when primary buttons are hovered",
      "path": "btn-Primary hover",
      "order": 17
    },
    {
      "id": "OB019",
      "bubblename": "◩ Button / Secondary / Text",
      "description": "Text color used for secondary buttons",
      "path": "btn-Secondary-Text",
      "order": 18
    },
    {
      "id": "OB020",
      "bubblename": "◩ Button / Secondary / Background",
      "description": "Background color used for secondary buttons",
      "path": "btn-Secondary",
      "order": 19
    },
    {
      "id": "OB021",
      "bubblename": "◩ Button / Secondary / Border",
      "description": "Borders color used for secondary buttons",
      "path": "btn-Secondary-Border",
      "order": 20
    },
    {
      "id": "OB022",
      "bubblename": "◩ Button / Secondary / Hover",
      "description": "Background color when secondary buttons are hovered",
      "path": "btn-Secondary-Border hover",
      "order": 21
    },
    {
      "id": "OB023",
      "bubblename": "◩ Button / Transparent / Text",
      "description": "Text color used for transparent buttons",
      "path": "btn-Transparent",
      "order": 22
    },
    {
      "id": "OB024",
      "bubblename": "◩ Button / Transparent / Border",
      "description": "Borders color used for transparent buttons",
      "path": "btn-Transparent",
      "order": 23
    },
    {
      "id": "OB025",
      "bubblename": "◩ Button / Transparent / Hover",
      "description": "Borders color when transparent buttons are hovered",
      "path": "btn-Transparent hover",
      "order": 24
    },
    {
      "id": "OB026",
      "bubblename": "◩ Button / Color Main / Text",
      "description": "Text color used for main color buttons",
      "path": "btn-Color Main-Text",
      "order": 25
    },
    {
      "id": "OB027",
      "bubblename": "◩ Button / Color Main / Background",
      "description": "Background color used for main color buttons",
      "path": "btn-Color Main",
      "order": 26
    },
    {
      "id": "OB028",
      "bubblename": "◩ Button / Color Main / Hover",
      "description": "Background color when main color buttons are hovered",
      "path": "btn-Color Main hover",
      "order": 27
    },
    {
      "id": "OB029",
      "bubblename": "◩ Button / Color Secondary / Text",
      "description": "Text color used for secondary color buttons",
      "path": "btn-Color Secondary-Text",
      "order": 28
    },
    {
      "id": "OB030",
      "bubblename": "◩ Button / Color Secondary / Background",
      "description": "Background color used for main color buttons",
      "path": "btn-Color Secondary",
      "order": 29
    },
    {
      "id": "OB031",
      "bubblename": "◩ Button / Color Secondary / Hover",
      "description": "Background color when color secondary buttons are hovered",
      "path": "btn-Color Secondary hover",
      "order": 30
    }
  ]



var buttonStyles = [{
        "name": "Buttons/btn-Primary",
        "color": "Primary"
    },
    {
        "name": "Buttons/btn-Primary-Text",
        "color": "Negative"
    },
    {
        "name": "Buttons/btn-Secondary",
        "color": "Negative"
    },
    {
        "name": "Buttons/btn-Secondary-Text",
        "color": "Secondary 1"
    },
    {
        "name": "Buttons/btn-Secondary-Border",
        "color": "Secondary 1"
    },
    {
        "name": "Buttons/btn-Color Main",
        "color": "Color Main"
    },
    {
        "name": "Buttons/btn-Transparent",
        "color": "Primary"
    },
    {
        "name": "Buttons/btn-Color Secondary",
        "color": "Color Secondary"
    },
    {
        "name": "Buttons/btn-Color Secondary-Text",
        "color": "Base/Black"
    },
    {
        "name": "Input label",
        "color": "Primary"
    },
    {
        "name": "Input text",
        "color": "Secondary 1"
    },
    {
        "name": "Input bg",
        "color": "Negative"
    },
    {
        "name": "Input helper",
        "color": "Secondary 2"
    },
    {
        "name": "Input border",
        "color": "Secondary 3"
    }
];
var stylestones = {
    "Primary": {
        "s": 3,
        "l": 3
    },
    "Color Secondary": {
        "s": 100,
        "l": 90
    },
    "Color Tertiary": {
        "s": 100,
        "l": 90
    },
    "Secondary 1": {
        "s": 3,
        "l": 25
    },
    "Secondary 2": {
        "s": 3,
        "l": 50
    },
    "Secondary 3": {
        "s": 10,
        "l": 85
    },
    "Secondary 4": {
        "s": 20,
        "l": 97
    },
    "Page background": {
        "s": 3,
        "l": 99
    },
    "Negative": {
        "s": 3,
        "l": 100,
    }
};
var stylesdark = {
    "Primary": {
        "s": 5,
        "l": 98
    },
    "Color Secondary": {
        "s": 100,
        "l": 90
    },
    "Color Tertiary": {
        "s": 100,
        "l": 90
    },
    "Secondary 1": {
        "s": 5,
        "l": 70
    },
    "Secondary 2": {
        "s": 5,
        "l": 50
    },
    "Secondary 3": {
        "s": 15,
        "l": 10
    },
    "Secondary 4": {
        "s": 25,
        "l": 5
    },
    "Page background": {
        "s": 5,
        "l": 1
    },
    "Negative": {
        "s": 5,
        "l": 4,
    }
};
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
function generateStyles(msg){
        const sat = msg.sat;
        const dark = msg.darkmode;
        console.log(dark);
        const model = msg.model;
        var variations = stylestones;
        if (dark === "yes") {
            variations = stylesdark;
        }
        const accentHex = msg.count;
        const accentRgb = hexToRgb(msg.count);
        const accentHsl = rgbToHsl(accentRgb.r, accentRgb.g, accentRgb.b);
        var mainS = accentHsl[0];
        var secS = accentHsl[0];
        var secHsl;
        const secHex = msg.sec ? msg.sec : null;
        if (secHex) {
            const secRgb = hexToRgb(secHex);
            secHsl = rgbToHsl(secRgb.r, secRgb.g, secRgb.b);
            console.log("sechHSL:" + secHsl);
            mainS = 240;
        }
        if (model === 'Complementary') {
            mainS = mainS + 180;
            if (mainS > 360) {
                mainS = mainS - 360;
            }
            var secS = mainS;
        }
        if (model === 'Analogous') {
            mainS = mainS - 10;
            if (mainS > 360) {
                mainS = mainS - 360;
            }
            var secS = mainS + 20;
            if (secS > 360) {
                secS = secS - 360;
            }
        }
        if (model === 'Triadic') {
            mainS = mainS - 60;
            if (mainS > 360) {
                mainS = mainS - 360;
            }
            var secS = mainS + 120;
            if (secS > 360) {
                secS = secS - 360;
            }
        }
        console.log({ "Hex": accentHex,
            "RGB": accentRgb,
            "HSL": accentHsl });
        var styles = bvars;
        for (let i = 0; i < styles.length; i++) {
            //ACCENT COLOR SET UP
            if (styles[i].path=='Color Main') {
                styles[i].color = hslToHex(accentHsl[0],accentHsl[1],accentHsl[2])
                console.log(styles[i].color)
            }
            //SHADES SET UP
            if (stylestones.hasOwnProperty(styles[i].path)) {
                console.log(styles[i].path);
                var sat2 = Number(variations[styles[i].path].s) + Number(sat);
                if (sat2 > 100) {
                    sat2 = 100;
                }
                console.log("newSAT:" + sat2);
                console.log(styles[i].color)
                var col = hslToHex(mainS, sat2, variations[styles[i].path].l);
                styles[i].color = col
                
            }
            // Color Secondary SETUP
            if (styles[i].path === 'Color Secondary') {
                console.log(styles[i].path);
                var col = hslToHex(secS, variations[styles[i].path].s, variations[styles[i].path].l);
                if (model === 'Monochromatic') {
                    col = hslToHex(mainS, variations[styles[i].path].s, 90);
                }
                if (model === 'Duo') {
                    //console.log(secHsl);
                    col = hslToHex(secHsl[0], 100, 90);
                    console.log("secondaryC:" + col);
                }
                styles[i].color =  col
                console.log(styles[i].color)
            }
            // Color Tertiary SETUP
            if (styles[i].path =='Color Tertiary') {
                console.log(styles[i].path);
                var col = hslToHex(mainS, variations[styles[i].path].s, variations[styles[i].path].l);
                if (model === 'Monochromatic') {
                    col = hslToHex(mainS, variations[styles[i].path].s, 80);
                }
                if (model === 'Duo') {
                    col = hslToHex(secHsl[0], 100, 80);
                    console.log("teritaryC:" + col);
                }
                styles[i].color = col
            }
            // COLOR BUTTON TEXT SETUP (BLACK OR WHITE)
            if (styles[i].path =='btn-Color Main-Text') {
                console.log('setting up button tex...');
                console.log(styles[i].path);
                var col = hslToHex(0, 0, 0);
                if (accentHsl[2] <= 50) {
                    col = hslToHex(0, 0, 100);
                }
                styles[i].color = col
            }
            

        }

        

        console.log(styles)
        //styles = figma.getLocalPaintStyles();
        //set up buttons styles color
        for (let i = 0; i < buttonStyles.length; i++) {
            for (let j = 0; j < styles.length; j++) {
                if (styles[j].path == buttonStyles[i].name.replace('Buttons/','')) {
                    var btn = j;
                    console.log("j " + styles[j].path);
                    for (let k = 0; k < styles.length; k++) {
                        if (styles[k].path === buttonStyles[i].color) {
                            var btnc = k;
                            console.log("k " + styles[k].path);
                            styles[j].color = styles[k].color;
                        }
                    }
                   
                    
                }
            }
        }

        for (let i = 0; i < styles.length; i++) {
            if (styles[i].path.includes('hover')) {
                //find the style whose path is the sme but without hover
                for (let j = 0; j < styles.length; j++) {
                    if (styles[j].path == styles[i].path.replace(' hover','')) {
                        console.log(styles[j].path);
                        var col = hovercolor(styles[j].color)
                        styles[i].color = col
                    }
                }
            }}

        return styles}
    
   
        //RGB@HEX function
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
    

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h * 360, s * 100, l * 100];
}
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l) {
    h = h / 360;
    s = s / 100;
    l = l / 100;
    var r, g, b;
    if (s == 0) {
        r = g = b = l; // achromatic
    }
    else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [r*255, g*255, b*255];
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  function createinlineCSS (styles){

    var inlineCSS = '';
    for (let i = 0; i < styles.length; i++) {
        inlineCSS += styles[i].path + ' {color: ' + styles[i].color + ';} ';
    }
    return inlineCSS;



  }


 

function csstoson (inl){
    var sl = [];
    var inlarr = inl.split(';');
    for (let i = 0; i < inlarr.length; i++) {
        var id = inlarr[i].split('_')[1];
        var color = inlarr[i].split(':')[1];
        var obj = {
            "id": id,
            "color": color
        }
        sl.push(obj);
    }
    return sl;
}

function jsontocss (st){
    var inl = '';
    for (let i = 0; i < st.length; i++) {
        inl += '--color_' + st[i].id + '_default:' + st[i].color + ';';
    }
    return inl;
}

//function to generate a hover color from a color, 10 more light if it's dark, 10 more dark if it's light

function hovercolor (color){
    console.log("hover:"+color)
    var rgb = hexToRgb(color);
    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    if (hsl[2] > 50) {
        hsl[2] -= 10;
    } else {
        hsl[2] += 10;
    }
    var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
    console.log("hover:"+rgb)
    var hex = rgbToHex(Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2]));
    return hex;
}





