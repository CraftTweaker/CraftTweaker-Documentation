# AbstractTileEntityGrave

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.tileentities.AbstractTileEntityGrave;
```


## Extending TileEntityRack

AbstractTileEntityGrave extends [TileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/TileEntityRack). That means all methods available in [TileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/TileEntityRack) are also available in AbstractTileEntityGrave

## Methods

:::group{name=getGraveData}

Return Type: [IGraveData](/mods/sdmcrtplus/integration/minecolonies/api/colony/IGraveData)

```zenscript
// AbstractTileEntityGrave.getGraveData() as IGraveData

myAbstractTileEntityGrave.getGraveData();
```

:::

:::group{name=setGraveData}

```zenscript
AbstractTileEntityGrave.setGraveData(graveData as IGraveData)
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| graveData | [IGraveData](/mods/sdmcrtplus/integration/minecolonies/api/colony/IGraveData) |


:::


