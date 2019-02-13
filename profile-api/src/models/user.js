module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  return User;
};
