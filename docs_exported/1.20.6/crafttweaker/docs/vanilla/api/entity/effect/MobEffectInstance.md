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

:::group{name=of}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
MobEffectInstance.of(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean, showIcon as boolean, hiddenEffect as MobEffectInstance?) as MobEffectInstance
```

|  Parameter   |                                Type                                | Optional | Default Value |
|--------------|--------------------------------------------------------------------|----------|---------------|
| mobEffect    | [MobEffect](/vanilla/api/entity/effect/MobEffect)                  | false    |               |
| duration     | int                                                                | true     | 0             |
| amplifier    | int                                                                | true     | 0             |
| ambient      | boolean                                                            | true     | false         |
| visible      | boolean                                                            | true     | true          |
| showIcon     | boolean                                                            | true     | true          |
| hiddenEffect | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)? | true     |               |


:::

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
// MobEffectInstance.save() as MapData

myMobEffectInstance.save();
```

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

