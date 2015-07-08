'use strict';

var request = require('supertest');
var app = require('./../app');

describe('Requests to main "/" route', function () {

  it('Returns a 200 code', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

});