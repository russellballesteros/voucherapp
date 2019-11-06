<?php
	include('init_conduraapp.php');
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);
	mysqli_select_db($con,$ndf_dbname);

	$vc_fname = $_POST["vc_fname"];
	$vc_lname = $_POST["vc_lname"];
	$vc_email = $_POST["vc_email"];
	$vc_contactno = $_POST["vc_contactno"];
	date_default_timezone_set('Asia/Manila');
	$vc_datereg = date('Y/m/d H:i:s', time());
	
	$sql = "insert into vc_customer(`cust_fname`,`cust_lname`,`cust_email`,`cust_contactno`,`cust_datereg`,`cust_status`) values ('".$vc_fname."','".$vc_lname."','".$vc_email."','".$vc_contactno."','".$vc_datereg."','1')";


	
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

