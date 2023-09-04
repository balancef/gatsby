const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {

    if (event.body == null) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Falta el body' }),
      };
    }

    const { name, email, subject, phone, msg, to, cc } = JSON.parse(event.body);

    const client = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "cmsfbalance@gmail.com",
        pass: "tjfefvrssnwdqwip"
      }
    });

    const emailBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NodeMailer Email Template</title>
        <style>
        body {
        	font-family: "Poppins", Helvetica, Arial, sans-serif;
        }
          .container {
            width: 100%;
            height: 100%;
            background-color: #f6f6f6a3;
            margin: 0 auto;
          }
          .email {
            margin: 0 auto;
            background-color: #fff;
          }
          .email-header {
            background-color: #fba83c;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
          }
          .email-body {
            padding: 20px; 
          }
          .email-body > div > span {
            	font-weight: 600;
            	color: #8e9091;
            	text-decoration: underline;
            }
          .email-body-title{
	   font-size: 1.5rem;
           color: #8e9091;
           font-weight: 600;
           margin-bottom: 1rem;        
          }
          .email-data {
            margin-bottom: 0.5rem;          
          }

          @media (min-width: 720px) {
            .email {
                width: 60%;
            }
        }
          
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email">
            <div class="email-header">
            <span>
              Nuevo contacto
            </span>
            </div>
            <div class="email-body">
              <div class="email-body-title">
              	Datos de contacto
              </div>
              <div class="email-data">
              	<span>Nombre:</span> ${name}
              </div>
              <div class="email-data">
              	<span>Email:</span> ${email}
              </div>
              <div class="email-data">
              	<span>Telefono:</span> ${phone}
              </div>
	            <div class="email-data">
              	<span>Consulta:</span> ${msg}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;

    const mailOptions = {
      to: to,
      cc: cc,
      subject: subject,
      text: "",
      html: emailBody,
    };

    await client.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from anywhere 
      },
      body: JSON.stringify({
        message: "Email enviado con éxito",
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Fallo el envio de mail' }),
    };
  }
};