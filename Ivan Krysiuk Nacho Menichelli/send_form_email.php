<?php
	// Asigno valores del formulario a variables
		
		$nombre = $_POST['name'];
		$subject = $_POST['subject'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		
	//	configura parametros,
	// 	lo arma y lo manda
		$cuerpoMail = '<h1> Nombre y Apellido </h1>  : ' . $name . '<br>' .  
			'Asunto: ' . $subject . '<br>' .
			'email: ' . $email . '<br>' .
			'mensaje: ' . $message;
		require("class.phpmailer.php");  
		$mail = new PHPMailer();  
		$mail->SMTPDebug  = 0;    
		$mail->Host  = "www.ignaciomenic.ml";  
		$mail->From  = $email;  
		$mail->FromName = $name;  
		$mail->Subject   = "Consulta de clientes desde la pagina web";  
		$mail->AddAddress('ignaciomenict@gmail.com');
	// sacar las 2 // para configurar y enviar email a mas de un destinatario: $mail->AddAddress('email2@prueba.com.ar');
		$mail->MsgHTML($cuerpoMail);  
		if(!$mail->Send()) {
				header('Location:confirmacion.html');
				} 
		else{ 
    // fuerza ir a la pagina principal luego de enviar el email
			header('Location:index.html');
		}
?>



