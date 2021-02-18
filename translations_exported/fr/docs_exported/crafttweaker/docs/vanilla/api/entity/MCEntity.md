# MCEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntity;
```


## Methods

### addTag

Return Type: boolean

```zenscript
MCEntity.addTag(tag as string) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tag       | string | No Description Provided |


### addVelocity

Return Type: void

```zenscript
MCEntity.addVelocity(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


### applyEntityCollision

Return Type: void

```zenscript
MCEntity.applyEntityCollision(entityIn as MCEntity) as void
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| entityIn  | [MCEntity](/vanilla/api/entity/MCEntity) | No Description Provided |


### canSwim

Return Type: boolean

```zenscript
MCEntity.canSwim() as boolean
myMCEntity.canSwim();
```

### extinguish

Return Type: void

```zenscript
MCEntity.extinguish() as void
myMCEntity.extinguish();
```

### forceFireTicks

Return Type: void

```zenscript
MCEntity.forceFireTicks(ticks as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| ticks     | int  | No Description Provided |


### forceSetPosition

Return Type: void

```zenscript
MCEntity.forceSetPosition(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


### getAir

Return Type: int

```zenscript
MCEntity.getAir() as int
myMCEntity.getAir();
```

### getBrightness

Return Type: float

```zenscript
MCEntity.getBrightness() as float
myMCEntity.getBrightness();
```

### getDistance

Return Type: float

```zenscript
MCEntity.getDistance(entityIn as MCEntity) as float
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| entityIn  | [MCEntity](/vanilla/api/entity/MCEntity) | No Description Provided |


### getDistanceSq

Return Type: double

```zenscript
MCEntity.getDistanceSq(entityIn as MCEntity) as double
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| entityIn  | [MCEntity](/vanilla/api/entity/MCEntity) | No Description Provided |


Return Type: double

```zenscript
MCEntity.getDistanceSq(x as double, y as double, z as double) as double
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


### getEntityId

Return Type: int

```zenscript
MCEntity.getEntityId() as int
myMCEntity.getEntityId();
```

### getFireTimer

Return Type: int

```zenscript
MCEntity.getFireTimer() as int
myMCEntity.getFireTimer();
```

### getMaxInPortalTime

Return Type: int

```zenscript
MCEntity.getMaxInPortalTime() as int
myMCEntity.getMaxInPortalTime();
```

### getName

Return Type: string

```zenscript
MCEntity.getName() as string
myMCEntity.getName();
```

### getTags

Return Type: Set&lt;string&gt;

```zenscript
MCEntity.getTags() as Set<string>
myMCEntity.getTags();
```

### getType

Return Type: [MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
MCEntity.getType() as MCEntityType
myMCEntity.getType();
```

### getWorld

Return Type: [MCWorld](/vanilla/api/world/MCWorld)

```zenscript
MCEntity.getWorld() as MCWorld
myMCEntity.getWorld();
```

### hasNoGravity

Return Type: boolean

```zenscript
MCEntity.hasNoGravity() as boolean
myMCEntity.hasNoGravity();
```

### isEntityInRange

Return Type: boolean

```zenscript
MCEntity.isEntityInRange(entity as MCEntity, distance as double) as boolean
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| entity    | [MCEntity](/vanilla/api/entity/MCEntity) | No Description Provided |
| distance  | double                                   | No Description Provided |


### isImmuneToFire

Return Type: boolean

```zenscript
MCEntity.isImmuneToFire() as boolean
myMCEntity.isImmuneToFire();
```

### isInLava

Return Type: boolean

```zenscript
MCEntity.isInLava() as boolean
myMCEntity.isInLava();
```

### isInWater

Return Type: boolean

```zenscript
MCEntity.isInWater() as boolean
myMCEntity.isInWater();
```

### isInWaterOrBubbleColumn

Return Type: boolean

```zenscript
MCEntity.isInWaterOrBubbleColumn() as boolean
myMCEntity.isInWaterOrBubbleColumn();
```

### isInWaterRainOrBubbleColumn

Return Type: boolean

```zenscript
MCEntity.isInWaterRainOrBubbleColumn() as boolean
myMCEntity.isInWaterRainOrBubbleColumn();
```

### isOffsetPositionInLiquid

Return Type: boolean

```zenscript
MCEntity.isOffsetPositionInLiquid(x as double, y as double, z as double) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


### isOnGround

Return Type: boolean

```zenscript
MCEntity.isOnGround() as boolean
myMCEntity.isOnGround();
```

### isSilent

Return Type: boolean

```zenscript
MCEntity.isSilent() as boolean
myMCEntity.isSilent();
```

### isSpectator

Return Type: boolean

```zenscript
MCEntity.isSpectator() as boolean
myMCEntity.isSpectator();
```

### isWet

Return Type: boolean

```zenscript
MCEntity.isWet() as boolean
myMCEntity.isWet();
```

### moveForced

Return Type: void

```zenscript
MCEntity.moveForced(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


### onCollideWithPlayer

Return Type: void

```zenscript
MCEntity.onCollideWithPlayer(entityIn as MCPlayerEntity) as void
```

| Parameter | Type                                                 | Description             |
| --------- | ---------------------------------------------------- | ----------------------- |
| entityIn  | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | No Description Provided |


### onKillCommand

Return Type: void

```zenscript
MCEntity.onKillCommand() as void
myMCEntity.onKillCommand();
```

### onLivingFall

Return Type: boolean

```zenscript
MCEntity.onLivingFall(distance as float, damageMultiplier as float) as boolean
```

| Parameter        | Type  | Description             |
| ---------------- | ----- | ----------------------- |
| distance         | float | No Description Provided |
| damageMultiplier | float | No Description Provided |


### removeTag

Return Type: boolean

```zenscript
MCEntity.removeTag(tag as string) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tag       | string | No Description Provided |


### setAir

Return Type: void

```zenscript
MCEntity.setAir(air as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| air       | int  | No Description Provided |


### setEntityId

Return Type: void

```zenscript
MCEntity.setEntityId(id as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| id        | int  | No Description Provided |


### setFire

Return Type: void

```zenscript
MCEntity.setFire(seconds as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| seconds   | int  | No Description Provided |


### setNoGravity

Return Type: void

```zenscript
MCEntity.setNoGravity(noGravity as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| noGravity | boolean | No Description Provided |


### setOnGround

Return Type: void

```zenscript
MCEntity.setOnGround(grounded as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| grounded  | boolean | No Description Provided |


### setPosition

Return Type: void

```zenscript
MCEntity.setPosition(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


### setSilent

Return Type: void

```zenscript
MCEntity.setSilent(isSilent as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| isSilent  | boolean | No Description Provided |



## Properties

| Name  | Type                                  | Has Getter | Has Setter |
| ----- | ------------------------------------- | ---------- | ---------- |
| air   | int                                   | true       | true       |
| name  | string                                | true       | false      |
| world | [MCWorld](/vanilla/api/world/MCWorld) | true       | false      |

