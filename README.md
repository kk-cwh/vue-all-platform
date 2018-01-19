# vue-all-platform 多平台实现

> a vue.js project for  all platform
Web应用支持PC和移动端浏览器 需要打包后部署到服务器
桌面应用支持 Windows、 Mac、Linux


## Build Setup

``` bash
# install dependencies
npm install electron-packager -g

npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 在当前系统直接运行该桌面应用
npm run elect

# 打包成mac桌面应用 注意：npm run build 之后才能运行
npm run mac
# 打包成windows桌面应用 注意：npm run build 之后才能运行
npm run windows
# 打包成linux应用 注意：npm run build 之后才能运行
npm run linux

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
