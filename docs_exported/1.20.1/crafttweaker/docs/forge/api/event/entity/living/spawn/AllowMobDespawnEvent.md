# AllowMobDespawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.spawn.AllowMobDespawnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.spawn.AllowMobDespawnEvent>(event => {
    println("AllowMobDespawnEvent ran!");
});
```


## Supertype

AllowMobDespawnEvent extends [MobSpawnEvent](/forge/api/event/entity/living/spawn/MobSpawnEvent). That means all methods available in [MobSpawnEvent](/forge/api/event/entity/living/spawn/MobSpawnEvent) are also available in AllowMobDespawnEvent

