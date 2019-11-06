<?php
	include('init_conduraapp.php');
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);
	mysqli_select_db($con,$ndf_dbname);
	
	
	$sql = "SELECT * FROM `vc_vouch` WHERE `vc_status`='' limit 0,1";



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

