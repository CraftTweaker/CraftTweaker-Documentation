# TieredItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.tiered.TieredItem;
```


## Extending MCItemDefinition

TieredItem extends [MCItemDefinition](/vanilla/api/item/MCItemDefinition). That means all methods available in [MCItemDefinition](/vanilla/api/item/MCItemDefinition) are also available in TieredItem

## Methods

:::group{name=getTier}

Gets the tier of this item.

Returns: The IItemTier of this item.  
Return Type: [IItemTier](/vanilla/api/item/tiered/IItemTier)

```zenscript
// TieredItem.getTier() as IItemTier

myTieredItem.getTier();
```

:::


