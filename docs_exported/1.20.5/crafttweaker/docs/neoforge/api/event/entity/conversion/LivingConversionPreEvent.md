# LivingConversionPreEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.conversion.LivingConversionPreEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.conversion.LivingConversionPreEvent>(event => {
    println("LivingConversionPreEvent ran!");
});
```


## Supertype

LivingConversionPreEvent extends [LivingConversionEvent](/neoforge/api/event/entity/living/conversion/LivingConversionEvent). That means all methods available in [LivingConversionEvent](/neoforge/api/event/entity/living/conversion/LivingConversionEvent) are also available in LivingConversionPreEvent

## Implemented Interfaces
LivingConversionPreEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingConversionPreEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|      Name       |                                            Type                                            | Has Getter | Has Setter |
|-----------------|--------------------------------------------------------------------------------------------|------------|------------|
| conversionTimer | [LivingConversionPreEvent](/neoforge/api/event/entity/conversion/LivingConversionPreEvent) | false      | true       |
| outcome         | [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;   | true       | false      |

