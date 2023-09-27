const get = async () => {
  const doc = {
    title: 'Harry porter',
    author: 'J.K. Rowling',
  };

  if (doc) {
    return { dSampleoc };
  }

  return { errors: [ { name: 'key-name', messages: 'Something went wrong!' } ] };
};

module.exports = {
  get,
};
