'use strict';

module.exports = exports = {};

const fs = require('fs');

exports.hexArr = [];
exports.reads = function(cb){
  let fileArr = ['one.txt', 'two.txt', 'three.txt'];
  for (let i=0; i < fileArr.length; i++){
    fs.readFile(`${__dirname}/../data/${fileArr[i]}`, function(err, data) {
      if(err) throw err;
      exports.hexArr.push(data.toString('hex',0,8));
      // console.log(`${fileArr[i]}: ${data.toString('hex',0,8)}`);
    });
  }

  // fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
  //   if(err) throw err;
  //   exports.hexArr.push(data.toString('hex',0,8));
  //   // console.log(`two ${data.toString('hex',0,8)}`);
  // });
  //
  // fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
  //   if(err) throw err;
  //   exports.hexArr.push(data.toString('hex',0,8));
  //   // console.log(`three ${data.toString('hex',0,8)}`);
  // });
};
