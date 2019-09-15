const express = require('express');
const router = express.Router();
const axios = require('axios')
const apiConfig = require('../../apiKeys');

let oauth ='';

router.get('/user', (req, res) => {
  const getApi = async () => {
    const headers = {
        'X-SP-GATEWAY': apiConfig.clientKey,
        'X-SP-USER-IP': apiConfig.IPkey,
        'X-SP-USER' : oauth.concat(apiConfig.fingerprintKey)
        }
  try {
    return await axios.get('https://uat-api.synapsefi.com/v3.1/users/5d7be9bf7ac0170072e22b4b', {headers})
  } catch (error) {
    console.error(error)
  }
}

const seeResults = async () => {
  const results = await getApi()
  res.send(results.data);
  getoAuth(results.data.refresh_token)
}
const getoAuth = (str) => {
  const headers = {
    'X-SP-GATEWAY': apiConfig.clientKey,
    'X-SP-USER-IP': apiConfig.IPkey,
    'X-SP-USER' : oauth.concat(apiConfig.fingerprintKey)
    }
  axios.post('https://uat-api.synapsefi.com/v3.1/oauth/5d7be9bf7ac0170072e22b4b', {'refresh_token': str}, {headers})
  .then(function (response) {
  oauth = response.data.oauth_key;
  console.log(oauth);
  })
  .catch(function (error) {
    console.log(error);
  });
}
seeResults()
});

router.get('/view', (req, res, next) => {
  const headers = {
    'X-SP-GATEWAY': apiConfig.clientKey,
    'X-SP-USER-IP': apiConfig.IPkey,
    'X-SP-USER' : oauth.concat(apiConfig.fingerprintKey)
    }
  
})
console.log(oauth);

module.exports = router;
