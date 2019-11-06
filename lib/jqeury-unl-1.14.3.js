

/*localStorage.setItem('vc_initu_p',"aHR0cDovL2xvY2FsaG9zdC9jYXJyaWVyLXByb21vL3NyYy9yZXN0YXBpLw==");*/
localStorage.setItem('vc_initu_p',"aHR0cDovL3d3dy5jb25kdXJhYXBwLnBlLmh1L3NyYy9yZXN0YXBpLw==");
var sp = window.atob(localStorage.getItem('vc_initu_p'));
function initload(){
	if(prompt("Please enter VOUCHER UNLOCKING CODE")=='CVC1234'){
		var refno = prompt("Enter REFERENCE NO.");
		if(refno){
			var su = $(location).attr('href');
			var x = su.split('?');
			var y = x[1].split('=');
			var vc = window.atob(y[1]);
			console.log(vc);
			
		}
		else{
			alert('Reference No. is the receipt no. Please refresh the page.')
		}

	}
	else{
		alert('You need to enter unlocking code to activate voucher');
		return;
	}
	
}

