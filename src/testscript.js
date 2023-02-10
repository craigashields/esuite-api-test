import { ApiClient, AccountApi, Account } from "e_suite_api___open_api_30";
var defaultClient = ApiClient.instance;

const btn = document.getElementById("testApi");

btn.addEventListener("click", (e) => {
  console.log("here");
});

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['X-API-KEY'] = "Token"

var api = new AccountApi();
var body = new Account(); // {Account} Create a new account in eSuite

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
api.addAccount(body, callback);
