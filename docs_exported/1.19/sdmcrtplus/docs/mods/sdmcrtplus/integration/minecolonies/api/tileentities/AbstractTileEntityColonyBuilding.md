# AbstractTileEntityColonyBuilding

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.tileentities.AbstractTileEntityColonyBuilding;
```


## Extending TileEntityRack

AbstractTileEntityColonyBuilding extends [TileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/TileEntityRack). That means all methods available in [TileEntityRack](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/TileEntityRack) are also available in AbstractTileEntityColonyBuilding

## Methods

:::group{name=getPositionedTags}

Return Type: stdlib.List&lt;string&gt;[[BlockPos](/vanilla/api/util/math/BlockPos)]

```zenscript
// AbstractTileEntityColonyBuilding.getPositionedTags() as stdlib.List<string>[BlockPos]

myAbstractTileEntityColonyBuilding.getPositionedTags();
```

:::

:::group{name=getSchematicCorners}

Return Type: [Tuple](/mods/sdmcrtplus/utils/core/Tuple)&lt;[BlockPos](/vanilla/api/util/math/BlockPos),[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// AbstractTileEntityColonyBuilding.getSchematicCorners() as Tuple<BlockPos,BlockPos>

myAbstractTileEntityColonyBuilding.getSchematicCorners();
```

:::

:::group{name=getTilePos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// AbstractTileEntityColonyBuilding.getTilePos() as BlockPos

myAbstractTileEntityColonyBuilding.getTilePos();
```

:::


