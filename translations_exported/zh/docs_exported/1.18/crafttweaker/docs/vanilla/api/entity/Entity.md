# Entity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.Entity;
```


## Extending CapabilityProvider&lt;Entity&gt;

Entity extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Entity](/vanilla/api/entity/Entity)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Entity](/vanilla/api/entity/Entity)&gt; are also available in Entity

## 已实现的接口
Entity implements the following interfaces. That means all methods defined in these interfaces are also available in Entity

- [Nameable](/vanilla/api/world/Nameable)
- [EntityAccess](/vanilla/api/entity/EntityAccess)
- [CommandSource](/vanilla/api/command/CommandSource)

## 使用方式

:::group{name=addTag}

Return Type: boolean

```zenscript
Entity.addTag(tagName as string) as boolean
```

| 参数      | 类型     |
| ------- | ------ |
| tagName | string |


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

| 参数    | 类型                                   |
| ----- | ------------------------------------ |
| other | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=canFreeze}

Return Type: boolean

```zenscript
// Entity.canFreeze() as boolean

myEntity.canFreeze();
```

:::

:::group{name=clearFire}

```zenscript
// Entity.clearFire()

myEntity.clearFire();
```

:::

:::group{name=closerThan}

Return Type: boolean

```zenscript
Entity.closerThan(other as Entity, distance as double) as boolean
```

| 参数       | 类型                                   |
| -------- | ------------------------------------ |
| other    | [Entity](/vanilla/api/entity/Entity) |
| distance | double                               |


:::

:::group{name=discard}

```zenscript
// Entity.discard()

myEntity.discard();
```

:::

:::group{name=distanceTo}

Return Type: float

```zenscript
Entity.distanceTo(entity as Entity) as float
```

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(entity as Entity) as double
```

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(vec as Vec3) as double
```

| 参数  | 类型                                  |
| --- | ----------------------------------- |
| vec | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(x as double, y as double, z as double) as double
```

| 参数 | 类型     |
| -- | ------ |
| x  | double |
| y  | double |
| z  | double |


:::

:::group{name=ejectPassengers}

```zenscript
// Entity.ejectPassengers()

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

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
// Entity.getControllingPassenger() as Entity?

myEntity.getControllingPassenger();
```

:::

:::group{name=getCustomData}

Gets the custom NBT data for this Entity.

Returns: The custom data for this Entity.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// Entity.getCustomData() as MapData

myEntity.getCustomData();
```

:::

:::group{name=getCustomName}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// Entity.getCustomName() as Component?

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

:::group{name=getDeltaMovement}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Entity.getDeltaMovement() as Vec3

myEntity.getDeltaMovement();
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

| 参数           | 类型    |
| ------------ | ----- |
| partialTicks | float |


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

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
// Entity.getFirstPassenger() as Entity?

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

| 参数           | 类型    |
| ------------ | ----- |
| partialTicks | float |


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

| 参数           | 类型    |
| ------------ | ----- |
| partialTicks | float |


:::

:::group{name=getVehicle}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
// Entity.getVehicle() as Entity?

myEntity.getVehicle();
```

:::

:::group{name=getViewVector}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Entity.getViewVector(partialTicks as float) as Vec3
```

| 参数           | 类型    |
| ------------ | ----- |
| partialTicks | float |


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

| 参数    | 类型     |
| ----- | ------ |
| scale | double |


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

| 参数    | 类型     |
| ----- | ------ |
| scale | double |


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

| 参数    | 类型     |
| ----- | ------ |
| scale | double |


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

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(entity as Entity) as boolean
```

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(predicate as Predicate<Entity>) as boolean
```

| 参数        | 类型                                                                |
| --------- | ----------------------------------------------------------------- |
| predicate | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; |


:::

:::group{name=hurt}

Return Type: boolean

```zenscript
Entity.hurt(source as DamageSource, amount as float) as boolean
```

| 参数     | 类型                                              |
| ------ | ----------------------------------------------- |
| 来源     | [DamageSource](/vanilla/api/world/DamageSource) |
| amount | float                                           |


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

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) |
| state | [BlockState](/vanilla/api/block/BlockState) |


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

| 参数 | 类型     |
| -- | ------ |
| x  | double |
| y  | double |
| z  | double |


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

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| player | [Player](/vanilla/api/entity/type/player/Player) |


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

| 参数 | 类型                                              |
| -- | ----------------------------------------------- |
| 来源 | [DamageSource](/vanilla/api/world/DamageSource) |


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

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


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

```zenscript
// Entity.kill()

