# pdd

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# object description：
 
 > ###项目结构的描述
``` bash
1. build -- 与webpack相关的编译文件夹（不需要改动）
2. config -- 与webpack相关的配置文件夹（无需改动）
      index.js -- 用于指定后台服务器的端口、是否打开浏览器、配置代理等
3. node_modules -- 当前应用程序依赖的第三方库
4. src -- 代码文件夹
       main.js -- 项目入口文件
       App.vue -- 项目应用组件
       api -- 后台数据接口交互文件夹
       common -- 通用资源文件，如fonts、imgs
       components -- 非路由组文件夹，如 tarbar 栏
       vues或pages -- 路由组件文件
       filter -- 自定义过滤器
       router -- 路由文件夹
       store -- vuex相关文件
5. static -- 静态文件资源
       如css、js、imgs等不会改变的文件      
6. .babelrc -- babel的配置文件
7. index.html -- 项目主页面
8. package.json -- 配置文件             
```

未完待续......




