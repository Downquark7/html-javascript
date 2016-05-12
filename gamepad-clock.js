var csa = '"style="position:absolute;top:0px;left:0px;width:16px;height:16px;font-family:Arial,sans-serif;font-size:16px;text-align:center;font-weight:bold;color:';
var csb = '"style="position:absolute;top:0px;left:0px;width:10px;height:10px;font-family:Arial,sans-serif;text-align:center;font-size:10px;color:';
var csc = '"style="position:absolute;top:0px;left:0px;width:10px;height:10px;font-family:Arial, sans-serif;text-align:center;font-size:';
if (document.getElementById && !document.layers) {
  dCol = '#000000';
  fCol = '#000000';
  sCol = '#000000';
  mCol = '#000000';
  hCol = '#000000';
  del = 0.6;
  ref = 40;
  var ieType = (typeof window.innerWidth != 'number');
  var docComp = (document.compatMode);
  var ieRef = (ieType && docMod) ? document.documentElement : document.body;
  theDays = new Array("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");
  theMonths = new Array("JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER");
  date = new Date();
  day = date.getDate();
  year = date.getYear();
  if (year < 2000) year = year + 1900;
  tmpdate = " " + theDays[date.getDay()] + " " + day + " " + theMonths[date.getMonth()] + " " + year;
  D = tmpdate.split("");
  N = '3 4 5 6 7 8 9 10 11 12 1 2';
  N = N.split(" ");
  F = N.length;
  H = '...';
  H = H.split("");
  M = '....';
  M = M.split("");
  S = '.....';
  S = S.split("");
  siz = 40;
  eqf = 360 / F;
  eqd = 360 / D.length;
  han = siz / 5.5;
  ofy = 0;
  ofx = 0;
  ofst = 0;
  tmr = null;
  vis = true;
  helloy = 0;
  hellox = 0;
  dy = new Array();
  dx = new Array();
  zy = new Array();
  zx = new Array();
  tmps = new Array();
  tmpm = new Array();
  tmph = new Array();
  tmpf = new Array();
  tmpd = new Array();
  var sum = parseInt(D.length + F + H.length + M.length + S.length) + 1;
  for (i = 0; i < sum; i++) {
    dy[i] = 0;
    dx[i] = 0;
    zy[i] = 0;
    zx[i] = 0;
  }
  algn = new Array();
  for (i = 0; i < D.length; i++) {
    algn[i] = (parseInt(D[i]) || D[i] == 0) ? 10 : 9;
    document.write('<div id="_date' + i + csc + algn[i] + 'px;color:' + dCol + '">' + D[i] + '<\/div>');
    tmpd[i] = document.getElementById("_date" + i).style;
  }
  for (i = 0; i < F; i++) {
    document.write('<div id="_face' + i + csb + fCol + '">' + N[i] + '<\/div>');
    tmpf[i] = document.getElementById("_face" + i).style;
  }
  for (i = 0; i < H.length; i++) {
    document.write('<div id="_hours' + i + csa + hCol + '">' + H[i] + '<\/div>');
    tmph[i] = document.getElementById("_hours" + i).style;
  }
  for (i = 0; i < M.length; i++) {
    document.write('<div id="_minutes' + i + csa + mCol + '">' + M[i] + '<\/div>');
    tmpm[i] = document.getElementById("_minutes" + i).style;
  }
  for (i = 0; i < S.length; i++) {
    document.write('<div id="_seconds' + i + csa + sCol + '">' + S[i] + '<\/div>');
    tmps[i] = document.getElementById("_seconds" + i).style;
  }
  
  function onoff() {
    if (vis) {
      vis = false;
      document.getElementById("control").value = "Clock On";
    } else {
      vis = true;
      document.getElementById("control").value = "Clock Off";
      Delay();
    }
    kill();
  }

  function kill() {
    if (vis) document.onmousemove = mouse;
    else document.onmousemove = null;
  }

  function mouse(e) {
    var msy = (!ieType) ? window.pageYOffset : 0;
    if (!e) e = window.event;
    if (typeof e.pageY == 'number') {
      helloy = e.pageY + ofst - msy;
      hellox = e.pageX + ofst;
    } else {
      helloy = e.clientY + ofst - msy;
      hellox = e.clientX + ofst;
    }
    if (!vis) kill();
  }
setInterval("mouse()",40)

  function winDims() {
    winH = (ieType) ? ieRef.clientHeight : window.innerHeight;
    winW = (ieType) ? ieRef.clientWidth : window.innerWidth;
  }
  winDims();
  window.onresize = new Function("winDims()");

  function ClockAndAssign() {
    time = new Date();
    secs = time.getSeconds();
    sec = Math.PI * (secs - 15) / 30;
    mins = time.getMinutes();
    min = Math.PI * (mins - 15) / 30;
    hrs = time.getHours();
    hr = Math.PI * (hrs - 3) / 6 + Math.PI * parseInt(time.getMinutes()) / 360;
    for (i = 0; i < S.length; i++) {
      tmps[i].top = dy[D.length + F + H.length + M.length + i] + ofy + (i * han) * Math.sin(sec) + scrollY + "px";
      tmps[i].left = dx[D.length + F + H.length + M.length + i] + ofx + (i * han) * Math.cos(sec) + "px";
    }
    for (i = 0; i < M.length; i++) {
      tmpm[i].top = dy[D.length + F + H.length + i] + ofy + (i * han) * Math.sin(min) + scrollY + "px";
      tmpm[i].left = dx[D.length + F + H.length + i] + ofx + (i * han) * Math.cos(min) + "px";
    }
    for (i = 0; i < H.length; i++) {
      tmph[i].top = dy[D.length + F + i] + ofy + (i * han) * Math.sin(hr) + scrollY + "px";
      tmph[i].left = dx[D.length + F + i] + ofx + (i * han) * Math.cos(hr) + "px";
    }
    for (i = 0; i < F; i++) {
      tmpf[i].top = dy[D.length + i] + siz * Math.sin(i * eqf * Math.PI / 180) + scrollY + "px";
      tmpf[i].left = dx[D.length + i] + siz * Math.cos(i * eqf * Math.PI / 180) + "px";
    }
    for (i = 0; i < D.length; i++) {
      tmpd[i].top = dy[i] + siz * 1.5 * Math.sin(-sec + i * eqd * Math.PI / 180) + scrollY + "px";
      tmpd[i].left = dx[i] + siz * 1.5 * Math.cos(-sec + i * eqd * Math.PI / 180) + "px";
    }
    if (!vis) clearTimeout(tmr);
  }
  buffW = (ieType) ? 80 : 90;

  function Delay() {
    scrollY = (ieType) ? ieRef.scrollTop : window.pageYOffset;
    if (!vis) {
      dy[0] = -100;
      dx[0] = -100;
    } else {
      zy[0] = Math.round(dy[0] += ((helloy) - dy[0]) * del);
      zx[0] = Math.round(dx[0] += ((hellox) - dx[0]) * del);
    }
    for (i = 1; i < sum; i++) {
      if (!vis) {
        dy[i] = -100;
        dx[i] = -100;
      } else {
        zy[i] = Math.round(dy[i] += (zy[i - 1] - dy[i]) * del);
        zx[i] = Math.round(dx[i] += (zx[i - 1] - dx[i]) * del);
      }
      if (dy[i - 1] >= winH - 80) dy[i - 1] = winH - 80;
      if (dx[i - 1] >= winW - buffW) dx[i - 1] = winW - buffW;
    }
    tmr = setTimeout('Delay()', ref);
    ClockAndAssign();
  }
  window.onload = Delay;
}

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}
var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var seq = 1;

