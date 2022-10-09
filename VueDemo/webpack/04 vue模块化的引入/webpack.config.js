//npm init  安装   包  生成package.json


const { dirname } = require('path')
const path =require('path')



module.exports={
 entry:"./src/main.js",
 output:{
    //path 需要绝对路径  需要动态获取
    path:path.resolve( __dirname,'dist'),
    filename:"main.js",
    mode: 'development'
 }   ,


//css处理
 module: {
   rules: [
     {
       test: /\.css$/i, //匹配所有css文件 正则表达式
       use: ["style-loader", "css-loader"],
     },
     {
      test: /\.css$/i, //匹配所有css文件 正则表达式
      use: [{
       loader: "style-loader"}, {
        loader:  "css-loader"}],
    },
    {
      test:/\.vue$/,
      use:['vue-loader']

      
    }
   ],
 },



}

//终端 webpack 直接打包 


//在package.json 中 在scripte中
// "build":"webpack"   在使用命令 可以用build 代替webpack
// npm run build



//css loader 处理

  