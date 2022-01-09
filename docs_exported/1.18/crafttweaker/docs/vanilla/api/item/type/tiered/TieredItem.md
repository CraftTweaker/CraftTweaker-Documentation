# TieredItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.tiered.TieredItem;
```


## Extending ItemDefinition

TieredItem extends [ItemDefinition](/vanilla/api/item/ItemDefinition). That means all methods available in [ItemDefinition](/vanilla/api/item/ItemDefinition) are also available in TieredItem

## Methods

:::group{name=getTier}

Gets the tier of this item.

Returns: The IItemTier of this item.  
Return Type: [Tier](/vanilla/api/item/type/tiered/Tier)

```zenscript
// TieredItem.getTier() as Tier

myTieredItem.getTier();
```

:::


