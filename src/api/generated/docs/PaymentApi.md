# PaymentApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paymentInitiatePost**](#paymentinitiatepost) | **POST** /payment/initiate | Initiate a new payment|
|[**paymentPaymentIdConfirmPost**](#paymentpaymentidconfirmpost) | **POST** /payment/{paymentId}/confirm | Confirm a payment|
|[**paymentPaymentIdGet**](#paymentpaymentidget) | **GET** /payment/{paymentId} | Get payment status and details|
|[**paymentPaymentIdRefundPost**](#paymentpaymentidrefundpost) | **POST** /payment/{paymentId}/refund | Refund a payment|

# **paymentInitiatePost**
> PaymentInitiatePost201Response paymentInitiatePost(paymentInitiatePostRequest)


### Example

```typescript
import {
    PaymentApi,
    Configuration,
    PaymentInitiatePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let paymentInitiatePostRequest: PaymentInitiatePostRequest; //

const { status, data } = await apiInstance.paymentInitiatePost(
    paymentInitiatePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentInitiatePostRequest** | **PaymentInitiatePostRequest**|  | |


### Return type

**PaymentInitiatePost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Payment initiated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentPaymentIdConfirmPost**
> PaymentInitiatePost201Response paymentPaymentIdConfirmPost()


### Example

```typescript
import {
    PaymentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let paymentId: string; // (default to undefined)

const { status, data } = await apiInstance.paymentPaymentIdConfirmPost(
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**PaymentInitiatePost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment confirmed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentPaymentIdGet**
> PaymentInitiatePost201Response paymentPaymentIdGet()


### Example

```typescript
import {
    PaymentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let paymentId: string; // (default to undefined)

const { status, data } = await apiInstance.paymentPaymentIdGet(
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**PaymentInitiatePost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentPaymentIdRefundPost**
> PaymentInitiatePost201Response paymentPaymentIdRefundPost()


### Example

```typescript
import {
    PaymentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentApi(configuration);

let paymentId: string; // (default to undefined)

const { status, data } = await apiInstance.paymentPaymentIdRefundPost(
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**PaymentInitiatePost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment refunded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

