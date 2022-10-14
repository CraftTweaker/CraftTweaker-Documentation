# MobEffectUtil

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffectUtil;
```


## Static Methods

:::group{name=formatDuration}

Return Type: string

```zenscript
MobEffectUtil.formatDuration(instance as MobEffectInstance, durationFactor as float) as string
```

| Параметр       | Тип                                                               | Описание                |
| -------------- | ----------------------------------------------------------------- | ----------------------- |
| instance       | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |
| durationFactor | float                                                             | No Description Provided |


:::

:::group{name=getDigSpeedAmplification}

Return Type: int

```zenscript
MobEffectUtil.getDigSpeedAmplification(entity as LivingEntity) as int
```

| Параметр | Тип                                              | Описание                |
| -------- | ------------------------------------------------ | ----------------------- |
| entity   | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=hasDigSpeed}

Return Type: boolean

```zenscript
MobEffectUtil.hasDigSpeed(entity as LivingEntity) as boolean
```

| Параметр | Тип                                              | Описание                |
| -------- | ------------------------------------------------ | ----------------------- |
| entity   | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=hasWaterBreathing}

Return Type: boolean

```zenscript
MobEffectUtil.hasWaterBreathing(entity as LivingEntity) as boolean
```

| Параметр | Тип                                              | Описание                |
| -------- | ------------------------------------------------ | ----------------------- |
| entity   | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

