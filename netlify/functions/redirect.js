const axios = require("axios");

const GEOAPIFY_KEY = process.env.GATSBY_GEOAPIFY_API_KEY;

exports.handler = async (event, context) => {
  const ip = event.headers['x-nf-client-connection-ip'];
  try {
    const response = await axios.get(`https://api.geoapify.com/v1/ipinfo?ip=${ip}&apiKey=${GEOAPIFY_KEY}`);
    const language = response.data.country.languages[0].iso_code
    const websitesAvaliableLanguages = ["es", "de", "en"]
    if(websitesAvaliableLanguages.includes(language)) {
        return { statusCode: 302, headers: { Location: `/${language}` } }
    }
    return { statusCode: 302, headers: { Location: `/en` } };
  } catch (error) {
    return { statusCode: 302, headers: { Location: `/en` }};
  }
};