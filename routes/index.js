var express = require('express');
var router = express.Router();

/* prefix "/api/v1" */
router.get('/', function (req, res) {
    res.json('hello');
});

module.exports = router;
