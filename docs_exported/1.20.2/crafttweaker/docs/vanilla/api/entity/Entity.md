# Entity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.Entity;
```


## Extending CapabilityProvider&lt;Entity&gt;

Entity extends [CapabilityProvider](/neoforge/api/capability/CapabilityProvider)&lt;[Entity](/vanilla/api/entity/Entity)&gt;. That means all methods available in [CapabilityProvider](/neoforge/api/capability/CapabilityProvider)&lt;[Entity](/vanilla/api/entity/Entity)&gt; are also available in Entity

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

| Parameter |  Type  |
|-----------|--------|
| tagName   | string |


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

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| other     | [Entity](/vanilla/api/entity/Entity) |


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

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| other     | [Entity](/vanilla/api/entity/Entity) |
| distance  | double                               |


:::

:::group{name=dampensVibrations}

Return Type: boolean

```zenscript
// Entity.dampensVibrations() as boolean

myEntity.dampensVibrations();
```

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

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(entity as Entity) as double
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(vec as Vec3) as double
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(x as double, y as double, z as double) as double
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=ejectPassengers}

```zenscript
// Entity.ejectPassengers()

myEntity.ejectPassengers();
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

|  Parameter   | Type  |
|--------------|-------|
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

|  Parameter   | Type  |
|--------------|-------|
| partialTicks | float |


:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Entity.getRegistryName() as ResourceLocation

myEntity.getRegistryName();
```

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

Return Type: [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// Entity.getType() as EntityType<Entity>

myEntity.getType();
```

:::

:::group{name=getUpVector}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Entity.getUpVector(partialTicks as float) as Vec3
```

|  Parameter   | Type  |
|--------------|-------|
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

|  Parameter   | Type  |
|--------------|-------|
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

| Parameter |  Type  |
|-----------|--------|
| scale     | double |


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

| Parameter |  Type  |
|-----------|--------|
| scale     | double |


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

| Parameter |  Type  |
|-----------|--------|
| scale     | double |


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

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(predicate as Predicate<Entity>) as boolean
```

| Parameter |                         Type                          |
|-----------|-------------------------------------------------------|
| predicate | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; |


:::

:::group{name=hurt}

Return Type: boolean

```zenscript
Entity.hurt(source as DamageSource, amount as float) as boolean
```

| Parameter |                          Type                          |
|-----------|--------------------------------------------------------|
| source    | [DamageSource](/vanilla/api/world/damage/DamageSource) |
| amount    | float                                                  |


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

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |
| state     | [BlockState](/vanilla/api/block/BlockState) |


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

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


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

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


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

| Parameter |                          Type                          |
|-----------|--------------------------------------------------------|
| source    | [DamageSource](/vanilla/api/world/damage/DamageSource) |


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

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


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

| Parameter |                Type                 |
|-----------|-------------------------------------|
| amount    | float                               |
| relative  | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(vec as Vec3)
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(pos as BlockPos, yaw as float, pitch as float)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |
| yaw       | float                                       |
| pitch     | float                                       |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(x as double, y as double, z as double)
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(x as double, y as double, z as double, yaw as float, pitch as float)
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |
| yaw       | float  |
| pitch     | float  |


:::

:::group{name=playSound}

