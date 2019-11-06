<?php
	include('init_conduraapp.php');
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);
	mysqli_select_db($con,$ndf_dbname);
	
	$vc_email = $_POST['vc_email'];
	$sql = "SELECT * FROM `vc_customer` WHERE `cust_email`='".$vc_email."'";



	$result = mysqli_query($con,$sql);
	if (!$result) {
   		echo 'Could not run query: ' . print_r(mysql_error());
    	exit;
	}

	$jsonData = array();
	while ($array = mysqli_fetch_assoc($result)){
    	$jsonData[]=$array;
	}
	
	echo json_encode($jsonData);

	mysqli_close($con);

?>

