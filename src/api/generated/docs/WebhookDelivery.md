# WebhookDelivery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**webhookId** | **string** |  | [default to undefined]
**event** | **string** |  | [default to undefined]
**statusCode** | **number** |  | [optional] [default to undefined]
**success** | **boolean** |  | [default to undefined]
**requestBody** | **object** |  | [optional] [default to undefined]
**responseBody** | **object** |  | [optional] [default to undefined]
**deliveredAt** | **string** |  | [default to undefined]

## Example

```typescript
import { WebhookDelivery } from './api';

const instance: WebhookDelivery = {
    id,
    webhookId,
    event,
    statusCode,
    success,
    requestBody,
    responseBody,
    deliveredAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
