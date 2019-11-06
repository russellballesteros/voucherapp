<?php
	include('init_conduraapp.php');
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);
	mysqli_select_db($con,$ndf_dbname);


	$vc_email = $_POST["vc_email"];
	$vouch_code = $_POST["vouch_code"];
	date_default_timezone_set('Asia/Manila');
	$date_confirmed = date('Y/m/d H:i:s', time());
	$date_exp = date('Y/m/d H:i:s', strtotime($date_confirmed . " + 7 days"));
	
	$sql = "insert into vc_issuance(`vouch_code`,`date_confirmed`,`date_expiration`,`date_purchased`,`vc_status`,`affiliate_id`,`ref_code`) values ('".$vouch_code."','".$date_confirmed."','".$date_exp."','','CON','','".$vc_email."')";



	$result = mysqli_query($con,$sql);
	if (!$result) {
   		echo 'Could not run query: ' . print_r(mysql_error());
    	exit;
	}

	/*$jsonData = array();
	while ($array = mysqli_fetch_assoc($result)){
    	$jsonData[]=$array;
	}

	echo json_encode($jsonData);*/

	mysqli_close($con);
	
?>