myEntity.kill();
```

:::

:::group{name=lavaHurt}

```zenscript
// Entity.lavaHurt()

myEntity.lavaHurt();
```

:::

:::group{name=moveRelative}

```zenscript
Entity.moveRelative(amount as float, relative as Vec3)
```

| 参数       | 类型                                  |
| -------- | ----------------------------------- |
| amount   | float                               |
| relative | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(vec as Vec3)
```

| 参数  | 类型                                  |
| --- | ----------------------------------- |
| vec | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(pos as BlockPos, yaw as float, pitch as float)
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) |
| yaw   | float                                       |
| pitch | float                                       |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(x as double, y as double, z as double)
```

| 参数 | 类型     |
| -- | ------ |
| x  | double |
| y  | double |
| z  | double |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(x as double, y as double, z as double, yaw as float, pitch as float)
```

| 参数    | 类型     |
| ----- | ------ |
| x     | double |
| y     | double |
| z     | double |
| yaw   | float  |
| pitch | float  |


:::

:::group{name=occludesVibrations}

Return Type: boolean

```zenscript
// Entity.occludesVibrations() as boolean

myEntity.occludesVibrations();
```

:::

:::group{name=playSound}

```zenscript
Entity.playSound(sound as SoundEvent, volume as float, pitch as float)
```

| 参数     | 类型                                          |
| ------ | ------------------------------------------- |
| sound  | [SoundEvent](/vanilla/api/sound/SoundEvent) |
| volume | float                                       |
| pitch  | float                                       |


:::

:::group{name=position}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Entity.position() as Vec3

myEntity.position();
```

:::

:::group{name=positionRider}

```zenscript
Entity.positionRider(entity as Entity)
```

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=removeTag}

Return Type: boolean

```zenscript
Entity.removeTag(tagName as string) as boolean
```

| 参数      | 类型     |
| ------- | ------ |
| tagName | string |


:::

:::group{name=removeVehicle}

```zenscript
// Entity.removeVehicle()

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

```zenscript
Entity.sendMessage(message as Component)
```

| 参数      | 类型                                       |
| ------- | ---------------------------------------- |
| message | [Component](/vanilla/api/text/Component) |


:::

:::group{name=setAirSupply}

```zenscript
Entity.setAirSupply(air as int)
```

| 参数  | 类型  |
| --- | --- |
| air | int |


:::

:::group{name=setCustomName}

```zenscript
Entity.setCustomName(name as Component?)
```

| 参数       | 类型                                        |
| -------- | ----------------------------------------- |
| name（名称） | [Component](/vanilla/api/text/Component)? |


:::

:::group{name=setCustomNameVisible}

```zenscript
Entity.setCustomNameVisible(visible as boolean)
```

| 参数      | 类型  |
| ------- | --- |
| visible | 布尔值 |


:::

:::group{name=setDeltaMovement}

```zenscript
Entity.setDeltaMovement(deltaMovement as Vec3)
```

| 参数            | 类型                                  |
| ------------- | ----------------------------------- |
| deltaMovement | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=setDeltaMovement}

```zenscript
Entity.setDeltaMovement(xDelta as double, yDelta as double, zDelta as double)
```

| 参数     | 类型     |
| ------ | ------ |
| xDelta | double |
| yDelta | double |
| zDelta | double |


:::

:::group{name=setGlowingTag}

```zenscript
Entity.setGlowingTag(glowing as boolean)
```

| 参数      | 类型  |
| ------- | --- |
| glowing | 布尔值 |


:::

:::group{name=setInvisible}

```zenscript
Entity.setInvisible(invisible as boolean)
```

| 参数        | 类型  |
| --------- | --- |
| invisible | 布尔值 |


:::

:::group{name=setInvulnerable}

```zenscript
Entity.setInvulnerable(invulnerable as boolean)
```

| 参数           | 类型  |
| ------------ | --- |
| invulnerable | 布尔值 |


:::

:::group{name=setIsInPowderSnow}

```zenscript
Entity.setIsInPowderSnow(inPowderSnow as boolean)
```

