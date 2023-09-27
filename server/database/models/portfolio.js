module.exports = (sequelize, DataTypes) => {
  const portfolio = sequelize.define(
    'portfolio',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      user_id: { type: DataTypes.STRING, unique: true, allowNull: false },
      email: { type: DataTypes.STRING, unique: false, allowNull: false },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      coin_name: { type: DataTypes.STRING, unique: true, allowNull: true },
      symbol: { type: DataTypes.STRING, unique: true, allowNull: false },
      price_purchased: { type: DataTypes.FLOAT, unique: true, allowNull: false },
      quantity: { type: DataTypes.INTEGER, unique: true, allowNull: false },
      created_by: { type: DataTypes.UUID },
      updated_by: { type: DataTypes.UUID },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },

  );

  return portfolio;
};
