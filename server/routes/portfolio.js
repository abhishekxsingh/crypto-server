const {
  savedetails, deletedetails, getdetails, updatedetails, getlist,
} = require('../controllers/portfolio');
const { verifyJWT } = require('../controllers/auth');

module.exports = (router) => {
  router.get('/get', verifyJWT, getdetails);
  router.post('/save', verifyJWT, savedetails);
  router.post('/update', verifyJWT, updatedetails);
  router.delete('/delete', verifyJWT, deletedetails);
  router.get('/list', verifyJWT, getlist);
};
