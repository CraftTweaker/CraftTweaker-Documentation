# LivingSpawnEvent

LivingSpawnEvent is fired when an event involving any spawning or despawning of an Entity occurs.

 This event is fired for all types of spawning or despawning mechanics, it is generally advised to use the specific teleport events to target a specific mechanic instead of this event.

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.spawn.LivingSpawnEvent;
```


## Extending LivingEvent

LivingSpawnEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingSpawnEvent

## Proprietà

| Nome  | Tipo                              | Ha Getter | Ha Setter | Descrizione             |
| ----- | --------------------------------- | --------- | --------- | ----------------------- |
| world | [Level](/vanilla/api/world/Level) | sì        | no        | No Description Provided |
| x     | double                            | sì        | no        | No Description Provided |
| y     | double                            | sì        | no        | No Description Provided |
| z     | double                            | sì        | no        | No Description Provided |

