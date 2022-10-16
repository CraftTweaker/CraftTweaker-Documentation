# FoodData

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodData;
```


## Методы

:::group{name=addExhaustion}

```zenscript
FoodData.addExhaustion(exhaustion as float)
```

| Параметр   | Тип   |
| ---------- | ----- |
| exhaustion | float |


:::

:::group{name=eat}

```zenscript
FoodData.eat(stack as IItemStack)
```

| Параметр | Тип                                        |
| -------- | ------------------------------------------ |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=eat}

```zenscript
FoodData.eat(foodLevelModifier as int, saturationLevelModifier as float)
```

| Параметр                | Тип   |
| ----------------------- | ----- |
| foodLevelModifier       | int   |
| saturationLevelModifier | float |


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

```zenscript
FoodData.setExhaustion(exhaustionLevel as float)
```

| Параметр        | Тип   |
| --------------- | ----- |
| exhaustionLevel | float |


:::

:::group{name=setFoodLevel}

```zenscript
FoodData.setFoodLevel(foodLevel as int)
```

| Параметр  | Тип |
| --------- | --- |
| foodLevel | int |


:::

:::group{name=setSaturation}

```zenscript
FoodData.setSaturation(saturationLevel as float)
```

| Параметр        | Тип   |
| --------------- | ----- |
| saturationLevel | float |


:::


