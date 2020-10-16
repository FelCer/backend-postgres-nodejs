const { Purchase } = require('../../../config/db.js');

module.exports = (app, JL) => {

    app.post("/api/createPurchase", (request, response) => {
        response.setHeader('Cache-Control', 'no-cache');
        JL("routesjs.logger").debug("POST api/createPurchase");

        const { dateCreate, customer, products } = request.body;

        if (dateCreate === undefined || dateCreate === null || dateCreate === "" ||
            customer === undefined || customer === null || customer === "" ||
            products === undefined || products === null || !Array.isArray(products)) {
            JL("routesjs.logger").error("Missing data to complete");
            response.statusCode = 404;
            return response.json({
                "purchase": "",
                "msg": "Missing data fill out."
            });
        }

        Purchase.create({
            dateCreate: dateCreate,
            customer: customer,
            products: products
        }, {
            fields: ["dateCreate", "customer", "products"]
        })
            .then(purchase => {
                response.statusCode = 200;
                return response.json({
                    "purchase": purchase,
                    "msg": "Was successfully saved"
                });
            })
            .catch(error => {
                JL("routesjs.logger").error("Error saving to database: " + error);
                response.statusCode = 500; //500 Internal Server Error
                return response.json({
                    "purchase": "",
                    "msg": "Error saving to database."
                });
            });
    });

};