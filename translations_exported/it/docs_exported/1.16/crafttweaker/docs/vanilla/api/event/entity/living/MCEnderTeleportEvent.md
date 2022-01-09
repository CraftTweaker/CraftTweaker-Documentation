# MCEnderTeleportEvent

Event for when an Enderman/Shulker teleports or an ender pearl is used.

The event is cancelable.

If the event is canceled, the ender teleport won't happen.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCEnderTeleportEvent;
```


## Extending MCLivingEvent

MCEnderTeleportEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCEnderTeleportEvent

## Proprietà

| Nome         | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| ------------ | ------ | --------- | --------- | ----------------------- |
| attackDamage | float  | sì        | sì        | No Description Provided |
| targetX      | double | sì        | sì        | No Description Provided |
| targetY      | double | sì        | sì        | No Description Provided |
| targetZ      | double | sì        | sì        | No Description Provided |

