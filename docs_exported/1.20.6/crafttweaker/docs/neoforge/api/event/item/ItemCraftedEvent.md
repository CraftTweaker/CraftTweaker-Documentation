# ItemCraftedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemCraftedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemCraftedEvent>(event => {
    println("ItemCraftedEvent ran!");
});
```


## Supertype

ItemCraftedEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in ItemCraftedEvent

## Properties

|   Name    |                    Type                    | Has Getter | Has Setter |
|-----------|--------------------------------------------|------------|------------|
| crafting  | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| inventory | [Container](/vanilla/api/world/Container)  | true       | false      |

