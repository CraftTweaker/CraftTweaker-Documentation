# EnderEntityTeleportEvent

EnderEntityTeleportEvent is fired before an Enderman or Shulker randomly teleports.

The event is cancelable.

If the event is canceled, the teleport won't happen.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.teleport.EnderEntityTeleportEvent;
```


## Extending EntityTeleportEvent

EnderEntityTeleportEvent extends [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent) are also available in EnderEntityTeleportEvent

## Metodi

:::group{name=getEntityLiving}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// EnderEntityTeleportEvent.getEntityLiving() as LivingEntity

myEnderEntityTeleportEvent.getEntityLiving();
```

:::


## Proprietà

| Nome         | Tipo                                             | Ha Getter | Ha Setter | Descrizione             |
| ------------ | ------------------------------------------------ | --------- | --------- | ----------------------- |
| entityLiving | [LivingEntity](/vanilla/api/entity/LivingEntity) | sì        | no        | No Description Provided |

