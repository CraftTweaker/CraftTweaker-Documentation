# LivingDestroyBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.LivingDestroyBlockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.LivingDestroyBlockEvent>(event => {
    println("LivingDestroyBlockEvent ran!");
});
```


## Supertype

LivingDestroyBlockEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingDestroyBlockEvent

## Properties

| Name  |                    Type                     | Has Getter | Has Setter |
|-------|---------------------------------------------|------------|------------|
| pos   | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| state | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

