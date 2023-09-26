# LevelHelper

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.majruszsdifficulty.LevelHelper;
```


## Static Methods

:::group{name=freezeWater}

```zenscript
LevelHelper.freezeWater(entity as Entity, radius as double, minimumIceDuration as int, maximumIceDuration as int)
```

|     Parameter      |                 Type                 |
|--------------------|--------------------------------------|
| entity             | [Entity](/vanilla/api/entity/Entity) |
| radius             | double                               |
| minimumIceDuration | int                                  |
| maximumIceDuration | int                                  |


:::

:::group{name=freezeWater}

```zenscript
LevelHelper.freezeWater(entity as Entity, radius as double, minimumIceDuration as int, maximumIceDuration as int, requireOnGround as boolean)
```

|     Parameter      |                 Type                 |
|--------------------|--------------------------------------|
| entity             | [Entity](/vanilla/api/entity/Entity) |
| radius             | double                               |
| minimumIceDuration | int                                  |
| maximumIceDuration | int                                  |
| requireOnGround    | boolean                              |


:::

:::group{name=getClampedRegionalDifficultyAt}

Return Type: double

```zenscript
LevelHelper.getClampedRegionalDifficultyAt(entity as Entity) as double
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=getClampedRegionalDifficultyAt}

Return Type: double

```zenscript
LevelHelper.getClampedRegionalDifficultyAt(level as Level, position as BlockPos) as double
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getDifficultyAt}

Return Type: [DifficultyInstance](/mods/sdmcrtplus/world/DifficultyInstance)

```zenscript
LevelHelper.getDifficultyAt(entity as Entity) as DifficultyInstance
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=getDifficultyAt}

Return Type: [DifficultyInstance](/mods/sdmcrtplus/world/DifficultyInstance)

```zenscript
LevelHelper.getDifficultyAt(level as Level, position as BlockPos) as DifficultyInstance
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getRegionalDifficultyAt}

Return Type: double

```zenscript
LevelHelper.getRegionalDifficultyAt(entity as Entity) as double
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=getRegionalDifficultyAt}

Return Type: double

```zenscript
LevelHelper.getRegionalDifficultyAt(level as Level, position as BlockPos) as double
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)           |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getSpawnData}

Return Type: [Pair](/vanilla/api/util/Pair)&lt;[Vec3](/vanilla/api/util/math/Vec3),[ServerLevel](/vanilla/api/world/ServerLevel)&gt;

```zenscript
LevelHelper.getSpawnData(player as ServerPlayer) as Pair<Vec3,ServerLevel>
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=isDayAt}

Return Type: boolean

```zenscript
LevelHelper.isDayAt(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=isEntityIn}

Return Type: boolean

```zenscript
LevelHelper.isEntityIn(entity as Entity, worldRegistryKey as ResourceKey<Level>) as boolean
```

|    Parameter     |                                             Type                                              |
|------------------|-----------------------------------------------------------------------------------------------|
| entity           | [Entity](/vanilla/api/entity/Entity)                                                          |
| worldRegistryKey | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |


:::

:::group{name=isEntityOutside}

Return Type: boolean

```zenscript
LevelHelper.isEntityOutside(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=isNightAt}

Return Type: boolean

```zenscript
LevelHelper.isNightAt(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=isRainingAt}

Return Type: boolean

```zenscript
LevelHelper.isRainingAt(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=setClearWeather}

```zenscript
LevelHelper.setClearWeather(level as Level, ticks as int)
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| level     | [Level](/vanilla/api/world/Level) |
| ticks     | int                               |


:::

:::group{name=spawnItemEntityFlyingTowardsDirection}

```zenscript
LevelHelper.spawnItemEntityFlyingTowardsDirection(itemStack as ItemStack, level as Level, from as Vec3, to as Vec3)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| itemStack | [ItemStack](/vanilla/api/item/ItemStack) |
| level     | [Level](/vanilla/api/world/Level)        |
| from      | [Vec3](/vanilla/api/util/math/Vec3)      |
| to        | [Vec3](/vanilla/api/util/math/Vec3)      |


:::

:::group{name=startRaining}

```zenscript
LevelHelper.startRaining(level as Level, ticks as int)
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| level     | [Level](/vanilla/api/world/Level) |
| ticks     | int                               |


:::

:::group{name=startRaining}

```zenscript
LevelHelper.startRaining(level as Level, ticks as int, withThunder as boolean)
```

|  Parameter  |               Type                |
|-------------|-----------------------------------|
| level       | [Level](/vanilla/api/world/Level) |
| ticks       | int                               |
| withThunder | boolean                           |


:::

:::group{name=teleportNearby}

```zenscript
LevelHelper.teleportNearby(target as LivingEntity, level as ServerLevel, offset as double)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| target    | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| level     | [ServerLevel](/vanilla/api/world/ServerLevel)    |
| offset    | double                                           |


:::

:::group{name=teleportToSpawnPosition}

```zenscript
LevelHelper.teleportToSpawnPosition(player as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

