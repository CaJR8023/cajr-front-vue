module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8300",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    port: 9000
  },
  publicPath: process.env.NODE_ENV === "production" ? "/zhihuwebs" : "/"
};
