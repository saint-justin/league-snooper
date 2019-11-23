const https = require('https');

// Base function all information is fed into for making call to the RGAPI
function makeCall(_url){
  //let fullURL = `${_url}/${_server}/${_summoner}`;

  return new Promise(function(resolve, reject){
    https.get(_url, (response) => {
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

const RGAPI_Reducer = (state={}, action) => {
    switch(action.type){
        case 'GET_SUMM':
            let data = makeCall(action.payload);
            return state + action.payload;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

export default RGAPI_Reducer;