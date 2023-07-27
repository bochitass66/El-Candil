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
