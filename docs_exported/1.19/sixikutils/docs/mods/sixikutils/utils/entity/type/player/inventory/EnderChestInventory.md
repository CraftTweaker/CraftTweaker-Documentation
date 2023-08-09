# EnderChestInventory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.entity.player.inventory.EnderChestInventory;
```


## Methods

:::group{name=addItem}

```zenscript
EnderChestInventory.addItem(item as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getContainerSize}

Return Type: int

```zenscript
// EnderChestInventory.getContainerSize() as int

myEnderChestInventory.getContainerSize();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
EnderChestInventory.getItem(index as int) as IItemStack
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=getItems}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)[]

```zenscript
// EnderChestInventory.getItems() as IItemStack[]

myEnderChestInventory.getItems();
```

:::

:::group{name=getMaxStackSize}

Return Type: int

```zenscript
// EnderChestInventory.getMaxStackSize() as int

myEnderChestInventory.getMaxStackSize();
```

:::

:::group{name=setItem}

```zenscript
EnderChestInventory.setItem(index as int, item as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| index     | int                                        |
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::


