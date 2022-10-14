# FoodProperties

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodProperties;
```


## Static Methods

:::group{name=create}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.create(nutrition as int, saturationModifier as float) as FoodProperties
```

| Параметр           | Тип   | Описание                |
| ------------------ | ----- | ----------------------- |
| nutrition          | int   | No Description Provided |
| saturationModifier | float | No Description Provided |


:::

## Методы

:::group{name=addEffect}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.addEffect(effect as MobEffectInstance, probability as float) as FoodProperties
```

| Параметр    | Тип                                                               | Описание                |
| ----------- | ----------------------------------------------------------------- | ----------------------- |
| effect      | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |
| probability | float                                                             | No Description Provided |


:::

:::group{name=canAlwaysEat}

Return Type: boolean

```zenscript
// FoodProperties.canAlwaysEat() as boolean

myFoodProperties.canAlwaysEat();
```

:::

:::group{name=getEffects}

Return Type: stdlib.List&lt;[Pair](/vanilla/api/util/Pair)&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance),float?&gt;&gt;

```zenscript
// FoodProperties.getEffects() as stdlib.List<Pair<MobEffectInstance,float?>>

myFoodProperties.getEffects();
```

:::

:::group{name=getNutrition}

Return Type: int

```zenscript
// FoodProperties.getNutrition() as int

myFoodProperties.getNutrition();
```

:::

:::group{name=getSaturationModifier}

Return Type: float

```zenscript
// FoodProperties.getSaturationModifier() as float

myFoodProperties.getSaturationModifier();
```

:::

:::group{name=isFastFood}

Return Type: boolean

```zenscript
// FoodProperties.isFastFood() as boolean

myFoodProperties.isFastFood();
```

:::

:::group{name=isMeat}

Return Type: boolean

```zenscript
// FoodProperties.isMeat() as boolean

myFoodProperties.isMeat();
```

:::

:::group{name=removeEffect}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.removeEffect(effect as MobEffectInstance) as FoodProperties
```

| Параметр | Тип                                                               | Описание                |
| -------- | ----------------------------------------------------------------- | ----------------------- |
| effect   | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


:::

:::group{name=setCanAlwaysEat}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setCanAlwaysEat(canAlwaysEat as boolean) as FoodProperties
```

| Параметр     | Тип     | Описание                |
| ------------ | ------- | ----------------------- |
| canAlwaysEat | boolean | No Description Provided |


:::

:::group{name=setIsFastFood}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setIsFastFood(fastFood as boolean) as FoodProperties
```

| Параметр | Тип     | Описание                |
| -------- | ------- | ----------------------- |
| fastFood | boolean | No Description Provided |


:::

:::group{name=setIsMeat}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setIsMeat(isMeat as boolean) as FoodProperties
```

| Параметр | Тип     | Описание                |
| -------- | ------- | ----------------------- |
| isMeat   | boolean | No Description Provided |


:::

:::group{name=setNutrition}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setNutrition(nutrition as int) as FoodProperties
```

| Параметр  | Тип | Описание                |
| --------- | --- | ----------------------- |
| nutrition | int | No Description Provided |


:::

:::group{name=setNutrition}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setNutrition(saturationModifier as float) as FoodProperties
```

| Параметр           | Тип   | Описание                |
| ------------------ | ----- | ----------------------- |
| saturationModifier | float | No Description Provided |


:::


## Свойства

| Название           | Тип                                                                                                                                                       | Имеет Getter | Имеет Setter | Описание                |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| canAlwaysEat       | boolean                                                                                                                                                   | true         | true         | No Description Provided |
| effects            | stdlib.List&lt;[Pair](/vanilla/api/util/Pair)&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance),float?&gt;&gt; | true         | false        | No Description Provided |
| isFastFood         | boolean                                                                                                                                                   | true         | true         | No Description Provided |
| isMeat             | boolean                                                                                                                                                   | true         | true         | No Description Provided |
| nutrition          | int                                                                                                                                                       | true         | true         | No Description Provided |
| saturationModifier | float                                                                                                                                                     | true         | true         | No Description Provided |

