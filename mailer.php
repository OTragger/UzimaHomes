<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];

// Set your email address where you want to receive emails. 
$to = 'info@uzimahomes.com';
$subject = 'Contact Request From Uzima Website';
$headers = "From: " . $name . " <" . $email . "> \r\n";
$send_email = mail($to, $subject, $message, $headers);

echo ($send_email) ? 'success' : 'error';
?>