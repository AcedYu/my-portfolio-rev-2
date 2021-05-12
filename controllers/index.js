const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

module.exports = router;