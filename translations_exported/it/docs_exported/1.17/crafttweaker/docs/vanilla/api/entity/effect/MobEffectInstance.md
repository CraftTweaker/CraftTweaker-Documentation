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

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

## Metodi

:::group{name=applyEffect}

Return Type: void

```zenscript
MobEffectInstance.applyEffect(entity as LivingEntity) as void
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
MobEffectInstance.compareTo(other as MobEffectInstance) as int
```

| Parametro | Tipo                                                              | Descrizione             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| other     | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


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

| Parametro | Tipo                                 | Descrizione             | Optional | DefaultValue |
| --------- | ------------------------------------ | ----------------------- | -------- | ------------ |
| data      | [MapData](/vanilla/api/data/MapData) | No Description Provided | sì       |              |


:::

:::group{name=setNoCounter}

Return Type: void

```zenscript
MobEffectInstance.setNoCounter(noCounter as boolean) as void
```

| Parametro | Tipo    | Descrizione             |
| --------- | ------- | ----------------------- |
| noCounter | boolean | No Description Provided |


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

| Parametro | Tipo                                             | Descrizione             | Optional | DefaultValue |
| --------- | ------------------------------------------------ | ----------------------- | -------- | ------------ |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided | no       |              |
| onFinish  | Runnable                                         | No Description Provided | sì       | () => {}     |


:::

:::group{name=update}

Return Type: boolean

```zenscript
MobEffectInstance.update(instance as MobEffectInstance) as boolean
```

| Parametro | Tipo                                                              | Descrizione             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| instance  | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


:::


## Proprietà

| Nome          | Tipo                                              | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ------------------------------------------------- | --------- | --------- | ----------------------- |
| ambient       | boolean                                           | sì        | no        | No Description Provided |
| amplifier     | int                                               | sì        | no        | No Description Provided |
| descriptionId | string                                            | sì        | no        | No Description Provided |
| duration      | int                                               | sì        | no        | No Description Provided |
| effect        | [MobEffect](/vanilla/api/entity/effect/MobEffect) | sì        | no        | No Description Provided |
| isNoCounter   | boolean                                           | sì        | no        | No Description Provided |
| showIcon      | boolean                                           | sì        | no        | No Description Provided |
| visible       | boolean                                           | sì        | no        | No Description Provided |

