module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define('Categorie', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING
    });

    return Categories;
};