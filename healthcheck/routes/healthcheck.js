const express = require('express');
const router = express.Router();

router.get('/liveness', (req, res) => {
    res.json({
        status: 'OK',
    });
});
router.get('/readiness', async (req, res) => {

    res.json({
        status: 'OK',
    });
});


module.exports = router;