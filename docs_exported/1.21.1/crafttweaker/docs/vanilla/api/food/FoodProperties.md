# FoodProperties

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodProperties;
```


## Extending Record

FoodProperties extends Record. That means all methods available in Record are also available in FoodProperties

## Static Methods

:::group{name=create}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.create(nutrition as int, saturation as float, canAlwaysEat as boolean, eatSeconds as float) as FoodProperties
```

|  Parameter   |  Type   |
|--------------|---------|
| nutrition    | int     |
| saturation   | float   |
| canAlwaysEat | boolean |
| eatSeconds   | float   |


:::

:::group{name=create}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.create(nutrition as int, saturation as float, canAlwaysEat as boolean, eatSeconds as float, usingConvertsTo as IItemStack) as FoodProperties
```

|    Parameter    |                    Type                    |
|-----------------|--------------------------------------------|
| nutrition       | int                                        |
| saturation      | float                                      |
| canAlwaysEat    | boolean                                    |
| eatSeconds      | float                                      |
| usingConvertsTo | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=create}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.create(nutrition as int, saturation as float, canAlwaysEat as boolean, eatSeconds as float, usingConvertsTo as IItemStack, effects as stdlib.List<FoodPropertiesPossibleEffect>) as FoodProperties
```

|    Parameter    |                                               Type                                                |
|-----------------|---------------------------------------------------------------------------------------------------|
| nutrition       | int                                                                                               |
| saturation      | float                                                                                             |
| canAlwaysEat    | boolean                                                                                           |
| eatSeconds      | float                                                                                             |
| usingConvertsTo | [IItemStack](/vanilla/api/item/IItemStack)                                                        |
| effects         | stdlib.List&lt;[FoodPropertiesPossibleEffect](/vanilla/api/food/FoodPropertiesPossibleEffect)&gt; |


:::

## Methods

:::group{name=withCanAlwaysEat}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withCanAlwaysEat(canAlwaysEat as boolean) as FoodProperties
```

|  Parameter   |  Type   |
|--------------|---------|
| canAlwaysEat | boolean |


:::

:::group{name=withEatSeconds}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withEatSeconds(eatSeconds as int) as FoodProperties
```

| Parameter  | Type |
|------------|------|
| eatSeconds | int  |


:::

:::group{name=withEffect}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withEffect(effect as FoodPropertiesPossibleEffect) as FoodProperties
```

| Parameter |                                      Type                                      |
|-----------|--------------------------------------------------------------------------------|
| effect    | [FoodPropertiesPossibleEffect](/vanilla/api/food/FoodPropertiesPossibleEffect) |


:::

:::group{name=withEffect}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withEffect(effect as MobEffectInstance, probability as float) as FoodProperties
```

|  Parameter  |                               Type                                |
|-------------|-------------------------------------------------------------------|
| effect      | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |
| probability | float                                                             |


:::

:::group{name=withEffects}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withEffects(effects as stdlib.List<FoodPropertiesPossibleEffect>) as FoodProperties
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| effects   | stdlib.List&lt;[FoodPropertiesPossibleEffect](/vanilla/api/food/FoodPropertiesPossibleEffect)&gt; |


:::

:::group{name=withNutrition}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withNutrition(nutrition as int) as FoodProperties
```

| Parameter | Type |
|-----------|------|
| nutrition | int  |


:::

:::group{name=withSaturation}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withSaturation(saturation as float) as FoodProperties
```

| Parameter  | Type  |
|------------|-------|
| saturation | float |


:::

:::group{name=withUsingConvertsTo}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withUsingConvertsTo(usingConvertsTo as IItemStack) as FoodProperties
```

|    Parameter    |                    Type                    |
|-----------------|--------------------------------------------|
| usingConvertsTo | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=withoutEffect}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withoutEffect(effect as FoodPropertiesPossibleEffect) as FoodProperties
```

| Parameter |                                      Type                                      |
|-----------|--------------------------------------------------------------------------------|
| effect    | [FoodPropertiesPossibleEffect](/vanilla/api/food/FoodPropertiesPossibleEffect) |


:::

:::group{name=withoutEffect}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.withoutEffect(effect as MobEffect) as FoodProperties
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::


## Properties

|        Name        |                                               Type                                                | Has Getter | Has Setter |
|--------------------|---------------------------------------------------------------------------------------------------|------------|------------|
| canAlwaysEat       | boolean                                                                                           | true       | false      |
| eatSeconds         | float                                                                                             | true       | false      |
| effects            | stdlib.List&lt;[FoodPropertiesPossibleEffect](/vanilla/api/food/FoodPropertiesPossibleEffect)&gt; | true       | false      |
| nutrition          | int                                                                                               | true       | false      |
| saturationModifier | float                                                                                             | true       | false      |
| usingConvertsTo    | [IItemStack](/vanilla/api/item/IItemStack)                                                        | true       | false      |

