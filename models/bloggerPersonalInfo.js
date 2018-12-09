
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
            }
            // acceptTerm: {
            //     type: DataTypes.STRING,
            //     defaultValue: "off"
            // }
        },
        {
            freezeTableName: true,
            tableName: "bloggerPersonalInfo"
        }
    );
    bloggerPersonalInfo.associate = function(models) {
        models.bloggerPersonalInfo.hasMany(models.blogs);
    };
    return bloggerPersonalInfo;
};
