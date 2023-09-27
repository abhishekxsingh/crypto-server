// const axios = require('axios');
const { v1: uuidv1 } = require('uuid');
const jwt = require('jsonwebtoken');
const {
  users: UsersModel,
} = require('../database');
const Helper = require('../utils/helper');

const createJWT = (data) => {
  const token = jwt.sign(data, 'dlksdlskdlskdjsl');

  return token;
};

const verifyJWT = (bearerToken) => {
  const token = bearerToken.split(' ')[1];
  const decode = jwt.verify(token, 'dlksdlskdlskdjsl');

  return decode;
};

const registration = async (payload) => {
  const {
    name, email, userName, password,
  } = payload;

  const data = {
    name, email, user_name: userName, password, public_id: uuidv1(),
  };

  const isUserExist = await UsersModel.findOne({
    where: { email },
  });

  if (!isUserExist) {
    const response = await UsersModel.create(data);

    if (response) {
      return { doc: { message: 'successful saved' } };
    }
  }

  return { doc: { message: 'user exists' } };
};

const login = async (payload) => {
  const { email, password } = payload;

  const isUserExist = await UsersModel.findOne({
    where: { email },
  });

  if (isUserExist) {
    const {
      dataValues: {
        password: savedPassword, name, user_name: userName, public_id: userId,
      },
    } = isUserExist;

    if (password === savedPassword) {
      const data = {
        name, userName, userId, email,
      };
      const token = createJWT(data);

      return { doc: { isLoggedIn: true, token, message: 'logged in successfully' } };
    }

    return { doc: { isLoggedIn: false, message: 'incorrect password!!' } };
  }

  return { errors: [ { key: 'username', messages: 'user or password incorrect' } ] };
};

const me = async (payload) => {
  const { email } = payload;

  const response = await UsersModel.findOne({
    attributes: [ 'user_name', 'email', 'public_id', 'name' ],
    where: { email },
  });

  if (response) {
    const { dataValues } = response;
    const doc = Helper.convertSnakeToCamel(dataValues);

    return { doc };
  }

  return { doc: {} };
};

module.exports = {
  login, registration, me, verifyJWT,
};
