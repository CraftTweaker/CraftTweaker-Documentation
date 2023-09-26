# WaystonesAPI

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.waystones.WaystonesAPI;
```


## Static Methods

:::group{name=createAttunedShard}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
WaystonesAPI.createAttunedShard(warpPlate as IWaystone) as ItemStack
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| warpPlate | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |


:::

:::group{name=createBoundScroll}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
WaystonesAPI.createBoundScroll(waystone as IWaystone) as ItemStack
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| waystone  | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |


:::

:::group{name=createCustomTeleportContext}

Return Type: [Either](/mods/sdmcrtplus/utils/core/Either)&lt;[IWaystoneTeleportContext](/mods/sdmcrtplus/integration/waystones/IWaystoneTeleportContext),[WaystoneTeleportError](/mods/sdmcrtplus/integration/waystones/WaystoneTeleportError)&gt;

```zenscript
WaystonesAPI.createCustomTeleportContext(entity as Entity, waystone as IWaystone) as Either<IWaystoneTeleportContext,WaystoneTeleportError>
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)                          |
| waystone  | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |


:::

:::group{name=createDefaultTeleportContext}

Return Type: [Either](/mods/sdmcrtplus/utils/core/Either)&lt;[IWaystoneTeleportContext](/mods/sdmcrtplus/integration/waystones/IWaystoneTeleportContext),[WaystoneTeleportError](/mods/sdmcrtplus/integration/waystones/WaystoneTeleportError)&gt;

```zenscript
WaystonesAPI.createDefaultTeleportContext(entity as Entity, waystone as IWaystone, warpMode as WarpMode, fromWaystone as IWaystone) as Either<IWaystoneTeleportContext,WaystoneTeleportError>
```

|  Parameter   |                             Type                              |
|--------------|---------------------------------------------------------------|
| entity       | [Entity](/vanilla/api/entity/Entity)                          |
| waystone     | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |
| warpMode     | [WarpMode](/mods/sdmcrtplus/integration/waystones/WarpMode)   |
| fromWaystone | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |


:::

:::group{name=forceTeleport}

Return Type: stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
WaystonesAPI.forceTeleport(context as invalid) as stdlib.List<Entity>
```

| Parameter |    Type     |
|-----------|-------------|
| context   | **invalid** |


:::

:::group{name=forceTeleportToWaystone}

Return Type: [Either](/mods/sdmcrtplus/utils/core/Either)&lt;stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;,[WaystoneTeleportError](/mods/sdmcrtplus/integration/waystones/WaystoneTeleportError)&gt;

```zenscript
WaystonesAPI.forceTeleportToWaystone(entity as Entity, waystone as IWaystone) as Either<stdlib.List<Entity>,WaystoneTeleportError>
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)                          |
| waystone  | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |


:::

:::group{name=getWaystone}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;[IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)&gt;

```zenscript
WaystonesAPI.getWaystone(level as Level, uuid as invalid) as Optional<IWaystone>
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| level     | [Level](/vanilla/api/world/Level) |
| uuid      | **invalid**                       |


:::

:::group{name=getWaystoneAt}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;[IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)&gt;

```zenscript
WaystonesAPI.getWaystoneAt(level as ServerLevel, pos as BlockPos) as Optional<IWaystone>
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)   |


:::

:::group{name=placeSharestone}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;[IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)&gt;

```zenscript
WaystonesAPI.placeSharestone(level as Level, pos as BlockPos, color as invalid) as Optional<IWaystone>
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |
| color     | **invalid**                                 |


:::

:::group{name=placeWarpPlate}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;[IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)&gt;

```zenscript
WaystonesAPI.placeWarpPlate(level as Level, pos as BlockPos) as Optional<IWaystone>
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=placeWaystone}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;[IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)&gt;

```zenscript
WaystonesAPI.placeWaystone(level as Level, pos as BlockPos, style as invalid) as Optional<IWaystone>
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |
| style     | **invalid**                                 |


:::

:::group{name=tryTeleport}

Return Type: [Either](/mods/sdmcrtplus/utils/core/Either)&lt;stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;,[WaystoneTeleportError](/mods/sdmcrtplus/integration/waystones/WaystoneTeleportError)&gt;

```zenscript
WaystonesAPI.tryTeleport(context as invalid) as Either<stdlib.List<Entity>,WaystoneTeleportError>
```

| Parameter |    Type     |
|-----------|-------------|
| context   | **invalid** |


:::

:::group{name=tryTeleportToWaystone}

Return Type: [Either](/mods/sdmcrtplus/utils/core/Either)&lt;stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;,[WaystoneTeleportError](/mods/sdmcrtplus/integration/waystones/WaystoneTeleportError)&gt;

```zenscript
WaystonesAPI.tryTeleportToWaystone(entity as Entity, waystone as IWaystone, warpMode as WarpMode, fromWaystone as IWaystone) as Either<stdlib.List<Entity>,WaystoneTeleportError>
```

|  Parameter   |                             Type                              |
|--------------|---------------------------------------------------------------|
| entity       | [Entity](/vanilla/api/entity/Entity)                          |
| waystone     | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |
| warpMode     | [WarpMode](/mods/sdmcrtplus/integration/waystones/WarpMode)   |
| fromWaystone | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone) |


:::

