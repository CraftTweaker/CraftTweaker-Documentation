# AttributeModifierTemplate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeModifierTemplate;
```


## Methods

:::group{name=create}

Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)

```zenscript
AttributeModifierTemplate.create(amplifier as int) as AttributeModifier
```

| Parameter | Type |
|-----------|------|
| amplifier | int  |


:::


## Properties

|        Name         |    Type     | Has Getter | Has Setter |
|---------------------|-------------|------------|------------|
| attributeModifierId | stdlib.UUID | true       | false      |

