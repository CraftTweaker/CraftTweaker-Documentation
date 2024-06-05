# AdvancementEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.event.advancement.AdvancementEvent;
```


## Extending PlayerEvent

AdvancementEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in AdvancementEvent

## Properties

|    Name     |                              Type                               | Has Getter | Has Setter |
|-------------|-----------------------------------------------------------------|------------|------------|
| advancement | [AdvancementHolder](/vanilla/api/advancement/AdvancementHolder) | true       | false      |

