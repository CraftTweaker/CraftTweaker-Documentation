# MCAnvilUpdateEvent

AnvilUpdateEvent is fired when the inputs (either input stack, or the name) of an anvil are changed. You can listen to this event to add custom anvil recipes.

The event is cancelable.

If the event is canceled, vanilla behavior will not run, and the output will be set to `<item:minecraft:air>`.

If the event is not canceled, but the output is not empty, it will set the output and not run vanilla behavior.

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.MCAnvilUpdateEvent;
```


## Extending MCEvent

MCAnvilUpdateEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCAnvilUpdateEvent

## Свойства

| Название            | Тип                                                   | Имеет Getter | Имеет Setter |
| ------------------- | ----------------------------------------------------- | ------------ | ------------ |
| left                | [IItemStack](/vanilla/api/items/IItemStack)           | true         | false        |
| levelCost           | int                                                   | true         | true         |
| стоимость материала | int                                                   | true         | true         |
| output              | [IItemStack](/vanilla/api/items/IItemStack)           | true         | true         |
| player              | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | true         | false        |
| right               | [IItemStack](/vanilla/api/items/IItemStack)           | true         | false        |

