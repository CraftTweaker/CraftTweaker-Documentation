# ArrowNockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.arrow.ArrowNockEvent;
```


## Extending PlayerEvent

ArrowNockEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ArrowNockEvent

## Properties

|  Name  |                                                          Type                                                           | Has Getter | Has Setter |
|--------|-------------------------------------------------------------------------------------------------------------------------|------------|------------|
| action | [InteractionResultHolder](/vanilla/api/world/InteractionResultHolder)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | true       |
| ammo   | boolean                                                                                                                 | true       | false      |
| bow    | [IItemStack](/vanilla/api/item/IItemStack)                                                                              | true       | false      |
| hand   | [InteractionHand](/vanilla/api/util/InteractionHand)                                                                    | true       | false      |
| level  | [Level](/vanilla/api/world/Level)                                                                                       | true       | false      |

