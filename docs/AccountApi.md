# ESuiteApiOpenApi30.AccountApi

All URIs are relative to *https://uat.mppglobal.com*

| Method                                     | HTTP request      | Description                 |
| ------------------------------------------ | ----------------- | --------------------------- |
| [**addAccount**](AccountApi.md#addAccount) | **POST** /account | Add a new account to eSuite |

<a name="addAccount"></a>

# **addAccount**

> Account addAccount(body)

Add a new account to eSuite

Add a new account to eSuite

### Example

```javascript
import { ESuiteApiOpenApi30 } from "e_suite_api___open_api_30";
let defaultClient = ESuiteApiOpenApi30.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ESuiteApiOpenApi30.AccountApi();
let body = new ESuiteApiOpenApi30.Account(); // Account | Create a new account in eSuite

apiInstance.addAccount(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                      | Description                    | Notes |
| -------- | ------------------------- | ------------------------------ | ----- |
| **body** | [**Account**](Account.md) | Create a new account in eSuite |

### Return type

[**Account**](Account.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
