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
import { ApiClient } from "../ApiClient.js";

/**
 * The Account model module.
 * @module model/Account
 * @version 11.29.11
 */
export class Account {
  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   * @param email {String} email address of the user wanting to register
   * @param password {String} password of the user wanting to register
   */
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Account();
      if (data.hasOwnProperty("email"))
        obj.email = ApiClient.convertToType(data["email"], "String");
      if (data.hasOwnProperty("password"))
        obj.password = ApiClient.convertToType(data["password"], "String");
      if (data.hasOwnProperty("firstName"))
        obj.firstName = ApiClient.convertToType(data["firstName"], "String");
      if (data.hasOwnProperty("lastName"))
        obj.lastName = ApiClient.convertToType(data["lastName"], "String");
      if (data.hasOwnProperty("allowMarketing"))
        obj.allowMarketing = ApiClient.convertToType(
          data["allowMarketing"],
          "Boolean"
        );
    }
    return obj;
  }
}

/**
 * email address of the user wanting to register
 * @member {String} email
 */
Account.prototype.email = undefined;

/**
 * password of the user wanting to register
 * @member {String} password
 */
Account.prototype.password = undefined;

/**
 * first name of the user wanting to register
 * @member {String} firstName
 */
Account.prototype.firstName = undefined;

/**
 * last name of the user wanting to register
 * @member {String} lastName
 */
Account.prototype.lastName = undefined;

/**
 * Does the user consent to marketing
 * @member {Boolean} allowMarketing
 */
Account.prototype.allowMarketing = undefined;
