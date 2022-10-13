# AllowDespawnEvent

Fired each tick for despawnable mobs to allow control over despawning. [EventResult](/forge/api/event/EventResult)#DEFAULT will pass the mob on to vanilla despawn mechanics. [EventResult](/forge/api/event/EventResult)#ALLOW will force the mob to despawn. [EventResult](/forge/api/event/EventResult)#DENY will force the mob to remain. This is fired every tick for every despawnable entity. Be efficient in your handlers.

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.spawn.AllowDespawnEvent;
```


## Extending LivingSpawnEvent

AllowDespawnEvent extends [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent). That means all methods available in [LivingSpawnEvent](/forge/api/event/entity/living/spawn/LivingSpawnEvent) are also available in AllowDespawnEvent

