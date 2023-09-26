# IWareHouse

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.workerbuildings.IWareHouse;
```


## Implemented Interfaces
IWareHouse implements the following interfaces. That means all methods defined in these interfaces are also available in IWareHouse

- [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

## Methods

:::group{name=canAccessWareHouse}

Return Type: boolean

```zenscript
IWareHouse.canAccessWareHouse(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getTileEntity}

Return Type: [AbstractTileEntityWareHouse](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityWareHouse)

```zenscript
// IWareHouse.getTileEntity() as AbstractTileEntityWareHouse

myIWareHouse.getTileEntity();
```

:::

:::group{name=hasContainerPosition}

Return Type: boolean

```zenscript
IWareHouse.hasContainerPosition(var1 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=upgradeContainers}

```zenscript
IWareHouse.upgradeContainers(var1 as Level)
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Level](/vanilla/api/world/Level) |


:::


