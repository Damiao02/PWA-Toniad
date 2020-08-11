var express = require('express');

var router = express.Router();

router.get('/home', (req,res)=>{
    res.send('Home route');
});

module.exports = router;