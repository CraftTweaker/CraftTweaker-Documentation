# LivingUseTotemEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingUseTotemEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingUseTotemEvent>(event => {
    println("LivingUseTotemEvent ran!");
});
```


## Supertype

LivingUseTotemEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in LivingUseTotemEvent

## Implemented Interfaces
LivingUseTotemEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingUseTotemEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|    Name     |                          Type                          | Has Getter | Has Setter |
|-------------|--------------------------------------------------------|------------|------------|
| holdingHand | [InteractionHand](/vanilla/api/util/InteractionHand)   | true       | false      |
| source      | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| totem       | [IItemStack](/vanilla/api/item/IItemStack)             | true       | false      |

