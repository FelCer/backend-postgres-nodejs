var Sequelize = require('sequelize');

const sequelize = new Sequelize('company', 'postgres', 'test123', {
    host: 'localhost',
    dialect: 'postgres', /*'postgres' | 'mariadb' | 'sqlite' | 'myslq' | 'mssql  '*/
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Categories = require("../app/models/categories.js")(sequelize, Sequelize);
db.Products = require("../app/models/products.js")(sequelize, Sequelize);
db.Purchase = require("../app/models/purchase.js")(sequelize, Sequelize);

db.Categories.hasMany(db.Products, { foreingKey: 'categories', sourceKey: 'id' });
db.Products.belongsTo(db.Categories, { foreingKey: 'categories', sourceKey: 'id' });

db.Purchase.hasMany(db.Products, { foreingKey: 'products', sourceKey: 'id' });
db.Products.belongsTo(db.Purchase, { foreingKey: 'products', sourceKey: 'id' });

db.sequelize.sync();

module.exports = db;