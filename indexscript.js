function generateStr(x){
	for(var xy = 0;xy<=x;xy++){		
		var r = Math.random().toString(36).substring(2);
		document.write(r);
		document.write("<br/>");
	}
}