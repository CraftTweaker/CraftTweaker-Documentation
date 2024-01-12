# ItemTossEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemTossEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemTossEvent>(event => {
    println("ItemTossEvent ran!");
});
```


## Supertype

ItemTossEvent extends [ItemEvent](/neoforge/api/event/item/ItemEvent). That means all methods available in [ItemEvent](/neoforge/api/event/item/ItemEvent) are also available in ItemTossEvent

## Implemented Interfaces
ItemTossEvent implements the following interfaces. That means all methods defined in these interfaces are also available in ItemTossEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                       Type                       | Has Getter | Has Setter |
|--------|--------------------------------------------------|------------|------------|
| player | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

