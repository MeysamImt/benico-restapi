# APIKeyApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apikeyTenantIdApiKeysApiKeyIdDelete**](#apikeytenantidapikeysapikeyiddelete) | **DELETE** /apikey/{tenantId}/api-keys/{apiKeyId} | Revoke/delete API key|
|[**apikeyTenantIdApiKeysApiKeyIdPut**](#apikeytenantidapikeysapikeyidput) | **PUT** /apikey/{tenantId}/api-keys/{apiKeyId} | Update API key details|
|[**apikeyTenantIdApiKeysGet**](#apikeytenantidapikeysget) | **GET** /apikey/{tenantId}/api-keys | List API keys of tenant|
|[**apikeyTenantIdApiKeysPost**](#apikeytenantidapikeyspost) | **POST** /apikey/{tenantId}/api-keys | Create API key for tenant|

# **apikeyTenantIdApiKeysApiKeyIdDelete**
> apikeyTenantIdApiKeysApiKeyIdDelete()


### Example

```typescript
import {
    APIKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let tenantId: string; // (default to undefined)
let apiKeyId: string; // (default to undefined)

const { status, data } = await apiInstance.apikeyTenantIdApiKeysApiKeyIdDelete(
    tenantId,
    apiKeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **apiKeyId** | [**string**] |  | defaults to undefined|


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
|**204** | API key revoked/deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apikeyTenantIdApiKeysApiKeyIdPut**
> ApikeyTenantIdApiKeysPost201Response apikeyTenantIdApiKeysApiKeyIdPut(apikeyTenantIdApiKeysApiKeyIdPutRequest)


### Example

```typescript
import {
    APIKeyApi,
    Configuration,
    ApikeyTenantIdApiKeysApiKeyIdPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let tenantId: string; // (default to undefined)
let apiKeyId: string; // (default to undefined)
let apikeyTenantIdApiKeysApiKeyIdPutRequest: ApikeyTenantIdApiKeysApiKeyIdPutRequest; //

const { status, data } = await apiInstance.apikeyTenantIdApiKeysApiKeyIdPut(
    tenantId,
    apiKeyId,
    apikeyTenantIdApiKeysApiKeyIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apikeyTenantIdApiKeysApiKeyIdPutRequest** | **ApikeyTenantIdApiKeysApiKeyIdPutRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **apiKeyId** | [**string**] |  | defaults to undefined|


### Return type

**ApikeyTenantIdApiKeysPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apikeyTenantIdApiKeysGet**
> ApikeyTenantIdApiKeysGet200Response apikeyTenantIdApiKeysGet()


### Example

```typescript
import {
    APIKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.apikeyTenantIdApiKeysGet(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ApikeyTenantIdApiKeysGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of API keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apikeyTenantIdApiKeysPost**
> ApikeyTenantIdApiKeysPost201Response apikeyTenantIdApiKeysPost(apikeyTenantIdApiKeysPostRequest)


### Example

```typescript
import {
    APIKeyApi,
    Configuration,
    ApikeyTenantIdApiKeysPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let tenantId: string; // (default to undefined)
let apikeyTenantIdApiKeysPostRequest: ApikeyTenantIdApiKeysPostRequest; //

const { status, data } = await apiInstance.apikeyTenantIdApiKeysPost(
    tenantId,
    apikeyTenantIdApiKeysPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apikeyTenantIdApiKeysPostRequest** | **ApikeyTenantIdApiKeysPostRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ApikeyTenantIdApiKeysPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | API key created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

