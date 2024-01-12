# LivingConversionPreEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.conversion.LivingConversionPreEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.conversion.LivingConversionPreEvent>(event => {
    println("LivingConversionPreEvent ran!");
});
```


## Supertype

LivingConversionPreEvent extends [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent). That means all methods available in [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent) are also available in LivingConversionPreEvent

## Properties

|      Name       |                                           Type                                           | Has Getter | Has Setter |
|-----------------|------------------------------------------------------------------------------------------|------------|------------|
| conversionTimer | [LivingConversionPreEvent](/forge/api/event/entity/conversion/LivingConversionPreEvent)  | false      | true       |
| outcome         | [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt; | true       | false      |

