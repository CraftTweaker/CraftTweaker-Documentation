# ItemExpireEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemExpireEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemExpireEvent>(event => {
    println("ItemExpireEvent ran!");
});
```


## Supertype

ItemExpireEvent extends [ItemEvent](/neoforge/api/event/item/ItemEvent). That means all methods available in [ItemEvent](/neoforge/api/event/item/ItemEvent) are also available in ItemExpireEvent

## Implemented Interfaces
ItemExpireEvent implements the following interfaces. That means all methods defined in these interfaces are also available in ItemExpireEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|   Name    | Type | Has Getter | Has Setter |
|-----------|------|------------|------------|
| extraLife | int  | true       | true       |

