# WebhookApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webhooksGet**](#webhooksget) | **GET** /webhooks | List all webhooks for tenant|
|[**webhooksPost**](#webhookspost) | **POST** /webhooks | Create a new webhook|
|[**webhooksWebhookIdDelete**](#webhookswebhookiddelete) | **DELETE** /webhooks/{webhookId} | Delete a webhook|
|[**webhooksWebhookIdDeliveriesGet**](#webhookswebhookiddeliveriesget) | **GET** /webhooks/{webhookId}/deliveries | View webhook delivery attempts|
|[**webhooksWebhookIdPut**](#webhookswebhookidput) | **PUT** /webhooks/{webhookId} | Update webhook details|

# **webhooksGet**
> WebhooksGet200Response webhooksGet()


### Example

```typescript
import {
    WebhookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

const { status, data } = await apiInstance.webhooksGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WebhooksGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of webhooks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksPost**
> WebhooksPost201Response webhooksPost(webhooksPostRequest)


### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebhooksPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhooksPostRequest: WebhooksPostRequest; //

const { status, data } = await apiInstance.webhooksPost(
    webhooksPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhooksPostRequest** | **WebhooksPostRequest**|  | |


### Return type

**WebhooksPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Webhook created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksWebhookIdDelete**
> webhooksWebhookIdDelete()


### Example

```typescript
import {
    WebhookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.webhooksWebhookIdDelete(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


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
|**204** | Webhook deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksWebhookIdDeliveriesGet**
> WebhooksWebhookIdDeliveriesGet200Response webhooksWebhookIdDeliveriesGet()


### Example

```typescript
import {
    WebhookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.webhooksWebhookIdDeliveriesGet(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**WebhooksWebhookIdDeliveriesGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of webhook deliveries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksWebhookIdPut**
> WebhooksPost201Response webhooksWebhookIdPut(webhooksPostRequest)


### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebhooksPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookId: string; // (default to undefined)
let webhooksPostRequest: WebhooksPostRequest; //

const { status, data } = await apiInstance.webhooksWebhookIdPut(
    webhookId,
    webhooksPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhooksPostRequest** | **WebhooksPostRequest**|  | |
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**WebhooksPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated webhook |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

