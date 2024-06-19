# FoodPropertiesBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodPropertiesBuilder;
```


## Static Methods

:::group{name=of}

Return Type: [FoodPropertiesBuilder](/vanilla/api/food/FoodPropertiesBuilder)

```zenscript
// FoodPropertiesBuilder.of() as FoodPropertiesBuilder

FoodPropertiesBuilder.of();
```

:::

## Casters

|                    Result Type                     | Is Implicit |
|----------------------------------------------------|-------------|
| [FoodProperties](/vanilla/api/food/FoodProperties) | true        |

## Methods

:::group{name=alwaysEdible}

Return Type: [FoodPropertiesBuilder](/vanilla/api/food/FoodPropertiesBuilder)

```zenscript
// FoodPropertiesBuilder.alwaysEdible() as FoodPropertiesBuilder

myFoodPropertiesBuilder.alwaysEdible();
```

:::

:::group{name=build}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)

```zenscript
// FoodPropertiesBuilder.build() as FoodProperties

myFoodPropertiesBuilder.build();
```

:::

:::group{name=effect}

Return Type: [FoodPropertiesBuilder](/vanilla/api/food/FoodPropertiesBuilder)

```zenscript
FoodPropertiesBuilder.effect(effect as MobEffectInstance, probability as float) as FoodPropertiesBuilder
```

|  Parameter  |                               Type                                |
|-------------|-------------------------------------------------------------------|
| effect      | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |
| probability | float                                                             |


:::

:::group{name=fast}

Return Type: [FoodPropertiesBuilder](/vanilla/api/food/FoodPropertiesBuilder)

```zenscript
// FoodPropertiesBuilder.fast() as FoodPropertiesBuilder

myFoodPropertiesBuilder.fast();
```

:::

:::group{name=nutrition}

Return Type: [FoodPropertiesBuilder](/vanilla/api/food/FoodPropertiesBuilder)

```zenscript
FoodPropertiesBuilder.nutrition(nutrition as int) as FoodPropertiesBuilder
```

| Parameter | Type |
|-----------|------|
| nutrition | int  |


:::

:::group{name=saturationModifier}

Return Type: [FoodPropertiesBuilder](/vanilla/api/food/FoodPropertiesBuilder)

```zenscript
FoodPropertiesBuilder.saturationModifier(saturationModifier as float) as FoodPropertiesBuilder
```

|     Parameter      | Type  |
|--------------------|-------|
| saturationModifier | float |


:::


