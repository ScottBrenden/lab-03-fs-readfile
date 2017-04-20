'use strict';

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');
const fsMod = require('../lib/fs-module');
let expectedArr = [ '5468652053656168', '48656c6c6f2e205a', '476f204d27732061' ];
fsMod.reads(fsMod.hexArr);

describe('fs module', function(){
  describe('#reads', function(){
    it('should read file one, and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
        let bufferData = data;
        expect(typeof bufferData).equal(typeof Buffer.from(''));
        done();
      });
    });
    it('should read file two, and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
        let bufferData = data;
        expect(typeof bufferData).equal(typeof Buffer.from(''));
        done();
      });
    });
    it('should read file three, and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        let bufferData = data;
        expect(typeof bufferData).equal(typeof Buffer.from(''));
        done();
      });
    });
    it('should read three files in order and confirm they are in order', done => {

      for (let i = 0; i<3; i++){

        expect(expectedArr[i]).equal(fsMod.hexArr[i]);
      }
      done();
    });
  });
});
