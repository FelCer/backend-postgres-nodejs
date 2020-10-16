const { Purchase } = require('../../../config/db.js');

module.exports = (app, JL) => {

    app.get("/", (request, response) => {
        response.setHeader('Cache-Control', 'no-cache');
        JL("routesjs.logger").debug("GET /");

        response.statusCode = 200;
        return response.json({
            "description_url_one": {
                "msg": "Loads the information from the database.",
                "method": "GET",
                "url2": "http://localhost:8880/api/getAll",
                "fields_send": ""
            },
            "description_url_two": {
                "msg": "Load ",
                "method": "POST",
                "url2": "http://localhost:8880/api/createPurchase",
                "fields_send": {
                    "dateCreate": {
                        "type": "STRING",
                        "example": "10/10/1010"
                    },
                    "customer": {
                        "type": "INTEGER",
                        "example": "10"
                    },
                    "products": {
                        "type": "ARRAY OF OBJECTS",
                        "example": "[{'id':1,'quantity':1},{'id':2,'quantity':3}]"
                    }
                }
            },
        });
    });
};