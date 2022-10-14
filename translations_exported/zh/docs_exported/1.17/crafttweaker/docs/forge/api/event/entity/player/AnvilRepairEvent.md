# AnvilRepairEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.AnvilRepairEvent;
```


## Extending PlayerEvent

AnvilRepairEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in AnvilRepairEvent

## 使用方式

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

Return Type: void

```zenscript
AnvilRepairEvent.setBreakChance(breakChance as float) as void
```

| 参数          | 类型    | 描述                      |
| ----------- | ----- | ----------------------- |
| breakChance | float | No Description Provided |


:::


## 参数

| 名称              | 类型                                         | 可获得  | 可设置   | 描述                      |
| --------------- | ------------------------------------------ | ---- | ----- | ----------------------- |
| breakChance     | float                                      | true | true  | No Description Provided |
| ingredientInput | [IItemstack](/vanilla/api/item/IItemStack) | true | false | No Description Provided |
| itemInput       | [IItemstack](/vanilla/api/item/IItemStack) | true | false | No Description Provided |
| itemResult      | [IItemstack](/vanilla/api/item/IItemStack) | true | false | No Description Provided |

