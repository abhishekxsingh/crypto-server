module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      email: {
        type: DataTypes.STRING, unique: true, allowNull: false, index: true,
      },
      user_name: {
        type: DataTypes.STRING, unique: true, allowNull: false, index: true,
      },
      password: { type: DataTypes.STRING, unique: false, allowNull: true },
      created_by: { type: DataTypes.UUID },
      updated_by: { type: DataTypes.UUID },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },

  );

  return users;
};
