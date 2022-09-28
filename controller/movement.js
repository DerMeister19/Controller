const express = require('express');
const router = express.Router();

router.post('/action', (req, res) => {

    const { action } = req.body;

    switch(action) {
        case 1: 
          console.log('up');
          break;
        case 2: console.log('left');
          break;
        case 3: console.log('right');
          break;
        case 4: console.log('down');
          break;
        case 5: console.log('action');
          break;
    }




});

module.exports = router;