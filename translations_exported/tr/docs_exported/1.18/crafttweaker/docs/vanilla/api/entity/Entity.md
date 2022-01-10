# Entity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.Entity;
```


## Implemented Interfaces
Entity implements the following interfaces. That means all methods defined in these interfaces are also available in Entity

- [Nameable](/vanilla/api/world/Nameable)
- [EntityAccess](/vanilla/api/entity/EntityAccess)
- [CommandSource](/vanilla/api/command/CommandSource)

## Methods

:::group{name=addTag}

Return Type: boolean

```zenscript
Entity.addTag(tagName as string) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tagName   | string | No Description Provided |


:::

:::group{name=blockPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// Entity.blockPosition() as BlockPos

myEntity.blockPosition();
```

:::

:::group{name=canBeCollidedWith}

Return Type: boolean

```zenscript
// Entity.canBeCollidedWith() as boolean

myEntity.canBeCollidedWith();
```

:::

:::group{name=canCollideWith}

Return Type: boolean

```zenscript
Entity.canCollideWith(other as Entity) as boolean
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| other     | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=canFreeze}

Return Type: boolean

```zenscript
// Entity.canFreeze() as boolean

myEntity.canFreeze();
```

:::

:::group{name=clearFire}

Return Type: void

```zenscript
// Entity.clearFire() as void

myEntity.clearFire();
```

:::

:::group{name=closerThan}

Return Type: boolean

```zenscript
Entity.closerThan(other as Entity, distance as double) as boolean
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| other     | [Entity](/vanilla/api/entity/Entity) | No Description Provided |
| distance  | double                               | No Description Provided |


:::

:::group{name=discard}

Return Type: void

```zenscript
// Entity.discard() as void

myEntity.discard();
```

:::

:::group{name=distanceTo}

Return Type: float

```zenscript
Entity.distanceTo(entity as Entity) as float
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(entity as Entity) as double
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(vec as Vec3) as double
```

| Parameter | Type                                | Description             |
| --------- | ----------------------------------- | ----------------------- |
| vec       | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(x as double, y as double, z as double) as double
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


:::

:::group{name=ejectPassengers}

Return Type: void

```zenscript
// Entity.ejectPassengers() as void

myEntity.ejectPassengers();
```

:::

:::group{name=eyeBlockPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// Entity.eyeBlockPosition() as BlockPos

myEntity.eyeBlockPosition();
```

:::

:::group{name=fireImmune}

Return Type: boolean

```zenscript
// Entity.fireImmune() as boolean

myEntity.fireImmune();
```

:::

:::group{name=getAirSupply}

Return Type: int

```zenscript
// Entity.getAirSupply() as int

myEntity.getAirSupply();
```

:::

:::group{name=getAllSlots}

Return Type: stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// Entity.getAllSlots() as stdlib.Iterable<ItemStack>

myEntity.getAllSlots();
```

:::

:::group{name=getArmorSlots}

Return Type: stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// Entity.getArmorSlots() as stdlib.Iterable<ItemStack>

myEntity.getArmorSlots();
```

:::

:::group{name=getBbHeight}

Return Type: float

```zenscript
// Entity.getBbHeight() as float

myEntity.getBbHeight();
```

:::

:::group{name=getBbWidth}

Return Type: float

```zenscript
// Entity.getBbWidth() as float

myEntity.getBbWidth();
```

:::

:::group{name=getBlockX}

Return Type: int

```zenscript
// Entity.getBlockX() as int

myEntity.getBlockX();
```

:::

:::group{name=getBlockY}

Return Type: int

```zenscript
// Entity.getBlockY() as int

myEntity.getBlockY();
```

:::

:::group{name=getBlockZ}

Return Type: int

```zenscript
// Entity.getBlockZ() as int

myEntity.getBlockZ();
```

:::

:::group{name=getBoundingBoxForCulling}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
// Entity.getBoundingBoxForCulling() as AABB

myEntity.getBoundingBoxForCulling();
```

:::

:::group{name=getBrightness}

Return Type: float

```zenscript
// Entity.getBrightness() as float

myEntity.getBrightness();
```

:::

:::group{name=getCommandSenderWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// Entity.getCommandSenderWorld() as Level

myEntity.getCommandSenderWorld();
```

:::

:::group{name=getControllingPassenger}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Entity.getControllingPassenger() as Entity

myEntity.getControllingPassenger();
```

:::

:::group{name=getCustomName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Entity.getCustomName() as Component

myEntity.getCustomName();
```

:::

:::group{name=getData}

