# ArrowNockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.arrow.ArrowNockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.arrow.ArrowNockEvent>(event => {
    println("ArrowNockEvent ran!");
});
```


## Supertype

ArrowNockEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ArrowNockEvent

## Properties

|  Name  |                                                          Type                                                           | Has Getter | Has Setter |
|--------|-------------------------------------------------------------------------------------------------------------------------|------------|------------|
| action | [InteractionResultHolder](/vanilla/api/world/InteractionResultHolder)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | true       |
| ammo   | boolean                                                                                                                 | true       | false      |
| bow    | [IItemStack](/vanilla/api/item/IItemStack)                                                                              | true       | false      |
| hand   | [InteractionHand](/vanilla/api/util/InteractionHand)                                                                    | true       | false      |
| level  | [Level](/vanilla/api/world/Level)                                                                                       | true       | false      |

