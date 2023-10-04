const fetch = require("node-fetch");
const { schedule } = require("@netlify/functions");

const handler = async (event, context) => {

    await fetch(
        'https://api.netlify.com/build_hooks/651b10dc7c166c6a43012524',
        {
            method: 'POST',
        }
    )
    
    return {
        statusCode: 200
    };
};

exports.handler = schedule("@weekly", handler);