Gets the NBT data of this Entity.

Returns: The NBT data of this Entity.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// Entity.getData() as MapData

myEntity.getData();
```

:::

:::group{name=getDimensionChangingDelay}

Return Type: int

```zenscript
// Entity.getDimensionChangingDelay() as int

myEntity.getDimensionChangingDelay();
```

:::

:::group{name=getDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// Entity.getDirection() as Direction

myEntity.getDirection();
```

:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Entity.getDisplayName() as Component

myEntity.getDisplayName();
```

:::

:::group{name=getEyeHeight}

Return Type: float

```zenscript
// Entity.getEyeHeight() as float

myEntity.getEyeHeight();
```

:::

:::group{name=getEyePosition}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Entity.getEyePosition() as Vec3

myEntity.getEyePosition();
```

:::

:::group{name=getEyePosition}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Entity.getEyePosition(partialTicks as float) as Vec3
```

| Parameter    | Type  | Description             |
| ------------ | ----- | ----------------------- |
| partialTicks | float | No Description Provided |


:::

:::group{name=getEyeY}

Return Type: double

```zenscript
// Entity.getEyeY() as double

myEntity.getEyeY();
```

:::

:::group{name=getFeetBlockState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// Entity.getFeetBlockState() as BlockState

myEntity.getFeetBlockState();
```

:::

:::group{name=getFirstPassenger}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Entity.getFirstPassenger() as Entity

myEntity.getFirstPassenger();
```

:::

:::group{name=getFluidJumpThreshold}

Return Type: double

```zenscript
// Entity.getFluidJumpThreshold() as double

myEntity.getFluidJumpThreshold();
```

:::

:::group{name=getForward}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Entity.getForward() as Vec3

myEntity.getForward();
```

:::

:::group{name=getHandSlots}

Return Type: stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// Entity.getHandSlots() as stdlib.Iterable<ItemStack>

myEntity.getHandSlots();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// Entity.getLevel() as Level

myEntity.getLevel();
```

:::

:::group{name=getLookAngle}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Entity.getLookAngle() as Vec3

myEntity.getLookAngle();
```

:::

:::group{name=getMaxAirSupply}

Return Type: int

```zenscript
// Entity.getMaxAirSupply() as int

myEntity.getMaxAirSupply();
```

:::

:::group{name=getMaxFallDistance}

Return Type: int

```zenscript
// Entity.getMaxFallDistance() as int

myEntity.getMaxFallDistance();
```

:::

