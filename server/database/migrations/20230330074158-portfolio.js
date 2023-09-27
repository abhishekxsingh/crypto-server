module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('portfolio', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    user_id: { type: DataTypes.STRING, unique: false, allowNull: false },
    email: { type: DataTypes.STRING, unique: false, allowNull: false },
    name: { type: DataTypes.STRING, unique: false, allowNull: false },
    coin_name: { type: DataTypes.STRING, unique: false, allowNull: true },
    symbol: { type: DataTypes.STRING, unique: false, allowNull: false },
    price_purchased: { type: DataTypes.FLOAT, unique: false, allowNull: false },
    quantity: { type: DataTypes.INTEGER, unique: false, allowNull: false },
    created_by: { type: DataTypes.UUID },
    updated_by: { type: DataTypes.UUID },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('portfolio'),
};