| 参数           | 类型  |
| ------------ | --- |
| inPowderSnow | 布尔值 |


:::

:::group{name=setItemSlot}

```zenscript
Entity.setItemSlot(slot as EquipmentSlot, stack as ItemStack)
```

| 参数   | 类型                                                           |
| ---- | ------------------------------------------------------------ |
| slot | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |
| 堆叠   | [物品应用](/vanilla/api/item/ItemStack)                          |


:::

:::group{name=setNoGravity}

```zenscript
Entity.setNoGravity(noGravity as boolean)
```

| 参数        | 类型  |
| --------- | --- |
| noGravity | 布尔值 |


:::

:::group{name=setOldPosAndRot}

```zenscript
// Entity.setOldPosAndRot()

myEntity.setOldPosAndRot();
```

:::

:::group{name=setOnGround}

```zenscript
Entity.setOnGround(onGround as boolean)
```

| 参数       | 类型  |
| -------- | --- |
| onGround | 布尔值 |


:::

:::group{name=setPortalCooldown}

```zenscript
// Entity.setPortalCooldown()

myEntity.setPortalCooldown();
```

:::

:::group{name=setPos}

```zenscript
Entity.setPos(position as Vec3)
```

| 参数       | 类型                                  |
| -------- | ----------------------------------- |
| position | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=setPos}

```zenscript
Entity.setPos(x as double, y as double, z as double)
```

| 参数 | 类型     |
| -- | ------ |
| x  | double |
| y  | double |
| z  | double |


:::

:::group{name=setPosRaw}

```zenscript
Entity.setPosRaw(x as double, y as double, z as double)
```

| 参数 | 类型     |
| -- | ------ |
| x  | double |
| y  | double |
| z  | double |


:::

:::group{name=setRemainingFireTicks}

```zenscript
Entity.setRemainingFireTicks(ticks as int)
```

| 参数    | 类型  |
| ----- | --- |
| ticks | int |


:::

:::group{name=setSecondsOnFire}

```zenscript
Entity.setSecondsOnFire(seconds as int)
```

| 参数      | 类型  |
| ------- | --- |
| seconds | int |


:::

:::group{name=setShiftKeyDown}

```zenscript
Entity.setShiftKeyDown(keyDown as boolean)
```

| 参数      | 类型  |
| ------- | --- |
| keyDown | 布尔值 |


:::

:::group{name=setSilent}

```zenscript
Entity.setSilent(silent as boolean)
```

| 参数     | 类型  |
| ------ | --- |
| silent | 布尔值 |


:::

:::group{name=setSprinting}

```zenscript
Entity.setSprinting(sprinting as boolean)
```

| 参数        | 类型  |
| --------- | --- |
| sprinting | 布尔值 |


:::

:::group{name=setSwimming}

```zenscript
Entity.setSwimming(swimming as boolean)
```

| 参数       | 类型  |
| -------- | --- |
| swimming | 布尔值 |


:::

:::group{name=setTicksFrozen}

```zenscript
Entity.setTicksFrozen(ticks as int)
```

| 参数    | 类型  |
| ----- | --- |
| ticks | int |


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

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=startRiding}

Return Type: boolean

```zenscript
Entity.startRiding(entity as Entity, force as boolean) as boolean
```

| 参数     | 类型                                   |
| ------ | ------------------------------------ |
| entity | [Entity](/vanilla/api/entity/Entity) |
| force  | 布尔值                                  |


:::

:::group{name=stopRiding}

```zenscript
// Entity.stopRiding()

myEntity.stopRiding();
```

:::

:::group{name=teleportTo}

```zenscript
Entity.teleportTo(x as double, y as double, z as double)
```

| 参数 | 类型     |
| -- | ------ |
| x  | double |
| y  | double |
| z  | double |


:::

:::group{name=turn}

```zenscript
Entity.turn(yaw as double, pitch as double)
```

| 参数    | 类型     |
| ----- | ------ |
| yaw   | double |
| pitch | double |


:::

:::group{name=unRide}

```zenscript
// Entity.unRide()

myEntity.unRide();
```

:::

:::group{name=updateCustomData}

Updates the custom NBT data for this Entity.

```zenscript
// Entity.updateCustomData(data as MapData)

myEntity.updateCustomData({custom: "data"});
```

