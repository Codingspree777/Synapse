const express = require('express');
const router = express.Router();
const axios = require('axios')
const apiConfig = require('../../apiKeys');
const oauth ='';

router.get('/user', (req, res) => {
  const getApi = async () => {
    const headers = {
        'X-SP-GATEWAY': apiConfig.clientKey,
        'X-SP-USER-IP': apiConfig.IPkey,
        'X-SP-USER' : oauth.concat(apiConfig.fingerprintKey)
        }
  try {
    return await axios.get('https://uat-api.synapsefi.com/v3.1/users/5d7beab7515fa700730acb82', {headers})
  } catch (error) {
    console.error(error)
  }
}

const seeResults = async () => {
  const results = await getApi()
  res.send(results.data);
}
seeResults()
});

module.exports = router;
