# ProductApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**productGet**](#productget) | **GET** /product | List all products|
|[**productPost**](#productpost) | **POST** /product | Create a new product|
|[**productProductIdDelete**](#productproductiddelete) | **DELETE** /product/{productId} | Delete a product|
|[**productProductIdGet**](#productproductidget) | **GET** /product/{productId} | Get product details|
|[**productProductIdPut**](#productproductidput) | **PUT** /product/{productId} | Update a product|

# **productGet**
> ProductGet200Response productGet()


### Example

```typescript
import {
    ProductApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

const { status, data } = await apiInstance.productGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProductGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of products |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productPost**
> ProductPost201Response productPost(productPostRequest)


### Example

```typescript
import {
    ProductApi,
    Configuration,
    ProductPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let productPostRequest: ProductPostRequest; //

const { status, data } = await apiInstance.productPost(
    productPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productPostRequest** | **ProductPostRequest**|  | |


### Return type

**ProductPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Product created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productProductIdDelete**
> productProductIdDelete()


### Example

```typescript
import {
    ProductApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.productProductIdDelete(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


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
|**204** | Product deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productProductIdGet**
> ProductPost201Response productProductIdGet()


### Example

```typescript
import {
    ProductApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.productProductIdGet(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ProductPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productProductIdPut**
> ProductPost201Response productProductIdPut(productProductIdPutRequest)


### Example

```typescript
import {
    ProductApi,
    Configuration,
    ProductProductIdPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let productId: string; // (default to undefined)
let productProductIdPutRequest: ProductProductIdPutRequest; //

const { status, data } = await apiInstance.productProductIdPut(
    productId,
    productProductIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productProductIdPutRequest** | **ProductProductIdPutRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ProductPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated product |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

