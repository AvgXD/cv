<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Enviando </title>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
	<?php

$webmaster_email = "avg199@live.com.mx";


$feedback_page = "form.html";
$error_page = "error_message.html";
$thankyou_page = "thank_you.html";


$email = $_REQUEST['email_address'] ;
$asunto = $_REQUEST['comments'] ;
$nombre = $_REQUEST['first_name'] ;
$telefono = $_REQUEST['telefono'] ;
$msg = 
"Nombre: " . $nombre . "\r\n" . 
"Email: " . $email . "\r\n" .
"Telefono: " . $telefono . "\r\n" .  
"Asunto: " . $asunto ;


function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}


if (!isset($_REQUEST['email_address'])) {
header( "Location: $feedback_page" );
}

elseif (empty($nombre) || empty($email) || empty($telefono)) {
header( "Location: $error_page" );
}


elseif ( isInjected($email) || isInjected($nombre)  || isInjected($asunto)|| isInjected($telefono) ) {
header( "Location: $error_page" );
}

else {

	echo "
<script>    
  swal({ title: 'Éxito',
  icon: 'success',
 text: 'Correo Enviado',
 type: 'success'}).then(okay => {
   if (okay) {
    window.location.href = 'index.html';
  }
});
</script>";
}
?>
</body>
</html>


