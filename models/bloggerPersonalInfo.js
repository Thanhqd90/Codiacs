module.exports = function(sequelize, DataTypes) {
    var bloggerPersonalInfo = sequelize.define("bloggerPersonalInfo", {
      firstName: {
        type: DataTypes.String,
        allowNull: false,
        validate:{ 
          is:{ 
          args:[["^[a-z]+$",'i']],
          msg:"Numbers not allowed."
        },
        min: {
          args:[[2]],
          msg: "Name cannot be too short."
       },
       max:{
         args:[[20]],
         msg: "Name cannot be to long."
       }
      }
    },
    lastName: {
      type: DataTypes.String,
      allowNull: false,
      validate:{ 
        is:{ 
        args:[["^[a-z]+$",'i']],
        msg:"Numbers not allowed."
      },
      min: {
        args:[[2]],
        msg: "Name cannot be too short."
     },
     max:{
       args:[[20]],
       msg: "Name cannot be to long."
     }
    }
  },
  
      exist: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  
    });
  
    return bloggerPersonalInfo;
  };
  