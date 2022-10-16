# MobEffectInstance

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffectInstance;
```


## 已实现的接口
MobEffectInstance implements the following interfaces. That means all methods defined in these interfaces are also available in MobEffectInstance

- Comparable&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

## Static Methods

:::group{name=load}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
MobEffectInstance.load(data as MapData) as MobEffectInstance
```

| 参数   | 类型                                         |
| ---- | ------------------------------------------ |
| data | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

## Constructor #构造函数


```zenscript
new MobEffectInstance(mobEffect as MobEffect) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>);
```
| 参数        | 类型                                                |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100);
```
| 参数        | 类型                                                |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2);
```
| 参数        | 类型                                                |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false);
```
| 参数        | 类型                                                |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |
| ambient   | 布尔值                                               |
| visible   | 布尔值                                               |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean, showIcon as boolean) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false, false);
```
| 参数        | 类型                                                |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |
| ambient   | 布尔值                                               |
| visible   | 布尔值                                               |
| showIcon  | 布尔值                                               |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean, showIcon as boolean, hiddenEffect as MobEffectInstance) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false, false, new MobEffectInstance(<mobeffect:minecraft:haste>, 200, 3));
```
| 参数           | 类型                                                                |
| ------------ | ----------------------------------------------------------------- |
| mobEffect    | [MobEffect](/vanilla/api/entity/effect/MobEffect)                 |
| duration     | int                                                               |
| amplifier    | int                                                               |
| ambient      | 布尔值                                                               |
| visible      | 布尔值                                                               |
| showIcon     | 布尔值                                                               |
| hiddenEffect | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |



## 使用方式

:::group{name=applyEffect}

```zenscript
MobEffectInstance.applyEffect(entity as LivingEntity)
```

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| entity | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
MobEffectInstance.compareTo(other as MobEffectInstance) as int
```

| 参数    | 类型                                                                |
| ----- | ----------------------------------------------------------------- |
| other | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::

:::group{name=getAmplifier}

Return Type: int

```zenscript
// MobEffectInstance.getAmplifier() as int

myMobEffectInstance.getAmplifier();
```

:::

:::group{name=getDescriptionId}

Return Type: string

```zenscript
// MobEffectInstance.getDescriptionId() as string

myMobEffectInstance.getDescriptionId();
```

:::

:::group{name=getDuration}

Return Type: int

```zenscript
// MobEffectInstance.getDuration() as int

myMobEffectInstance.getDuration();
```

:::

:::group{name=getEffect}

Return Type: [MobEffect](/vanilla/api/entity/effect/MobEffect)

```zenscript
// MobEffectInstance.getEffect() as MobEffect

myMobEffectInstance.getEffect();
```

:::

:::group{name=isAmbient}

Return Type: boolean

```zenscript
// MobEffectInstance.isAmbient() as boolean

myMobEffectInstance.isAmbient();
```

:::

:::group{name=isNoCounter}

Return Type: boolean

```zenscript
// MobEffectInstance.isNoCounter() as boolean

myMobEffectInstance.isNoCounter();
```

:::

:::group{name=isVisible}

Return Type: boolean

```zenscript
// MobEffectInstance.isVisible() as boolean

myMobEffectInstance.isVisible();
```

:::

:::group{name=save}

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
MobEffectInstance.save(data as MapData?) as MapData
```

| 参数   | 类型                                    | 可选   |
| ---- | ------------------------------------- | ---- |
| data | [MapData](/vanilla/api/data/MapData)? | true |


:::

:::group{name=setNoCounter}

```zenscript
MobEffectInstance.setNoCounter(noCounter as boolean)
```

| 参数        | 类型  |
| --------- | --- |
| noCounter | 布尔值 |


:::

:::group{name=showIcon}

Return Type: boolean

```zenscript
// MobEffectInstance.showIcon() as boolean

myMobEffectInstance.showIcon();
```

:::

:::group{name=tick}

Return Type: boolean

```zenscript
MobEffectInstance.tick(entity as LivingEntity, onFinish as Runnable?) as boolean
```

| 参数       | 类型                                               | 可选    | 默认值  |
| -------- | ------------------------------------------------ | ----- | ---- |
| entity   | [LivingEntity](/vanilla/api/entity/LivingEntity) | false |      |
| onFinish | Runnable?                                        | true  | null |


:::

:::group{name=update}

Return Type: boolean

```zenscript
MobEffectInstance.update(instance as MobEffectInstance) as boolean
```

| 参数       | 类型                                                                |
| -------- | ----------------------------------------------------------------- |
| instance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::


## 参数

| 名称            | 类型                                                | 可获得  | 可设置   |
| ------------- | ------------------------------------------------- | ---- | ----- |
| ambient       | 布尔值                                               | true | false |
| amplifier     | int                                               | true | false |
| descriptionId | string                                            | true | false |
| duration      | int                                               | true | false |
| effect        | [MobEffect](/vanilla/api/entity/effect/MobEffect) | true | false |
| isNoCounter   | 布尔值                                               | true | false |
| showIcon      | 布尔值                                               | true | false |
| visible       | 布尔值                                               | true | false |

