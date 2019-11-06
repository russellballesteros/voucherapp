<?php
	include('init_conduraapp.php');
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);
	mysqli_select_db($con,$ndf_dbname);
	
	$vouch_code = $_POST['vouch_code'];
	date_default_timezone_set('Asia/Manila');
	$datenow = date('Y-m-d H:i:s', time());



	$sql = "SELECT * FROM `vc_issuance` WHERE `vouch_code`='".$vouch_code."'";



	$result = mysqli_query($con,$sql);
	if (!$result) {
   		echo 'Could not run query: ' . print_r(mysql_error());
    	exit;
	}

	$jsonData = array();
	while ($array = mysqli_fetch_assoc($result)){
    	$jsonData[]=$array;
	}
	
	$dateexp = $jsonData[0]['date_expiration'];
	echo $datenow;
	echo $dateexp;
	if($datenow>$dateexp){
		echo "EXPIRED";
	}
	else{
		echo "PURCHASE";
	}

	mysqli_close($con);

?>

