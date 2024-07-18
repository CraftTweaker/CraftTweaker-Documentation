# PotionContents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.PotionContents;
```


## Extending Record

PotionContents extends Record. That means all methods available in Record are also available in PotionContents

## Static Methods

:::group{name=of}

Return Type: [PotionContents](/vanilla/api/item/component/PotionContents)

```zenscript
PotionContents.of(potion as Potion) as PotionContents
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| potion    | [Potion](/vanilla/api/item/alchemy/Potion) |


:::

:::group{name=of}

Return Type: [PotionContents](/vanilla/api/item/component/PotionContents)

```zenscript
PotionContents.of(potion as Potion, customColour as int, customEffects as stdlib.List<MobEffectInstance>) as PotionContents
```

|   Parameter   |                                         Type                                         |
|---------------|--------------------------------------------------------------------------------------|
| potion        | [Potion](/vanilla/api/item/alchemy/Potion)                                           |
| customColour  | int                                                                                  |
| customEffects | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; |


:::

## Methods

:::group{name=withEffectAdded}

Return Type: [PotionContents](/vanilla/api/item/component/PotionContents)

```zenscript
PotionContents.withEffectAdded(effectInstance as MobEffectInstance) as PotionContents
```

|   Parameter    |                               Type                                |
|----------------|-------------------------------------------------------------------|
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::


## Properties

|     Name      |                                         Type                                         | Has Getter | Has Setter |
|---------------|--------------------------------------------------------------------------------------|------------|------------|
| color         | int                                                                                  | true       | false      |
| customEffects | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | true       | false      |
| hasEffects    | boolean                                                                              | true       | false      |

