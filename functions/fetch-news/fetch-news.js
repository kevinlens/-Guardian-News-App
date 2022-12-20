// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

// --> ?name="bob" = event.queryStringParameters.name
// --> ?name="bob"&last_name = event.queryStringParameters.last_name

// --> ?access_key="123"&query=1234,1234&forecast_days=4

const axios = require('axios')

const handler = async (event) => {
  const { currentDate, category } = event.queryStringParameters;
  
  const API_SECRET = process.env.API_SECRET
  const url = `https://content.guardianapis.com/${category}?search?from-date=${currentDate}&page-size=10&show-fields=body%2Cthumbnail%2CshouldHideAdverts%2Cheadline%2C&show-elements=image&show-blocks=all&show-tags=contributor&api-key=3b31bf19-c2c5-4f56-8f36-571feb78114e`;

  try {
    const { data } = await axios.get(url)

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  }catch(error){
    const {status, statusText, headers, data} = error.response;
    return{
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }
