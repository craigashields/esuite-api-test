/*
 * eSuite API - OpenAPI 3.0
 * This is a sample eSuite API Server based on the OpenAPI 3.0 specification.
 *
 * OpenAPI spec version: 11.29.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.40
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ESuiteApiOpenApi30);
  }
}(this, function(expect, ESuiteApiOpenApi30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ESuiteApiOpenApi30.AccountApi();
  });

  describe('(package)', function() {
    describe('AccountApi', function() {
      describe('addAccount', function() {
        it('should call addAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for addAccount call and complete the assertions
          /*

          instance.addAccount(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ESuiteApiOpenApi30.Account);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
