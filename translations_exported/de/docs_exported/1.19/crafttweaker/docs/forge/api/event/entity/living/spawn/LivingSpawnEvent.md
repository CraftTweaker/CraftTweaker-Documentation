# LivingSpawnEvent

LivingSpawnEvent is fired when an event involving any spawning or despawning of an Entity occurs.

 This event is fired for all types of spawning or despawning mechanics, it is generally advised to use the specific teleport events to target a specific mechanic instead of this event.

The event is not cancelable.

The event does not have a result.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.spawn.LivingSpawnEvent;
```


## Extending LivingEvent

LivingSpawnEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingSpawnEvent

## Properties

| Name  | Type                              | Has Getter | Has Setter |
| ----- | --------------------------------- | ---------- | ---------- |
| world | [Level](/vanilla/api/world/Level) | true       | false      |
| x     | double                            | true       | false      |
| y     | double                            | true       | false      |
| z     | double                            | true       | false      |

