/**
 * Author :  neron
 * time   : 2015/11/18
 * description: ...
 */
var webpack = require('webpack');
var path = require('path');
/*
var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('common.js');

//使用压缩文件
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var deps = [
    'react/dist/react.min.js',
    'react-router/dist/react-router.min.js',
    'moment/min/moment.min.js',
    'underscore/underscore-min.js'
];
deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});
*/
module.exports = {
    entry: {
        music: './app/music.js',
        index: './app/main.js'
    },
    output: {
        path: './build',
        //  publicPath: '/js/',
        filename: '[name].js'
    },
/*    entry: [
        './app/main.js'
     ],
     output: {
     path: './build',
     //  publicPath: '/js/',
     filename: 'bundle.js'
     },*/
    module: {
        loaders: [
            { test: /\.coffee$/, loader: 'coffee-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // 用 ! 来连接多个人 loader
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.woff$/, loader: 'url-loader?limit=10000'}
        ]
        //noParse: [pathToReact]
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee'],
        alias: {}
    },
    //plugins: [commonsPlugin]
};