# LivingEvent

The event is not cancelable.

The event does not have a result.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.LivingEvent;
```


## Extending EntityEvent

LivingEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in LivingEvent

## Methoden

:::group{name=getEntityLiving}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// LivingEvent.getEntityLiving() as LivingEntity

myLivingEvent.getEntityLiving();
```

:::


## Properties

| Name         | Type                                             | Has Getter | Has Setter | Beschreibung            |
| ------------ | ------------------------------------------------ | ---------- | ---------- | ----------------------- |
| entityLiving | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      | No Description Provided |

