module.exports = (app, JL) => {
    require("./v1/index.js")(app, JL);
    require("./v1/loadinventory.js")(app, JL);
    require("./v1/createbuy.js")(app, JL);
};