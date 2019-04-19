const path = require('path');

/*
    导入内存中生成 HTML页面的插件
    注意：只要是插件，都需要放到 plugins 节点中去
    插件作用：
        自动在内存中根据指定的页面生成一个内存页面
        自动吧打包好的 bundl.js 文件追加到页面中去
*/
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//当有了配置文件后，就不用在执行 webpack ./src/main.js ./dist/bundle.js,     可以只执行webpack进行打包

//这是一个配置文件，本质是一个js文件，通过Node中的模块操作，向外暴露一个配置对象
module.exports = {
    mode:'development',
    //在这儿需要手动的指定 入口 和 出口文件
    entry: path.join(__dirname, './src/main.js'),   //入口，表示webpack要打包的哪个文件
    output:{   //输出文件相关的配置
        path: path.join(__dirname, './dist'),   //指定打包好的文件输出到哪个目录中去
        filename: 'bundle.js',    //这是指定输出的文件名称
    },
    plugins:[  //配置插件的节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),  //指定模板页面，将来根据指定的页面路径，去生成内存总的页面
            filename: 'index.html',   //指定生成的内存页面名称
        }),
        new VueLoaderPlugin()
    ],
    module:{  //用于配置所有第三方模块加载器的节点
        rules:[
            {test:/\.css$/, use:['style-loader','css-loader']},  //处理 .css 的文件第三方 loader 规则
            {test:/\.less$/, use:['style-loader','css-loader','less-loader']},  //处理 .less 文件
            {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},  //处理 .scss 文件
            // {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
            {test:/\.vue$/, use: 'vue-loader'}  //配置 .vue 文件
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}

// 当我们在控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；