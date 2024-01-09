# LivingConversionPostEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.conversion.LivingConversionPostEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.conversion.LivingConversionPostEvent>(event => {
    println("LivingConversionPostEvent ran!");
});
```


## Supertype

LivingConversionPostEvent extends [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent). That means all methods available in [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent) are also available in LivingConversionPostEvent

## Properties

|  Name   |                       Type                       | Has Getter | Has Setter |
|---------|--------------------------------------------------|------------|------------|
| outcome | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |

