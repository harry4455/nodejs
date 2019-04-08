const express = require('express');
const app = express();
const router = express.Router();
const controller = require('./user.controller')



router.get('/users', controller.index);

router.get('/users/:id', controller.show);

router.delete('/users/:id', controller.destroy);

router.post('/users', controller.create);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = router;
