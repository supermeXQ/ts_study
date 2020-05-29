const path = require('path');
module.exports = {
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.resolve(__dirname,'build'),
        port:3000,
        compress:true,
        open:true
    }
}