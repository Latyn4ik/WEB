function treg(a,b,c) {
	if((a+b)>c && (b+c)>a && (a+c)>b){return true;}
	else{return false;}
}


 console.log(treg(12,15,17));
 console.log(treg(3,4,5));
 console.log(treg(1,2,16));