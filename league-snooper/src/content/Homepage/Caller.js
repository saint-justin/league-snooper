const https = require('https');
function makeCall(_URL){
  return new Promise(function(resolve, reject){
    https.get(_URL, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      })

      response.on('end', () => {
        console.log(JSON.parse(data));
      })
    })
  })
}

module.exports = {makeCall : makeCall};