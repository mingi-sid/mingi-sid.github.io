"use strict";
function markPoint() {
  var x = Number(document.forms["point"]["myMessagex"].value);
  var y = Number(document.forms["point"]["myMessagey"].value);
  
  var canv = document.getElementById("myCanvas");
  var ctx = canv.getContext("2d");
  ctx.fillRect(x,y,1,1);
}
function generateGalaxyGroup() {
  var probMorphTypeMap = [ {type:"E",   prob:0.19},
						   {type:"S",   prob:0.19},
						   {type:"SB",  prob:0.37},
						   {type:"S0",  prob:0.18},
						   {type:"Irr", prob:0.07} ];
  var cnt;
  for(cnt = 0; cnt < 600; cnt++) {
	var randomNum = Math.random();
	var morphType;
	//I was lazy to use cumulative probability
	//Choose morphType based on probability of each
	for(probMorphType in probMorphTypeMap) {
	  randomType -= probMorphType.prob;
	  if(randomType < 0) {
		morphType = probMorphType.type;
		break;
	  }
	}
  }
}