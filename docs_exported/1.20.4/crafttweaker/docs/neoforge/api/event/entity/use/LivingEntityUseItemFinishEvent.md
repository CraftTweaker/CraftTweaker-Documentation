# LivingEntityUseItemFinishEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.use.LivingEntityUseItemFinishEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.use.LivingEntityUseItemFinishEvent>(event => {
    println("LivingEntityUseItemFinishEvent ran!");
});
```


## Supertype

LivingEntityUseItemFinishEvent extends [LivingEntityUseItemEvent](/neoforge/api/event/entity/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/neoforge/api/event/entity/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemFinishEvent

## Properties

|    Name     |                    Type                    | Has Getter | Has Setter |
|-------------|--------------------------------------------|------------|------------|
| resultStack | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |

