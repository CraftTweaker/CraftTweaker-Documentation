# MCServerWorld

Represents the logical (server) implementation of the world. These are not
 limited to dedicated servers, they exist in single player worlds as part of
 the integrated server.

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCServerWorld;
```


## Extending MCWorld

MCServerWorld extends [MCWorld](/vanilla/api/world/MCWorld). That means all methods available in [MCWorld](/vanilla/api/world/MCWorld) are also available in MCServerWorld

## Methods

### isRaid

Checks if a position is within an active raid.

Return Type: boolean

```zenscript
MCServerWorld.isRaid(pos as BlockPos) as boolean
world as MCServerWorld.isRaid(new BlockPos(0, 1, 2));
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |

### isSlimeChunk

Checks if a position is within a chunk that is considered a slime chunk.

Return Type: boolean

```zenscript
MCServerWorld.isSlimeChunk(pos as BlockPos) as boolean
world as MCServerWorld.isSlimeChunk(new BlockPos(0, 1, 2));
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |

### isVillage

Checks if a position is within a village.

Return Type: boolean

```zenscript
MCServerWorld.isVillage(pos as BlockPos) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |

### setTimeToDay

Sets the time of the Minecraft day to day. This is like using the
 "time set day" command or setting the time to 1000.

Return Type: void

```zenscript
MCServerWorld.setTimeToDay() as void
world as MCServerWorld.setTimeToDay();
```
### setTimeToMidnight

Sets the time of the Minecraft day to midnight. This is like using the
 "time set midnight" command or setting the time to 18000.

Return Type: void

```zenscript
MCServerWorld.setTimeToMidnight() as void
world as MCServerWorld.setTimeToMidnight();
```
### setTimeToNight

Sets the time of the Minecraft day to night. This is like using the
 "time set night" command or setting the time to 13000.

Return Type: void

```zenscript
MCServerWorld.setTimeToNight() as void
world as MCServerWorld.setTimeToNight();
```
### setTimeToNoon

Sets the time of the Minecraft day to noon. This is like using the
 "time set noon" command or setting the time to 6000.

Return Type: void

```zenscript
MCServerWorld.setTimeToNoon() as void
world as MCServerWorld.setTimeToNoon();
```

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| seed | long | true | false |
| timeOfDay | [MCServerWorld](/vanilla/api/world/MCServerWorld) | false | true |

