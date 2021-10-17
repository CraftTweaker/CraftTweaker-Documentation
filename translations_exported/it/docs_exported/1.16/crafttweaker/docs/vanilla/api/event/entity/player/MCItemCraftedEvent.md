# MCItemCraftedEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.player.MCItemCraftedEvent;
```


## Extending MCPlayerEvent

MCItemCraftedEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCItemCraftedEvent

## Metodi

:::group{name=getCrafting}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCItemCraftedEvent.getCrafting() as IItemStack

myMCItemCraftedEvent.getCrafting();
```

:::

:::group{name=getCraftingMatrix}

Return Type: [IInventory](/vanilla/api/inventory/IInventory)

```zenscript
// MCItemCraftedEvent.getCraftingMatrix() as IInventory

myMCItemCraftedEvent.getCraftingMatrix();
```

:::


## Proprietà

| Nome           | Tipo                                            | Ha Getter | Ha Setter | Descrizione             |
| -------------- | ----------------------------------------------- | --------- | --------- | ----------------------- |
| crafting       | [IItemStack](/vanilla/api/items/IItemStack)     | sì        | no        | No Description Provided |
| craftingMatrix | [IInventory](/vanilla/api/inventory/IInventory) | sì        | no        | No Description Provided |

