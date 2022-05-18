const express = require('express');
const router = express.Router();

router.get('/post', (req, res) => {
  console.log(res.data)
  res.send({test:'hi'})
});

module.exports = router;