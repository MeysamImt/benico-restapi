# AuditLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**actorId** | **string** |  | [optional] [default to undefined]
**actorType** | **string** |  | [default to undefined]
**action** | **string** |  | [default to undefined]
**target** | **string** |  | [optional] [default to undefined]
**ipAddress** | **string** |  | [optional] [default to undefined]
**userAgent** | **string** |  | [optional] [default to undefined]
**metadata** | **object** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]

## Example

```typescript
import { AuditLog } from './api';

const instance: AuditLog = {
    id,
    tenantId,
    actorId,
    actorType,
    action,
    target,
    ipAddress,
    userAgent,
    metadata,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
