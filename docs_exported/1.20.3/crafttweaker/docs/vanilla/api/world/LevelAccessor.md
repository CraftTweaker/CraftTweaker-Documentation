# LevelAccessor

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.LevelAccessor;
```


## Implemented Interfaces
LevelAccessor implements the following interfaces. That means all methods defined in these interfaces are also available in LevelAccessor

- [CommonLevelAccessor](/vanilla/api/world/CommonLevelAccessor)

## Methods

:::group{name=getCurrentDifficultyAt}

Return Type: [DifficultyInstance](/vanilla/api/world/DifficultyInstance)

```zenscript
LevelAccessor.getCurrentDifficultyAt(position as BlockPos) as DifficultyInstance
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=levelEvent}

Triggers a predetermined event on the client. Using this on a server
 or integrated server will send the event to all nearby players.

```zenscript
LevelAccessor.levelEvent(event as int, position as BlockPos, extra as int)
```

| Parameter |                    Type                     |                                              Description                                               |
|-----------|---------------------------------------------|--------------------------------------------------------------------------------------------------------|
| event     | int                                         | The ID of the event to play.                                                                           |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the event.                                                                             |
| extra     | int                                         | Four bytes of additional data encoded as an integer. This <br />                  is generally unused. |


:::

:::group{name=levelEvent}

Triggers a predetermined event on the client. Using this on a server
 or integrated server will send the event to all nearby players.

```zenscript
LevelAccessor.levelEvent(excluded as Player?, event as int, position as BlockPos, extra as int)
```

| Parameter |                       Type                        |                                              Description                                               |
|-----------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| excluded  | [Player](/vanilla/api/entity/type/player/Player)? | An excluded player who will not receive the event.                                                     |
| event     | int                                               | The ID of the event to play.                                                                           |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)       | The position of the event.                                                                             |
| extra     | int                                               | Four bytes of additional data encoded as an integer. This <br />                  is generally unused. |


:::

:::group{name=playSound}

```zenscript
LevelAccessor.playSound(player as Player?, position as BlockPos, event as SoundEvent, source as SoundSource)
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player)? |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)       |
| event     | [SoundEvent](/vanilla/api/sound/SoundEvent)       |
| source    | [SoundSource](/vanilla/api/sound/SoundSource)     |


:::

:::group{name=playSound}

```zenscript
LevelAccessor.playSound(player as Player?, position as BlockPos, event as SoundEvent, source as SoundSource, volume as float, pitch as float)
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player)? |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)       |
| event     | [SoundEvent](/vanilla/api/sound/SoundEvent)       |
| source    | [SoundSource](/vanilla/api/sound/SoundSource)     |
| volume    | float                                             |
| pitch     | float                                             |


:::


## Properties

|    Name    |                        Type                         | Has Getter | Has Setter |                                              Description                                              |
|------------|-----------------------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------------|
| difficulty | [Difficulty](/vanilla/api/world/Difficulty)         | true       | false      | Gets the difficulty setting for the world.                                                            |
| levelData  | [LevelData](/vanilla/api/world/data/LevelData)      | true       | false      | Gets the data for this level, holds information such as if it is raining, thundering, difficulty, etc |
| random     | [RandomSource](/vanilla/api/util/math/RandomSource) | true       | false      |                                                                                                       |

