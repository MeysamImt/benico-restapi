# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**tenantId** | **string** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**eventTypes** | **Array&lt;string&gt;** |  | [default to undefined]
**secret** | **string** |  | [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**lastTriggered** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { Webhook } from './api';

const instance: Webhook = {
    id,
    tenantId,
    url,
    eventTypes,
    secret,
    isActive,
    lastTriggered,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
