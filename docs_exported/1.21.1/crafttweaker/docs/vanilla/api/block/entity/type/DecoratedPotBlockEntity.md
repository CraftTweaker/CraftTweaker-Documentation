# DecoratedPotBlockEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.type.DecoratedPotBlockEntity;
```


## Extending BlockEntity

DecoratedPotBlockEntity extends [BlockEntity](/vanilla/api/block/entity/BlockEntity). That means all methods available in [BlockEntity](/vanilla/api/block/entity/BlockEntity) are also available in DecoratedPotBlockEntity

## Implemented Interfaces
DecoratedPotBlockEntity implements the following interfaces. That means all methods defined in these interfaces are also available in DecoratedPotBlockEntity

- [RandomizableContainer](/vanilla/api/world/RandomizableContainer)
- [BlockContainerSingleItem](/vanilla/api/world/BlockContainerSingleItem)

## Methods

:::group{name=getDecorations}

Gets access to the decorations that make up the faces of the pot.

Returns: The decorations used by the faces of the pot.  
Return Type: [PotDecorations](/vanilla/api/item/component/PotDecorations)

```zenscript
// DecoratedPotBlockEntity.getDecorations() as PotDecorations

myDecoratedPotBlockEntity.getDecorations();
```

:::

:::group{name=getPotAsItem}

Creates a new decorated pot item with a copy of the pots decorations. Additional data like the pots contained item or loot table are not copied.

Returns: A new decorated pot item with a copy of the pots decorations.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// DecoratedPotBlockEntity.getPotAsItem() as ItemStack

myDecoratedPotBlockEntity.getPotAsItem();
```

:::


## Properties

|    Name     |                             Type                             | Has Getter | Has Setter |                            Description                            |
|-------------|--------------------------------------------------------------|------------|------------|-------------------------------------------------------------------|
| decorations | [PotDecorations](/vanilla/api/item/component/PotDecorations) | true       | false      | Gets access to the decorations that make up the faces of the pot. |

