# ReservationApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**reservationGet**](#reservationget) | **GET** /reservation | List reservations|
|[**reservationPost**](#reservationpost) | **POST** /reservation | Create a new reservation|
|[**reservationReservationIdDelete**](#reservationreservationiddelete) | **DELETE** /reservation/{reservationId} | Delete a reservation|
|[**reservationReservationIdGet**](#reservationreservationidget) | **GET** /reservation/{reservationId} | Get reservation details|
|[**reservationReservationIdPut**](#reservationreservationidput) | **PUT** /reservation/{reservationId} | Update a reservation|

# **reservationGet**
> ReservationGet200Response reservationGet()


### Example

```typescript
import {
    ReservationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReservationApi(configuration);

const { status, data } = await apiInstance.reservationGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ReservationGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of reservations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservationPost**
> ReservationPost201Response reservationPost(reservationPostRequest)


### Example

```typescript
import {
    ReservationApi,
    Configuration,
    ReservationPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReservationApi(configuration);

let reservationPostRequest: ReservationPostRequest; //

const { status, data } = await apiInstance.reservationPost(
    reservationPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservationPostRequest** | **ReservationPostRequest**|  | |


### Return type

**ReservationPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Reservation created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservationReservationIdDelete**
> reservationReservationIdDelete()


### Example

```typescript
import {
    ReservationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReservationApi(configuration);

let reservationId: string; // (default to undefined)

const { status, data } = await apiInstance.reservationReservationIdDelete(
    reservationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservationId** | [**string**] |  | defaults to undefined|


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
|**204** | Reservation deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservationReservationIdGet**
> ReservationPost201Response reservationReservationIdGet()


### Example

```typescript
import {
    ReservationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReservationApi(configuration);

let reservationId: string; // (default to undefined)

const { status, data } = await apiInstance.reservationReservationIdGet(
    reservationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**ReservationPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reservation details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservationReservationIdPut**
> ReservationPost201Response reservationReservationIdPut(reservationReservationIdPutRequest)


### Example

```typescript
import {
    ReservationApi,
    Configuration,
    ReservationReservationIdPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReservationApi(configuration);

let reservationId: string; // (default to undefined)
let reservationReservationIdPutRequest: ReservationReservationIdPutRequest; //

const { status, data } = await apiInstance.reservationReservationIdPut(
    reservationId,
    reservationReservationIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservationReservationIdPutRequest** | **ReservationReservationIdPutRequest**|  | |
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**ReservationPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated reservation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

