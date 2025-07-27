# SessionApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sessionsGet**](#sessionsget) | **GET** /sessions | List active user sessions|

# **sessionsGet**
> SessionsGet200Response sessionsGet()


### Example

```typescript
import {
    SessionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SessionApi(configuration);

const { status, data } = await apiInstance.sessionsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SessionsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

