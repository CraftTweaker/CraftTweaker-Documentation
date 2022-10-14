# FoodProperties

## Diese Klasse importieren

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

| Parameter          | Type  | Beschreibung            |
| ------------------ | ----- | ----------------------- |
| nutrition          | int   | No Description Provided |
| saturationModifier | float | No Description Provided |


:::

## Methoden

:::group{name=addEffect}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.addEffect(effect as MobEffectInstance, probability as float) as FoodProperties
```

| Parameter   | Type                                                              | Beschreibung            |
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

| Parameter | Type                                                              | Beschreibung            |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| effect    | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


:::

:::group{name=setCanAlwaysEat}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setCanAlwaysEat(canAlwaysEat as boolean) as FoodProperties
```

| Parameter    | Type    | Beschreibung            |
| ------------ | ------- | ----------------------- |
| canAlwaysEat | boolean | No Description Provided |


:::

:::group{name=setIsFastFood}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setIsFastFood(fastFood as boolean) as FoodProperties
```

| Parameter | Type    | Beschreibung            |
| --------- | ------- | ----------------------- |
| fastFood  | boolean | No Description Provided |


:::

:::group{name=setIsMeat}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setIsMeat(isMeat as boolean) as FoodProperties
```

| Parameter | Type    | Beschreibung            |
| --------- | ------- | ----------------------- |
| isMeat    | boolean | No Description Provided |


:::

:::group{name=setNutrition}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setNutrition(nutrition as int) as FoodProperties
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| nutrition | int  | No Description Provided |


:::

:::group{name=setNutrition}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
FoodProperties.setNutrition(saturationModifier as float) as FoodProperties
```

| Parameter          | Type  | Beschreibung            |
| ------------------ | ----- | ----------------------- |
| saturationModifier | float | No Description Provided |


:::


## Properties

| Name               | Type                                                                                                                                                      | Has Getter | Has Setter | Beschreibung            |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| canAlwaysEat       | boolean                                                                                                                                                   | true       | true       | No Description Provided |
| effects            | stdlib.List&lt;[Pair](/vanilla/api/util/Pair)&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance),float?&gt;&gt; | true       | false      | No Description Provided |
| isFastFood         | boolean                                                                                                                                                   | true       | true       | No Description Provided |
| isMeat             | boolean                                                                                                                                                   | true       | true       | No Description Provided |
| nutrition          | int                                                                                                                                                       | true       | true       | No Description Provided |
| saturationModifier | float                                                                                                                                                     | true       | true       | No Description Provided |

