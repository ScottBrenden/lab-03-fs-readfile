'use strict';

module.exports = exports = {};

const fs = require('fs');

// exports.reads = function(){
let hexArr = [];
fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
  if(err) throw err;
  hexArr.push(data.toString('hex',0,8));
  console.log(data.toString('hex',0,8));
});
fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
  if(err) throw err;
  hexArr.push(data.toString('hex',0,8));
  console.log(data.toString('hex',0,8));
});
fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
  if(err) throw err;
  hexArr.push(data.toString('hex',0,8));
  console.log(data.toString('hex',0,8));
});

// };
console.log(hexArr);
