# MCEnderTeleportEvent

Event for when an Enderman/Shulker teleports or an ender pearl is used.

The event is cancelable.

If the event is canceled, the ender teleport won't happen.

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCEnderTeleportEvent;
```


## Extending MCLivingEvent

MCEnderTeleportEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCEnderTeleportEvent

## Properties

| Name         | Type   | Has Getter | Has Setter | Beschreibung            |
| ------------ | ------ | ---------- | ---------- | ----------------------- |
| attackDamage | float  | true       | true       | No Description Provided |
| targetX      | double | true       | true       | No Description Provided |
| targetY      | double | true       | true       | No Description Provided |
| targetZ      | double | true       | true       | No Description Provided |