function changecolor() {
  for (i = 0; i < tmpf.length; i++) {
    tmpf[i].color = "#" + byte2Hex(r[i]) + byte2Hex(g[i]) + byte2Hex(b[i]);
  }
  for (i = 0; i < tmpd.length; i++) {
    tmpd[i].color = "#" + byte2Hex(r[tmpf.length + i]) + byte2Hex(g[tmpf.length + i]) + byte2Hex(b[tmpf.length + i]);
  }
  for (i = 0; i < tmph.length; i++) {
    tmph[i].color = "#" + byte2Hex(r[i]) + byte2Hex(g[i]) + byte2Hex(b[i]);
  }
  for (i = 0; i < tmpm.length; i++) {
    tmpm[i].color = "#" + byte2Hex(r[i]) + byte2Hex(g[i]) + byte2Hex(b[i]);
  }
  for (i = 0; i < tmps.length; i++) {
    tmps[i].color = "#" + byte2Hex(r[i]) + byte2Hex(g[i]) + byte2Hex(b[i]);
  }
}

function change() {
  var frequency = 0.1;
  for (i = 0; i < tmpf.length + tmpd.length; i++) {
    r[i] = Math.sin(frequency * seq + i * Math.PI / 6) * 128 + 127;
    b[i] = Math.sin(frequency * seq + i * Math.PI / 6 + 2 * Math.PI / 3) * 128 + 127;
    g[i] = Math.sin(frequency * seq + i * Math.PI / 6 + 4 * Math.PI / 3) * 128 + 127;
  }
  changecolor();
  seq = seq + 1;
}

