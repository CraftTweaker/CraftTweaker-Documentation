# FoodData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodData;
```


## Methods

:::group{name=addExhaustion}

```zenscript
FoodData.addExhaustion(exhaustion as float)
```

| Parameter  | Type  |
|------------|-------|
| exhaustion | float |


:::

:::group{name=eat}

```zenscript
FoodData.eat(foodProperties as FoodProperties)
```

|   Parameter    |                        Type                        |
|----------------|----------------------------------------------------|
| foodProperties | [FoodProperties](/vanilla/api/food/FoodProperties) |


:::

:::group{name=eat}

```zenscript
FoodData.eat(foodLevelModifier as int, saturationLevelModifier as float)
```

|        Parameter        | Type  |
|-------------------------|-------|
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

|    Parameter    | Type  |
|-----------------|-------|
| exhaustionLevel | float |


:::

:::group{name=setFoodLevel}

```zenscript
FoodData.setFoodLevel(foodLevel as int)
```

| Parameter | Type |
|-----------|------|
| foodLevel | int  |


:::

:::group{name=setSaturation}

```zenscript
FoodData.setSaturation(saturationLevel as float)
```

|    Parameter    | Type  |
|-----------------|-------|
| saturationLevel | float |


:::


