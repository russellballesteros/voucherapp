
/*localStorage.setItem('vc_initu_p',"aHR0cDovL2xvY2FsaG9zdC9jYXJyaWVyLXByb21vL3NyYy9yZXN0YXBpLw==");*/
localStorage.setItem('vc_initu_p',"aHR0cDovL3d3dy5jb25kdXJhYXBwLnBlLmh1L3NyYy9yZXN0YXBpLw==");
var sp = window.atob(localStorage.getItem('vc_initu_p'));
function initload(){
	
}

var Vconsumer = function(fname,lname,email,contactno){
	this.fname = fname;
	this.lname = lname;
	this.email= email;
	this.contactno = contactno;
}

Vconsumer.prototype.addConsumer = function(){
	var fn = this.fname;
	var ln = this.lname;
	var em = this.email;
	var cn = this.contactno;
	var y = this;
	console.log(cn);
	var addmod = Backbone.Model.extend({});
	var addcoll = Backbone.Collection.extend({
		model: addmod,
		url: sp + "insertcust.php",
		parse: function(data){							
		return data;								
		}
	});
	var goadd = new addcoll();
	goadd.fetch({
		data:{vc_fname:fn,vc_lname:ln,vc_email:em,vc_contactno:cn},
		type:'POST',
		statusCode:{
			200:function(response){							
				document.getElementById('divform').innerHTML='<h3>Thank you! Please check your email for confirmation.</h3>';
				y.sendEmail(em);
				return;
			}
		}
	});
},
Vconsumer.prototype.validateEmail = function(){
	var vc_email = this.email;
	var x = this;
	var addmod = Backbone.Model.extend({});
	var addcoll = Backbone.Collection.extend({
		model: addmod,
		url: sp + "checkemail.php",
		parse: function(data){							
		return data;								
		}
	});
	var goadd = new addcoll();
	goadd.fetch({
		data:{vc_email:vc_email},
		type:'POST',
		statusCode:{
			200:function(response){				
				
				if(response.length<=0){
					x.addConsumer();
				}
				else{
					alert('This e-mail has already been registered.');
				}
				
			}
		}
	});
},
Vconsumer.prototype.sendEmail = function(vc_email){
	var subj = "Verify your E-mail";
	var msgbody = "<b>Confirm your e-mail address to claim your Php 1,000 off voucher.</b><br/><br/>Thank you for registering on our promo using this e-mail '"+vc_email+"'<br/><br/>To verify your email, <a href='http://www.conduraapp.pe.hu/src/confirm/?conem="+window.btoa(vc_email)+"'>click here</a>.<br/><br/><br/> If you did not make this registration, please ignore this email.<br/>Sincerely,<br/>Carrier";
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
		data:{email_to:vc_email,email_to_name:vc_email,subject:subj,mailbody:msgbody,gui_id:'24C5992A-9546-4728-9994-C2D37D79D48C'},
		type:'POST',
		statusCode:{
			200:function(response){			
				
				
				
			}
		}
	});
}

function submitData(){
	$('form[id="inputform"]').validate({
	  rules: {
	    fname: 'required',
	    lname: 'required',
	    email: {
	      required: true,
	      email: true,
	    }
	    
	  },
	  messages: {
	    fname: 'This field is required',
	    lname: 'This field is required',
	    user_email: 'Enter a valid email',
	   
	  },
	  submitHandler: function(form) {

	  	if($('#chkAgree').is(":checked")){
	  		var consumer = new Vconsumer($('#vc_txtFname').val(),$('#vc_txtLname').val(),$('#vc_txtEmail').val(),$('#vc_txtContactno').val());
	    	consumer.validateEmail();
	  	}
	  	else{
	  		alert('You have to agree to the Terms and Conditions of this promo.');
	  		return;
	  	}
	    
	  }
	});
}

