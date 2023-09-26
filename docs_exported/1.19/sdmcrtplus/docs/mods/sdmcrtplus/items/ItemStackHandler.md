# ItemStackHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.items.ItemStackHandler;
```


## Implemented Interfaces
ItemStackHandler implements the following interfaces. That means all methods defined in these interfaces are also available in ItemStackHandler

- [IItemHandler](/forge/api/capability/IItemHandler)
- [IItemHandlerModifiable](/mods/sdmcrtplus/items/IItemHandlerModifiable)

## Methods

:::group{name=getSlots}

Return Type: int

```zenscript
// ItemStackHandler.getSlots() as int

myItemStackHandler.getSlots();
```

:::

:::group{name=getStackInSlot}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
ItemStackHandler.getStackInSlot(slot as int) as ItemStack
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::


