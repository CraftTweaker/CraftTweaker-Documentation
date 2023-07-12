# ItemSmeltedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.item.ItemSmeltedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.item.ItemSmeltedEvent>(event => {
    println("ItemSmeltedEvent ran!");
});
```


## Supertype

ItemSmeltedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemSmeltedEvent

## Properties

|   Name   |                    Type                    | Has Getter | Has Setter |
|----------|--------------------------------------------|------------|------------|
| smelting | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |

