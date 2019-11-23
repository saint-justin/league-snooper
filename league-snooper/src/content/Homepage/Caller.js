const https = require('https');

function makeCall(_url, _server, _summoner){
  let fullURL = `${_url}/${_server}/${_summoner}`;

  return new Promise(function(resolve, reject){
    https.get(fullURL, (response) => {
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