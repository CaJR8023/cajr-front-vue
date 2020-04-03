module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://yapi.weilaigongzuo.com",
        ws: true,
        changeOrigin: true
      }
    },
    port: 9000
  },
  publicPath: process.env.NODE_ENV === "production" ? "/zhihuwebs" : "/"
};
