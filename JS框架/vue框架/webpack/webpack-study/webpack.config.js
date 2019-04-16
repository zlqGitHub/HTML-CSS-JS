const path = require('path');

//当有了配置文件后，就不用在执行 webpack ./src/main.js ./dist/bundle.js,     可以只执行webpack进行打包

//这是一个配置文件，本质是一个js文件，通过Node中的模块操作，向外暴露一个配置对象
module.exports = {
    //在这儿需要手动的指定 入口 和 出口文件
    entry: path.join(__dirname, './src/main.js'),   //入口，表示webpack要打包的哪个文件
    output:{   //输出文件相关的配置
        path: path.join(__dirname, './dist'),   //指定打包好的文件输出到哪个目录中去
        filename: 'bundle.js',    //这是指定输出的文件名称
    }
}

// 当我们在控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；