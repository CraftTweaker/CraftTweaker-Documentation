# IBuildingContainer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.IBuildingContainer;
```


## Implemented Interfaces
IBuildingContainer implements the following interfaces. That means all methods defined in these interfaces are also available in IBuildingContainer

- [ISchematicProvider](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/ISchematicProvider)
- [ICapabilityProvider](/forge/api/capability/ICapabilityProvider)

## Methods

:::group{name=addContainerPosition}

```zenscript
IBuildingContainer.addContainerPosition(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=alterPickUpPriority}

```zenscript
IBuildingContainer.alterPickUpPriority(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=deserializeNBT}

```zenscript
IBuildingContainer.deserializeNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=getContainers}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// IBuildingContainer.getContainers() as stdlib.List<BlockPos>

myIBuildingContainer.getContainers();
```

:::

:::group{name=getPickUpPriority}

Return Type: int

```zenscript
// IBuildingContainer.getPickUpPriority() as int

myIBuildingContainer.getPickUpPriority();
```

:::

:::group{name=getTileEntity}

Return Type: [AbstractTileEntityColonyBuilding](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityColonyBuilding)

```zenscript
// IBuildingContainer.getTileEntity() as AbstractTileEntityColonyBuilding

myIBuildingContainer.getTileEntity();
```

:::

:::group{name=registerBlockPosition}

```zenscript
IBuildingContainer.registerBlockPosition(var1 as Block, var2 as BlockPos, var3 as Level)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Block](/vanilla/api/block/Block)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |
| var3      | [Level](/vanilla/api/world/Level)           |


:::

:::group{name=registerBlockPosition}

```zenscript
IBuildingContainer.registerBlockPosition(var1 as BlockState, var2 as BlockPos, var3 as Level)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockState](/vanilla/api/block/BlockState) |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |
| var3      | [Level](/vanilla/api/world/Level)           |


:::

:::group{name=removeContainerPosition}

```zenscript
IBuildingContainer.removeContainerPosition(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=serializeNBT}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)

```zenscript
// IBuildingContainer.serializeNBT() as CompoundTag

myIBuildingContainer.serializeNBT();
```

:::

:::group{name=setTileEntity}

```zenscript
IBuildingContainer.setTileEntity(var1 as AbstractTileEntityColonyBuilding)
```

| Parameter |                                                              Type                                                               |
|-----------|---------------------------------------------------------------------------------------------------------------------------------|
| var1      | [AbstractTileEntityColonyBuilding](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityColonyBuilding) |


:::


