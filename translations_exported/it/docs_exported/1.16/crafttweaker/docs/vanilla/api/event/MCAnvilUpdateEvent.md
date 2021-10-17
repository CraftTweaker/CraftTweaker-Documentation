# MCAnvilUpdateEvent

AnvilUpdateEvent is fired when the inputs (either input stack, or the name) of an anvil are changed. You can listen to this event to add custom anvil recipes.

The event is cancelable.

If the event is canceled, vanilla behavior will not run, and the output will be set to `<item:minecraft:air>`.

If the event is not canceled, but the output is not empty, it will set the output and not run vanilla behavior.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.MCAnvilUpdateEvent;
```


## Extending MCEvent

MCAnvilUpdateEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCAnvilUpdateEvent

## Proprietà

| Nome          | Tipo                                                  | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ----------------------------------------------------- | --------- | --------- | ----------------------- |
| left          | [IItemStack](/vanilla/api/items/IItemStack)           | sì        | no        | No Description Provided |
| levelCost     | int                                                   | sì        | sì        | No Description Provided |
| materialCosto | int                                                   | sì        | sì        | No Description Provided |
| nome          | string?                                               | sì        | no        | No Description Provided |
| output        | [IItemStack](/vanilla/api/items/IItemStack)           | sì        | sì        | No Description Provided |
| player        | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | sì        | no        | No Description Provided |
| right         | [IItemStack](/vanilla/api/items/IItemStack)           | sì        | no        | No Description Provided |

