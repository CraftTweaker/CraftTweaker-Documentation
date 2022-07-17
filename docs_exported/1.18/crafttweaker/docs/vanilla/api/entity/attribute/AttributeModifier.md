# AttributeModifier

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeModifier;
```


## Static Methods

:::group{name=create}

Creates a new AttributeModifier

Returns: the new attribute modifier  
Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)

```zenscript
// AttributeModifier.create(name as string, amount as double, operation as AttributeOperation, uuid as string) as AttributeModifier

AttributeModifier.create("My New Attribute Modifier", 11.4, AttributeOperation.ADDITION, "6d79f9c1-a4ab-4e72-a0ab-71870b89b4c6");
```

| Parameter |                                  Type                                  |                                Description                                 | Optional |
|-----------|------------------------------------------------------------------------|----------------------------------------------------------------------------|----------|
| name      | string                                                                 | the name of this attribute modifier                                        | false    |
| amount    | double                                                                 | the amount of this attribute modifier                                      | false    |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | the operation of this attribute modifier.                                  | false    |
| uuid      | string                                                                 | the uuid of this attribute modifier, if omitted, it will use a random one. | true     |


:::

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

:::group{name=getId}

Gets the ID of this AttributeModifier.

Returns: The ID of this AttributeModifier  
Return Type: string

```zenscript
// AttributeModifier.getId() as string

myAttributeModifier.getId();
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
Return Type: [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation)

```zenscript
// AttributeModifier.getOperation() as AttributeOperation

myAttributeModifier.getOperation();
```

:::


## Properties

|   Name    |                                  Type                                  | Has Getter | Has Setter |                  Description                  |
|-----------|------------------------------------------------------------------------|------------|------------|-----------------------------------------------|
| amount    | double                                                                 | true       | false      | Gets the amount of this AttributeModifier.    |
| id        | string                                                                 | true       | false      | Gets the ID of this AttributeModifier.        |
| name      | string                                                                 | true       | false      | Gets the name of this AttributeModifier.      |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | true       | false      | Gets the operation of this AttributeModifier. |

