# FinalizeMobSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.living.spawn.FinalizeMobSpawnEvent;
```


## Extending MobSpawnEvent

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

