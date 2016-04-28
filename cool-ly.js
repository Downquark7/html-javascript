document.body.appendChild(document.createElement("h1")).id="cool";
document.getElementById("cool").innerHTML = "Coo-ly Useless Wave-Thingy!";
document.body.appendChild(document.createElement("ul")).id="myList1";
document.body.appendChild(document.createElement("button")).id="button1";
document.getElementById("button1").innerHTML="Cool Button That Does The Same Thing Auto-Done At Least Twenty Times Per Second, <br/> Making It Practically Useless; You'd Have To SpamClick It To Make A Noteable Difference.";
document.getElementById("button1").onclick="myFunction()";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("button")).id="button2";
document.getElementById("button2").innerHTML="STOP IT PLZ I IS HAVING SEIZUREDSES";
document.getElementById("button2").onclick="clearInterval(lol)";

var v1 = 20; /*varies stuff*/
var v2 = 3; /*also varies stuff*/

var spacechar = "|";
var wave = [""];
for (i = 1; i < 200; i++) {
  wave[i] = spacechar + wave[i - 1];
}

for (i = 0; i < 200; i++) {
  wave[i] = wave[i].toString();
  wave[i] = wave[i].concat("|||/\\/\\/\\/\\/\\/\\/\\/\\/\\|||");
  for (o = i; o < 2 * v1 * v2; o++) {
    wave[i] = wave[i].concat(spacechar);
  }
}



for (i = 0; i < Math.PI * 2; i = i + 2 * Math.PI / v1) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(wave[parseInt(Math.sin(i) * v1 * v2 + v1 * v2)]);
  node.appendChild(textnode);
  document.getElementById("myList1").appendChild(node);
}

var lol = setInterval(myFunction, 120);

var ab = 0;

function myFunction() {
    changeee();
}


function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}

var rrr = 1;
var ggg = 1;
var bbb = 1;
var seqqq = 1;

function changecolorrr() {
  document.getElementById("myList1").appendChild(document.getElementById("myList1").firstChild);
  document.getElementById("myList1").lastChild.style.color = "#" + byte2Hex(rrr) + byte2Hex(ggg) + byte2Hex(bbb);
  document.getElementById("cool").style.color = "#" + byte2Hex(rrr) + byte2Hex(ggg) + byte2Hex(bbb);
  document.getElementById("button1").style.color = "#" + byte2Hex(rrr) + byte2Hex(ggg) + byte2Hex(bbb);
  document.getElementById("button2").style.color = "#" + byte2Hex(rrr) + byte2Hex(ggg) + byte2Hex(bbb);
}

function changeee() {
  var frequencyyy = 0.1;
  rrr = Math.sin(frequencyyy * seqqq) * 128 + 127;
  bbb = Math.sin(frequencyyy * seqqq + 2 * Math.PI / 3) * 128 + 127;
  ggg = Math.sin(frequencyyy * seqqq + 4 * Math.PI / 3) * 128 + 127;
  changecolorrr();
  seqqq++;
}