function starteffect() {
  flash = setInterval("change()", 40);
}










/*
 * Gamepad API Test
 * Written in 2013 by Ted Mielczarek <ted@mielczarek.org>
 *
 * To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.
 *
 * You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
 */

hellox = 10.0
helloy = 10.0

var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};
var rAF = window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;
  var d = document.createElement("div");
  d.setAttribute("id", "controller" + gamepad.index);
  var t = document.createElement("h1");
  t.appendChild(document.createTextNode("gamepad: " + gamepad.id));
  d.appendChild(t);
  var b = document.createElement("div");
  b.className = "buttons";
  for (var i = 0; i < gamepad.buttons.length; i++) {
    var e = document.createElement("span");
    e.className = "button";
    //e.id = "b" + i;
    e.innerHTML = i;
    b.appendChild(e);
  }
  d.appendChild(b);
  var a = document.createElement("div");
  a.className = "axes";
  for (i = 0; i < gamepad.axes.length; i++) {
    e = document.createElement("progress");
    e.className = "axis";
    //e.id = "a" + i;
    e.setAttribute("max", "2");
    e.setAttribute("value", "1");
    e.innerHTML = i;
    a.appendChild(e);
  }
  d.appendChild(a);
  document.getElementById("start").style.display = "none";
  document.body.appendChild(d);
  rAF(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  var d = document.getElementById("controller" + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
}

function updateStatus() {
  scangamepads();
  for (j in controllers) {
    var controller = controllers[j];
    var d = document.getElementById("controller" + j);
    var buttons = d.getElementsByClassName("button");
    for (var i = 0; i < controller.buttons.length; i++) {
      var b = buttons[i];
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      if (typeof(val) == "object") {
        pressed = val.pressed;
        val = val.value;
      }
      var pct = Math.round(val * 100) + "%";
      b.style.backgroundSize = pct + " " + pct;
      if (pressed) {
        b.className = "button pressed";
      } else {
        b.className = "button";
      }
    }

    var axes = d.getElementsByClassName("axis");
    for (var i = 0; i < controller.axes.length; i++) {
      var a = axes[i];
      a.innerHTML = i + ": " + controller.axes[i].toFixed(4);
      a.setAttribute("value", controller.axes[i] + 1);
    }
    hellox = hellox + controller.axes[0]*10
    helloy = helloy + controller.axes[1]*10
  }
  rAF(updateStatus);
}

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (!(gamepads[i].index in controllers)) {
        addgamepad(gamepads[i]);
      } else {
        controllers[gamepads[i].index] = gamepads[i];
      }
    }
  }
}

if (haveEvents) {
  window.addEventListener("gamepadconnected", connecthandler);
  window.addEventListener("gamepaddisconnected", disconnecthandler);
} else if (haveWebkitEvents) {
  window.addEventListener("webkitgamepadconnected", connecthandler);
  window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
} else {
  setInterval(scangamepads, 500);
}
