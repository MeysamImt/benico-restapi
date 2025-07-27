# TenantApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tenantGet**](#tenantget) | **GET** /tenant | List all tenants user belongs to|
|[**tenantPost**](#tenantpost) | **POST** /tenant | Create a new tenant (organization)|
|[**tenantTenantIdDelete**](#tenanttenantiddelete) | **DELETE** /tenant/{tenantId} | Delete a tenant|
|[**tenantTenantIdGet**](#tenanttenantidget) | **GET** /tenant/{tenantId} | Get tenant details|
|[**tenantTenantIdPut**](#tenanttenantidput) | **PUT** /tenant/{tenantId} | Update tenant information|

# **tenantGet**
> TenantGet200Response tenantGet()


### Example

```typescript
import {
    TenantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

const { status, data } = await apiInstance.tenantGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of tenants |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantPost**
> TenantPost201Response tenantPost(tenantPostRequest)


### Example

```typescript
import {
    TenantApi,
    Configuration,
    TenantPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let tenantPostRequest: TenantPostRequest; //

const { status, data } = await apiInstance.tenantPost(
    tenantPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantPostRequest** | **TenantPostRequest**|  | |


### Return type

**TenantPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Tenant created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDelete**
> tenantTenantIdDelete()


### Example

```typescript
import {
    TenantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.tenantTenantIdDelete(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Tenant deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdGet**
> TenantPost201Response tenantTenantIdGet()


### Example

```typescript
import {
    TenantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.tenantTenantIdGet(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tenant details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPut**
> TenantPost201Response tenantTenantIdPut(tenantTenantIdPutRequest)


### Example

```typescript
import {
    TenantApi,
    Configuration,
    TenantTenantIdPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let tenantId: string; // (default to undefined)
let tenantTenantIdPutRequest: TenantTenantIdPutRequest; //

const { status, data } = await apiInstance.tenantTenantIdPut(
    tenantId,
    tenantTenantIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantTenantIdPutRequest** | **TenantTenantIdPutRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated tenant |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

