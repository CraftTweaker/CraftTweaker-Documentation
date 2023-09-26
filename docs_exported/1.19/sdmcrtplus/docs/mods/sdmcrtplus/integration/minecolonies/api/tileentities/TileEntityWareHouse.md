# TileEntityWareHouse

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.tileentities.TileEntityWareHouse;
```


## Extending AbstractTileEntityWareHouse

TileEntityWareHouse extends [AbstractTileEntityWareHouse](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityWareHouse). That means all methods available in [AbstractTileEntityWareHouse](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityWareHouse) are also available in TileEntityWareHouse

## Methods

:::group{name=getRackForStack}

Return Type: [BlockEntity](/vanilla/api/block/entity/BlockEntity)

```zenscript
TileEntityWareHouse.getRackForStack(itemStack as IItemStack) as BlockEntity
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::


