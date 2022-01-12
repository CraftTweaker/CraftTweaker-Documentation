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

| 参数   | 类型                                         | 描述                      |
| ---- | ------------------------------------------ | ----------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

## 使用方式

:::group{name=applyEffect}

Return Type: void

```zenscript
MobEffectInstance.applyEffect(entity as LivingEntity) as void
```

| 参数     | 类型                                               | 描述                      |
| ------ | ------------------------------------------------ | ----------------------- |
| entity | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
MobEffectInstance.compareTo(other as MobEffectInstance) as int
```

| 参数    | 类型                                                                | 描述                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| other | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


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
MobEffectInstance.save(data as MapData) as MapData
```

| 参数   | 类型                                         | 描述                      | 可选   | DefaultValue |
| ---- | ------------------------------------------ | ----------------------- | ---- | ------------ |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided | true |              |


:::

:::group{name=setNoCounter}

Return Type: void

```zenscript
MobEffectInstance.setNoCounter(noCounter as boolean) as void
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| noCounter | 布尔值 | No Description Provided |


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
MobEffectInstance.tick(entity as LivingEntity, onFinish as Runnable) as boolean
```

| 参数       | 类型                                               | 描述                      | 可选    | DefaultValue |
| -------- | ------------------------------------------------ | ----------------------- | ----- | ------------ |
| entity   | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided | false |              |
| onFinish | Runnable                                         | No Description Provided | true  | () => {}     |


:::

:::group{name=update}

Return Type: boolean

```zenscript
MobEffectInstance.update(instance as MobEffectInstance) as boolean
```

| 参数       | 类型                                                                | 描述                      |
| -------- | ----------------------------------------------------------------- | ----------------------- |
| instance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


:::


## 参数

| 名称            | 类型                                                | 可获得  | 可设置   | 描述                      |
| ------------- | ------------------------------------------------- | ---- | ----- | ----------------------- |
| ambient       | 布尔值                                               | true | false | No Description Provided |
| amplifier     | int                                               | true | false | No Description Provided |
| descriptionId | string                                            | true | false | No Description Provided |
| duration      | int                                               | true | false | No Description Provided |
| effect        | [MobEffect](/vanilla/api/entity/effect/MobEffect) | true | false | No Description Provided |
| isNoCounter   | 布尔值                                               | true | false | No Description Provided |
| showIcon      | 布尔值                                               | true | false | No Description Provided |
| visible       | 布尔值                                               | true | false | No Description Provided |

