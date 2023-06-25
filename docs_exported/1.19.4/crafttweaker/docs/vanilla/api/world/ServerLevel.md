# ServerLevel

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.ServerLevel;
```


## Extending Level

ServerLevel extends [Level](/vanilla/api/world/Level). That means all methods available in [Level](/vanilla/api/world/Level) are also available in ServerLevel

## Methods

:::group{name=getCustomData}

Gets the custom data that is saved/loaded to/from disk when the level is saved/loaded to/from disk.

 This lets you store data on this specific level, so data stored in the Overworld will not be accessible from the Nether.

Returns: The custom data for this world.  
Return Type: [CraftTweakerSavedData](/vanilla/api/world/CraftTweakerSavedData)

```zenscript
// ServerLevel.getCustomData() as CraftTweakerSavedData

myServerLevel.getCustomData();
```

:::

:::group{name=getEntities}

Gets entities in the world that match the given Predicate and the given EntityType (if provided).

Returns: A List of Entities that match.  
Return Type: stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// ServerLevel.getEntities(predicate as Predicate<Entity>, type as EntityType<Entity>) as stdlib.List<Entity>

myServerLevel.getEntities((entity as MCEntity) => entity.isImmuneToFire(), <entitytype:minecraft:sheep>);
```

| Parameter |                                           Type                                           |           Description           | Optional |
|-----------|------------------------------------------------------------------------------------------|---------------------------------|----------|
| predicate | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt;                                    | The predicate to check against. | false    |
| type      | [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt; |                                 | true     |


:::

:::group{name=isRaided}

Checks if a position is within an active raid.

Returns: Whether the position was inside an active raid.  
Return Type: boolean

```zenscript
// ServerLevel.isRaided(pos as BlockPos) as boolean

myServerLevel.isRaided(new BlockPos(0, 1, 2));
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=isSlimeChunk}

Checks if a position is within a chunk that is considered a slime chunk.

Returns: Whether the position was inside a slime chunk.  
Return Type: boolean

```zenscript
// ServerLevel.isSlimeChunk(pos as BlockPos) as boolean

myServerLevel.isSlimeChunk(new BlockPos(0, 1, 2));
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=isVillage}

Checks if a position is within a village.

Returns: Whether the position was inside a village.  
Return Type: boolean

```zenscript
// ServerLevel.isVillage(pos as BlockPos) as boolean

myServerLevel.isVillage(new BlockPos(0, 1, 2));
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=setTimeToDay}

Sets the time of the Minecraft day to day. This is like using the
 "time set day" command or setting the time to 1000.

```zenscript
// ServerLevel.setTimeToDay()

myServerLevel.setTimeToDay();
```

:::

:::group{name=setTimeToMidnight}

Sets the time of the Minecraft day to midnight. This is like using the
 "time set midnight" command or setting the time to 18000.

```zenscript
// ServerLevel.setTimeToMidnight()

myServerLevel.setTimeToMidnight();
```

:::

:::group{name=setTimeToNight}

Sets the time of the Minecraft day to night. This is like using the
 "time set night" command or setting the time to 13000.

```zenscript
// ServerLevel.setTimeToNight()

myServerLevel.setTimeToNight();
```

:::

:::group{name=setTimeToNoon}

Sets the time of the Minecraft day to noon. This is like using the
 "time set noon" command or setting the time to 6000.

```zenscript
// ServerLevel.setTimeToNoon()

myServerLevel.setTimeToNoon();
```

:::


## Properties

|     Name      |                               Type                                | Has Getter | Has Setter |                                                                                                                 Description                                                                                                                  |
|---------------|-------------------------------------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| customData    | [CraftTweakerSavedData](/vanilla/api/world/CraftTweakerSavedData) | true       | false      | Gets the custom data that is saved/loaded to/from disk when the level is saved/loaded to/from disk. <br />  <br />  This lets you store data on this specific level, so data stored in the Overworld will not be accessible from the Nether. |
| damageSources | [DamageSources](/vanilla/api/world/damage/DamageSources)          | true       | false      |                                                                                                                                                                                                                                              |
| dayTime       | [ServerLevel](/vanilla/api/world/ServerLevel)                     | false      | true       | Sets the time of the Minecraft day.                                                                                                                                                                                                          |
| seed          | long                                                              | true       | false      | Gets the random seed of the world.                                                                                                                                                                                                           |
| server        | [Server](/vanilla/api/game/Server)                                | true       | false      |                                                                                                                                                                                                                                              |

