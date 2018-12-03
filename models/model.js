module.exports = function(sequelize, DataTypes) {
  var Model = sequelize.define("model", {
    model_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    exist: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Model;
};
