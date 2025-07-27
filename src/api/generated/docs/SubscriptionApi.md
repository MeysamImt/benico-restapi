# SubscriptionApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**subscriptionTenantIdInvoicesGet**](#subscriptiontenantidinvoicesget) | **GET** /subscription/{tenantId}/invoices | Get invoices related to tenant|
|[**subscriptionTenantIdSubscriptionsGet**](#subscriptiontenantidsubscriptionsget) | **GET** /subscription/{tenantId}/subscriptions | List tenant subscriptions|
|[**subscriptionTenantIdUsageGet**](#subscriptiontenantidusageget) | **GET** /subscription/{tenantId}/usage | Get API and service usage records for tenant|

# **subscriptionTenantIdInvoicesGet**
> SubscriptionTenantIdInvoicesGet200Response subscriptionTenantIdInvoicesGet()


### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.subscriptionTenantIdInvoicesGet(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**SubscriptionTenantIdInvoicesGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of invoices |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptionTenantIdSubscriptionsGet**
> SubscriptionTenantIdSubscriptionsGet200Response subscriptionTenantIdSubscriptionsGet()


### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.subscriptionTenantIdSubscriptionsGet(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**SubscriptionTenantIdSubscriptionsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of subscriptions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptionTenantIdUsageGet**
> SubscriptionTenantIdUsageGet200Response subscriptionTenantIdUsageGet()


### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.subscriptionTenantIdUsageGet(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**SubscriptionTenantIdUsageGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage records |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

