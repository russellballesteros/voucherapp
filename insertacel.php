<?php
	include('init_setup.php');
	$con = mysqli_connect($ndf_host,$ndf_username,$ndf_pass);
	mysqli_select_db($con,$ndf_dbname);

	$acel_rate = $_POST['acel_rate'];
	$acel_name = $_POST['acel_name'];
	$adj_price = $_POST['adj_rate'];
	$dailyrate = $_POST['dailyrate'];
	$hourlyrate = $_POST['hourlyrate'];


	$sql = "INSERT INTO acelrates (acel_name,acel_rate,adj_price,dailyrate,hourlyrate) VALUES ('".$acel_name."','".$acel_rate."','".$adj_price."','".$dailyrate."','".$hourlyrate."')";

	
	echo $sql;
	$result = mysqli_query($con,$sql);
	if (!$result) {
   		echo 'Could not run query: ' . print_r(mysql_error());
    	exit;
	}

	mysqli_close($con);
	
?>

