module.exports = (sequelize, DataTypes) => {
  const coins = sequelize.define(
    'coins',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      symbol: { type: DataTypes.STRING, unique: true, allowNull: false },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      created_by: { type: DataTypes.UUID },
      updated_by: { type: DataTypes.UUID },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },

  );

  return coins;
};
