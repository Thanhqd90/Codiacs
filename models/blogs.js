module.exports = function (sequelize, DataTypes) {
    var blogs = sequelize.define("blogs", {
        blog_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        blogger_id: {
            type: DataTypes.INTEGER,
            references: {
                model: bloggerPersonalInfo,
                key: 'blogger_id'
            }
        },
        createdAt: {
            type: DataTypes.DATETIME
        },
        updatedAt: {
            type: DataTypes.DATETIME
        },
        isVisible: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        mustHaves: {
            type: DataTypes.VARCHAR
        },
        stayAt: {
            type: DataTypes.VARCHAR
        },
        placesVisited: {
            type: DataTypes.VARCHAR
        },
        photos: {
            type: DataTypes.BLOB
        },
        experience: {
            type: DataTypes.TEXT
        },
        bestTime: {
            type: DataTypes.VARCHAR
        },
        countryVisited: {
            type: DataTypes.VARCHAR
        },
        cityVisited: {
            type: DataTypes.VARCHAR
        },
        category: {
            type: DataTypes.VARCHAR
        }
    }, {
        freezeTableName: true,
        tableName: "blogs"
    });
    return blogs;
};