const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.json('All your references')
});


module.exports = routes;