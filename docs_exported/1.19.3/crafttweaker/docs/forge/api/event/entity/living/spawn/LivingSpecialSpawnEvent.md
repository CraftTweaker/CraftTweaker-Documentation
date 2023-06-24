# LivingSpecialSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.living.spawn.LivingSpecialSpawnEvent;
```


## Extending LivingSpawnEvent

LivingSpecialSpawnEvent extends [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent). That means all methods available in [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent) are also available in LivingSpecialSpawnEvent

## Properties

|    Name     |                       Type                       | Has Getter | Has Setter |
|-------------|--------------------------------------------------|------------|------------|
| spawnReason | [MobSpawnType](/vanilla/api/entity/MobSpawnType) | true       | false      |
| spawner     | [BaseSpawner](/vanilla/api/world/BaseSpawner)?   | true       | false      |

