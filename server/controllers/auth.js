/* eslint-disable consistent-return */
const { Auth: AuthService } = require('../services');

const registration = async (req, res) => {
  const { doc } = await AuthService.registration(req.body);

  if (doc) {
    return res.send({
      message: 'registration successful',
    });
  }
};

const login = async (req, res) => {
  const { doc } = await AuthService.login(req.body);

  if (doc) {
    return res.send({
      ...doc,
      message: 'login successful',
    });
  }

  return res.unAuthorized();
};

const verifyJWT = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const response = await AuthService.verifyJWT(authorization);

    if (response) {
      req.user = response;

      return next();
    }

    return res.unAuthorized();
  } catch (err) {
    return res.unAuthorized();
  }
};

const me = async (req, res) => {
  try {
    const data = { email: req.user.email };
    const { doc } = await AuthService.me(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};

module.exports = {
  login, registration, me, verifyJWT,
};
