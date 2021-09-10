
const path = require('path')

// entry point   src/app.js  -> output

module.exports = {

    entry:'./src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/,
            options: {
                presets: [
                    "@babel/preset-react", 
                    "@babel/preset-env"
                ],
                plugins:["@babel/plugin-proposal-class-properties",
                        "transform-object-rest-spread"]
            }
        },{
            test:/\.s?css$/,
            use:
            ['style-loader',
            'css-loader',
            'sass-loader']
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true,
    }
};
