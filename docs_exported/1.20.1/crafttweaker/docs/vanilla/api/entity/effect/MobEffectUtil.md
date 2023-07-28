# MobEffectUtil

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffectUtil;
```


## Static Methods

:::group{name=formatDuration}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
MobEffectUtil.formatDuration(instance as MobEffectInstance, durationFactor as float) as Component
```

|   Parameter    |                               Type                                |
|----------------|-------------------------------------------------------------------|
| instance       | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |
| durationFactor | float                                                             |


:::

:::group{name=getDigSpeedAmplification}

Return Type: int

```zenscript
MobEffectUtil.getDigSpeedAmplification(entity as LivingEntity) as int
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=hasDigSpeed}

Return Type: boolean

```zenscript
MobEffectUtil.hasDigSpeed(entity as LivingEntity) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=hasWaterBreathing}

Return Type: boolean

```zenscript
MobEffectUtil.hasWaterBreathing(entity as LivingEntity) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

