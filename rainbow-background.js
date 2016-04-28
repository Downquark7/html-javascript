
document.body.appendChild(document.createElement("progress")).id="progressr";
document.getElementById("progressr").value=”75”;
document.getElementById("progressr").max=”255”;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("progress")).id="progressg";
document.getElementById("progressg").value=”75”;
document.getElementById("progressg").max=”255”;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("progress")).id="progressb";
document.getElementById("progressb").value=”75”;
document.getElementById("progressb").max=”255”;

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}
var rrrrr = 1;
var ggggg = 1;
var bbbbb = 1;
var seqqqqq = 1;

function changecolorrrrr() {
  document.body.style.backgroundColor = "#" + byte2Hex(rrrrr) + byte2Hex(ggggg) + byte2Hex(bbbbbb);
  document.title = "#" + byte2Hex(rrrrrr) + byte2Hex(ggggg) + byte2Hex(bbbbbb);
  document.getElementById("progressr").value = rrrrrr;
  document.getElementById("progressg").value = ggggg;
  document.getElementById("progressb").value = bbbbb;
}
function changeeeee() {
  var frequencyyyyy = 0.001;
  rrrrr = Math.sin(frequencyyyyy * seqqqqq) * 128 + 127;
  bbbbb = Math.sin(frequencyyyyy * seqqqqq + 2 * Math.PI / 3) * 128 + 127;
  ggggg = Math.sin(frequencyyyyy * seqqqqq + 4 * Math.PI / 3) * 128 + 127;
  seqqqqq = seqqqqq + 1;
  changecolorrrrr();
};
setInterval('changeeeee()', 40);
