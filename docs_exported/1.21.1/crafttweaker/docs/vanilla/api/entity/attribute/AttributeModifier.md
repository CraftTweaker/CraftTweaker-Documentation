# AttributeModifier

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeModifier;
```


## Extending Record

AttributeModifier extends Record. That means all methods available in Record are also available in AttributeModifier

## Static Methods

:::group{name=create}

Creates a new AttributeModifier

Returns: the new attribute modifier  
Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)

```zenscript
// AttributeModifier.create(id as ResourceLocation, amount as double, operation as AttributeOperation) as AttributeModifier

AttributeModifier.create(<resource:crafttweaker:generic.scripting>, 11.4, AttributeOperation.ADDITION);
```

| Parameter |                                  Type                                  |                Description                |
|-----------|------------------------------------------------------------------------|-------------------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation)             | the id of this attribute modifier         |
| amount    | double                                                                 | the amount of this attribute modifier     |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | the operation of this attribute modifier. |


:::

## Properties

|   Name    |                                  Type                                  | Has Getter | Has Setter |                  Description                  |
|-----------|------------------------------------------------------------------------|------------|------------|-----------------------------------------------|
| amount    | double                                                                 | true       | false      | Gets the amount of this AttributeModifier.    |
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation)             | true       | false      | Gets the ID of this AttributeModifier.        |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | true       | false      | Gets the operation of this AttributeModifier. |

