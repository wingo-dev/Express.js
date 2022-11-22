const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>it is shop router</h1>');
});

module.exports = router;