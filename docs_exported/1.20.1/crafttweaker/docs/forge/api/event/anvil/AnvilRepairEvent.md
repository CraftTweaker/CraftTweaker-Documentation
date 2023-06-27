# AnvilRepairEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.anvil.AnvilRepairEvent;
```


## Extending PlayerEvent

AnvilRepairEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in AnvilRepairEvent

## Properties

|    Name     |                    Type                    | Has Getter | Has Setter |
|-------------|--------------------------------------------|------------|------------|
| breakChance | float                                      | true       | true       |
| left        | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| output      | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| right       | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |

