const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const proConfig = require('./webpack.pro.config');
const devConfig = require('./webpack.dev.config');
//判断当前是开发环境还是生产环境 使用对应x的config 文件
let config = process.env.NODE_ENV = "development"? devConfig:proConfig
module.exports = merge(baseConfig,config);
 