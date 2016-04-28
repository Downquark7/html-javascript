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
