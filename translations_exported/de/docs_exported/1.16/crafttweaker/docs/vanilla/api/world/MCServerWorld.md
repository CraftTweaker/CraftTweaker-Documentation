# MCServerWorld

Represents the logical (server) implementation of the world. These are not limited to dedicated servers, they exist in single player worlds as part of the integrated server.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCServerWorld;
```


## Extending MCWorld

MCServerWorld extends [MCWorld](/vanilla/api/world/MCWorld). That means all methods available in [MCWorld](/vanilla/api/world/MCWorld) are also available in MCServerWorld

## Methoden

:::group{name=getEntities}

Gets entities in the world that match the given Predicate and the given MCEntityType (if provided).

Returns: A List of Entities that match.  
Return Type: stdlib.List&lt;[MCEntity](/vanilla/api/entity/MCEntity)&gt;

```zenscript
// MCServerWorld.getEntities(predicate as Predicate<MCEntity>, type as MCEntityType) as stdlib.List<MCEntity>

(world as MCServerWorld).getEntities((entity as MCEntity) => entity.isImmuneToFire(), <entitytype:minecraft:sheep>);
```

| Parameter | Type                                                                  | Beschreibung                    | Optional | DefaultValue |
| --------- | --------------------------------------------------------------------- | ------------------------------- | -------- | ------------ |
| predicate | Predicate&lt;[MCEntity](/vanilla/api/entity/MCEntity)&gt; | The predicate to check against. | false    |              |
| type      | [MCEntityType](/vanilla/api/entities/MCEntityType)                    | No Description Provided         | true     |              |


:::

:::group{name=isRaid}

Checks if a position is within an active raid.

Returns: Whether or not the position was inside an active raid.  
Return Type: boolean

```zenscript
// MCServerWorld.isRaid(pos as BlockPos) as boolean

(world as MCServerWorld).isRaid(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Beschreibung             |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |


:::

:::group{name=isSlimeChunk}

Checks if a position is within a chunk that is considered a slime chunk.

Returns: Whether or not the position was inside a slime chunk.  
Return Type: boolean

```zenscript
// MCServerWorld.isSlimeChunk(pos as BlockPos) as boolean

(world as MCServerWorld).isSlimeChunk(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Beschreibung             |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |


:::

:::group{name=isVillage}

Checks if a position is within a village.

Returns: Whether or not the position was inside a village.  
Return Type: boolean

```zenscript
// MCServerWorld.isVillage(pos as BlockPos) as boolean

(world as MCServerWorld).isVillage(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Beschreibung             |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |


:::

:::group{name=setTimeToDay}

Sets the time of the Minecraft day to day. This is like using the "time set day" command or setting the time to 1000.

Return Type: void

```zenscript
// MCServerWorld.setTimeToDay() as void

(world as MCServerWorld).setTimeToDay();
```

:::

:::group{name=setTimeToMidnight}

Sets the time of the Minecraft day to midnight. This is like using the "time set midnight" command or setting the time to 18000.

Return Type: void

```zenscript
// MCServerWorld.setTimeToMidnight() as void

(world as MCServerWorld).setTimeToMidnight();
```

:::

:::group{name=setTimeToNight}

Sets the time of the Minecraft day to night. This is like using the "time set night" command or setting the time to 13000.

Return Type: void

```zenscript
// MCServerWorld.setTimeToNight() as void

(world as MCServerWorld).setTimeToNight();
```

:::

:::group{name=setTimeToNoon}

Sets the time of the Minecraft day to noon. This is like using the "time set noon" command or setting the time to 6000.

Return Type: void

```zenscript
// MCServerWorld.setTimeToNoon() as void

(world as MCServerWorld).setTimeToNoon();
```

:::


## Properties

| Name      | Type                                              | Has Getter | Has Setter | Beschreibung                        |
| --------- | ------------------------------------------------- | ---------- | ---------- | ----------------------------------- |
| seed      | long                                              | true       | false      | Gets the random seed of the world.  |
| server    | [MCServer](/vanilla/api/game/MCServer)            | true       | false      | No Description Provided             |
| timeOfDay | [MCServerWorld](/vanilla/api/world/MCServerWorld) | false      | true       | Sets the time of the Minecraft day. |

