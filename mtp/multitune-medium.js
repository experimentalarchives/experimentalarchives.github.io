     // code forked at https://cinness.github.io/

window.onload = function mtp() {
        
    // get user input info

    var initinfo = document.getElementById("multi-info").innerHTML;
    var songs = initinfo.split(" ");
    var sq = songs.length - 1;

    var initnames = document.getElementById("multi-names").innerHTML;
    var tracks = initnames.split(",");

   // fill holes left by possible blank track titles

    (function() {
         var i = 0;
         for ( i; i < songs.length; i++ ) {
             if ( tracks[i] === undefined ) {
                 tracks[i] = " ";
                 }
             else {}
            }
            return;
    })();

    // set up DOM

        document.getElementById("mtplayer").innerHTML = '<audio id="xaudio" preload="auto"><source src="' + songs[2] +'" type="audio/mpeg"></audio><div id="controls1"><div id="xplay"></div><div id="xpause"><div id="pbar1"></div><div id="pbar2"></div><div id="kr2"></div></div></div><div id="controls2"><div id="xskip"><div id="sk1"></div><div id="sk2"></div><div id="kr3"></div></div></div><div id="xtrackname"></div><div id="kr"></div>';

    // style player elements

    document.getElementById("mtplayer").style.display = "block";
    document.getElementById("mtplayer").style.width = "25px";
    document.getElementById("mtplayer").style.padding = "0px 15px";

    var xaudio = document.getElementById("xaudio");
    xaudio.style.display = "none";

    document.getElementById("kr").style.clear = "both";
    document.getElementById("kr2").style.clear = "both";
    document.getElementById("kr3").style.clear = "both";

    var controls1 = document.getElementById("controls1");
    controls1.style.display = "block";
    controls1.style.float = "left";

    var controls2 = document.getElementById("controls2");
    controls2.style.display = "block";
    controls2.style.float = "right";

    var xtrackname = document.getElementById("xtrackname");
    xtrackname.style.display = "block";
    xtrackname.style.textAlign = "left";
    xtrackname.style.fontFamily = "arial, sans-serif";
    xtrackname.style.fontSize = "12px";
    xtrackname.style.fontWeight = "600";
    xtrackname.style.lineHeight = "13px";
    xtrackname.style.marginTop = "-1px";
    xtrackname.style.marginLeft = "32px";
    xtrackname.style.width = "90px";
    xtrackname.style.position = "absolute";
    xtrackname.style.overflow = "hidden";
    xtrackname.style.cursor = "default";
    xtrackname.style.color = songs[0];
    xtrackname.innerHTML = tracks[2];

    var xplay = document.getElementById("xplay");
    xplay.style.display = "block";
    xplay.style.width = "0px";
    xplay.style.height = "0px";
    xplay.style.borderTop = "5px solid transparent";
    xplay.style.borderLeft = "7px solid " + songs[0];
    xplay.style.borderBottom = "5px solid transparent";
    xplay.style.cursor = "pointer";

    var xpause = document.getElementById("xpause");
    xpause.style.display = "none";
    xpause.style.cursor = "pointer";

    var pbar1 = document.getElementById("pbar1");
    var pbar2 = document.getElementById("pbar2");

    pbar1.style.display = "block";
    pbar1.style.float = "left";
    pbar1.style.marginRight = "2px";
    pbar1.style.width = "3px";
    pbar1.style.height = "8.5px";
    pbar1.style.marginTop = "0.5px";
    pbar1.style.background = songs[0];

    pbar2.style.display = "block";
    pbar2.style.float = "left";
    pbar2.style.width = "3px";
    pbar2.style.height = "8.5px";
    pbar2.style.marginTop = "0.5px";
    pbar2.style.background = songs[0];

    var xskip = document.getElementById("xskip");
    xskip.style.display = "block";
    xskip.style.cursor = "pointer";

    var sk1 = document.getElementById("sk1");
    var sk2 = document.getElementById("sk2");

    sk1.style.display = "block";
    sk1.style.float = "left";
    sk1.style.width = "0px";
    sk1.style.height = "0px";
    sk1.style.borderTop = "5px solid transparent";
    sk1.style.borderLeft = "5px solid " + songs[0];
    sk1.style.borderBottom = "5px solid transparent";

    sk2.style.display = "block";
    sk2.style.float = "left";
    sk2.style.width = "0px";
    sk2.style.height = "0px";
    sk2.style.borderTop = "5px solid transparent";
    sk2.style.borderLeft = "5px solid " + songs[0];
    sk2.style.borderBottom = "5px solid transparent";

    // check autoplay preference

    if ( songs[1] == "on" ) {
        xaudio.play();
        xplay.style.display = "none";
        xpause.style.display = "block";
    }
    else {}

   // play button function

    xplay.onclick = function() {
        this.style.display = "none";
        xpause.style.display = "block";
        xaudio.play();
        return;
    };

   // pause button function

    xpause.onclick = function() {
        this.style.display = "none";
        xplay.style.display = "block";
        xaudio.pause();
        return;
    };

    // skip button & endsong button function
    // list = 2 because songs[0] and songs[1] are colour and autoplay preferences

    var list = 2;

   function skipend() {
        if ( list == sq ) {
            xaudio.src = songs[2];
            xtrackname.innerHTML = tracks[2];
            list = 2;
            xaudio.play();
            xplay.style.display = "none";
            xpause.style.display = "block";
            return;
            }
        else {
            ++list;
            xaudio.src = songs[list];
            xtrackname.innerHTML = tracks[list];
            xaudio.play();
            xplay.style.display = "none";
            xpause.style.display = "block";
            return;
            }
    }

    // skip song function

    xskip.onclick = function() {
        skipend();
        };

   // autoplay next track on song-end function

    xaudio.onended = function() {
        skipend();
    };

  // end
    


};
