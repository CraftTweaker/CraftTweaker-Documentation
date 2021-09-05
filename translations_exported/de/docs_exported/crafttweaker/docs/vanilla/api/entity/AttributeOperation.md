# AttributeOperation

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.AttributeOperation;
```


## Extending Enum&lt;AttributeOperation&gt;

AttributeOperation extends Enum&lt;[AttributeOperation](/vanilla/api/entity/AttributeOperation)&gt;. That means all methods available in Enum&lt;[AttributeOperation](/vanilla/api/entity/AttributeOperation)&gt; are also available in AttributeOperation

## Static Properties

| Name           | Type                                                         | Has Getter | Has Setter | Beschreibung            |
| -------------- | ------------------------------------------------------------ | ---------- | ---------- | ----------------------- |
| ADDITION       | [AttributeOperation](/vanilla/api/entity/AttributeOperation) | true       | false      | No Description Provided |
| MULTIPLY_BASE  | [AttributeOperation](/vanilla/api/entity/AttributeOperation) | true       | false      | No Description Provided |
| MULTIPLY_TOTAL | [AttributeOperation](/vanilla/api/entity/AttributeOperation) | true       | false      | No Description Provided |

## Methoden

:::group{name=getId}

Gets the ID of this operation.

Returns: The ID of this operation.  
Return Type: int

```zenscript
// AttributeOperation.getId() as int

myAttributeOperation.getId();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Beschreibung                   |
| ---- | ---- | ---------- | ---------- | ------------------------------ |
| id   | int  | true       | false      | Gets the ID of this operation. |

