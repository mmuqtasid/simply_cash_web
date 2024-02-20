const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://app-test.simplycloud.gr", // Adjust the target URL
      changeOrigin: true,
    })
  );
};
