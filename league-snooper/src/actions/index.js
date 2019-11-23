// All API calls should be routed through here
const base_url = `https://urs4qc0abj.execute-api.us-east-2.amazonaws.com/rgapi/`;

export const ApiCall = (_region, _summoner) => {
  let full_url = base_url + 'summoner/' + _region + _summoner;

  return {
    type: 'GET_SUMM',
    payload: full_url
  }
}