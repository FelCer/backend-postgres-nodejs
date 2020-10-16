const { Categories, Products } = require('../../../config/db.js');

module.exports = (app, JL) => {

    app.get("/api/getAll", (request, response) => {
        response.setHeader('Cache-Control', 'no-cache');
        JL("routesjs.logger").debug("GET api/getAll");

        let ca = Categories.findAll({
            attributes: ['id', 'name']
        });
        let pr = Products.findAll({
            attributes: ['id', 'name', "available", "bestSeller", "price", "img", "description", "categories"]
        });

        Promise.all([ca, pr])
            .then(data => {
                let categories = data[0];
                let products = data[1];

                response.statusCode = 200;
                return response.json({
                    "categories": categories,
                    "products": products
                });
            })
            .catch(error => {
                JL("routesjs.logger").error("Error: " + error);
                response.statusCode = 500; //500 Internal Server Error
                return response.json({
                    "categories": "",
                    "products": ""
                });
            });
    });
};