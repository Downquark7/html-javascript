setInterval("change()", 40);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}
var r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
