module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: false, allowNull: false },
    email: {
      type: DataTypes.STRING, unique: true, allowNull: false, index: true,
    },
    user_name: {
      type: DataTypes.STRING, unique: true, allowNull: true, index: true,
    },
    password: {
      type: DataTypes.STRING, unique: false, allowNull: true,
    },
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
  down: (queryInterface) => queryInterface.dropTable('users'),
};
