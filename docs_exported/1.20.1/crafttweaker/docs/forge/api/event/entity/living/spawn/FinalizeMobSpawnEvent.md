# FinalizeMobSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.spawn.FinalizeMobSpawnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.spawn.FinalizeMobSpawnEvent>(event => {
    println("FinalizeMobSpawnEvent ran!");
});
```


## Supertype

FinalizeMobSpawnEvent extends [MobSpawnEvent](/forge/api/event/entity/living/spawn/MobSpawnEvent). That means all methods available in [MobSpawnEvent](/forge/api/event/entity/living/spawn/MobSpawnEvent) are also available in FinalizeMobSpawnEvent

## Properties

|       Name       |                                        Type                                         | Has Getter | Has Setter |
|------------------|-------------------------------------------------------------------------------------|------------|------------|
| difficulty       | [DifficultyInstance](/vanilla/api/world/DifficultyInstance)                         | true       | true       |
| isSpawnCancelled | boolean                                                                             | true       | false      |
| spawnCancelled   | [FinalizeMobSpawnEvent](/forge/api/event/entity/living/spawn/FinalizeMobSpawnEvent) | false      | true       |
| spawnTag         | [IData](/vanilla/api/data/IData)?                                                   | true       | true       |
| spawnType        | [MobSpawnType](/vanilla/api/entity/MobSpawnType)                                    | true       | false      |
| spawner          | [BaseSpawner](/vanilla/api/world/BaseSpawner)?                                      | true       | false      |

