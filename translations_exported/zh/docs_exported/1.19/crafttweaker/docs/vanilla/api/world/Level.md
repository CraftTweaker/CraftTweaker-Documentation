# Level

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Level;
```


## Extending CapabilityProvider&lt;Level&gt;

Level extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Level](/vanilla/api/world/Level)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Level](/vanilla/api/world/Level)&gt; are also available in Level

## 已实现的接口
Level implements the following interfaces. That means all methods defined in these interfaces are also available in Level

- AutoCloseable

## 使用方式

:::group{name=addFreshEntity}

add an entity to the world, return if the entity is added successfully.

Return Type: boolean

```zenscript
Level.addFreshEntity(entity as Entity) as boolean
```

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=destroyBlock}

Destroys a block within the world.

Returns: Whether the block was changed.  
Return Type: boolean

```zenscript
// Level.destroyBlock(pos as BlockPos, doDrops as boolean) as boolean

myLevel.destroyBlock(new BlockPos(0, 1, 2), true);
```

| 参数      | 类型                                          | 描述                                            |
| ------- | ------------------------------------------- | --------------------------------------------- |
| 点       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the block.                    |
| doDrops | 布尔值                                         | Whether the block drops itself and it's loot. |


:::

:::group{name=destroyBlock}

Destroys a block within the world.

Returns: Whether the block was changed.  
Return Type: boolean

```zenscript
// Level.destroyBlock(pos as BlockPos, doDrops as boolean, breaker as Entity?) as boolean

myLevel.destroyBlock(new BlockPos(0, 1, 2), true, player);
```

| 参数      | 类型                                          | 描述                                            |
| ------- | ------------------------------------------- | --------------------------------------------- |
| 点       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the block.                    |
| doDrops | 布尔值                                         | Whether the block drops itself and it's loot. |
| breaker | [Entity](/vanilla/api/entity/Entity)?       | The entity to break the block.                |


:::

:::group{name=getBestNeighborSignal}

Gets the highest redstone signal available to a position from any of it's neighbors.

Returns: The highest redstone signal available to the position.  
Return Type: int

```zenscript
// Level.getBestNeighborSignal(pos as BlockPos) as int

