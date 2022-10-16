# FoodData

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodData;
```


## Metodi

:::group{name=addExhaustion}

```zenscript
FoodData.addExhaustion(exhaustion as float)
```

| Parametro  | Tipo  |
| ---------- | ----- |
| exhaustion | float |


:::

:::group{name=eat}

```zenscript
FoodData.eat(stack as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=eat}

```zenscript
FoodData.eat(foodLevelModifier as int, saturationLevelModifier as float)
```

| Parametro               | Tipo  |
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

| Parametro       | Tipo  |
| --------------- | ----- |
| exhaustionLevel | float |


:::

:::group{name=setFoodLevel}

```zenscript
FoodData.setFoodLevel(foodLevel as int)
```

| Parametro | Tipo |
| --------- | ---- |
| foodLevel | int  |


:::

:::group{name=setSaturation}

```zenscript
FoodData.setSaturation(saturationLevel as float)
```

| Parametro       | Tipo  |
| --------------- | ----- |
| saturationLevel | float |


:::


