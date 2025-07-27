# Class2FAApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_2faEnablePost**](#_2faenablepost) | **POST** /2fa/enable | Enable two-factor authentication|

# **_2faEnablePost**
> Model2faEnablePost200Response _2faEnablePost(model2faEnablePostRequest)


### Example

```typescript
import {
    Class2FAApi,
    Configuration,
    Model2faEnablePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new Class2FAApi(configuration);

let model2faEnablePostRequest: Model2faEnablePostRequest; //

const { status, data } = await apiInstance._2faEnablePost(
    model2faEnablePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **model2faEnablePostRequest** | **Model2faEnablePostRequest**|  | |


### Return type

**Model2faEnablePost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 2FA enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