:::group{name=getMotionDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// Entity.getMotionDirection() as Direction

myEntity.getMotionDirection();
```

:::

:::group{name=getName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Entity.getName() as Component

myEntity.getName();
```

:::

:::group{name=getOnPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// Entity.getOnPos() as BlockPos

myEntity.getOnPos();
```

:::

:::group{name=getPassengers}

Return Type: stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// Entity.getPassengers() as stdlib.List<Entity>

myEntity.getPassengers();
```

:::

:::group{name=getPercentFrozen}

Return Type: float

```zenscript
// Entity.getPercentFrozen() as float

myEntity.getPercentFrozen();
```

:::

:::group{name=getPistonPushReaction}

Return Type: [PushReaction](/vanilla/api/block/material/PushReaction)

```zenscript
// Entity.getPistonPushReaction() as PushReaction

myEntity.getPistonPushReaction();
```

:::

:::group{name=getPortalWaitTime}

Return Type: int

```zenscript
// Entity.getPortalWaitTime() as int

myEntity.getPortalWaitTime();
```

:::

:::group{name=getPosition}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Entity.getPosition(partialTicks as float) as Vec3
```

| Parameter    | Type  | Description             |
| ------------ | ----- | ----------------------- |
| partialTicks | float | No Description Provided |


:::

:::group{name=getRemainingFireTicks}

Return Type: int

```zenscript
// Entity.getRemainingFireTicks() as int

myEntity.getRemainingFireTicks();
```

:::

:::group{name=getRootVehicle}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Entity.getRootVehicle() as Entity

myEntity.getRootVehicle();
```

:::

:::group{name=getSoundSource}

Return Type: [SoundSource](/vanilla/api/sound/SoundSource)

```zenscript
// Entity.getSoundSource() as SoundSource

myEntity.getSoundSource();
```

:::

:::group{name=getStringUUID}

Return Type: string

```zenscript
// Entity.getStringUUID() as string

myEntity.getStringUUID();
```

:::

:::group{name=getTags}

Return Type: Set&lt;string&gt;

```zenscript
// Entity.getTags() as Set<string>

myEntity.getTags();
```

:::

:::group{name=getTeamColor}

Return Type: int

```zenscript
// Entity.getTeamColor() as int

myEntity.getTeamColor();
```

:::

:::group{name=getTicksFrozen}

Return Type: int

```zenscript
// Entity.getTicksFrozen() as int

myEntity.getTicksFrozen();
```

:::

:::group{name=getTicksRequiredToFreeze}

Return Type: int

```zenscript
// Entity.getTicksRequiredToFreeze() as int

myEntity.getTicksRequiredToFreeze();
```

:::

:::group{name=getType}

Return Type: [EntityType](/vanilla/api/entity/EntityType)

```zenscript
// Entity.getType() as EntityType

myEntity.getType();
```

:::

:::group{name=getUpVector}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Entity.getUpVector(partialTicks as float) as Vec3
```

| Parameter    | Type  | Description             |
| ------------ | ----- | ----------------------- |
| partialTicks | float | No Description Provided |


:::

:::group{name=getVehicle}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Entity.getVehicle() as Entity

myEntity.getVehicle();
```

:::

:::group{name=getViewVector}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Entity.getViewVector(partialTicks as float) as Vec3
```

| Parameter    | Type  | Description             |
| ------------ | ----- | ----------------------- |
| partialTicks | float | No Description Provided |


:::

:::group{name=getX}

Return Type: double

```zenscript
// Entity.getX() as double

myEntity.getX();
```

:::

:::group{name=getX}

Return Type: double

```zenscript
Entity.getX(scale as double) as double
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| scale     | double | No Description Provided |


:::

:::group{name=getY}

Return Type: double

```zenscript
// Entity.getY() as double

myEntity.getY();
```

:::

:::group{name=getY}

Return Type: double

```zenscript
Entity.getY(scale as double) as double
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| scale     | double | No Description Provided |


:::

:::group{name=getZ}

Return Type: double

```zenscript
// Entity.getZ() as double

myEntity.getZ();
```

:::

:::group{name=getZ}

Return Type: double

```zenscript
Entity.getZ(scale as double) as double
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| scale     | double | No Description Provided |


:::

:::group{name=hasCustomName}

Return Type: boolean

```zenscript
// Entity.hasCustomName() as boolean

myEntity.hasCustomName();
```

:::

:::group{name=hasExactlyOnePlayerPassenger}

Return Type: boolean

```zenscript
// Entity.hasExactlyOnePlayerPassenger() as boolean

myEntity.hasExactlyOnePlayerPassenger();
```

:::

:::group{name=hasGlowingTag}

Return Type: boolean

```zenscript
// Entity.hasGlowingTag() as boolean

myEntity.hasGlowingTag();
```

:::

:::group{name=hasIndirectPassenger}

Return Type: boolean

```zenscript
Entity.hasIndirectPassenger(entity as Entity) as boolean
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(entity as Entity) as boolean
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(predicate as Predicate<Entity>) as boolean
```

| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| predicate | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; | No Description Provided |


:::

:::group{name=hurt}

Return Type: boolean

```zenscript
Entity.hurt(source as DamageSource, amount as float) as boolean
```

| Parameter | Type                                            | Description             |
| --------- | ----------------------------------------------- | ----------------------- |
| source    | [DamageSource](/vanilla/api/world/DamageSource) | No Description Provided |
| amount    | float                                           | No Description Provided |


:::

:::group{name=isAlive}

Return Type: boolean

```zenscript
// Entity.isAlive() as boolean

myEntity.isAlive();
```

:::

:::group{name=isAttackable}

Return Type: boolean

```zenscript
// Entity.isAttackable() as boolean

myEntity.isAttackable();
```

:::

:::group{name=isColliding}

Return Type: boolean

```zenscript
Entity.isColliding(pos as BlockPos, state as BlockState) as boolean
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |
| state     | [BlockState](/vanilla/api/block/BlockState) | No Description Provided |


:::

:::group{name=isCrouching}

Return Type: boolean

```zenscript
// Entity.isCrouching() as boolean

myEntity.isCrouching();
```

:::

:::group{name=isCurrentlyGlowing}

Return Type: boolean

```zenscript
// Entity.isCurrentlyGlowing() as boolean

myEntity.isCurrentlyGlowing();
```

:::

:::group{name=isCustomNameVisible}

Return Type: boolean

```zenscript
// Entity.isCustomNameVisible() as boolean

myEntity.isCustomNameVisible();
```

:::

:::group{name=isDescending}

Return Type: boolean

```zenscript
// Entity.isDescending() as boolean

myEntity.isDescending();
```

:::

:::group{name=isDiscrete}

Return Type: boolean

```zenscript
// Entity.isDiscrete() as boolean

myEntity.isDiscrete();
```

:::

:::group{name=isFree}

Return Type: boolean

```zenscript
Entity.isFree(x as double, y as double, z as double) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


:::

:::group{name=isFullyFrozen}

Return Type: boolean

```zenscript
// Entity.isFullyFrozen() as boolean

myEntity.isFullyFrozen();
```

:::

:::group{name=isInLava}

Return Type: boolean

```zenscript
// Entity.isInLava() as boolean

myEntity.isInLava();
```

:::

:::group{name=isInWall}

Return Type: boolean

```zenscript
// Entity.isInWall() as boolean

myEntity.isInWall();
```

:::

:::group{name=isInWater}

Return Type: boolean

```zenscript
// Entity.isInWater() as boolean

myEntity.isInWater();
```

:::

:::group{name=isInWaterOrBubble}

Return Type: boolean

```zenscript
// Entity.isInWaterOrBubble() as boolean

myEntity.isInWaterOrBubble();
```

:::

:::group{name=isInWaterOrRain}

Return Type: boolean

```zenscript
// Entity.isInWaterOrRain() as boolean

myEntity.isInWaterOrRain();
```

:::

:::group{name=isInWaterRainOrBubble}

Return Type: boolean

```zenscript
// Entity.isInWaterRainOrBubble() as boolean

myEntity.isInWaterRainOrBubble();
```

:::

:::group{name=isInvisible}

Return Type: boolean

```zenscript
// Entity.isInvisible() as boolean

myEntity.isInvisible();
```

:::

:::group{name=isInvisibleTo}

Return Type: boolean

```zenscript
Entity.isInvisibleTo(player as Player) as boolean
```

| Parameter | Type                                             | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=isInvulnerable}

Return Type: boolean

```zenscript
// Entity.isInvulnerable() as boolean

myEntity.isInvulnerable();
```

:::

:::group{name=isInvulnerableTo}

Return Type: boolean

```zenscript
Entity.isInvulnerableTo(source as DamageSource) as boolean
```

| Parameter | Type                                            | Description             |
| --------- | ----------------------------------------------- | ----------------------- |
| source    | [DamageSource](/vanilla/api/world/DamageSource) | No Description Provided |


:::

:::group{name=isNoGravity}

Return Type: boolean

```zenscript
// Entity.isNoGravity() as boolean

myEntity.isNoGravity();
```

:::

:::group{name=isOnFire}

Return Type: boolean

```zenscript
// Entity.isOnFire() as boolean

myEntity.isOnFire();
```

:::

:::group{name=isOnGround}

Return Type: boolean

```zenscript
// Entity.isOnGround() as boolean

myEntity.isOnGround();
```

:::

:::group{name=isOnPortalCooldown}

Return Type: boolean

```zenscript
// Entity.isOnPortalCooldown() as boolean

myEntity.isOnPortalCooldown();
```

:::

:::group{name=isPassenger}

Return Type: boolean

```zenscript
// Entity.isPassenger() as boolean

myEntity.isPassenger();
```

:::

:::group{name=isPassengerOfSameVehicle}

Return Type: boolean

```zenscript
Entity.isPassengerOfSameVehicle(entity as Entity) as boolean
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=isPickable}

Return Type: boolean

```zenscript
// Entity.isPickable() as boolean

myEntity.isPickable();
```

:::

:::group{name=isPushable}

Return Type: boolean

```zenscript
// Entity.isPushable() as boolean

myEntity.isPushable();
```

:::

:::group{name=isPushedByFluid}

Return Type: boolean

```zenscript
// Entity.isPushedByFluid() as boolean

myEntity.isPushedByFluid();
```

:::

:::group{name=isRemoved}

Return Type: boolean

```zenscript
// Entity.isRemoved() as boolean

myEntity.isRemoved();
```

:::

:::group{name=isShiftKeyDown}

Return Type: boolean

```zenscript
// Entity.isShiftKeyDown() as boolean

myEntity.isShiftKeyDown();
```

:::

:::group{name=isSilent}

Return Type: boolean

```zenscript
// Entity.isSilent() as boolean

myEntity.isSilent();
```

:::

:::group{name=isSpectator}

Return Type: boolean

```zenscript
// Entity.isSpectator() as boolean

myEntity.isSpectator();
```

:::

:::group{name=isSprinting}

Return Type: boolean

```zenscript
// Entity.isSprinting() as boolean

myEntity.isSprinting();
```

:::

:::group{name=isSteppingCarefully}

Return Type: boolean

```zenscript
// Entity.isSteppingCarefully() as boolean

myEntity.isSteppingCarefully();
```

:::

:::group{name=isSuppressingBounce}

Return Type: boolean

```zenscript
// Entity.isSuppressingBounce() as boolean

myEntity.isSuppressingBounce();
```

:::

:::group{name=isSwimming}

Return Type: boolean

```zenscript
// Entity.isSwimming() as boolean

myEntity.isSwimming();
```

:::

:::group{name=isUnderWater}

Return Type: boolean

```zenscript
// Entity.isUnderWater() as boolean

myEntity.isUnderWater();
```

:::

:::group{name=isVehicle}

Return Type: boolean

```zenscript
// Entity.isVehicle() as boolean

myEntity.isVehicle();
```

:::

:::group{name=isVisuallyCrawling}

Return Type: boolean

```zenscript
// Entity.isVisuallyCrawling() as boolean

myEntity.isVisuallyCrawling();
```

:::

:::group{name=isVisuallySwimming}

Return Type: boolean

```zenscript
// Entity.isVisuallySwimming() as boolean

myEntity.isVisuallySwimming();
```

:::

:::group{name=kill}

Return Type: void

```zenscript
// Entity.kill() as void

myEntity.kill();
```

:::

:::group{name=lavaHurt}

Return Type: void

```zenscript
// Entity.lavaHurt() as void

myEntity.lavaHurt();
```

:::

:::group{name=moveRelative}

Return Type: void

```zenscript
Entity.moveRelative(amount as float, relative as Vec3) as void
```

| Parameter | Type                                | Description             |
| --------- | ----------------------------------- | ----------------------- |
| amount    | float                               | No Description Provided |
| relative  | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=moveTo}

Return Type: void

```zenscript
Entity.moveTo(vec as Vec3) as void
```

| Parameter | Type                                | Description             |
| --------- | ----------------------------------- | ----------------------- |
| vec       | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=moveTo}

Return Type: void

```zenscript
Entity.moveTo(pos as BlockPos, yaw as float, pitch as float) as void
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |
| yaw       | float                                       | No Description Provided |
| pitch     | float                                       | No Description Provided |


:::

:::group{name=moveTo}

Return Type: void

```zenscript
Entity.moveTo(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


:::

:::group{name=moveTo}

Return Type: void

```zenscript
Entity.moveTo(x as double, y as double, z as double, yaw as float, pitch as float) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |
| yaw       | float  | No Description Provided |
| pitch     | float  | No Description Provided |


:::

:::group{name=occludesVibrations}

Return Type: boolean

```zenscript
// Entity.occludesVibrations() as boolean

myEntity.occludesVibrations();
```

:::

:::group{name=playSound}

Return Type: void

```zenscript
Entity.playSound(sound as SoundEvent, volume as float, pitch as float) as void
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| sound     | [SoundEvent](/vanilla/api/sound/SoundEvent) | No Description Provided |
| volume    | float                                       | No Description Provided |
| pitch     | float                                       | No Description Provided |


:::

:::group{name=position}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Entity.position() as Vec3

myEntity.position();
```

:::

:::group{name=positionRider}

Return Type: void

```zenscript
Entity.positionRider(entity as Entity) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=removeTag}

Return Type: boolean

```zenscript
Entity.removeTag(tagName as string) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tagName   | string | No Description Provided |


:::

:::group{name=removeVehicle}

Return Type: void

```zenscript
// Entity.removeVehicle() as void

myEntity.removeVehicle();
```

:::

:::group{name=rideableUnderWater}

Return Type: boolean

```zenscript
// Entity.rideableUnderWater() as boolean

myEntity.rideableUnderWater();
```

:::

:::group{name=sendMessage}

Return Type: void

```zenscript
Entity.sendMessage(message as Component) as void
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| message   | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=setAirSupply}

Return Type: void

```zenscript
Entity.setAirSupply(air as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| air       | int  | No Description Provided |


:::

:::group{name=setCustomName}

Return Type: void

```zenscript
Entity.setCustomName(name as Component) as void
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| name      | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=setCustomNameVisible}

Return Type: void

```zenscript
Entity.setCustomNameVisible(visible as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| visible   | boolean | No Description Provided |


:::

:::group{name=setGlowingTag}

Return Type: void

```zenscript
Entity.setGlowingTag(glowing as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| glowing   | boolean | No Description Provided |


:::

:::group{name=setInvisible}

Return Type: void

```zenscript
Entity.setInvisible(invisible as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| invisible | boolean | No Description Provided |


:::

:::group{name=setInvulnerable}

Return Type: void

```zenscript
Entity.setInvulnerable(invulnerable as boolean) as void
```

| Parameter    | Type    | Description             |
| ------------ | ------- | ----------------------- |
| invulnerable | boolean | No Description Provided |


:::

:::group{name=setIsInPowderSnow}

Return Type: void

```zenscript
Entity.setIsInPowderSnow(inPowderSnow as boolean) as void
```

| Parameter    | Type    | Description             |
| ------------ | ------- | ----------------------- |
| inPowderSnow | boolean | No Description Provided |


:::

:::group{name=setItemSlot}

Return Type: void

```zenscript
Entity.setItemSlot(slot as EquipmentSlot, stack as ItemStack) as void
```

| Parameter | Type                                                         | Description             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | No Description Provided |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                     | No Description Provided |


:::

:::group{name=setNoGravity}

Return Type: void

```zenscript
Entity.setNoGravity(noGravity as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| noGravity | boolean | No Description Provided |


:::

:::group{name=setOldPosAndRot}

Return Type: void

```zenscript
// Entity.setOldPosAndRot() as void

myEntity.setOldPosAndRot();
```

:::

:::group{name=setOnGround}

Return Type: void

```zenscript
Entity.setOnGround(onGround as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| onGround  | boolean | No Description Provided |


:::

:::group{name=setPortalCooldown}

Return Type: void

```zenscript
// Entity.setPortalCooldown() as void

myEntity.setPortalCooldown();
```

:::

:::group{name=setPos}

Return Type: void

```zenscript
Entity.setPos(position as Vec3) as void
```

| Parameter | Type                                | Description             |
| --------- | ----------------------------------- | ----------------------- |
| position  | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=setPos}

Return Type: void

```zenscript
Entity.setPos(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


:::

:::group{name=setPosRaw}

Return Type: void

```zenscript
Entity.setPosRaw(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


:::

:::group{name=setRemainingFireTicks}

Return Type: void

```zenscript
Entity.setRemainingFireTicks(ticks as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| ticks     | int  | No Description Provided |


:::

:::group{name=setSecondsOnFire}

Return Type: void

```zenscript
Entity.setSecondsOnFire(seconds as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| seconds   | int  | No Description Provided |


:::

:::group{name=setShiftKeyDown}

Return Type: void

```zenscript
Entity.setShiftKeyDown(keyDown as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| keyDown   | boolean | No Description Provided |


:::

:::group{name=setSilent}

Return Type: void

```zenscript
Entity.setSilent(silent as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| silent    | boolean | No Description Provided |


:::

:::group{name=setSprinting}

Return Type: void

```zenscript
Entity.setSprinting(sprinting as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| sprinting | boolean | No Description Provided |


:::

:::group{name=setSwimming}

Return Type: void

```zenscript
Entity.setSwimming(swimming as boolean) as void
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| swimming  | boolean | No Description Provided |


:::

:::group{name=setTicksFrozen}

Return Type: void

```zenscript
Entity.setTicksFrozen(ticks as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| ticks     | int  | No Description Provided |


:::

:::group{name=shouldShowName}

Return Type: boolean

```zenscript
// Entity.shouldShowName() as boolean

myEntity.shouldShowName();
```

:::

:::group{name=showVehicleHealth}

Return Type: boolean

```zenscript
// Entity.showVehicleHealth() as boolean

myEntity.showVehicleHealth();
```

:::

:::group{name=startRiding}

Return Type: boolean

```zenscript
Entity.startRiding(entity as Entity) as boolean
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=startRiding}

Return Type: boolean

```zenscript
Entity.startRiding(entity as Entity, force as boolean) as boolean
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |
| force     | boolean                              | No Description Provided |


:::

:::group{name=stopRiding}

Return Type: void

```zenscript
// Entity.stopRiding() as void

myEntity.stopRiding();
```

:::

:::group{name=teleportTo}

Return Type: void

```zenscript
Entity.teleportTo(x as double, y as double, z as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


:::

:::group{name=turn}

Return Type: void

```zenscript
Entity.turn(yaw as double, pitch as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| yaw       | double | No Description Provided |
| pitch     | double | No Description Provided |


:::

:::group{name=unRide}

Return Type: void

```zenscript
// Entity.unRide() as void

myEntity.unRide();
```

:::


## Properties

| Name                         | Type                                                                        | Has Getter | Has Setter | Description                       |
| ---------------------------- | --------------------------------------------------------------------------- | ---------- | ---------- | --------------------------------- |
| airSupply                    | int                                                                         | true       | false      | No Description Provided           |
| allSlots                     | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true       | false      | No Description Provided           |
| armorSlots                   | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true       | false      | No Description Provided           |
| bbHeight                     | float                                                                       | true       | false      | No Description Provided           |
| bbWidth                      | float                                                                       | true       | false      | No Description Provided           |
| blockPosition                | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | true       | false      | No Description Provided           |
| blockX                       | int                                                                         | true       | false      | No Description Provided           |
| blockY                       | int                                                                         | true       | false      | No Description Provided           |
| blockZ                       | int                                                                         | true       | false      | No Description Provided           |
| boundingBoxForCulling        | [AABB](/vanilla/api/util/math/AABB)                                         | true       | false      | No Description Provided           |
| brightness                   | float                                                                       | true       | false      | No Description Provided           |
| canBeCollidedWith            | boolean                                                                     | true       | false      | No Description Provided           |
| canFreeze                    | boolean                                                                     | true       | false      | No Description Provided           |
| commandSenderWorld           | [Level](/vanilla/api/world/Level)                                           | true       | false      | No Description Provided           |
| controllingPassenger         | [Entity](/vanilla/api/entity/Entity)                                        | true       | false      | No Description Provided           |
| customName                   | [Component](/vanilla/api/text/Component)                                    | true       | false      | No Description Provided           |
| data                         | [MapData](/vanilla/api/data/MapData)                                        | true       | false      | Gets the NBT data of this Entity. |
| dimensionChangingDelay       | int                                                                         | true       | false      | No Description Provided           |
| direction                    | [Direction](/vanilla/api/util/direction/Direction)                          | true       | false      | No Description Provided           |
| displayName                  | [Component](/vanilla/api/text/Component)                                    | true       | false      | No Description Provided           |
| eyeBlockPosition             | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | true       | false      | No Description Provided           |
| eyeHeight                    | float                                                                       | true       | false      | No Description Provided           |
| eyePosition                  | [Vec3](/vanilla/api/util/math/Vec3)                                         | true       | false      | No Description Provided           |
| eyeY                         | double                                                                      | true       | false      | No Description Provided           |
| feetBlockState               | [BlockState](/vanilla/api/block/BlockState)                                 | true       | false      | No Description Provided           |
| fireImmune                   | boolean                                                                     | true       | false      | No Description Provided           |
| firstPassenger               | [Entity](/vanilla/api/entity/Entity)                                        | true       | false      | No Description Provided           |
| fluidJumpThreshold           | double                                                                      | true       | false      | No Description Provided           |
| forward                      | [Vec3](/vanilla/api/util/math/Vec3)                                         | true       | false      | No Description Provided           |
| handSlots                    | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true       | false      | No Description Provided           |
| hasCustomName                | boolean                                                                     | true       | false      | No Description Provided           |
| hasExactlyOnePlayerPassenger | boolean                                                                     | true       | false      | No Description Provided           |
| hasGlowingTag                | boolean                                                                     | true       | false      | No Description Provided           |
| isAlive                      | boolean                                                                     | true       | false      | No Description Provided           |
| isAttackable                 | boolean                                                                     | true       | false      | No Description Provided           |
| isCrouching                  | boolean                                                                     | true       | false      | No Description Provided           |
| isCurrentlyGlowing           | boolean                                                                     | true       | false      | No Description Provided           |
| isCustomNameVisible          | boolean                                                                     | true       | false      | No Description Provided           |
| isDescending                 | boolean                                                                     | true       | false      | No Description Provided           |
| isDiscrete                   | boolean                                                                     | true       | false      | No Description Provided           |
| isFullyFrozen                | boolean                                                                     | true       | false      | No Description Provided           |
| isInLava                     | boolean                                                                     | true       | false      | No Description Provided           |
| isInWall                     | boolean                                                                     | true       | false      | No Description Provided           |
| isInWater                    | boolean                                                                     | true       | false      | No Description Provided           |
| isInWaterOrBubble            | boolean                                                                     | true       | false      | No Description Provided           |
| isInWaterOrRain              | boolean                                                                     | true       | false      | No Description Provided           |
| isInWaterRainOrBubble        | boolean                                                                     | true       | false      | No Description Provided           |
| isInvisible                  | boolean                                                                     | true       | false      | No Description Provided           |
| isInvulnerable               | boolean                                                                     | true       | false      | No Description Provided           |
| isNoGravity                  | boolean                                                                     | true       | false      | No Description Provided           |
| isOnFire                     | boolean                                                                     | true       | false      | No Description Provided           |
| isOnGround                   | boolean                                                                     | true       | false      | No Description Provided           |
| isOnPortalCooldown           | boolean                                                                     | true       | false      | No Description Provided           |
| isPassenger                  | boolean                                                                     | true       | false      | No Description Provided           |
| isPickable                   | boolean                                                                     | true       | false      | No Description Provided           |
| isPushable                   | boolean                                                                     | true       | false      | No Description Provided           |
| isPushedByFluid              | boolean                                                                     | true       | false      | No Description Provided           |
| isRemoved                    | boolean                                                                     | true       | false      | No Description Provided           |
| isShiftKeyDown               | boolean                                                                     | true       | false      | No Description Provided           |
| isSilent                     | boolean                                                                     | true       | false      | No Description Provided           |
| isSpectator                  | boolean                                                                     | true       | false      | No Description Provided           |
| isSprinting                  | boolean                                                                     | true       | false      | No Description Provided           |
| isSteppingCarefully          | boolean                                                                     | true       | false      | No Description Provided           |
| isSuppressingBounce          | boolean                                                                     | true       | false      | No Description Provided           |
| isSwimming                   | boolean                                                                     | true       | false      | No Description Provided           |
| isUnderWater                 | boolean                                                                     | true       | false      | No Description Provided           |
| isVehicle                    | boolean                                                                     | true       | false      | No Description Provided           |
| isVisuallyCrawling           | boolean                                                                     | true       | false      | No Description Provided           |
| isVisuallySwimming           | boolean                                                                     | true       | false      | No Description Provided           |
| level                        | [Level](/vanilla/api/world/Level)                                           | true       | false      | No Description Provided           |
| lookAngle                    | [Vec3](/vanilla/api/util/math/Vec3)                                         | true       | false      | No Description Provided           |
| maxAirSupply                 | int                                                                         | true       | false      | No Description Provided           |
| maxFallDistance              | int                                                                         | true       | false      | No Description Provided           |
| motionDirection              | [Direction](/vanilla/api/util/direction/Direction)                          | true       | false      | No Description Provided           |
| name                         | [Component](/vanilla/api/text/Component)                                    | true       | false      | No Description Provided           |
| occludesVibrations           | boolean                                                                     | true       | false      | No Description Provided           |
| onPos                        | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | true       | false      | No Description Provided           |
| passengers                   | stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;         | true       | false      | No Description Provided           |
| percentFrozen                | float                                                                       | true       | false      | No Description Provided           |
| pistonPushReaction           | [PushReaction](/vanilla/api/block/material/PushReaction)                    | true       | false      | No Description Provided           |
| portalWaitTime               | int                                                                         | true       | false      | No Description Provided           |
| position                     | [Vec3](/vanilla/api/util/math/Vec3)                                         | true       | false      | No Description Provided           |
| remainingFireTicks           | int                                                                         | true       | false      | No Description Provided           |
| rideableUnderWater           | boolean                                                                     | true       | false      | No Description Provided           |
| rootVehicle                  | [Entity](/vanilla/api/entity/Entity)                                        | true       | false      | No Description Provided           |
| shouldShowName               | boolean                                                                     | true       | false      | No Description Provided           |
| showVehicleHealth            | boolean                                                                     | true       | false      | No Description Provided           |
| soundSource                  | [SoundSource](/vanilla/api/sound/SoundSource)                               | true       | false      | No Description Provided           |
| stringUUID                   | string                                                                      | true       | false      | No Description Provided           |
| tags                         | Set&lt;string&gt;                                               | true       | false      | No Description Provided           |
| teamColor                    | int                                                                         | true       | false      | No Description Provided           |
| ticksFrozen                  | int                                                                         | true       | false      | No Description Provided           |
| ticksRequiredToFreeze        | int                                                                         | true       | false      | No Description Provided           |
| type                         | [EntityType](/vanilla/api/entity/EntityType)                                | true       | false      | No Description Provided           |
| vehicle                      | [Entity](/vanilla/api/entity/Entity)                                        | true       | false      | No Description Provided           |
| x                            | double                                                                      | true       | false      | No Description Provided           |
| y                            | double                                                                      | true       | false      | No Description Provided           |
| z                            | double                                                                      | true       | false      | No Description Provided           |

