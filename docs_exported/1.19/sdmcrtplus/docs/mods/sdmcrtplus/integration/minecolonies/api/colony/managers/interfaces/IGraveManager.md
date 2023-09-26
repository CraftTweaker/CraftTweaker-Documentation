# IGraveManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IGraveManager;
```


## Methods

:::group{name=addNewGrave}

Return Type: boolean

```zenscript
IGraveManager.addNewGrave(var1 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=createCitizenGrave}

```zenscript
IGraveManager.createCitizenGrave(var1 as Level, var2 as BlockPos, var3 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)                                                 |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)                                       |
| var3      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getGraves}

Return Type: bool?[[BlockPos](/vanilla/api/util/math/BlockPos)]

```zenscript
// IGraveManager.getGraves() as bool?[BlockPos]

myIGraveManager.getGraves();
```

:::

:::group{name=onColonyTick}

```zenscript
IGraveManager.onColonyTick(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=read}

```zenscript
IGraveManager.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=removeGrave}

```zenscript
IGraveManager.removeGrave(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=reserveGrave}

Return Type: boolean

```zenscript
IGraveManager.reserveGrave(var1 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=reserveNextFreeGrave}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IGraveManager.reserveNextFreeGrave() as BlockPos

myIGraveManager.reserveNextFreeGrave();
```

:::

:::group{name=unReserveGrave}

```zenscript
IGraveManager.unReserveGrave(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=write}

```zenscript
IGraveManager.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


