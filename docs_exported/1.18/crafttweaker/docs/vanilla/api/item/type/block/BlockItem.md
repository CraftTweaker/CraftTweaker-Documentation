# BlockItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.block.BlockItem;
```


## Extending ItemDefinition

BlockItem extends [ItemDefinition](/vanilla/api/item/ItemDefinition). That means all methods available in [ItemDefinition](/vanilla/api/item/ItemDefinition) are also available in BlockItem

## Casters

|            Result Type             | Is Implicit |
|------------------------------------|-------------|
| [Block](/vanilla/api/block/Block)? | false       |

## Methods

:::group{name=getBlock}

Return Type: [Block](/vanilla/api/block/Block)?

```zenscript
// BlockItem.getBlock() as Block?

myBlockItem.getBlock();
```

:::


## Properties

| Name  |                Type                | Has Getter | Has Setter |
|-------|------------------------------------|------------|------------|
| block | [Block](/vanilla/api/block/Block)? | true       | false      |

