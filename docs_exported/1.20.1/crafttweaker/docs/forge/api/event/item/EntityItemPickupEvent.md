# EntityItemPickupEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.item.EntityItemPickupEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.item.EntityItemPickupEvent>(event => {
    println("EntityItemPickupEvent ran!");
});
```


## Supertype

EntityItemPickupEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in EntityItemPickupEvent

## Properties

| Name |                          Type                          | Has Getter | Has Setter |
|------|--------------------------------------------------------|------------|------------|
| item | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) | true       | false      |

