function markPoint() {
  var x = Number(document.forms["pointx"]["myMessagex"].value);
  var y = Number(document.forms["pointx"]["myMessagey"].value);
  
  var canv = document.getElementById("myCanvas");
  var ctx = canv.getContext("2d");
  ctx.fillRect(x,y,1,1);
}
