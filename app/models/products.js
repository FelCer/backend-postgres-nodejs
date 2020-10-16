module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define('Product', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        available: Sequelize.BOOLEAN,
        bestSeller: Sequelize.BOOLEAN,
        price: Sequelize.STRING,
        img: Sequelize.STRING,
        description: Sequelize.STRING,
        categories: Sequelize.ARRAY(Sequelize.INTEGER)
    }, {
        timestamp: false
    });

    return Products;
};
