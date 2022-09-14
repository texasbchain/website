var express = require("express");
var router = express.Router();

router.use('/', (req, res, next) => {
    console.log("API Call Recieved.");
    next();
});

router.get('/', (req, res) => {
    res.send("Get Request for Members");
});

router.get('/member-details/:username/:walletaddress', (req,res) => {
    res.send("Get Request for Specific Member " + req.params.username + " " + req.params.walletaddress);
});

router.get('*', (req, res) => {
    res.send('Error 404: URL not found.');
})

module.exports = router;