const {
  login, registration, me, verifyJWT,
} = require('../controllers/auth');

module.exports = (router) => {
  router.post('/login', login);
  router.post('/registration', registration);
  router.get('/me', verifyJWT, me);
};
