

/*localStorage.setItem('vc_initu_p',"aHR0cDovL2xvY2FsaG9zdC9jYXJyaWVyLXByb21vL3NyYy9yZXN0YXBpLw==");*/
localStorage.setItem('vc_initu_p',"aHR0cDovL3d3dy5jb25kdXJhYXBwLnBlLmh1L3NyYy9yZXN0YXBpLw==");
var sp = window.atob(localStorage.getItem('vc_initu_p'));
function initload(){
	if(prompt("Please enter VOUCHER UNLOCKING CODE")=='CVC1234'){		
		
		var su = $(location).attr('href');
		var x = su.split('?');
		var y = x[1].split('=');
		var vc = window.atob(y[1]);
		console.log(vc);
		var addmod = Backbone.Model.extend({});
		var addcoll = Backbone.Collection.extend({
			model: addmod,
			url: sp + "verifyvc.php",
			parse: function(data){							
			return data;								
			}
		});
		var goadd = new addcoll();
		goadd.fetch({
			data:{vouch_code:vc},
			type:'POST',
			statusCode:{
				200:function(response){			
					console.log(response);
					
					if(response=="3"){
						var refcode=prompt("Voucher is valid, please enter a Transaction Reference No.");
						insertrefcode(refcode,vc);

					}
					else{
						document.write("Voucher is expired.");
						return;
					}
					
				}
			}
		});

		
	}
	else{
		alert('You need to enter unlocking code to activate voucher');
		return;
	}
	
}

function insertrefcode(refcode,vc){
	var addmod = Backbone.Model.extend({});
		var addcoll = Backbone.Collection.extend({
			model: addmod,
			url: sp + "updatevcissuance.php",
			parse: function(data){							
			return data;								
			}
		});
		var goadd = new addcoll();
		goadd.fetch({
			data:{vouch_code:vc,refno:refcode},
			type:'POST',
			statusCode:{
				200:function(response){			
					document.write("Thank you, transaction was successful!");
					return;
					
				}
			}
		});
}