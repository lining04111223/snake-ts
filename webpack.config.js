//引入一个包
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
 //指定入口文件
    entry: "./src/index.ts",
 //打包文件目录   
    output: {
    
        path: path.resolve(__dirname, 'dist'),
        
        filename: "bundle.js",
        
        environment: {
            
            arrowFunction:false
        }
    },
    module: {
        rules: [
         
            {
                test: /\.ts$/,
                use: [
                    {

                        loader: "babel-loader",
                        options: {
                            presets: [
                               
                                "@bable/preset-env",
                                {
                                    targets: {
                                      "chrome":"88"
                                    },
                                    "corejs": "3",
                                    "useBuiltIns":"usage"


                              }  
                           ] 


                        }

                    }
                    'ts-loader'
                ],
                //排除的文件
                exclude:/node-modules/

            }
       ] 


    }


}