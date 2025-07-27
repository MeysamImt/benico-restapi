# AuthApi

All URIs are relative to *http://localhost:3000/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authForgotPasswordPost**](#authforgotpasswordpost) | **POST** /auth/forgot-password | Request password reset|
|[**authGithubCallbackGet**](#authgithubcallbackget) | **GET** /auth/github/callback | GitHub OAuth callback|
|[**authGithubGet**](#authgithubget) | **GET** /auth/github | GitHub OAuth login|
|[**authGoogleCallbackGet**](#authgooglecallbackget) | **GET** /auth/google/callback | Google OAuth callback|
|[**authGoogleGet**](#authgoogleget) | **GET** /auth/google | Google OAuth login|
|[**authLoginPost**](#authloginpost) | **POST** /auth/login | Login with email and password|
|[**authLogoutPost**](#authlogoutpost) | **POST** /auth/logout | Logout user|
|[**authMeGet**](#authmeget) | **GET** /auth/me | Get current authenticated user profile|
|[**authRegisterPost**](#authregisterpost) | **POST** /auth/register | Register a new user|
|[**authRequestEmailVerificationPost**](#authrequestemailverificationpost) | **POST** /auth/request-email-verification | Request email verification|
|[**authRequestMobileVerificationPost**](#authrequestmobileverificationpost) | **POST** /auth/request-mobile-verification | Request mobile verification|
|[**authVerifyEmailPost**](#authverifyemailpost) | **POST** /auth/verify-email | Verify email address|
|[**authVerifyMobilePost**](#authverifymobilepost) | **POST** /auth/verify-mobile | Verify mobile number|
|[**authVerifyRegistrationPost**](#authverifyregistrationpost) | **POST** /auth/verify-registration | Verify registration (OTP)|

# **authForgotPasswordPost**
> AuthForgotPasswordPost200Response authForgotPasswordPost(authForgotPasswordPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthForgotPasswordPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authForgotPasswordPostRequest: AuthForgotPasswordPostRequest; //

const { status, data } = await apiInstance.authForgotPasswordPost(
    authForgotPasswordPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authForgotPasswordPostRequest** | **AuthForgotPasswordPostRequest**|  | |


### Return type

**AuthForgotPasswordPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Password reset requested |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authGithubCallbackGet**
> authGithubCallbackGet()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authGithubCallbackGet();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | GitHub OAuth login success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authGithubGet**
> authGithubGet()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authGithubGet();
```

### Parameters
This endpoint does not have any parameters.


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
|**302** | Redirect to GitHub OAuth |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authGoogleCallbackGet**
> authGoogleCallbackGet()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authGoogleCallbackGet();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Google OAuth login success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authGoogleGet**
> authGoogleGet()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authGoogleGet();
```

### Parameters
This endpoint does not have any parameters.


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
|**302** | Redirect to Google OAuth |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLoginPost**
> AuthLoginPost200Response authLoginPost(authLoginPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthLoginPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authLoginPostRequest: AuthLoginPostRequest; //

const { status, data } = await apiInstance.authLoginPost(
    authLoginPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authLoginPostRequest** | **AuthLoginPostRequest**|  | |


### Return type

**AuthLoginPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLogoutPost**
> AuthLogoutPost200Response authLogoutPost()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authLogoutPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AuthLogoutPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logout successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authMeGet**
> AuthRegisterPost201ResponseUser authMeGet()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AuthRegisterPost201ResponseUser**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRegisterPost**
> AuthRegisterPost201Response authRegisterPost(authRegisterPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthRegisterPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authRegisterPostRequest: AuthRegisterPostRequest; //

const { status, data } = await apiInstance.authRegisterPost(
    authRegisterPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRegisterPostRequest** | **AuthRegisterPostRequest**|  | |


### Return type

**AuthRegisterPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | User registered, OTP sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRequestEmailVerificationPost**
> AuthRequestEmailVerificationPost200Response authRequestEmailVerificationPost(authForgotPasswordPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthForgotPasswordPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authForgotPasswordPostRequest: AuthForgotPasswordPostRequest; //

const { status, data } = await apiInstance.authRequestEmailVerificationPost(
    authForgotPasswordPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authForgotPasswordPostRequest** | **AuthForgotPasswordPostRequest**|  | |


### Return type

**AuthRequestEmailVerificationPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email verification requested |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRequestMobileVerificationPost**
> AuthRequestMobileVerificationPost200Response authRequestMobileVerificationPost(authRequestMobileVerificationPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthRequestMobileVerificationPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authRequestMobileVerificationPostRequest: AuthRequestMobileVerificationPostRequest; //

const { status, data } = await apiInstance.authRequestMobileVerificationPost(
    authRequestMobileVerificationPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRequestMobileVerificationPostRequest** | **AuthRequestMobileVerificationPostRequest**|  | |


### Return type

**AuthRequestMobileVerificationPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mobile verification requested |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authVerifyEmailPost**
> AuthVerifyEmailPost200Response authVerifyEmailPost(authVerifyEmailPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthVerifyEmailPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authVerifyEmailPostRequest: AuthVerifyEmailPostRequest; //

const { status, data } = await apiInstance.authVerifyEmailPost(
    authVerifyEmailPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authVerifyEmailPostRequest** | **AuthVerifyEmailPostRequest**|  | |


### Return type

**AuthVerifyEmailPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email verified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authVerifyMobilePost**
> AuthVerifyMobilePost200Response authVerifyMobilePost(authVerifyMobilePostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthVerifyMobilePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authVerifyMobilePostRequest: AuthVerifyMobilePostRequest; //

const { status, data } = await apiInstance.authVerifyMobilePost(
    authVerifyMobilePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authVerifyMobilePostRequest** | **AuthVerifyMobilePostRequest**|  | |


### Return type

**AuthVerifyMobilePost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mobile verified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authVerifyRegistrationPost**
> AuthVerifyRegistrationPost200Response authVerifyRegistrationPost(authVerifyEmailPostRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthVerifyEmailPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authVerifyEmailPostRequest: AuthVerifyEmailPostRequest; //

const { status, data } = await apiInstance.authVerifyRegistrationPost(
    authVerifyEmailPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authVerifyEmailPostRequest** | **AuthVerifyEmailPostRequest**|  | |


### Return type

**AuthVerifyRegistrationPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Registration verified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

