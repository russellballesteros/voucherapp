<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$email_to = $_POST['email_to'];
$email_to_name = $_POST['email_to_name'];
$subject = $_POST['subject'];
$mailbody = $_POST['mailbody'];
$gui_id = $_POST['gui_id'];
$authtoken = '24C5992A-9546-4728-9994-C2D37D79D48C';

$mail = new PHPMailer();

//Enable SMTP debugging. 
$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.hostinger.ph";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "webmaster@myfunenterprises.net";                 
$mail->Password = 'testpass';                           
//If SMTP requires TLS encryption then set it
/*$mail->SMTPSecure = "tls";   */                        
//Set TCP port to connect to 
$mail->Port = 587;                                   

$mail->From = "webmaster@myfunenterprises.net";
$mail->FromName = "Carrier Promo Voucher";

$mail->addAddress($email_to, $email_to_name);

$mail->isHTML(true);

$mail->Subject = $subject;
$mail->Body = $mailbody ;
$mail->AltBody = $mailbody;
if($gui_id==$authtoken){
	if(!$mail->send()) 
	{
	    echo "Mailer Error: " . $mail->ErrorInfo;
	} 
	else 
	{
	    echo "Message has been sent successfully";
	}
}
else{
	echo "Error in Mailer";
}
