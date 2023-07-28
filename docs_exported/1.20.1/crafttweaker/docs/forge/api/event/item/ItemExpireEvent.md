# ItemExpireEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.item.ItemExpireEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.item.ItemExpireEvent>(event => {
    println("ItemExpireEvent ran!");
});
```


## Supertype

ItemExpireEvent extends [ItemEvent](/forge/api/event/item/ItemEvent). That means all methods available in [ItemEvent](/forge/api/event/item/ItemEvent) are also available in ItemExpireEvent

## Properties

|   Name    | Type | Has Getter | Has Setter |
|-----------|------|------------|------------|
| extraLife | int  | true       | true       |

