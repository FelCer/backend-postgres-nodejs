// One routes file for each page or api
module.exports = (app, JL) => {
    // Api request
    require("../api/api.js")(app, JL);
    /* Routes, pages render
    *   require("../pages/home.js")(app, JL);
    */
};