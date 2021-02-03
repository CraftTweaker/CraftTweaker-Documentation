# MCAnvilRepairEvent

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCAnvilRepairEvent;
```


## Extending MCPlayerEvent

MCAnvilRepairEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCAnvilRepairEvent

## 方法

### getBreakChance

Return Type: float

```zenscript
MCAnvilRepairEvent.getBreakChance() as float
myMCAnvilRepairEvent.getBreakChance();
```

### getIngredientInput

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCAnvilRepairEvent.getIngredientInput() as IItemStack
myMCAnvilRepairEvent.getIngredientInput();
```

### getItemInput

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCAnvilRepairEvent.getItemInput() as IItemStack
myMCAnvilRepairEvent.getItemInput();
```

### getItemResult

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCAnvilRepairEvent.getItemResult() as IItemStack
myMCAnvilRepairEvent.getItemResult();
```

### setBreakChance

Return Type: void

```zenscript
MCAnvilRepairEvent.setBreakChance(breakChance as float) as void
```

| 参数          | 类型    | 描述                      |
| ----------- | ----- | ----------------------- |
| breakChance | float | No Description Provided |



## 参数

| 名称              | 类型                                          | 可获得  | 可设置   |
| --------------- | ------------------------------------------- | ---- | ----- |
| breakChance     | float                                       | true | true  |
| ingredientInput | [IItemStack](/vanilla/api/items/IItemStack) | true | false |
| itemInput       | [IItemStack](/vanilla/api/items/IItemStack) | true | false |
| itemResult      | [IItemStack](/vanilla/api/items/IItemStack) | true | false |

