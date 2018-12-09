module.exports = function(sequelize, DataTypes) {
    let blogs = sequelize.define(
        "blogs",
        {
            title: {
                type: DataTypes.STRING,
                defaultValue: "My Experience"
            },
            isVisible: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            mustHaves: {
                type: DataTypes.STRING
            },
            stayAt: {
                type: DataTypes.STRING
            },
            placesVisited: {
                type: DataTypes.STRING
            },
            photos: {
                type: DataTypes.BLOB
            },
            experience: {
                type: DataTypes.TEXT
            },
            bestTime: {
                type: DataTypes.STRING
            },
            countryVisited: {
                type: DataTypes.STRING
            },
            cityVisited: {
                type: DataTypes.STRING
            },
            category: {
                type: DataTypes.STRING
            }
        },
        {
            freezeTableName: true,
            tableName: "blogs"
        }
    );
    blogs.associate = function(models) {
        blogs.belongsTo(models.bloggerPersonalInfo, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return blogs;
};
