# DamageSourceHelper

The class has some static methods to create some specific damage sources.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.DamageSourceHelper;
```


## Static Methods

:::group{name=causeBeeStingDamage}

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causeBeeStingDamage(bee as MCLivingEntity) as DamageSource
```

| Parameter | Type                                                 | Description             |
| --------- | ---------------------------------------------------- | ----------------------- |
| bee       | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


:::

:::group{name=causeIndirectDamage}

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causeIndirectDamage(source as MCEntity, indirectEntityIn as MCLivingEntity) as DamageSource
```

| Parameter        | Type                                                 | Description             |
| ---------------- | ---------------------------------------------------- | ----------------------- |
| fuente           | [MCEntity](/vanilla/api/entity/MCEntity)             | No Description Provided |
| indirectEntityIn | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


:::

:::group{name=causeMobDamage}

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causeMobDamage(mob as MCLivingEntity) as DamageSource
```

| Parameter | Type                                                 | Description             |
| --------- | ---------------------------------------------------- | ----------------------- |
| mob       | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


:::

:::group{name=causePlayerDamage}

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causePlayerDamage(player as MCPlayerEntity) as DamageSource
```

| Parameter | Type                                                 | Description             |
| --------- | ---------------------------------------------------- | ----------------------- |
| player    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | No Description Provided |


:::

