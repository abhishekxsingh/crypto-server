const { v1: uuidv1 } = require('uuid');
const {
  portfolio: PortfolioModel,
  // /sequelize,
} = require('../database');
const Helper = require('../utils/helper');

const savedetails = async (payload) => {
  const { userId, ...newData } = payload;

  const data = {
    public_id: uuidv1(),
    created_by: uuidv1(),
    updated_by: uuidv1(),
    user_id: userId,
    ...newData,
  };

  const response = await PortfolioModel.create(data);

  if (response) {
    return { doc: { message: 'details saved successfully' } };
  }

  return { doc: { message: "details didn't saved" } };
};

const getdetails = async (payload) => {
  try {
    const { userId } = payload;

    const response = await PortfolioModel.findOne({
      attributes: [ 'public_id', 'name', 'coin_name', 'symbol', 'email', 'price_purchased', 'quantity' ],
      where: { public_id: userId },
    });

    if (response) {
      const { dataValues } = response;
      const doc = Helper.convertSnakeToCamel(dataValues);

      return { doc };
    }

    return { doc: {} };
  } catch (err) {
    return { doc: { message: 'data not found' } };
  }
};

const getlist = async (payload) => {
  try {
    const { userId } = payload;

    const response = await PortfolioModel.findAll({
      attributes: [ 'public_id', 'name', 'coin_name', 'symbol', 'email', 'price_purchased', 'quantity' ],
      where: { user_id: userId },
    });

    if (response) {
      const { dataValues } = response;
      const doc = Helper.convertSnakeToCamel(dataValues);

      return { doc };
    }

    return { doc: {} };
  } catch (err) {
    return { doc: { message: 'data not found' } };
  }
};

const deletedetails = async (payload) => {
  const { userId } = payload;

  const response = await PortfolioModel.destroy(
    { where: { user_id: userId } },
  );

  if (response) {
    return { doc: { message: 'deleted successfully' } };
  }

  return { doc: { message: 'details is not deleted' } };
};

const updatedetails = async (payload) => {
  const { email, ...data } = payload;

  const response = await PortfolioModel.update(
    data,
    { where: { email } },
  );

  if (response) {
    return { doc: { message: 'updated successfully' } };
  }

  return { doc: { message: "product didn't updated" } };
};

module.exports = {
  savedetails, deletedetails, getdetails, updatedetails, getlist,
};
