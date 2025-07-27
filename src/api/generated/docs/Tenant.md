# Tenant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier | [default to undefined]
**name** | **string** | Tenant name | [default to undefined]
**slug** | **string** | Unique slug | [default to undefined]
**logoUrl** | **string** | URL to logo image | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**contactEmail** | **string** |  | [optional] [default to undefined]
**contactPhone** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**ownerId** | **string** | ID of the owner user | [default to undefined]

## Example

```typescript
import { Tenant } from './api';

const instance: Tenant = {
    id,
    name,
    slug,
    logoUrl,
    description,
    contactEmail,
    contactPhone,
    createdAt,
    updatedAt,
    ownerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