```zenscript
Entity.playSound(sound as SoundEvent, volume as float, pitch as float)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| sound     | [SoundEvent](/vanilla/api/sound/SoundEvent) |
| volume    | float                                       |
| pitch     | float                                       |


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

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=removeTag}

Return Type: boolean

```zenscript
Entity.removeTag(tagName as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| tagName   | string |


:::

:::group{name=removeVehicle}

```zenscript
// Entity.removeVehicle()

myEntity.removeVehicle();
```

:::

:::group{name=setAirSupply}

```zenscript
Entity.setAirSupply(air as int)
```

| Parameter | Type |
|-----------|------|
| air       | int  |


:::

:::group{name=setCustomName}

```zenscript
Entity.setCustomName(name as Component?)
```

| Parameter |                   Type                    |
|-----------|-------------------------------------------|
| name      | [Component](/vanilla/api/text/Component)? |


:::

:::group{name=setCustomNameVisible}

```zenscript
Entity.setCustomNameVisible(visible as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| visible   | boolean |


:::

:::group{name=setDeltaMovement}

```zenscript
Entity.setDeltaMovement(deltaMovement as Vec3)
```

|   Parameter   |                Type                 |
|---------------|-------------------------------------|
| deltaMovement | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=setDeltaMovement}

```zenscript
Entity.setDeltaMovement(xDelta as double, yDelta as double, zDelta as double)
```

| Parameter |  Type  |
|-----------|--------|
| xDelta    | double |
| yDelta    | double |
| zDelta    | double |


:::

:::group{name=setGlowingTag}

```zenscript
Entity.setGlowingTag(glowing as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| glowing   | boolean |


:::

:::group{name=setInvisible}

```zenscript
Entity.setInvisible(invisible as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| invisible | boolean |


:::

:::group{name=setInvulnerable}

```zenscript
Entity.setInvulnerable(invulnerable as boolean)
```

|  Parameter   |  Type   |
|--------------|---------|
| invulnerable | boolean |


:::

:::group{name=setIsInPowderSnow}

```zenscript
Entity.setIsInPowderSnow(inPowderSnow as boolean)
```

|  Parameter   |  Type   |
|--------------|---------|
| inPowderSnow | boolean |


:::

:::group{name=setItemSlot}

```zenscript
Entity.setItemSlot(slot as EquipmentSlot, stack as ItemStack)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                     |


:::

:::group{name=setNoGravity}

```zenscript
Entity.setNoGravity(noGravity as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| noGravity | boolean |


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

| Parameter |  Type   |
|-----------|---------|
| onGround  | boolean |


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

| Parameter |                Type                 |
|-----------|-------------------------------------|
| position  | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=setPos}

```zenscript
Entity.setPos(x as double, y as double, z as double)
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=setPosRaw}

```zenscript
Entity.setPosRaw(x as double, y as double, z as double)
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=setRemainingFireTicks}

```zenscript
Entity.setRemainingFireTicks(ticks as int)
```

| Parameter | Type |
|-----------|------|
| ticks     | int  |


:::

:::group{name=setSecondsOnFire}

```zenscript
Entity.setSecondsOnFire(seconds as int)
```

| Parameter | Type |
|-----------|------|
| seconds   | int  |


:::

:::group{name=setShiftKeyDown}

```zenscript
Entity.setShiftKeyDown(keyDown as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| keyDown   | boolean |


:::

:::group{name=setSilent}

```zenscript
Entity.setSilent(silent as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| silent    | boolean |


:::

:::group{name=setSprinting}

```zenscript
Entity.setSprinting(sprinting as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| sprinting | boolean |


:::

:::group{name=setSwimming}

```zenscript
Entity.setSwimming(swimming as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| swimming  | boolean |


:::

:::group{name=setTicksFrozen}

```zenscript
Entity.setTicksFrozen(ticks as int)
```

| Parameter | Type |
|-----------|------|
| ticks     | int  |


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

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=startRiding}

Return Type: boolean

```zenscript
Entity.startRiding(entity as Entity, force as boolean) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |
| force     | boolean                              |


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

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=turn}

```zenscript
Entity.turn(yaw as double, pitch as double)
```

| Parameter |  Type  |
|-----------|--------|
| yaw       | double |
| pitch     | double |


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

| Parameter |                 Type                 |        Description        |
|-----------|--------------------------------------|---------------------------|
| data      | [MapData](/vanilla/api/data/MapData) | The custom data to store. |


:::

:::group{name=updateCustomEntityTag}

```zenscript
Entity.updateCustomEntityTag(level as Level, player as Player?, data as MapData)
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                 |
| player    | [Player](/vanilla/api/entity/type/player/Player)? |
| data      | [MapData](/vanilla/api/data/MapData)              |


:::

:::group{name=updateData}

Updates the NBT data of this Entity.

```zenscript
// Entity.updateData(data as MapData)

myEntity.updateData({key: "value"});
```

| Parameter |                 Type                 |         Description          |
|-----------|--------------------------------------|------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) | The new Data for this Entity |


:::


## Properties

|             Name             |                                           Type                                           | Has Getter | Has Setter |                Description                |
|------------------------------|------------------------------------------------------------------------------------------|------------|------------|-------------------------------------------|
| airSupply                    | int                                                                                      | true       | false      |                                           |
| allSlots                     | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;                          | true       | false      |                                           |
| armorSlots                   | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;                          | true       | false      |                                           |
| bbHeight                     | float                                                                                    | true       | false      |                                           |
| bbWidth                      | float                                                                                    | true       | false      |                                           |
| blockPosition                | [BlockPos](/vanilla/api/util/math/BlockPos)                                              | true       | false      |                                           |
| blockX                       | int                                                                                      | true       | false      |                                           |
| blockY                       | int                                                                                      | true       | false      |                                           |
| blockZ                       | int                                                                                      | true       | false      |                                           |
| boundingBoxForCulling        | [AABB](/vanilla/api/util/math/AABB)                                                      | true       | false      |                                           |
| canBeCollidedWith            | boolean                                                                                  | true       | false      |                                           |
| canFreeze                    | boolean                                                                                  | true       | false      |                                           |
| commandSenderWorld           | [Level](/vanilla/api/world/Level)                                                        | true       | false      |                                           |
| controllingPassenger         | [Entity](/vanilla/api/entity/Entity)?                                                    | true       | false      |                                           |
| customData                   | [MapData](/vanilla/api/data/MapData)                                                     | true       | false      | Gets the custom NBT data for this Entity. |
| customName                   | [Component](/vanilla/api/text/Component)?                                                | true       | false      |                                           |
| dampensVibrations            | boolean                                                                                  | true       | false      |                                           |
| data                         | [MapData](/vanilla/api/data/MapData)                                                     | true       | false      | Gets the NBT data of this Entity.         |
| deltaMovement                | [Vec3](/vanilla/api/util/math/Vec3)                                                      | true       | true       |                                           |
| dimensionChangingDelay       | int                                                                                      | true       | false      |                                           |
| direction                    | [Direction](/vanilla/api/util/direction/Direction)                                       | true       | false      |                                           |
| dismountsUnderwater          | boolean                                                                                  | true       | false      |                                           |
| displayName                  | [Component](/vanilla/api/text/Component)                                                 | true       | false      |                                           |
| eyeHeight                    | float                                                                                    | true       | false      |                                           |
| eyePosition                  | [Vec3](/vanilla/api/util/math/Vec3)                                                      | true       | false      |                                           |
| eyeY                         | double                                                                                   | true       | false      |                                           |
| feetBlockState               | [BlockState](/vanilla/api/block/BlockState)                                              | true       | false      |                                           |
| fireImmune                   | boolean                                                                                  | true       | false      |                                           |
| firstPassenger               | [Entity](/vanilla/api/entity/Entity)?                                                    | true       | false      |                                           |
| fluidJumpThreshold           | double                                                                                   | true       | false      |                                           |
| forward                      | [Vec3](/vanilla/api/util/math/Vec3)                                                      | true       | false      |                                           |
| handSlots                    | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;                          | true       | false      |                                           |
| hasCustomName                | boolean                                                                                  | true       | false      |                                           |
| hasExactlyOnePlayerPassenger | boolean                                                                                  | true       | false      |                                           |
| hasGlowingTag                | boolean                                                                                  | true       | false      |                                           |
| isAlive                      | boolean                                                                                  | true       | false      |                                           |
| isAttackable                 | boolean                                                                                  | true       | false      |                                           |
| isCrouching                  | boolean                                                                                  | true       | false      |                                           |
| isCurrentlyGlowing           | boolean                                                                                  | true       | false      |                                           |
| isCustomNameVisible          | boolean                                                                                  | true       | false      |                                           |
| isDescending                 | boolean                                                                                  | true       | false      |                                           |
| isDiscrete                   | boolean                                                                                  | true       | false      |                                           |
| isFullyFrozen                | boolean                                                                                  | true       | false      |                                           |
| isInLava                     | boolean                                                                                  | true       | false      |                                           |
| isInWall                     | boolean                                                                                  | true       | false      |                                           |
| isInWater                    | boolean                                                                                  | true       | false      |                                           |
| isInWaterOrBubble            | boolean                                                                                  | true       | false      |                                           |
| isInWaterOrRain              | boolean                                                                                  | true       | false      |                                           |
| isInWaterRainOrBubble        | boolean                                                                                  | true       | false      |                                           |
| isInvisible                  | boolean                                                                                  | true       | false      |                                           |
| isInvulnerable               | boolean                                                                                  | true       | false      |                                           |
| isNoGravity                  | boolean                                                                                  | true       | false      |                                           |
| isOnFire                     | boolean                                                                                  | true       | false      |                                           |
| isOnPortalCooldown           | boolean                                                                                  | true       | false      |                                           |
| isPassenger                  | boolean                                                                                  | true       | false      |                                           |
| isPickable                   | boolean                                                                                  | true       | false      |                                           |
| isPushable                   | boolean                                                                                  | true       | false      |                                           |
| isPushedByFluid              | boolean                                                                                  | true       | false      |                                           |
| isRemoved                    | boolean                                                                                  | true       | false      |                                           |
| isShiftKeyDown               | boolean                                                                                  | true       | false      |                                           |
| isSilent                     | boolean                                                                                  | true       | false      |                                           |
| isSpectator                  | boolean                                                                                  | true       | false      |                                           |
| isSprinting                  | boolean                                                                                  | true       | false      |                                           |
| isSteppingCarefully          | boolean                                                                                  | true       | false      |                                           |
| isSuppressingBounce          | boolean                                                                                  | true       | false      |                                           |
| isSwimming                   | boolean                                                                                  | true       | false      |                                           |
| isUnderWater                 | boolean                                                                                  | true       | false      |                                           |
| isVehicle                    | boolean                                                                                  | true       | false      |                                           |
| isVisuallyCrawling           | boolean                                                                                  | true       | false      |                                           |
| isVisuallySwimming           | boolean                                                                                  | true       | false      |                                           |
| level                        | [Level](/vanilla/api/world/Level)                                                        | true       | false      |                                           |
| lookAngle                    | [Vec3](/vanilla/api/util/math/Vec3)                                                      | true       | false      |                                           |
| maxAirSupply                 | int                                                                                      | true       | false      |                                           |
| maxFallDistance              | int                                                                                      | true       | false      |                                           |
| motionDirection              | [Direction](/vanilla/api/util/direction/Direction)                                       | true       | false      |                                           |
| name                         | [Component](/vanilla/api/text/Component)                                                 | true       | false      |                                           |
| onGround                     | boolean                                                                                  | true       | false      |                                           |
| onPos                        | [BlockPos](/vanilla/api/util/math/BlockPos)                                              | true       | false      |                                           |
| passengers                   | stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;                                  | true       | false      |                                           |
| percentFrozen                | float                                                                                    | true       | false      |                                           |
| pistonPushReaction           | [PushReaction](/vanilla/api/block/material/PushReaction)                                 | true       | false      |                                           |
| portalWaitTime               | int                                                                                      | true       | false      |                                           |
| position                     | [Vec3](/vanilla/api/util/math/Vec3)                                                      | true       | false      |                                           |
| registryName                 | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                               | true       | false      |                                           |
| remainingFireTicks           | int                                                                                      | true       | false      |                                           |
| rootVehicle                  | [Entity](/vanilla/api/entity/Entity)                                                     | true       | false      |                                           |
| shouldShowName               | boolean                                                                                  | true       | false      |                                           |
| showVehicleHealth            | boolean                                                                                  | true       | false      |                                           |
| soundSource                  | [SoundSource](/vanilla/api/sound/SoundSource)                                            | true       | false      |                                           |
| stringUUID                   | string                                                                                   | true       | false      |                                           |
| tags                         | Set&lt;string&gt;                                                                        | true       | false      |                                           |
| teamColor                    | int                                                                                      | true       | false      |                                           |
| ticksFrozen                  | int                                                                                      | true       | false      |                                           |
| ticksRequiredToFreeze        | int                                                                                      | true       | false      |                                           |
| type                         | [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt; | true       | false      |                                           |
| vehicle                      | [Entity](/vanilla/api/entity/Entity)?                                                    | true       | false      |                                           |
| x                            | double                                                                                   | true       | false      |                                           |
| y                            | double                                                                                   | true       | false      |                                           |
| z                            | double                                                                                   | true       | false      |                                           |

