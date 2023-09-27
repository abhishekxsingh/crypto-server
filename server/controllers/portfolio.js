/* eslint-disable consistent-return */
const { Portfolio: PortfolioService } = require('../services');

const savedetails = async (req, res) => {
  try {
    const data = { userId: req.user.userId, ...req.body };
    const { doc } = await PortfolioService.savedetails(data);

    if (doc) {
      return res.postRequest();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

const getlist = async (req, res) => {
  try {
    const { doc } = await PortfolioService.getlist(req.body);

    if (doc) {
      return res.postRequest();
    }
  } catch (err) {
    return res.serverError();
  }
};
const getdetails = async (req, res) => {
  try {
    const data = { user_id: req.user.user_id };
    const { doc } = await PortfolioService.getdetails(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};

const deletedetails = async (req, res) => {
  try {
    const data = { userId: req.user.userId };
    const { doc } = await PortfolioService.deletedetails(data);

    if (doc) {
      return res.deleted();
    }

    return res.deleted();
  } catch (err) {
    return res.serverError();
  }
};

const updatedetails = async (req, res) => {
  try {
    const data = { publicId: req.user.publicIid };
    const { doc } = await PortfolioService.updatedetails(data);

    if (doc) {
      return res.postRequest();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

module.exports = {
  savedetails, deletedetails, getdetails, updatedetails, getlist,
};
