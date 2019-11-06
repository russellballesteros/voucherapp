<?php
	include('init_conduraapp.php');
	
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);	
	mysqli_select_db($con,$ndf_dbname);
	$vc_code = $_POST['vc_code'];
	$sql = "UPDATE vc_vouch SET vc_status = 'CON' where vouch_code = '".$vc_code."'";

	$result = mysqli_query($con,$sql);

	if (!$result) {
   		echo 'Could not run query: ' . print_r(mysql_error());
    	exit;
	}
	mysqli_close($con);
?>

