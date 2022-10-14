# AttributeOperation

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeOperation;
```


## Enum Constants

AttributeOperation is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
AttributeOperation.ADDITION
AttributeOperation.MULTIPLY_BASE
AttributeOperation.MULTIPLY_TOTAL
```
## Methods

:::group{name=getValue}

Gets the value of this operation.

Returns: The value of this operation.  
Return Type: int

```zenscript
// AttributeOperation.getValue() as int

myAttributeOperation.getValue();
```

:::


## Properties

| 名称    | Type | Has Getter | Has Setter | Description                       |
| ----- | ---- | ---------- | ---------- | --------------------------------- |
| value | int  | true       | false      | Gets the value of this operation. |

