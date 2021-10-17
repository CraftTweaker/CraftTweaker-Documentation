# MCAnvilRepairEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCAnvilRepairEvent;
```


## Extending MCPlayerEvent

MCAnvilRepairEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCAnvilRepairEvent

## Metodi

:::group{name=getBreakChance}

Return Type: float

```zenscript
// MCAnvilRepairEvent.getBreakChance() as float

myMCAnvilRepairEvent.getBreakChance();
```

:::

:::group{name=getIngredientInput}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCAnvilRepairEvent.getIngredientInput() as IItemStack

myMCAnvilRepairEvent.getIngredientInput();
```

:::

:::group{name=getItemInput}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCAnvilRepairEvent.getItemInput() as IItemStack

myMCAnvilRepairEvent.getItemInput();
```

:::

:::group{name=getItemResult}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCAnvilRepairEvent.getItemResult() as IItemStack

myMCAnvilRepairEvent.getItemResult();
```

:::

:::group{name=setBreakChance}

Return Type: void

```zenscript
MCAnvilRepairEvent.setBreakChance(breakChance as float) as void
```

| Parametro   | Tipo  | Descrizione             |
| ----------- | ----- | ----------------------- |
| breakChance | float | No Description Provided |


:::


## Proprietà

| Nome            | Tipo                                        | Ha Getter | Ha Setter | Descrizione             |
| --------------- | ------------------------------------------- | --------- | --------- | ----------------------- |
| breakChance     | float                                       | sì        | sì        | No Description Provided |
| ingredientInput | [IItemStack](/vanilla/api/items/IItemStack) | sì        | no        | No Description Provided |
| itemInput       | [IItemStack](/vanilla/api/items/IItemStack) | sì        | no        | No Description Provided |
| itemResult      | [IItemStack](/vanilla/api/items/IItemStack) | sì        | no        | No Description Provided |

