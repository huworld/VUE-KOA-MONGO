module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
          "^/api": "/"
        }
      }
    }
  }
};
