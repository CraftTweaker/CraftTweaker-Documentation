# AnvilRepairEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.anvil.AnvilRepairEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.anvil.AnvilRepairEvent>(event => {
    println("AnvilRepairEvent ran!");
});
```


## Supertype

AnvilRepairEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in AnvilRepairEvent

## Properties

|    Name     |                    Type                    | Has Getter | Has Setter |
|-------------|--------------------------------------------|------------|------------|
| breakChance | float                                      | true       | true       |
| left        | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| output      | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| right       | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |

