function addRainbow(object) {
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
  var rainbowtextstring = object.innerText;
  object.innerText = "";
  var len = rainbowtextstring.length;
  var freq = 2*Math.PI/len;
  
for (var i = 0; i < len; i++)
{
  var rd = Math.sin(freq*i + 0 * Math.PI / 3) * width + center;
  var gn = Math.sin(freq*i + 2 * Math.PI / 3) * width + center;
  var bl = Math.sin(freq*i + 4 * Math.PI / 3) * width + center;
  var rainbownode = document.createElement("font");
  rainbownode.innerHTML = rainbowtextstring[i];
  rainbownode.style = "color: "+RGB2Color(rd,gn,bl)+";";
  object.appendChild(rainbownode);
}
}
