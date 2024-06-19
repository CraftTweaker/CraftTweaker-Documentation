# MobDespawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.spawn.MobDespawnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.spawn.MobDespawnEvent>(event => {
    println("MobDespawnEvent ran!");
});
```


## Supertype

MobDespawnEvent extends [MobSpawnEvent](/neoforge/api/event/entity/living/spawn/MobSpawnEvent). That means all methods available in [MobSpawnEvent](/neoforge/api/event/entity/living/spawn/MobSpawnEvent) are also available in MobDespawnEvent

## Properties

|  Name  |                                    Type                                    | Has Getter | Has Setter |
|--------|----------------------------------------------------------------------------|------------|------------|
| result | [MobDespawnEvent](/neoforge/api/event/entity/living/spawn/MobDespawnEvent) | true       | true       |

