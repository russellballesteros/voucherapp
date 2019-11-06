
/*localStorage.setItem('vc_initu_p',"aHR0cDovL2xvY2FsaG9zdC9jYXJyaWVyLXByb21vL3NyYy9yZXN0YXBpLw==");*/
localStorage.setItem('vc_initu_p',"aHR0cDovL3d3dy5jb25kdXJhYXBwLnBlLmh1L3NyYy9yZXN0YXBpLw==");
var sp = window.atob(localStorage.getItem('vc_initu_p'));
function initload(){
	var su = $(location).attr('href');
	verifyconfirmed(su);
	
}

function verifyconfirmed(su){
	var x = su.split('?');
	var y = x[1].split('=');
	var addmod = Backbone.Model.extend({});
	var addcoll = Backbone.Collection.extend({
		model: addmod,
		url: sp + "verifyemail.php",
		parse: function(data){							
		return data;								
		}
	});
	var goadd = new addcoll();
	goadd.fetch({
		data:{vc_email:window.atob(y[1])},
		type:'POST',
		statusCode:{
			200:function(response){		
				if(response.length<=0){
					document.write('Please contact administrator.');
				}
				else{
					if(response[0].cust_status!="2"){
						document.getElementById('txtStatus').innerHTML="Your registration has been verified! You will now receive an e-mail on how to claim your voucher. Thank you!";
						changestat(window.atob(y[1]));
					}
					else{
						document.getElementById('txtStatus').innerHTML="Email has already been verified! Please check your inbox.";
						return;
					}
					
				}
				
			}
		}
	});
}

function changestat(email){

	var addmod = Backbone.Model.extend({});
	var addcoll = Backbone.Collection.extend({
		model: addmod,
		url: sp + "updatecuststat.php",
		parse: function(data){							
		return data;								
		}
	});
	var goadd = new addcoll();
	goadd.fetch({
		data:{vc_email:email},
		type:'POST',
		statusCode:{
			200:function(response){		
				issuevc(email);
				
			}
		}
	});

}

function issuevc(em){
	var addmod = Backbone.Model.extend({});
	var addcoll = Backbone.Collection.extend({
		model: addmod,
		url: sp + "getvc.php",
		parse: function(data){							
		return data;								
		}
	});
	var goadd = new addcoll();
	goadd.fetch({
		
		type:'GET',
		statusCode:{
			200:function(response){		
				var addmod2 = Backbone.Model.extend({});
				var addcoll2 = Backbone.Collection.extend({
					model: addmod2,
					url: sp + "updatevcstat.php",
					parse: function(data){							
					return data;								
					}
				});
				var goadd2 = new addcoll2();
				goadd2.fetch({
					data:{vc_code:response[0].vouch_code},
					type:'POST',
					statusCode:{
						200:function(response2){		
								
							releasevc(em,response[0].vouch_code);
						}
					}
				});
				
			}
		}
	});
}

function releasevc(em,vc){
	var addmod3 = Backbone.Model.extend({});
	var addcoll3 = Backbone.Collection.extend({
		model: addmod3,
		url: sp + "issue_vc.php",
		parse: function(data){							
		return data;								
		}
	});
	var goadd3 = new addcoll3();
	goadd3.fetch({
		data:{vouch_code:vc,vc_email:em},
		type:'POST',
		statusCode:{
			200:function(response2){		
				sendfnemail(em,vc);
			}
		}
	});
}

function sendfnemail(em,vc){
	var subj = "Php 1,000 Off Voucher";
	var msgbody = "<b>Unlock Your Free Voucher.</b><br/><br/>Go to your nearest dealer to unlock the code by a product consultant. <br/><br/>Click this link, <a href='http://www.conduraapp.pe.hu/src/unlock/?vc="+window.btoa(vc)+"'>UNLOCK</a>.<br/><br/><br/> If you did not make this registration, please ignore this email.<br/>Sincerely,<br/>Carrier";
	var addmod = Backbone.Model.extend({});
	var addcoll = Backbone.Collection.extend({
		model: addmod,
		url:"http://www.myfunenterprises.net/PHPMailer/carrier-mailer.php",
		parse: function(data){							
		return data;								
		}
	});
	var goadd = new addcoll();
	goadd.fetch({
		data:{email_to:em,email_to_name:em,subject:subj,mailbody:msgbody,gui_id:'24C5992A-9546-4728-9994-C2D37D79D48C'},
		type:'POST',
		statusCode:{
			200:function(response){			
				
				
				
			}
		}
	});
}