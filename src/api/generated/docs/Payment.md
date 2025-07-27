# Payment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**userId** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**provider** | **string** |  | [default to undefined]
**referenceId** | **string** |  | [optional] [default to undefined]
**authorityCode** | **string** |  | [optional] [default to undefined]
**trackingCode** | **string** |  | [optional] [default to undefined]
**purpose** | **string** |  | [default to undefined]
**targetId** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isVerified** | **boolean** |  | [default to undefined]
**verifiedAt** | **string** |  | [optional] [default to undefined]
**failedAt** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { Payment } from './api';

const instance: Payment = {
    id,
    userId,
    amount,
    currency,
    status,
    provider,
    referenceId,
    authorityCode,
    trackingCode,
    purpose,
    targetId,
    description,
    isVerified,
    verifiedAt,
    failedAt,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
