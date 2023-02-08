const fs = require("fs");
const routes = require("./routes");
const config = require("./config/config");

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(() => resolve, time));
};

const routter = (app) => {
  routes.forEach((item) => {
    console.log("http://localhost:" + config.port + item.externalUrl);
    const method = item.method || "get";
    app[method](item.externalUrl, (req, res) => {
      console.log('resquesting: ' + req.url);
      const sleep = item.sleep || 0;
      setTimeout(() => {
        if (item.fileType === "json") {
          const localRoute = item.customRoute
            ? item.customRoute(req)
            : item.localRoute;
          const data = require(localRoute);
          res.header(item.headers);
          res.send(JSON.stringify(data));
        } else if (item.fileType === "text") {
          fs.readFile(item.localRoute, "utf8", function (err, data) {
            if (err) throw err;
            res.header(item.headers);
            res.send(data);
          });
        }
      }, sleep);
    });
  });
};

module.exports = routter;
