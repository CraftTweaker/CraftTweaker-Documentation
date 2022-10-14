# MobEffect

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffect;
```


## Методы

:::group{name=addAttributeModifier}

Return Type: [MobEffect](/vanilla/api/entity/effect/MobEffect)

```zenscript
MobEffect.addAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation) as MobEffect
```

| Параметр  | Тип                                                                    |
| --------- | ---------------------------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   |
| name      | string                                                                 |
| value     | double                                                                 |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) |


:::

:::group{name=applyEffectTick}

```zenscript
MobEffect.applyEffectTick(entity as LivingEntity, amplifier as int)
```

| Параметр  | Тип                                              |
| --------- | ------------------------------------------------ |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| amplifier | int                                              |


:::

:::group{name=applyInstantenousEffect}

```zenscript
MobEffect.applyInstantenousEffect(source as Entity, indirectSource as Entity, target as LivingEntity, amplifier as int, effectiveness as double)
```

| Параметр       | Тип                                              |
| -------------- | ------------------------------------------------ |
| источник       | [Entity](/vanilla/api/entity/Entity)             |
| indirectSource | [Entity](/vanilla/api/entity/Entity)             |
| target         | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| amplifier      | int                                              |
| effectiveness  | double                                           |


:::

:::group{name=getAttributeModifierValue}

Return Type: double

```zenscript
MobEffect.getAttributeModifierValue(amplifier as int, modifier as AttributeModifier) as double
```

| Параметр  | Тип                                                                  |
| --------- | -------------------------------------------------------------------- |
| amplifier | int                                                                  |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=getAttributeModifiers}

Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)[[Attribute](/vanilla/api/entity/attribute/Attribute)]

```zenscript
// MobEffect.getAttributeModifiers() as AttributeModifier[Attribute]

myMobEffect.getAttributeModifiers();
```

:::

:::group{name=getCategory}

Return Type: [MobEffectCategory](/vanilla/api/entity/effect/MobEffectCategory)

```zenscript
// MobEffect.getCategory() as MobEffectCategory

myMobEffect.getCategory();
```

:::

:::group{name=getColor}

Return Type: int

```zenscript
// MobEffect.getColor() as int

myMobEffect.getColor();
```

:::

:::group{name=getDescriptionId}

Return Type: string

```zenscript
// MobEffect.getDescriptionId() as string

myMobEffect.getDescriptionId();
```

:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// MobEffect.getDisplayName() as Component

myMobEffect.getDisplayName();
```

:::

:::group{name=isBeneficial}

Return Type: boolean

```zenscript
// MobEffect.isBeneficial() as boolean

myMobEffect.isBeneficial();
```

:::

:::group{name=isDurationEffectTick}

Return Type: boolean

```zenscript
MobEffect.isDurationEffectTick(duration as int, amplifier as int) as boolean
```

| Параметр  | Тип |
| --------- | --- |
| duration  | int |
| amplifier | int |


:::

:::group{name=isInstantenous}

Return Type: boolean

```zenscript
// MobEffect.isInstantenous() as boolean

myMobEffect.isInstantenous();
```

:::


## Свойства

| Название      | Тип                                                               | Имеет Getter | Имеет Setter |
| ------------- | ----------------------------------------------------------------- | ------------ | ------------ |
| beneficial    | boolean                                                           | true         | false        |
| category      | [MobEffectCategory](/vanilla/api/entity/effect/MobEffectCategory) | true         | false        |
| color         | int                                                               | true         | false        |
| commandString | string                                                            | true         | false        |
| descriptionId | string                                                            | true         | false        |
| displayName   | [Component](/vanilla/api/text/Component)                          | true         | false        |
| instantenous  | boolean                                                           | true         | false        |

