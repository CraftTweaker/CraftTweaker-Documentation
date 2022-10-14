# MobEffect

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffect;
```


## 使用方式

:::group{name=addAttributeModifier}

Return Type: [MobEffect](/vanilla/api/entity/effect/MobEffect)

```zenscript
MobEffect.addAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation) as MobEffect
```

| 参数        | 类型                                                                     | 描述                      |
| --------- | ---------------------------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | No Description Provided |
| name（名称）  | string                                                                 | No Description Provided |
| value     | double                                                                 | No Description Provided |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | No Description Provided |


:::

:::group{name=applyEffectTick}

Return Type: void

```zenscript
MobEffect.applyEffectTick(entity as LivingEntity, amplifier as int) as void
```

| 参数        | 类型                                               | 描述                      |
| --------- | ------------------------------------------------ | ----------------------- |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |
| amplifier | int                                              | No Description Provided |


:::

:::group{name=applyInstantenousEffect}

Return Type: void

```zenscript
MobEffect.applyInstantenousEffect(source as Entity, indirectSource as Entity, target as LivingEntity, amplifier as int, effectiveness as double) as void
```

| 参数             | 类型                                               | 描述                      |
| -------------- | ------------------------------------------------ | ----------------------- |
| 来源             | [Entity](/vanilla/api/entity/Entity)             | No Description Provided |
| indirectSource | [Entity](/vanilla/api/entity/Entity)             | No Description Provided |
| target         | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |
| amplifier      | int                                              | No Description Provided |
| effectiveness  | double                                           | No Description Provided |


:::

:::group{name=getAttributeModifierValue}

Return Type: double

```zenscript
MobEffect.getAttributeModifierValue(amplifier as int, modifier as AttributeModifier) as double
```

| 参数        | 类型                                                                   | 描述                      |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| amplifier | int                                                                  | No Description Provided |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


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

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| duration  | int | No Description Provided |
| amplifier | int | No Description Provided |


:::

:::group{name=isInstantenous}

Return Type: boolean

```zenscript
// MobEffect.isInstantenous() as boolean

myMobEffect.isInstantenous();
```

:::


## 参数

| 名称                   | 类型                                                                | 可获得  | 可设置   | 描述                      |
| -------------------- | ----------------------------------------------------------------- | ---- | ----- | ----------------------- |
| beneficial           | 布尔值                                                               | true | false | No Description Provided |
| category             | [MobEffectCategory](/vanilla/api/entity/effect/MobEffectCategory) | true | false | No Description Provided |
| color                | int                                                               | true | false | No Description Provided |
| commandString #命令字符串 | string                                                            | true | false | No Description Provided |
| descriptionId        | string                                                            | true | false | No Description Provided |
| displayName          | [Component](/vanilla/api/text/Component)                          | true | false | No Description Provided |
| instantenous         | 布尔值                                                               | true | false | No Description Provided |

