# AttributeModifier

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.AttributeModifier;
```


## Methods

:::group{name=getAmount}

Gets the amount of this AttributeModifier.

Returns: The amount of this AttributeModifier.  
Return Type: double

```zenscript
// AttributeModifier.getAmount() as double

myAttributeModifier.getAmount();
```

:::

:::group{name=getID}

Gets the ID of this AttributeModifier.

Returns: The ID of this AttributeModifier  
Return Type: string

```zenscript
// AttributeModifier.getID() as string

myAttributeModifier.getID();
```

:::

:::group{name=getName}

Gets the name of this AttributeModifier.

Returns: The name of this AttributeModifier.  
Return Type: string

```zenscript
// AttributeModifier.getName() as string

myAttributeModifier.getName();
```

:::

:::group{name=getOperation}

Gets the operation of this AttributeModifier.

Returns: The operation of this AttributeModifier.  
Return Type: [AttributeOperation](/vanilla/api/entity/AttributeOperation)

```zenscript
// AttributeModifier.getOperation() as AttributeOperation

myAttributeModifier.getOperation();
```

:::


## Properties

| Nombre    | Type                                                         | Has Getter | Has Setter | Description                                   |
| --------- | ------------------------------------------------------------ | ---------- | ---------- | --------------------------------------------- |
| amount    | double                                                       | true       | false      | Gets the amount of this AttributeModifier.    |
| id        | string                                                       | true       | false      | Gets the ID of this AttributeModifier.        |
| name      | string                                                       | true       | false      | Gets the name of this AttributeModifier.      |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation) | true       | false      | Gets the operation of this AttributeModifier. |

