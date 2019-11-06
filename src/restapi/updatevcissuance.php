<?php
	include('init_conduraapp.php');
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);
	mysqli_select_db($con,$ndf_dbname);
	
	$vouch_code = $_POST['vouch_code'];
	$refno = $_POST['refno'];
	date_default_timezone_set('Asia/Manila');
	$datenow = date('Y-m-d H:i:s', time());



	$sql = "UPDATE `vc_issuance` SET `date_purchased`='".$datenow ."', `vc_status`='PUR', `affiliate_id`='".$refno."' where vouch_code = '".$vouch_code."'";


	echo $sql;
	$result = mysqli_query($con,$sql);
	if (!$result) {
   		echo 'Could not run query: ' . print_r(mysql_error());
    	exit;
	}

	

	mysqli_close($con);

?>

