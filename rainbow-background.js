
function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}
var rbackground = 1;
var gbackground = 1;
var bbackground = 1;
var seqqqqq = 1;

function changecolorrrrr() {
  document.body.style.backgroundColor = "#" + byte2Hex(rbackground) + byte2Hex(gbackground) + byte2Hex(bbackground);
}

function changeeeee() {
  var frequencyyyyy = 0.01;
  rbackground = Math.sin(frequencyyyyy * seqqqqq) * 128 + 127;
  bbackground = Math.sin(frequencyyyyy * seqqqqq + 2 * Math.PI / 3) * 128 + 127;
  gbackground = Math.sin(frequencyyyyy * seqqqqq + 4 * Math.PI / 3) * 128 + 127;
  seqqqqq = seqqqqq + 1;
  changecolorrrrr();
};
setInterval(changeeeee, 40);
