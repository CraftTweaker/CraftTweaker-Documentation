# FoodPropertiesPossibleEffect

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.FoodPropertiesPossibleEffect;
```


## Extending Record

FoodPropertiesPossibleEffect extends Record. That means all methods available in Record are also available in FoodPropertiesPossibleEffect

## Static Methods

:::group{name=of}

Return Type: [FoodPropertiesPossibleEffect](/vanilla/api/food/FoodPropertiesPossibleEffect)

```zenscript
FoodPropertiesPossibleEffect.of(effect as MobEffectInstance, probability as float) as FoodPropertiesPossibleEffect
```

|  Parameter  |                               Type                                |
|-------------|-------------------------------------------------------------------|
| effect      | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |
| probability | float                                                             |


:::

## Properties

|    Name     |                               Type                                | Has Getter | Has Setter |
|-------------|-------------------------------------------------------------------|------------|------------|
| effect      | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | true       | false      |
| probability | float                                                             | true       | false      |

