// module.exports = function(sequelize, DataTypes) {
//     let bloggerPersonalInfo = sequelize.define(
//         "bloggerPersonalInfo",
//         {
//             firstName: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     is: {
//                         args: [["^[a-z]+$", "i"]],
//                         msg: "Numbers not allowed."
//                     },
//                     min: {
//                         args: [[2]],
//                         msg: "Name cannot be too short."
//                     },
//                     max: {
//                         args: [[20]],
//                         msg: "Name cannot be to long."
//                     }
//                 }
//             },
//             lastName: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     is: {
//                         args: [["^[a-z]+$", "i"]],
//                         msg: "Numbers not allowed."
//                     },
//                     min: {
//                         args: [[2]],
//                         msg: "Name cannot be too short."
//                     },
//                     max: {
//                         args: [[20]],
//                         msg: "Name cannot be to long."
//                     }
//                 }
//             },
//             email: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     isEmail: true,
//                     isLowercase: true
//                 }
//             },
//             username: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     length: [5, 10]
//                 }
//             },
//             password: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     length: [7, 10]
//                 }
//             },
//             securityQuestion: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             answer: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     length: [1]
//                 }
//             },
//             acceptTerm: {
//                 type: DataTypes.BOOLEAN,
//                 defaultValue: false
//             }
//         },
//         {
//             freezeTableName: true,
//             tableName: "bloggerPersonalInfo"
//         }
//     );
//     bloggerPersonalInfo.associate = function(models) {
//         models.bloggerPersonalInfo.hasMany(models.blogs);
//     };
//     return bloggerPersonalInfo;
// };
