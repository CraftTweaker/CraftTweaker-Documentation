# LivingTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.LivingTickEvent;
```


## Extending LivingEvent

LivingTickEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingTickEvent

## Methods

:::group{name=getEntity}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// LivingTickEvent.getEntity() as LivingEntity

myLivingTickEvent.getEntity();
```

:::


## Properties

|     Name     |                       Type                       | Has Getter | Has Setter |
|--------------|--------------------------------------------------|------------|------------|
| entityLiving | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |

