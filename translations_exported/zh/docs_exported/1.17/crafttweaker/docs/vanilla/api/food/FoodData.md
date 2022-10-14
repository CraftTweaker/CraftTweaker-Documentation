# FoodData

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodData;
```


## 使用方式

:::group{name=addExhaustion}

Return Type: void

```zenscript
FoodData.addExhaustion(exhaustion as float) as void
```

| 参数         | 类型    | 描述                      |
| ---------- | ----- | ----------------------- |
| exhaustion | float | No Description Provided |


:::

:::group{name=eat}

Return Type: void

```zenscript
FoodData.eat(stack as IItemStack) as void
```

| 参数 | 类型                                         | 描述                      |
| -- | ------------------------------------------ | ----------------------- |
| 堆叠 | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=eat}

Return Type: void

```zenscript
FoodData.eat(foodLevelModifier as int, saturationLevelModifier as float) as void
```

| 参数                      | 类型    | 描述                      |
| ----------------------- | ----- | ----------------------- |
| foodLevelModifier       | int   | No Description Provided |
| saturationLevelModifier | float | No Description Provided |


:::

:::group{name=getExhaustionLevel}

Return Type: float

```zenscript
// FoodData.getExhaustionLevel() as float

myFoodData.getExhaustionLevel();
```

:::

:::group{name=getFoodLevel}

Return Type: int

```zenscript
// FoodData.getFoodLevel() as int

myFoodData.getFoodLevel();
```

:::

:::group{name=getLastFoodLevel}

Return Type: int

```zenscript
// FoodData.getLastFoodLevel() as int

myFoodData.getLastFoodLevel();
```

:::

:::group{name=getSaturationLevel}

Return Type: float

```zenscript
// FoodData.getSaturationLevel() as float

myFoodData.getSaturationLevel();
```

:::

:::group{name=needsFood}

Return Type: boolean

```zenscript
// FoodData.needsFood() as boolean

myFoodData.needsFood();
```

:::

:::group{name=setExhaustion}

Return Type: void

```zenscript
FoodData.setExhaustion(exhaustionLevel as float) as void
```

| 参数              | 类型    | 描述                      |
| --------------- | ----- | ----------------------- |
| exhaustionLevel | float | No Description Provided |


:::

:::group{name=setFoodLevel}

Return Type: void

```zenscript
FoodData.setFoodLevel(foodLevel as int) as void
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| foodLevel | int | No Description Provided |


:::

:::group{name=setSaturation}

Return Type: void

```zenscript
FoodData.setSaturation(saturationLevel as float) as void
```

| 参数              | 类型    | 描述                      |
| --------------- | ----- | ----------------------- |
| saturationLevel | float | No Description Provided |


:::