myLevel.getBestNeighborSignal(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                     |
| -- | ------------------------------------------- | ---------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to check. |


:::

:::group{name=getBiome}

Gets the biome at a given position.

Returns: The biome at the given position.  
Return Type: [Biome](/vanilla/api/world/biome/Biome)

```zenscript
// Level.getBiome(pos as BlockPos) as Biome

myLevel.getBiome(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                       |
| -- | ------------------------------------------- | ------------------------ |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=getBlockEntity}

Return Type: [BlockEntity](/vanilla/api/block/entity/BlockEntity)?

```zenscript
Level.getBlockEntity(pos as BlockPos) as BlockEntity?
```

| 参数 | 类型                                          |
| -- | ------------------------------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBlockEntityData}

Gets the tile entity data for a tile entity at a given position.

Returns: The data of the tile entity.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// Level.getBlockEntityData(pos as BlockPos) as IData

myLevel.getBlockEntityData(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                               |
| -- | ------------------------------------------- | -------------------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the tile entity. |


:::

:::group{name=getBlockState}

Gets the block state at a given position.

Returns: The block state at the position.  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// Level.getBlockState(pos as BlockPos) as BlockState

myLevel.getBlockState(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                       |
| -- | ------------------------------------------- | ------------------------ |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=getDayTime}

Return Type: long

```zenscript
// Level.getDayTime() as long

myLevel.getDayTime();
```

:::

:::group{name=getDirectSignalTo}

Gets the highest strong (direct) redstone signal of any neighboring block.

Returns: The highest strong (direct) redstone signal of all directly neighboring blocks.  
Return Type: int

```zenscript
// Level.getDirectSignalTo(pos as BlockPos) as int

myLevel.getDirectSignalTo(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                     |
| -- | ------------------------------------------- | ---------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to check. |


:::

:::group{name=getEntities}

Gets all entities in given area, excluding the one passed into it.

Return Type: stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// Level.getEntities(excludingEntity as Entity?, x1 as double, y1 as double, z1 as double, x2 as double, y2 as double, z2 as double, predicate as Predicate<Entity>) as stdlib.List<Entity>

myLevel.getEntities(entity, 1.0, 1.0, 1.0, 11.4, 11.4, 11.4, (entityIn) => entityIn.isInWater());
```

| 参数              | 类型                                                                | 描述                |
| --------------- | ----------------------------------------------------------------- | ----------------- |
| excludingEntity | [Entity](/vanilla/api/entity/Entity)?                             |                   |
| x1              | double                                                            |                   |
| y1              | double                                                            |                   |
| z1              | double                                                            |                   |
| x2              | double                                                            |                   |
| y2              | double                                                            |                   |
| z2              | double                                                            |                   |
| predicate       | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; | the entity filter |


:::

:::group{name=getEntitiesInArea}

Gets all entities in given area, but the arguments are block poses. If `pos2` is omitted, it will use `pos1.add(1, 1, 1)`

Returns: all entities in given area  
Return Type: stdlib.List&lt;T&gt;

```zenscript
Level.getEntitiesInArea<T : Entity>(pos1 as BlockPos, pos2 as BlockPos) as stdlib.List<T>
```

| 参数   | 类型                                          | 可选    |
| ---- | ------------------------------------------- | ----- |
| pos1 | [BlockPos](/vanilla/api/util/math/BlockPos) | false |
| pos2 | [BlockPos](/vanilla/api/util/math/BlockPos) | true  |
| T    | [Entity](/vanilla/api/entity/Entity)        |       |


:::

:::group{name=getEntitiesInAreaExcluding}



Return Type: stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// Level.getEntitiesInAreaExcluding(excludingEntity as Entity?, predicate as Predicate<Entity>, pos1 as BlockPos, pos2 as BlockPos) as stdlib.List<Entity>

myLevel.getEntitiesInAreaExcluding(entity, (entityIn) => entityIn.isInWater(), new BlockPos(0, 1, 2), new BlockPos(3, 4, 5));
```

| 参数              | 类型                                                                | 可选    |
| --------------- | ----------------------------------------------------------------- | ----- |
| excludingEntity | [Entity](/vanilla/api/entity/Entity)?                             | false |
| predicate       | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; | false |
| pos1            | [BlockPos](/vanilla/api/util/math/BlockPos)                       | false |
| pos2            | [BlockPos](/vanilla/api/util/math/BlockPos)                       | true  |


:::

:::group{name=getEntitiesOfClass}

Gets all entities in given area.

Returns: all entities in given area.  
Return Type: stdlib.List&lt;T&gt;

```zenscript
Level.getEntitiesOfClass<T : Entity>(x1 as double, y1 as double, z1 as double, x2 as double, y2 as double, z2 as double) as stdlib.List<T>
```

| 参数 | 类型                                   |
| -- | ------------------------------------ |
| x1 | double                               |
| y1 | double                               |
| z1 | double                               |
| x2 | double                               |
| y2 | double                               |
| z2 | double                               |
| T  | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=getGametime}

Return Type: long

```zenscript
// Level.getGametime() as long

myLevel.getGametime();
```

:::

:::group{name=getSignal}

Gets the redstone signal strength available to a position from a given direction.

Returns: The redstone signal strength available from that direction.  
Return Type: int

```zenscript
// Level.getSignal(pos as BlockPos, direction as Direction) as int

myLevel.getSignal(new BlockPos(0, 1, 2), <direction:north>);
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| 点         | [BlockPos](/vanilla/api/util/math/BlockPos)        | The position to check.  |
| direction | [Direction](/vanilla/api/util/direction/Direction) | The direction to query. |


:::

:::group{name=globalLevelEvent}

Triggers a predetermined event on the client. Using this on a server or integrated server will send the event to all nearby players.

```zenscript
// Level.globalLevelEvent(eventId as int, pos as BlockPos, data as int)

myLevel.globalLevelEvent(2005, new BlockPos(0, 1, 2), 0);
```

| 参数      | 类型                                          | 描述                                                                                                          |
| ------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| eventId | int                                         | The ID of the event to play.                                                                                |
| 点       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the event.                                                                                  |
| data    | int                                         | Four bytes of additional data encoded as an integer. This <br />                 is generally unused. |


:::

:::group{name=hasNeighborSignal}

Checks if a given position is receiving a redstone signal.

Returns: Whether the position is receiving a redstone signal.  
Return Type: boolean

```zenscript
// Level.hasNeighborSignal(pos as BlockPos) as boolean

myLevel.hasNeighborSignal(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                     |
| -- | ------------------------------------------- | ---------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to check. |


:::

:::group{name=isClientSide}

Return Type: boolean

```zenscript
// Level.isClientSide() as boolean

myLevel.isClientSide();
```

:::

:::group{name=isDay}

Return Type: boolean

```zenscript
// Level.isDay() as boolean

myLevel.isDay();
```

:::

:::group{name=isEmptyBlock}

Checks if the block at a given position is empty.

Returns: Whether the block is empty.  
Return Type: boolean

```zenscript
// Level.isEmptyBlock(pos as BlockPos) as boolean

myLevel.isEmptyBlock(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                       |
| -- | ------------------------------------------- | ------------------------ |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=isLoaded}

Checks if the block at a given position is in a loaded chunk.

Returns: Whether the position is in a loaded chunk.  
Return Type: boolean

```zenscript
// Level.isLoaded(pos as BlockPos) as boolean

myLevel.isLoaded(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                       |
| -- | ------------------------------------------- | ------------------------ |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=isNight}

Return Type: boolean

```zenscript
// Level.isNight() as boolean

myLevel.isNight();
```

:::

:::group{name=isRainingAt}

Checks if it is raining at a specific position. This can never be true if the position does not have direct line of sight to the sky.

Returns: Whether it is raining at the current position.  
Return Type: boolean

```zenscript
// Level.isRainingAt(pos as BlockPos) as boolean

myLevel.isRainingAt(new BlockPos(0, 1, 2));
```

| 参数 | 类型                                          | 描述                     |
| -- | ------------------------------------------- | ---------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to check. |


:::

:::group{name=levelEvent}

Triggers a predetermined event on the client. Using this on a server or integrated server will send the event to all nearby players.

```zenscript
// Level.levelEvent(excluded as Player?, eventId as int, pos as BlockPos, data as int)

myLevel.levelEvent(player, 2005, new BlockPos(0, 1, 2), 0);
```

| 参数       | 类型                                                | 描述                                                                                                           |
| -------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| excluded | [Player](/vanilla/api/entity/type/player/Player)? | An excluded player who will not receive the event.                                                           |
| eventId  | int                                               | The ID of the event to play.                                                                                 |
| 点        | [BlockPos](/vanilla/api/util/math/BlockPos)       | The position of the event.                                                                                   |
| data     | int                                               | Four bytes of additional data encoded as an integer. This <br />                  is generally unused. |


:::

:::group{name=rayTraceBlocks}

Creates a ray trace from one vector to the other vector, which will stop at a block or a fluid.

Returns: a [BlockHitResult](/vanilla/api/util/BlockHitResult) holding the result, the position and facing the ray stops.  
Return Type: [BlockHitResult](/vanilla/api/util/BlockHitResult)

```zenscript
// Level.rayTraceBlocks(startVec as Vec3, endVec as Vec3, blockMode as BlockClipContext, fluidMode as FluidClipContext, entity as Entity) as BlockHitResult

myLevel.rayTraceBlocks(new Vec3(0.0, 0.0, 0.0), new Vec3(1.1, 4.5, 1.4), RayTraceBlockMode.OUTLINE, RayTraceFluidMode.NONE, entity);
```

| 参数        | 类型                                                           | 描述                                                                    | 可选    |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------- | ----- |
| startVec  | [Vec3](/vanilla/api/util/math/Vec3)                          | a vector which describes the starting point                           | false |
| endVec    | [Vec3](/vanilla/api/util/math/Vec3)                          | a vector which describes the direction and length we are searching in | false |
| blockMode | [BlockClipContext](/vanilla/api/world/clip/BlockClipContext) | the type of block that the ray trace would stop at.                   | false |
| fluidMode | [FluidClipContext](/vanilla/api/world/clip/FluidClipContext) | the type of fluid that the ray trace would stop at.                   | false |
| entity    | [Entity](/vanilla/api/entity/Entity)                         | the entity for selection context                                      | true  |


:::

:::group{name=sequence}

Creates a new [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt; for this level.

 [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;'s let you compose scripted events such as waiting 5 ticks, then setting the weather to rain.

Returns: A new [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt; for this level.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;[Level](/vanilla/api/world/Level),[MapData](/vanilla/api/data/MapData)&gt;

```zenscript
// Level.sequence(data as MapData) as SequenceBuilder<Level,MapData>

myLevel.sequence({version: "1.0.0"});
```

| 参数   | 类型                                         | 可选   | 默认值                                 |
| ---- | ------------------------------------------ | ---- | ----------------------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | true | new crafttweaker.api.data.MapData() |


:::

:::group{name=sequence}

Creates a new [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt; for this level.

 [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;'s let you compose scripted events such as waiting 5 ticks, then setting the weather to rain.

Returns: A new [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt; for this level.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;[Level](/vanilla/api/world/Level),T&gt;

```zenscript
// Level.sequence<T : Object>(data as T) as SequenceBuilder<Level,T>

myLevel.sequence<crafttweaker.api.data.MapData>({version: "1.0.0"});
```

| 参数   | 类型     |
| ---- | ------ |
| data | T      |
| T    | Object |


:::

:::group{name=setBlockAndUpdate}

Sets the block and its state at a given position.

Returns: Whether the block was changed.  
Return Type: boolean

```zenscript
// Level.setBlockAndUpdate(pos as BlockPos, state as BlockState) as boolean

myLevel.setBlockAndUpdate(new BlockPos(0, 1, 2), <blockstate:minecraft:iron_block>);
```

| 参数    | 类型                                          | 描述                                |
| ----- | ------------------------------------------- | --------------------------------- |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to set the block at. |
| state | [BlockState](/vanilla/api/block/BlockState) | The new state of the block.       |


:::

:::group{name=setRainingLevel}

Sets the current rain level.

```zenscript
// Level.setRainingLevel(level as float)

myLevel.setRainingLevel(0.5);
```

| 参数    | 类型    | 描述                                 |
| ----- | ----- | ---------------------------------- |
| level | float | The new rain level between 0 and 1 |


:::


## 参数

| 名称               | 类型                                                  | 可获得   | 可设置   | 描述                                                             |
| ---------------- | --------------------------------------------------- | ----- | ----- | -------------------------------------------------------------- |
| daytime          | long                                                | true  | false |                                                                |
| difficulty       | string                                              | true  | false | Gets the difficulty setting for the world.                     |
| difficultyLocked | 布尔值                                                 | true  | false | Checks if the difficulty of the world has been locked.         |
| dimension        | [资源位置](/vanilla/api/resource/ResourceLocation)      | true  | false | Gets the registry name of the dimension this world represents. |
| gameTime         | long                                                | true  | false |                                                                |
| hardcore         | 布尔值                                                 | true  | false | Checks if hardcore mode is enabled.                            |
| isClientSide     | 布尔值                                                 | true  | false |                                                                |
| isDay            | 布尔值                                                 | true  | false |                                                                |
| isNight          | 布尔值                                                 | true  | false |                                                                |
| rainLevel        | [Level](/vanilla/api/world/Level)                   | false | true  | Sets the current rain level.                                   |
| raining          | 布尔值                                                 | true  | false | Checks if it is raining.                                       |
| random           | [RandomSource](/vanilla/api/util/math/RandomSource) | true  | false |                                                                |
| seaLevel         | int                                                 | true  | false | Gets the height of the sea level.                              |
| thundering       | 布尔值                                                 | true  | false | Checks if there is a thunder storm.                            |

