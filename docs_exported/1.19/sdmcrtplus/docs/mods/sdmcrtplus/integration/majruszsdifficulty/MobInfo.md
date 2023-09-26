# MobInfo

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.majruszsdifficulty.MobInfo;
```


## Constructors


```zenscript
new MobInfo() as MobInfo
new MobInfo();
```

```zenscript
new MobInfo(def as MobDef, position as BlockPos, isBoss as bool?) as MobInfo
```
| Parameter |                               Type                               |
|-----------|------------------------------------------------------------------|
| def       | [MobDef](/mods/sdmcrtplus/integration/majruszsdifficulty/MobDef) |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                      |
| isBoss    | bool?                                                            |



## Methods

:::group{name=getEquipment}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// MobInfo.getEquipment() as ResourceLocation

myMobInfo.getEquipment();
```

:::

:::group{name=getHealth}

Return Type: float

```zenscript
MobInfo.getHealth(level as ServerLevel) as float
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |


:::

:::group{name=getMaxHealth}

Return Type: float

```zenscript
MobInfo.getMaxHealth(level as ServerLevel) as float
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |


:::

:::group{name=getPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// MobInfo.getPosition() as BlockPos

myMobInfo.getPosition();
```

:::

:::group{name=getType}

Return Type: [EntityType](/vanilla/api/entity/EntityType)

```zenscript
// MobInfo.getType() as EntityType

myMobInfo.getType();
```

:::

:::group{name=getUUID}

Return Type: **invalid**

```zenscript
// MobInfo.getUUID() as invalid

myMobInfo.getUUID();
```

:::

:::group{name=isBoss}

Return Type: boolean

```zenscript
// MobInfo.isBoss() as boolean

myMobInfo.isBoss();
```

:::

:::group{name=isBoss}

Return Type: boolean

```zenscript
MobInfo.isBoss(boss as boolean) as boolean
```

| Parameter |  Type   |
|-----------|---------|
| boss      | boolean |


:::

:::group{name=setPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
MobInfo.setPosition(pos as BlockPos) as BlockPos
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setType}

Return Type: [EntityType](/vanilla/api/entity/EntityType)

```zenscript
MobInfo.setType(entityType as EntityType) as EntityType
```

| Parameter  |                     Type                     |
|------------|----------------------------------------------|
| entityType | [EntityType](/vanilla/api/entity/EntityType) |


:::

:::group{name=toEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
MobInfo.toEntity(level as ServerLevel) as Entity
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |


:::


## Properties

| Name |    Type     | Has Getter | Has Setter |
|------|-------------|------------|------------|
| uuid | **invalid** | true       | false      |

