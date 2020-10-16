module.exports = (sequelize, Sequelize) => {
    const Purchase = sequelize.define('Purchase', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dateCreate: Sequelize.DATE,
        customer: Sequelize.INTEGER,
        products: Sequelize.ARRAY(Sequelize.JSON)
    });

    return Purchase;
};