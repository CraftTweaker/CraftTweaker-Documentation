# MCLivingSpawnEvent

The event is not cancelable.

The event does not have a result.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingSpawnEvent;
```


## Extending MCLivingEvent

MCLivingSpawnEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingSpawnEvent

## Properties

| Name  | Type                                  | Has Getter | Has Setter |
| ----- | ------------------------------------- | ---------- | ---------- |
| world | [MCWorld](/vanilla/api/world/MCWorld) | true       | false      |
| x     | double                                | true       | false      |
| y     | double                                | true       | false      |
| z     | double                                | true       | false      |