| 参数   | 类型                                         | 描述                        |
| ---- | ------------------------------------------ | ------------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | The custom data to store. |


:::

:::group{name=updateData}

Updates the NBT data of this Entity.

```zenscript
// Entity.updateData(data as MapData)

myEntity.updateData({key: "value"});
```

| 参数   | 类型                                         | 描述                           |
| ---- | ------------------------------------------ | ---------------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | The new Data for this Entity |


:::


## 参数

| 名称                           | 类型                                                                          | 可获得  | 可设置   | 描述                                        |
| ---------------------------- | --------------------------------------------------------------------------- | ---- | ----- | ----------------------------------------- |
| airSupply                    | int                                                                         | true | false |                                           |
| allSlots                     | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true | false |                                           |
| armorSlots                   | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true | false |                                           |
| bbHeight                     | float                                                                       | true | false |                                           |
| bbWidth                      | float                                                                       | true | false |                                           |
| blockPosition                | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | true | false |                                           |
| blockX                       | int                                                                         | true | false |                                           |
| blockY                       | int                                                                         | true | false |                                           |
| blockZ                       | int                                                                         | true | false |                                           |
| boundingBoxForCulling        | [AABB](/vanilla/api/util/math/AABB)                                         | true | false |                                           |
| brightness                   | float                                                                       | true | false |                                           |
| canBeCollidedWith #具有碰撞箱     | 布尔值                                                                         | true | false |                                           |
| canFreeze                    | 布尔值                                                                         | true | false |                                           |
| commandSenderWorld           | [Level](/vanilla/api/world/Level)                                           | true | false |                                           |
| controllingPassenger         | [Entity](/vanilla/api/entity/Entity)?                                       | true | false |                                           |
| customData                   | [MapData #地图数据](/vanilla/api/data/MapData)                                  | true | false | Gets the custom NBT data for this Entity. |
| customName                   | [Component](/vanilla/api/text/Component)?                                   | true | false |                                           |
| data                         | [MapData #地图数据](/vanilla/api/data/MapData)                                  | true | false | Gets the NBT data of this Entity.         |
| deltaMovement                | [Vec3](/vanilla/api/util/math/Vec3)                                         | true | true  |                                           |
| dimensionChangingDelay       | int                                                                         | true | false |                                           |
| direction                    | [Direction](/vanilla/api/util/direction/Direction)                          | true | false |                                           |
| displayName                  | [Component](/vanilla/api/text/Component)                                    | true | false |                                           |
| eyeBlockPosition             | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | true | false |                                           |
| eyeHeight                    | float                                                                       | true | false |                                           |
| eyePosition                  | [Vec3](/vanilla/api/util/math/Vec3)                                         | true | false |                                           |
| eyeY                         | double                                                                      | true | false |                                           |
| feetBlockState               | [BlockState](/vanilla/api/block/BlockState)                                 | true | false |                                           |
| fireImmune                   | 布尔值                                                                         | true | false |                                           |
| firstPassenger               | [Entity](/vanilla/api/entity/Entity)?                                       | true | false |                                           |
| fluidJumpThreshold           | double                                                                      | true | false |                                           |
| forward                      | [Vec3](/vanilla/api/util/math/Vec3)                                         | true | false |                                           |
| handSlots                    | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true | false |                                           |
| hasCustomName                | 布尔值                                                                         | true | false |                                           |
| hasExactlyOnePlayerPassenger | 布尔值                                                                         | true | false |                                           |
| hasGlowingTag                | 布尔值                                                                         | true | false |                                           |
| isAlive                      | 布尔值                                                                         | true | false |                                           |
| isAttackable                 | 布尔值                                                                         | true | false |                                           |
| isCrouching                  | 布尔值                                                                         | true | false |                                           |
| isCurrentlyGlowing           | 布尔值                                                                         | true | false |                                           |
| isCustomNameVisible          | 布尔值                                                                         | true | false |                                           |
| isDescending                 | 布尔值                                                                         | true | false |                                           |
| isDiscrete                   | 布尔值                                                                         | true | false |                                           |
| isFullyFrozen                | 布尔值                                                                         | true | false |                                           |
| isInLava                     | 布尔值                                                                         | true | false |                                           |
| isInWall                     | 布尔值                                                                         | true | false |                                           |
| isInWater                    | 布尔值                                                                         | true | false |                                           |
| isInWaterOrBubble            | 布尔值                                                                         | true | false |                                           |
| isInWaterOrRain              | 布尔值                                                                         | true | false |                                           |
| isInWaterRainOrBubble        | 布尔值                                                                         | true | false |                                           |
| isInvisible                  | 布尔值                                                                         | true | false |                                           |
| isInvulnerable               | 布尔值                                                                         | true | false |                                           |
| isNoGravity                  | 布尔值                                                                         | true | false |                                           |
| isOnFire                     | 布尔值                                                                         | true | false |                                           |
| isOnGround                   | 布尔值                                                                         | true | false |                                           |
| isOnPortalCooldown           | 布尔值                                                                         | true | false |                                           |
| isPassenger                  | 布尔值                                                                         | true | false |                                           |
| isPickable                   | 布尔值                                                                         | true | false |                                           |
| isPushable                   | 布尔值                                                                         | true | false |                                           |
| isPushedByFluid              | 布尔值                                                                         | true | false |                                           |
| isRemoved                    | 布尔值                                                                         | true | false |                                           |
| isShiftKeyDown               | 布尔值                                                                         | true | false |                                           |
| isSilent                     | 布尔值                                                                         | true | false |                                           |
| isSpectator                  | 布尔值                                                                         | true | false |                                           |
| isSprinting                  | 布尔值                                                                         | true | false |                                           |
| isSteppingCarefully          | 布尔值                                                                         | true | false |                                           |
| isSuppressingBounce          | 布尔值                                                                         | true | false |                                           |
| isSwimming                   | 布尔值                                                                         | true | false |                                           |
| isUnderWater                 | 布尔值                                                                         | true | false |                                           |
| isVehicle                    | 布尔值                                                                         | true | false |                                           |
| isVisuallyCrawling           | 布尔值                                                                         | true | false |                                           |
| isVisuallySwimming           | 布尔值                                                                         | true | false |                                           |
| level                        | [Level](/vanilla/api/world/Level)                                           | true | false |                                           |
| lookAngle                    | [Vec3](/vanilla/api/util/math/Vec3)                                         | true | false |                                           |
| maxAirSupply                 | int                                                                         | true | false |                                           |
| maxFallDistance              | int                                                                         | true | false |                                           |
| motionDirection              | [Direction](/vanilla/api/util/direction/Direction)                          | true | false |                                           |
| name（名称）                     | [Component](/vanilla/api/text/Component)                                    | true | false |                                           |
| occludesVibrations           | 布尔值                                                                         | true | false |                                           |
| onPos                        | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | true | false |                                           |
| passengers                   | stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;         | true | false |                                           |
| percentFrozen                | float                                                                       | true | false |                                           |
| pistonPushReaction           | [PushReaction](/vanilla/api/block/material/PushReaction)                    | true | false |                                           |
| portalWaitTime               | int                                                                         | true | false |                                           |
| position                     | [Vec3](/vanilla/api/util/math/Vec3)                                         | true | false |                                           |
| remainingFireTicks           | int                                                                         | true | false |                                           |
| rideableUnderWater           | 布尔值                                                                         | true | false |                                           |
| rootVehicle                  | [Entity](/vanilla/api/entity/Entity)                                        | true | false |                                           |
| shouldShowName               | 布尔值                                                                         | true | false |                                           |
| showVehicleHealth            | 布尔值                                                                         | true | false |                                           |
| soundSource                  | [SoundSource](/vanilla/api/sound/SoundSource)                               | true | false |                                           |
| stringUUID                   | string                                                                      | true | false |                                           |
| tags                         | Set&lt;string&gt;                                               | true | false |                                           |
| teamColor                    | int                                                                         | true | false |                                           |
| ticksFrozen                  | int                                                                         | true | false |                                           |
| ticksRequiredToFreeze        | int                                                                         | true | false |                                           |
| 类型                           | [EntityType](/vanilla/api/entity/EntityType)                                | true | false |                                           |
| vehicle                      | [Entity](/vanilla/api/entity/Entity)?                                       | true | false |                                           |
| x                            | double                                                                      | true | false |                                           |
| y                            | double                                                                      | true | false |                                           |
| z                            | double                                                                      | true | false |                                           |

