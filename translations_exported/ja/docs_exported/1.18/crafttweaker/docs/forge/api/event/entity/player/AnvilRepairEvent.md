# AnvilRepairEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.AnvilRepairEvent;
```


## Extending PlayerEvent

AnvilRepairEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in AnvilRepairEvent

## Methods

:::group{name=getBreakChance}

Return Type: float

```zenscript
// AnvilRepairEvent.getBreakChance() as float

myAnvilRepairEvent.getBreakChance();
```

:::

:::group{name=getIngredientInput}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// AnvilRepairEvent.getIngredientInput() as IItemStack

myAnvilRepairEvent.getIngredientInput();
```

:::

:::group{name=getItemInput}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// AnvilRepairEvent.getItemInput() as IItemStack

myAnvilRepairEvent.getItemInput();
```

:::

:::group{name=getItemResult}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// AnvilRepairEvent.getItemResult() as IItemStack

myAnvilRepairEvent.getItemResult();
```

:::

:::group{name=setBreakChance}

```zenscript
AnvilRepairEvent.setBreakChance(breakChance as float)
```

| Parameter   | Type  |
| ----------- | ----- |
| breakChance | float |


:::


## Properties

| 名称              | Type                                       | Has Getter | Has Setter |
| --------------- | ------------------------------------------ | ---------- | ---------- |
| breakChance     | float                                      | true       | true       |
| ingredientInput | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| itemInput       | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| itemResult      | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |

