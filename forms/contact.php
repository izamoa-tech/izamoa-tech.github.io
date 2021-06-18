<?php
extract($_POST);

$to      = 'servicenet@sayhello.mg';
$subject = $subject . "  -  " . $name;
$headers = 'From: ' . $email. "\r\n" .
  'Reply-To: ' . $email . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);


$headers_back = 'From: ' . 'Say_Hello <servicenet@sayhello.mg>'. "\r\n" .
    'Reply-To: ' . 'servicenet@sayhello.mg' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$message_back = "Your request has been taken into account and we will get back to you within 2 working days.". "\r\n" .
    "As a reminder, here is the subject of your request: " . "\r\n" . "\r\n" . "<<\r\n" .$message. "\r\n>>";

if ($mailconf=="mailconf"){
    mail($email, $subject, $message_back, $headers_back);
}