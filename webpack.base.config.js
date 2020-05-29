const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
   entry:'./src/index.ts',
   output:{
      path:path.resolve(__dirname,'./build'),
      filename:'index.js'
   },
   resolve:{
       extensions:['.js','.ts','.tsx']
   },
   module:{
         rules:[
            {
                test:/\.tsx?$/i,
                use:[{
                    loader:'ts-loader'
                }],
                exclude:/node_modules/
               
            }
    ]
   },
   plugins:[
       new HtmlWebpackPlugin({
           template:'./src/index.html',
           title:'typeScript',
           filename:'index.html',
          
       })
   ]
}