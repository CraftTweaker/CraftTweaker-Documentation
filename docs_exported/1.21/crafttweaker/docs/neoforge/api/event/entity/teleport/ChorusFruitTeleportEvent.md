# ChorusFruitTeleportEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.teleport.ChorusFruitTeleportEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.teleport.ChorusFruitTeleportEvent>(event => {
    println("ChorusFruitTeleportEvent ran!");
});
```


## Supertype

ChorusFruitTeleportEvent extends [EntityTeleportEvent](/neoforge/api/event/entity/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/neoforge/api/event/entity/teleport/EntityTeleportEvent) are also available in ChorusFruitTeleportEvent

## Implemented Interfaces
ChorusFruitTeleportEvent implements the following interfaces. That means all methods defined in these interfaces are also available in ChorusFruitTeleportEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|     Name     |                       Type                       | Has Getter | Has Setter |
|--------------|--------------------------------------------------|------------|------------|
| livingEntity | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |

