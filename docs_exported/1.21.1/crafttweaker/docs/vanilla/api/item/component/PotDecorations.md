# PotDecorations

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.PotDecorations;
```


## Extending Record

PotDecorations extends Record. That means all methods available in Record are also available in PotDecorations

## Static Methods

:::group{name=of}

Return Type: [PotDecorations](/vanilla/api/item/component/PotDecorations)

```zenscript
PotDecorations.of(back as ItemDefinition?, left as ItemDefinition?, right as ItemDefinition?, front as ItemDefinition?) as PotDecorations
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| back      | [ItemDefinition](/vanilla/api/item/ItemDefinition)? |
| left      | [ItemDefinition](/vanilla/api/item/ItemDefinition)? |
| right     | [ItemDefinition](/vanilla/api/item/ItemDefinition)? |
| front     | [ItemDefinition](/vanilla/api/item/ItemDefinition)? |


:::

## Properties

|  Name   |                        Type                         | Has Getter | Has Setter |
|---------|-----------------------------------------------------|------------|------------|
| back    | [ItemDefinition](/vanilla/api/item/ItemDefinition)? | true       | false      |
| front   | [ItemDefinition](/vanilla/api/item/ItemDefinition)? | true       | false      |
| left    | [ItemDefinition](/vanilla/api/item/ItemDefinition)? | true       | false      |
| ordered | stdlib.List&lt;E&gt;?                               | true       | false      |
| right   | [ItemDefinition](/vanilla/api/item/ItemDefinition)? | true       | false      |

