# MobEffectInstance

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffectInstance;
```


## Interfacce Implementate
MobEffectInstance implements the following interfaces. That means all methods defined in these interfaces are also available in MobEffectInstance

- Comparable&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

## Static Methods

:::group{name=load}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
MobEffectInstance.load(data as MapData) as MobEffectInstance
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| data      | [MapData](/vanilla/api/data/MapData) |


:::

## Constructors


```zenscript
new MobEffectInstance(mobEffect as MobEffect) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>);
```
| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100);
```
| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2);
```
| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false);
```
| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| mobEffect | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |
| amplifier | int                                               |
| ambient   | boolean                                           |
| visible   | boolean                                           |

```zenscript
new MobEffectInstance(mobEffect as MobEffect, duration as int, amplifier as int, ambient as boolean, visible as boolean, showIcon as boolean) as MobEffectInstance
new MobEffectInstance(<mobeffect:minecraft:haste>, 100, 2, true, false, false);
```
| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
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
| Parametro    | Tipo                                                              |
| ------------ | ----------------------------------------------------------------- |
| mobEffect    | [MobEffect](/vanilla/api/entity/effect/MobEffect)                 |
| duration     | int                                                               |
| amplifier    | int                                                               |
| ambient      | boolean                                                           |
| visible      | boolean                                                           |
| showIcon     | boolean                                                           |
| hiddenEffect | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |



## Metodi

:::group{name=applyEffect}

```zenscript
MobEffectInstance.applyEffect(entity as LivingEntity)
```

| Parametro | Tipo                                             |
| --------- | ------------------------------------------------ |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
MobEffectInstance.compareTo(other as MobEffectInstance) as int
```

| Parametro | Tipo                                                              |
| --------- | ----------------------------------------------------------------- |
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

| Parametro | Tipo                                  | Optional |
| --------- | ------------------------------------- | -------- |
| data      | [MapData](/vanilla/api/data/MapData)? | sì       |


:::

:::group{name=setNoCounter}

```zenscript
MobEffectInstance.setNoCounter(noCounter as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| noCounter | boolean |


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

| Parametro | Tipo                                             | Optional | Default Value |
| --------- | ------------------------------------------------ | -------- | ------------- |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) | no       |               |
| onFinish  | Runnable?                                        | sì       | null          |


:::

:::group{name=update}

Return Type: boolean

```zenscript
MobEffectInstance.update(instance as MobEffectInstance) as boolean
```

| Parametro | Tipo                                                              |
| --------- | ----------------------------------------------------------------- |
| instance  | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::


## Proprietà

| Nome          | Tipo                                              | Ha Getter | Ha Setter |
| ------------- | ------------------------------------------------- | --------- | --------- |
| ambient       | boolean                                           | sì        | no        |
| amplifier     | int                                               | sì        | no        |
| descriptionId | string                                            | sì        | no        |
| duration      | int                                               | sì        | no        |
| effect        | [MobEffect](/vanilla/api/entity/effect/MobEffect) | sì        | no        |
| isNoCounter   | boolean                                           | sì        | no        |
| showIcon      | boolean                                           | sì        | no        |
| visible       | boolean                                           | sì        | no        |

