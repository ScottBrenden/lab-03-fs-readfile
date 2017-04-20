'use strict';

module.exports = exports = {};

const fs = require('fs');

exports.hexArr = [];
exports.reads = function(cb){
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if(err) throw err;
    exports.hexArr.push(data.toString('hex',0,8));
    // console.log(`one ${data.toString('hex',0,8)}`);
  });

  fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
    if(err) throw err;
    exports.hexArr.push(data.toString('hex',0,8));
    // console.log(`two ${data.toString('hex',0,8)}`);
  });

  fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
    if(err) throw err;
    exports.hexArr.push(data.toString('hex',0,8));
    // console.log(`three ${data.toString('hex',0,8)}`);
  });
};
