
var csa = '"style="position:absolute;top:0px;left:0px;width:16px;height:16px;font-family:Arial,sans-serif;font-size:16px;text-align:center;font-weight:bold;color:';
var csb = '"style="position:absolute;top:0px;left:0px;width:10px;height:10px;font-family:Arial,sans-serif;text-align:center;font-size:10px;color:';
var csc = '"style="position:absolute;top:0px;left:0px;width:10px;height:10px;font-family:Arial, sans-serif;text-align:center;font-size:';
if (document.getElementById && !document.layers) {
  dCol = '#ffffff';
  fCol = '#ffffff';
  sCol = '#ffffff';
  mCol = '#ffffff';
  hCol = '#ffffff';
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
  ofy = -7;
  ofx = -3;
  ofst = 70;
  tmr = null;
  vis = true;
  mouseY = 0;
  mouseX = 0;
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
      mouseY = e.pageY + ofst - msy;
      mouseX = e.pageX + ofst;
    } else {
      mouseY = e.clientY + ofst - msy;
      mouseX = e.clientX + ofst;
    }
    if (!vis) kill();
  }
  document.onmousemove = mouse;

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
      zy[0] = Math.round(dy[0] += ((mouseY) - dy[0]) * del);
      zx[0] = Math.round(dx[0] += ((mouseX) - dx[0]) * del);
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


function startTheClock() {
  changecolor();
}
