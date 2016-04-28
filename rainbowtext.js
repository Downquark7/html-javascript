function byte2Hex(n)
{
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b)
{
  return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

var center = 128;
var width = 127;
var len = 100;
var freq = 2*Math.PI/len;
var fontsizepx = "16";
var rainbowtextstring = "Hello World! ";

for (var i = 0; i < len; ++i)
{
  var rd = Math.sin(freq*i + 0 * Math.PI / 3) * width + center;
  var gn = Math.sin(freq*i + 2 * Math.PI / 3) * width + center;
  var bl = Math.sin(freq*i + 4 * Math.PI / 3) * width + center;
  var rainbownode = document.createElement("font");
  rainbownode.innerHTML = rainbowtextstring;
  rainbownode.style = "font-size: "+fontsizepx+"; color: "+RGB2Color(rd,gn,bl)+";";
  document.body.appendChild(rainbownode);
}
