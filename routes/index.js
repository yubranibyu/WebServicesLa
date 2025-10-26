const routes = require('express').Router();


const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.carolina);
routes.get('/leandro', lesson1controller.leandro);

module.exports = routes;
