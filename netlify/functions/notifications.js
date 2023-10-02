const nodemailer = require('nodemailer');
const fetch = require("node-fetch");
const { schedule } = require("@netlify/functions");

const handler = async (event, context) => {

  const notificationResp = await fetch('https://dlep2zfh.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "notification"]{CCemails, subjectGerman, subjectSpanish, subject, daysToNotify, templateGerman, templateSpanish, template}')
  const notification = await notificationResp.json()

  const professionalsResp = await fetch('https://dlep2zfh.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "professional"]{email, validTo, language[]->{language}}')
  const professionals = await professionalsResp.json()

  const daysToNotify = notification.result[0].daysToNotify
  const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "cmsfbalance@gmail.com",
      pass: "tjfefvrssnwdqwip"
    }
  });

  for (const day of daysToNotify) {
    const professionalsToNotify = professionals.result.filter(professional => {
      if (professional.validTo === null) return false
      const validTo = new Date(professional.validTo)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const differenceInTime = validTo.getTime() - today.getTime()
      const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))

      return differenceInDays === day
    })

    console.log("Profesionales a notificar: " + professionalsToNotify.length + " para el día: " + day)

    for (const professional of professionalsToNotify) {
      let language = professional.language !== null ? professional.language[0]?.language : 'English'
      language = language.toLowerCase()

      const mailOptions = {
        to: professional.email,
        cc: notification.result[0].CCemails,
        subject: language === 'spanish' ? notification.result[0].subjectSpanish : language === 'german' ? notification.result[0].subjectGerman : notification.result[0].subject,
        text: language === 'spanish' ? notification.result[0].templateSpanish : language === 'german' ? notification.result[0].templateGerman : notification.result[0].template,
      };

      try {
        await client.sendMail(mailOptions);
        console.log('Email enviado con éxito a: ' + professional.email)
      } catch (error) {
        console.log(error);
        console.log('Fallo el envio de mail para el profesional: ' + professional.email);
      }

    }
  }

  return {
    statusCode: 200
  };
};

//exports.handler = schedule("@daily", handler);
exports.handler = schedule("*/5 * * * *", handler);

