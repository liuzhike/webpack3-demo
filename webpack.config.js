var path = require('path'); // 设置根路径
var webpack = require('webpack'); //引入webpack
var HtmlWebpackPlugin = require('html-webpack-plugin'); //创建html文件插件
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清除文件插件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 打包单独css文件插件

module.exports = {
    // 入口文件
    entry: {
        app: './src/main.js',
        sub: './src/sub.js'
    },
    // 输出配置
    output: {
        // js输出文件名和路径
        filename: 'js/[name].[chunkhash].js',
        // 没有指定输出名的文件输出的文件名
        chunkFilename: 'js/[id].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('css/[name].[contenthash].css'), // 编译css单独文件路径
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'webpack demo',
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ // 压缩js
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js'), // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
    ],
    // 模块处理项目中的不同类型的模块
    module: {
        rules: [
            { // 处理css
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true,
                                // importLoaders: 1,
                                // modules: true
                            }
                        },
                        {loader: 'postcss-loader'}
                    ]
                })
            },
            {  // 处理图片
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash:7].[ext]' // 配置编译后图片路径
                    }
                }]
            },
            {  // 处理sass
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                // minimize: true,
                                // importLoaders: 1,
                                // modules: true
                            }
                        },
                        {loader: 'postcss-loader'}
                    ]
                })
            }
        ]
    }
};