
    // live preview color function

var color;
function changecolor() {
    color = document.getElementById("playercolor").value;
    document.getElementById("xtrackname").style.color = "#" + color;
    document.getElementById("pbar1").style.background = "#" + color;
    document.getElementById("pbar2").style.background = "#" + color;
    document.getElementById("xplay").style.borderLeft = "7px solid " + "#" + color;
    document.getElementById("sk1").style.borderLeft = "5px solid " + "#" + color;
    document.getElementById("sk2").style.borderLeft = "5px solid " + "#" + color;
}

    // turn autoplay on or off function

var autos = "off";
function auto() {
    if ( autos == "off" ) {
        autos = "on";
        document.getElementById("abutton").style.background = "#0CDB58";
        document.getElementById("abutton").value = "autoplay is on";
    }
    else if ( autos == "on" ) {
        autos = "off";
        document.getElementById("abutton").style.background = "#FF0054";
        document.getElementById("abutton").value = "autoplay is off";
    }
    else {}
}

    // generate user code function

function generate() {

    // hide customisation interface and show codebox

    document.getElementById("index-color-select").style.display = "none";
    document.getElementById("code1").style.display = "block";
    document.getElementById("code2").style.display = "block";
    document.getElementById("code3").style.display = "block";
    document.getElementById("desc").style.textAlign = "left";
    document.getElementById("desc").innerHTML = "<b>1.</b> Paste the code in blue just before <code>/body</code><br><br><b>2.</b> Choose the regular (yellow) or hover tab (green) version. Styling help is provided in the code — first paste it after <code>body</code>"
            
// declare variables for multi-info and multi-names spans

    var oneinfo = "#" + color + " " + autos + " ";
    var twoinfo = "0,0,";

    // add spaces after valid urls and commas after valid titles in form

    var aa, bb, cc, dd, i;

    for (i=1; i < 10; i++) {
        aa = "trackurl" + i;
        cc = "trackname" + i;
        bb = document.getElementById(aa);
        dd = document.getElementById(cc);
        if ( bb.value != "" ) {
            bb.value += " ";
            oneinfo += bb.value;
        }
        if ( dd.value != "" ) {
            dd.value += ",";
            twoinfo += dd.value;
        }
    }

    (function() {

        // delete the last index in info strings so they don't end in space or comma

        var oneinfolength = oneinfo.length - 1;
        var oneinfonew = oneinfo.slice(0,oneinfolength);
        var twoinfolength = twoinfo.length - 1;
        var twoinfonew = twoinfo.slice(0,twoinfolength);

        // generate user code in "textarea"

        document.getElementById("code1").innerHTML = "<!----------------------------------------  code forked at https://cinness.github.io/  ----------------------------------------> &lt;script src&equals;&quot;https://cinness.github.io/mtp/instant-medium.js&quot;&gt;&lt;&sol;script&gt;";
        document.getElementById("code2").innerHTML = "<!----------------------------------------  The player is automatically positioned to be at the bottom left of your site. If you specifically want it somewhere, paste it there and replace BOTTOM with MARGIN-TOP and replace LEFT with MARGIN-LEFT. Adjust the margin numbers to your liking. Depending on your site's coding, you may have to remove POSITION:FIXED.  ----------------------------------------> &lt;div id&equals;&quot;mtplayer&quot; style=&quot;bottom: 16px; left: 5px; position: fixed;&quot;&gt;&lt;span id&equals;&quot;multi-info&quot; style&equals;&quot;display: none;&quot;&gt;" + oneinfonew + "&lt;&sol;span&gt;&lt;span id&equals;&quot;multi-names&quot; style&equals;&quot;display: none;&quot;&gt;" + twoinfonew + "&lt;&sol;span&gt;&lt;&sol;div&gt;";
        document.getElementById("code3").innerHTML = "<!----------------------------------------  The player is automatically positioned to be at the bottom left of your site. For a different corner, change BOTTOM with TOP, for example. To specifically position somewhere, replace BOTTOM with MARGIN-TOP and replace LEFT with MARGIN-LEFT — adjust those numbers to your liking.  ----------------------------------------> &lt;div id&equals;&quot;hovertab&quot; style=&quot;bottom: 13px; left: 15px; position: fixed;&quot;&gt;&lt;div id&equals;&quot;multisymbol&quot;&gt;&lt;div id&equals;&quot;interior&quot;&gt;&lt;table cellspacing&quot;0&quot; cellpadding&equals;&quot;0&quot;&gt;&lt;tr&gt;&lt;td&gt; <!----------------------------------------  For the music player gif, you can of course use any image. This is just a general guideline, and if you're especially unfamiliar with coding, it's easier to visit https://bit.ly/2OXkAyC for example and right-click any gif to copy its image address. Then, simply replace the following img src URL.  ----------------------------------------> &lt;img src&equals;&quot;https://66.media.tumblr.com/tumblr_m7w2izzY0j1r6o8v2.gif&quot;&gt;&lt;&sol;td&gt;&lt;td&gt;&lt;div id&equals;&quot;mtplayer&quot;&gt;&lt;span id&equals;&quot;multi-info&quot; style&equals;&quot;display: none;&quot;&gt;" + oneinfonew + "&lt;&sol;span&gt;&lt;span id&equals;&quot;multi-names&quot; style&equals;&quot;display: none;&quot;&gt;" + twoinfonew + "&lt;&sol;span&gt;&lt;&sol;div&gt;&lt;&sol;table&gt;&lt;&sol;div&gt;&lt;&sol;div&gt;&lt;&sol;div&gt;";
    })();
}
