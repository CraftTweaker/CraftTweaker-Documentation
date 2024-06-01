# CreateSpawnPositionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.level.CreateSpawnPositionEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.level.CreateSpawnPositionEvent>(event => {
    println("CreateSpawnPositionEvent ran!");
});
```


## Supertype

CreateSpawnPositionEvent extends [LevelEvent](/neoforge/api/event/level/LevelEvent). That means all methods available in [LevelEvent](/neoforge/api/event/level/LevelEvent) are also available in CreateSpawnPositionEvent

## Implemented Interfaces
CreateSpawnPositionEvent implements the following interfaces. That means all methods defined in these interfaces are also available in CreateSpawnPositionEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|   Name   |                            Type                            | Has Getter | Has Setter |
|----------|------------------------------------------------------------|------------|------------|
| settings | [ServerLevelData](/vanilla/api/world/data/ServerLevelData) | true       | false      |

