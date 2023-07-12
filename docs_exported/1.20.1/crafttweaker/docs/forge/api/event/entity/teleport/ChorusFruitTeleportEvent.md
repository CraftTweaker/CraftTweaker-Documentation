# ChorusFruitTeleportEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.teleport.ChorusFruitTeleportEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.teleport.ChorusFruitTeleportEvent>(event => {
    println("ChorusFruitTeleportEvent ran!");
});
```


## Supertype

ChorusFruitTeleportEvent extends [EntityTeleportEvent](/forge/api/event/entity/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/forge/api/event/entity/teleport/EntityTeleportEvent) are also available in ChorusFruitTeleportEvent

## Properties

|     Name     |                       Type                       | Has Getter | Has Setter |
|--------------|--------------------------------------------------|------------|------------|
| livingEntity | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |

