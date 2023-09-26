# AbstractTileEntityRack

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.tileentities.AbstractTileEntityRack;
```


## Extending BlockEntity

AbstractTileEntityRack extends [BlockEntity](/vanilla/api/block/entity/BlockEntity). That means all methods available in [BlockEntity](/vanilla/api/block/entity/BlockEntity) are also available in AbstractTileEntityRack

## Methods

:::group{name=getCount}

Return Type: int

```zenscript
AbstractTileEntityRack.getCount(var1 as ItemStorage) as int
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage) |


:::

:::group{name=getCount}

Return Type: int

```zenscript
AbstractTileEntityRack.getCount(var1 as ItemStack, var2 as boolean, var3 as boolean) as int
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |
| var2      | boolean                                  |
| var3      | boolean                                  |


:::

:::group{name=getFreeSlots}

Return Type: int

```zenscript
// AbstractTileEntityRack.getFreeSlots() as int

myAbstractTileEntityRack.getFreeSlots();
```

:::

:::group{name=getInventory}

Return Type: [IItemHandlerModifiable](/mods/sdmcrtplus/items/IItemHandlerModifiable)

```zenscript
// AbstractTileEntityRack.getInventory() as IItemHandlerModifiable

myAbstractTileEntityRack.getInventory();
```

:::

:::group{name=getItemCount}

Return Type: int

```zenscript
AbstractTileEntityRack.getItemCount(var1 as Predicate<ItemStack>) as int
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; |


:::

:::group{name=getOtherChest}

Return Type: [AbstractTileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityRack)

```zenscript
// AbstractTileEntityRack.getOtherChest() as AbstractTileEntityRack

myAbstractTileEntityRack.getOtherChest();
```

:::

:::group{name=getUpgradeSize}

Return Type: int

```zenscript
// AbstractTileEntityRack.getUpgradeSize() as int

myAbstractTileEntityRack.getUpgradeSize();
```

:::

:::group{name=hasItemStack}

Return Type: boolean

```zenscript
AbstractTileEntityRack.hasItemStack(var1 as Predicate<ItemStack>) as boolean
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; |


:::

:::group{name=hasItemStack}

Return Type: boolean

```zenscript
AbstractTileEntityRack.hasItemStack(var1 as ItemStack, var2 as int, var3 as boolean) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |
| var2      | int                                      |
| var3      | boolean                                  |


:::

:::group{name=hasSimilarStack}

Return Type: boolean

```zenscript
AbstractTileEntityRack.hasSimilarStack(var1 as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// AbstractTileEntityRack.isEmpty() as boolean

myAbstractTileEntityRack.isEmpty();
```

:::

:::group{name=setBuildingPos}

```zenscript
AbstractTileEntityRack.setBuildingPos(pos as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setInWarehouse}

```zenscript
AbstractTileEntityRack.setInWarehouse(var1 as bool?)
```

| Parameter | Type  |
|-----------|-------|
| var1      | bool? |


:::

:::group{name=updateItemStorage}

```zenscript
// AbstractTileEntityRack.updateItemStorage()

myAbstractTileEntityRack.updateItemStorage();
```

:::

:::group{name=upgradeRackSize}

```zenscript
// AbstractTileEntityRack.upgradeRackSize()

myAbstractTileEntityRack.upgradeRackSize();
```

:::


