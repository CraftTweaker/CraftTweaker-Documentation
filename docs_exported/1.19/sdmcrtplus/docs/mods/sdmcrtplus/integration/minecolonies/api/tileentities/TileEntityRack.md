# TileEntityRack

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.tileentities.TileEntityRack;
```


## Extending AbstractTileEntityRack

TileEntityRack extends [AbstractTileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityRack). That means all methods available in [AbstractTileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityRack) are also available in TileEntityRack

## Methods

:::group{name=getAllContent}

Return Type: int?[[ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage)]

```zenscript
// TileEntityRack.getAllContent() as int?[ItemStorage]

myTileEntityRack.getAllContent();
```

:::

:::group{name=getCount}

Return Type: int

```zenscript
TileEntityRack.getCount(storage as ItemStorage) as int
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| storage   | [ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage) |


:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// TileEntityRack.getDisplayName() as Component

myTileEntityRack.getDisplayName();
```

:::

:::group{name=getItemCount}

Return Type: int

```zenscript
TileEntityRack.getItemCount(predicate as Predicate<ItemStack>) as int
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| predicate | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; |


:::

:::group{name=getOtherChest}

Return Type: [AbstractTileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityRack)

```zenscript
// TileEntityRack.getOtherChest() as AbstractTileEntityRack

myTileEntityRack.getOtherChest();
```

:::

:::group{name=getUpgradeSize}

Return Type: int

```zenscript
// TileEntityRack.getUpgradeSize() as int

myTileEntityRack.getUpgradeSize();
```

:::

:::group{name=hasItemStack}

Return Type: boolean

```zenscript
TileEntityRack.hasItemStack(itemStackSelectionPredicate as Predicate<ItemStack>) as boolean
```

|          Parameter          |                                                Type                                                |
|-----------------------------|----------------------------------------------------------------------------------------------------|
| itemStackSelectionPredicate | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; |


:::

:::group{name=hasSimilarStack}

Return Type: boolean

```zenscript
TileEntityRack.hasSimilarStack(stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// TileEntityRack.isEmpty() as boolean

myTileEntityRack.isEmpty();
```

:::

:::group{name=setChanged}

```zenscript
// TileEntityRack.setChanged()

myTileEntityRack.setChanged();
```

:::

:::group{name=setRemoved}

```zenscript
// TileEntityRack.setRemoved()

myTileEntityRack.setRemoved();
```

:::

:::group{name=updateItemStorage}

```zenscript
// TileEntityRack.updateItemStorage()

myTileEntityRack.updateItemStorage();
```

:::

:::group{name=upgradeRackSize}

```zenscript
// TileEntityRack.upgradeRackSize()

myTileEntityRack.upgradeRackSize();
```

:::


