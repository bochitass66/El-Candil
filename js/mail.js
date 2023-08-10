// document.getElementById("form").addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const recipient = document.getElementById("cf-email").value;
//     const subject = document.getElementById("cf-subject").value;
//     const messageContent = document.getElementById("cf-message").value;

//     try {
//         // Obtener token de acceso (debes implementar esta función según tu flujo de autenticación)
//         const accessToken = await getAccessToken();

//         // Detalles del mensaje
//         const message = {
//             subject: subject,
//             toRecipients: [
//                 {
//                     emailAddress: {
//                         address: recipient
//                     }
//                 }
//             ],
//             body: {
//                 content: messageContent,
//                 contentType: "text"
//             }
//         };

//         // Enviar mensaje utilizando la Outlook Mail REST API
//         await sendEmail(accessToken, message);

//         // Mostrar mensaje de éxito (puedes personalizar esto según tus necesidades)
//         const successMessage = document.createElement("h6");
//         successMessage.classList.add("text-success");
//         successMessage.textContent = "Su mensaje ha sido enviado correctamente.";
//         document.getElementById("form").appendChild(successMessage);
//     } catch (error) {
//         // Mostrar mensaje de error (puedes personalizar esto según tus necesidades)
//         const errorMessage = document.createElement("h6");
//         errorMessage.classList.add("text-danger");
//         errorMessage.textContent = "Hubo un error al enviar el mensaje.";
//         document.getElementById("form").appendChild(errorMessage);
//     }
// });

// // Función para obtener el token de acceso (debes implementar esta función según tu flujo de autenticación)
// async function getAccessToken() {
//     // Implementa la obtención del token de acceso aquí (puede ser a través de OAuth2 u otro método)
//     // Retorna el token de acceso
// }

// // Función para enviar un correo electrónico utilizando la Outlook Mail REST API
// async function sendEmail(accessToken, message) {
//     const url = "https://outlook.office365.com/api/v2.0/me/sendmail";
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(message)
//     });

//     if (!response.ok) {
//         throw new Error("Error al enviar el mensaje de correo electrónico");
//     }
// }
