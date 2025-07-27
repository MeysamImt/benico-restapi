# RBACApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rbacRolesGet**](#rbacrolesget) | **GET** /rbac/roles | List all roles|
|[**rbacRolesPost**](#rbacrolespost) | **POST** /rbac/roles | Create a new role|
|[**rbacRolesRoleIdDelete**](#rbacrolesroleiddelete) | **DELETE** /rbac/roles/{roleId} | Delete a role|
|[**rbacRolesRoleIdPut**](#rbacrolesroleidput) | **PUT** /rbac/roles/{roleId} | Update a role|

# **rbacRolesGet**
> RbacRolesGet200Response rbacRolesGet()


### Example

```typescript
import {
    RBACApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RBACApi(configuration);

const { status, data } = await apiInstance.rbacRolesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RbacRolesGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rbacRolesPost**
> RbacRolesPost201Response rbacRolesPost(rbacRolesPostRequest)


### Example

```typescript
import {
    RBACApi,
    Configuration,
    RbacRolesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RBACApi(configuration);

let rbacRolesPostRequest: RbacRolesPostRequest; //

const { status, data } = await apiInstance.rbacRolesPost(
    rbacRolesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rbacRolesPostRequest** | **RbacRolesPostRequest**|  | |


### Return type

**RbacRolesPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Role created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rbacRolesRoleIdDelete**
> rbacRolesRoleIdDelete()


### Example

```typescript
import {
    RBACApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RBACApi(configuration);

let roleId: string; // (default to undefined)

const { status, data } = await apiInstance.rbacRolesRoleIdDelete(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**string**] |  | defaults to undefined|


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
|**204** | Role deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rbacRolesRoleIdPut**
> RbacRolesPost201Response rbacRolesRoleIdPut(rbacRolesRoleIdPutRequest)


### Example

```typescript
import {
    RBACApi,
    Configuration,
    RbacRolesRoleIdPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RBACApi(configuration);

let roleId: string; // (default to undefined)
let rbacRolesRoleIdPutRequest: RbacRolesRoleIdPutRequest; //

const { status, data } = await apiInstance.rbacRolesRoleIdPut(
    roleId,
    rbacRolesRoleIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rbacRolesRoleIdPutRequest** | **RbacRolesRoleIdPutRequest**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**RbacRolesPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

