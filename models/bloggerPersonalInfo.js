let bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
    let bloggerPersonalInfo = sequelize.define(
        "bloggerPersonalInfo",
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                    isLowercase: true
                }
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            securityQuestion: {
                type: DataTypes.STRING,
                allowNull: false
            },
            answer: {
                type: DataTypes.STRING,
                allowNull: false
            },
            acceptTerm: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            freezeTableName: true,
            tableName: "bloggerPersonalInfo"
        }
    );
    bloggerPersonalInfo.associate = function(models) {
        models.bloggerPersonalInfo.hasMany(models.blogs);
    };
    bloggerPersonalInfo.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    bloggerPersonalInfo.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });
    return bloggerPersonalInfo;
};
