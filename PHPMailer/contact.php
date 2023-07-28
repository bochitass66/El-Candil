<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'user@example.com';                     //SMTP username
    $mail->Password   = 'secret';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
    $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    //Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>


<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if (isset($_POST['email']) && isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['message']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    // Detect & prevent header injections
    $test = "/(content-type|bcc:|cc:|to:)/i";
    foreach ($_POST as $key => $val) {
        if (preg_match($test, $val)) {
            exit; // Puedes mostrar un mensaje de error aquí si lo deseas.
        }
    }

    // Función para proteger los encabezados del correo
    function safeEncode($string)
    {
        return mb_encode_mimeheader($string, 'UTF-8', 'B', "\r\n");
    }

    $to = "carlosidestefanis@gmail.com"; // Dirección de correo destinatario (reemplazar con la dirección deseada)
    $subject = safeEncode($_POST['subject']);
    $message = $_POST['message'];

    // Headers del correo
    $headers = 'From: ' . safeEncode($_POST["name"]) . ' <' . $_POST["email"] . '>' . "\r\n" .
        'Reply-To: ' . $_POST["email"] . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Envío del correo
    if (mail($to, $subject, $message, $headers)) {
        // Envío exitoso, puedes redirigir a una página de agradecimiento o mostrar un mensaje de éxito aquí.
        echo "El correo se ha enviado correctamente.";
    } else {
        // Error al enviar el correo, muestra un mensaje de error o realiza alguna otra acción.
        echo "Ha ocurrido un error al enviar el correo.";
    }
}
?>
