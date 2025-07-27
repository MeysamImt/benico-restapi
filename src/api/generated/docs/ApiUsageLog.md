# ApiUsageLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**timestamp** | **string** |  | [default to undefined]
**endpoint** | **string** |  | [default to undefined]
**method** | **string** |  | [default to undefined]
**statusCode** | **number** |  | [default to undefined]
**responseTimeMs** | **number** |  | [optional] [default to undefined]
**ipAddress** | **string** |  | [optional] [default to undefined]
**userAgent** | **string** |  | [optional] [default to undefined]
**country** | **string** |  | [optional] [default to undefined]
**city** | **string** |  | [optional] [default to undefined]
**isRateLimited** | **boolean** |  | [default to undefined]
**apiKeyId** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**apiKeyDirectId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiUsageLog } from './api';

const instance: ApiUsageLog = {
    id,
    timestamp,
    endpoint,
    method,
    statusCode,
    responseTimeMs,
    ipAddress,
    userAgent,
    country,
    city,
    isRateLimited,
    apiKeyId,
    userId,
    tenantId,
    apiKeyDirectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
