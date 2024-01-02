# MobEffectInstance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffectInstance;
```


## Implemented Interfaces
MobEffectInstance implements the following interfaces. That means all methods defined in these interfaces are also available in MobEffectInstance

- stdlib.Comparable&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

## Static Methods

:::group{name=load}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
MobEffectInstance.load(data as MapData) as MobEffectInstance
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

## Constructors


```zenscript
new MobEffectInstance(mobEffect as MobEffect) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>);
```
| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |



```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100);
```
| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |



```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2);
```
| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |



```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false);
```
| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |
| ambient   | boolean                                           |
| visible   | boolean                                           |



```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean, showIcon as boolean) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false, false);
```
| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |
| ambient   | boolean                                           |
| visible   | boolean                                           |
| showIcon  | boolean                                           |



```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean, showIcon as boolean, hiddenEffect as MobEffectInstance) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false, false, new MobEffectInstance(<mobeffect:minecraft:haste>, 200, 3));
```
|  Parameter   |                               Type                                |
|--------------|-------------------------------------------------------------------|
| mobEffect    | [MobEffect](/vanilla/api/entity/effect/MobEffect)                 |
| duration     | int                                                               |
| amplifier    | int                                                               |
| ambient      | boolean                                                           |
| visible      | boolean                                                           |
| showIcon     | boolean                                                           |
| hiddenEffect | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |



## Methods

:::group{name=compareTo}

Return Type: int

```zenscript
MobEffectInstance.compareTo(other as MobEffectInstance) as int
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| other     | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


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

| Parameter |                 Type                  | Optional |
|-----------|---------------------------------------|----------|
| data      | [MapData](/vanilla/api/data/MapData)? | true     |


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

| Parameter |                       Type                       | Optional | Default Value |
|-----------|--------------------------------------------------|----------|---------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) | false    |               |
| onFinish  | Runnable?                                        | true     | null          |


:::

:::group{name=update}

Return Type: boolean

```zenscript
MobEffectInstance.update(instance as MobEffectInstance) as boolean
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| instance  | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::


## Properties

|     Name      |                       Type                        | Has Getter | Has Setter |
|---------------|---------------------------------------------------|------------|------------|
| ambient       | boolean                                           | true       | false      |
| amplifier     | int                                               | true       | false      |
| descriptionId | string                                            | true       | false      |
| duration      | int                                               | true       | false      |
| effect        | [MobEffect](/vanilla/api/entity/effect/MobEffect) | true       | false      |
| showIcon      | boolean                                           | true       | false      |
| visible       | boolean                                           | true       | false      |

