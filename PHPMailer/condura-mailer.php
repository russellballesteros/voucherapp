<?php

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
$mail->Host = "mail5009.smarterasp.net";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "support@apps.freyfil.com.ph";                 
$mail->Password = '$upp0rt321';                           
//If SMTP requires TLS encryption then set it
/*$mail->SMTPSecure = "tls";   */                        
//Set TCP port to connect to 
$mail->Port = 8889;                                   

$mail->From = "support@apps.freyfil.com.ph";
$mail->FromName = "Timekeeping";

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
