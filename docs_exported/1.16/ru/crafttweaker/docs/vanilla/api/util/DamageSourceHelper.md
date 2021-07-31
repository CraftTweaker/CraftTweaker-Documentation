# DamageSourceHelper

The class has some static methods to create some specific damage sources.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.DamageSourceHelper;
```


## Methods

### causeBeeStingDamage

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causeBeeStingDamage(bee as MCLivingEntity) as DamageSource
```

| Параметр | Тип                                                  | Description             |
| -------- | ---------------------------------------------------- | ----------------------- |
| bee      | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


### causeIndirectDamage

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causeIndirectDamage(source as MCEntity, indirectEntityIn as MCLivingEntity) as DamageSource
```

| Параметр         | Тип                                                  | Description             |
| ---------------- | ---------------------------------------------------- | ----------------------- |
| источник         | [MCEntity](/vanilla/api/entity/MCEntity)             | No Description Provided |
| indirectEntityIn | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


### causeMobDamage

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causeMobDamage(mob as MCLivingEntity) as DamageSource
```

| Параметр | Тип                                                  | Description             |
| -------- | ---------------------------------------------------- | ----------------------- |
| mob      | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


### causePlayerDamage

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
DamageSourceHelper.causePlayerDamage(player as MCPlayerEntity) as DamageSource
```

| Параметр | Тип                                                  | Description             |
| -------- | ---------------------------------------------------- | ----------------------- |
| player   | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | No Description Provided |


