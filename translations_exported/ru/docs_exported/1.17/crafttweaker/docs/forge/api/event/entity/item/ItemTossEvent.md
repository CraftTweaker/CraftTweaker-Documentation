# ItemTossEvent

Event that is fired whenever a player tosses (Q) an item or drag-n-drops a stack of items outside the inventory GUI screens.

The event is cancelable.

If the event is canceled, will stop the items from entering the world, but will not prevent them being removed from the inventory - and thus removed from the system.

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.item.ItemTossEvent;
```


## Extending ItemEvent

ItemTossEvent extends [ItemEvent](/forge/api/event/entity/ItemEvent). That means all methods available in [ItemEvent](/forge/api/event/entity/ItemEvent) are also available in ItemTossEvent

## Свойства

| Название | Тип                                              | Имеет Getter | Имеет Setter | Описание                |
| -------- | ------------------------------------------------ | ------------ | ------------ | ----------------------- |
| player   | [Player](/vanilla/api/entity/type/player/Player) | true         | false        | No Description Provided |

