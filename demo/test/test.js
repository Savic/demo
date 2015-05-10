var C = require('../server.js');
var assert = require("assert"); // node.js core module
var should = require("chai").should;
var expect = require("chai").expect;
supertest = require("supertest");
var api = supertest("http://localhost:3000");


describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
    })
  })
})

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
  })
  
 
  
   
});

describe('First API Test', function() {
	describe("HelloWorld Testing", function() {
		it('This should return HelloWorld form the server blub', function(done) {
		  api.get("/").expect(200, done);
	  })
	})	
});
  
describe('MyTest', function() {
	  it('my test should always pass', function() {
		  assert.equal(4, 4);
	  })
  });