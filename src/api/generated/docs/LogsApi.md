# LogsApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**logsApiUsageGet**](#logsapiusageget) | **GET** /logs/api-usage | Get logs of API usage|
|[**logsAuditGet**](#logsauditget) | **GET** /logs/audit | Retrieve audit logs|
|[**logsLoginGet**](#logsloginget) | **GET** /logs/login | Retrieve user login logs|

# **logsApiUsageGet**
> LogsApiUsageGet200Response logsApiUsageGet()


### Example

```typescript
import {
    LogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LogsApi(configuration);

let tenantId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.logsApiUsageGet(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**LogsApiUsageGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of API usage logs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logsAuditGet**
> LogsAuditGet200Response logsAuditGet()


### Example

```typescript
import {
    LogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LogsApi(configuration);

let tenantId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.logsAuditGet(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**LogsAuditGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of audit logs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logsLoginGet**
> LogsLoginGet200Response logsLoginGet()


### Example

```typescript
import {
    LogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LogsApi(configuration);

const { status, data } = await apiInstance.logsLoginGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LogsLoginGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of login logs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

