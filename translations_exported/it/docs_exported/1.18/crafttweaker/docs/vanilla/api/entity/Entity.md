# Entity

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.Entity;
```


## Extending CapabilityProvider&lt;Entity&gt;

Entity extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Entity](/vanilla/api/entity/Entity)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Entity](/vanilla/api/entity/Entity)&gt; are also available in Entity

## Interfacce Implementate
Entity implements the following interfaces. That means all methods defined in these interfaces are also available in Entity

- [Nameable](/vanilla/api/world/Nameable)
- [EntityAccess](/vanilla/api/entity/EntityAccess)
- [CommandSource](/vanilla/api/command/CommandSource)

## Metodi

:::group{name=addTag}

Return Type: boolean

```zenscript
Entity.addTag(tagName as string) as boolean
```

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| other     | [Entity](/vanilla/api/entity/Entity) |
| distance  | double                               |


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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(entity as Entity) as double
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(vec as Vec3) as double
```

| Parametro | Tipo                                |
| --------- | ----------------------------------- |
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Entity.distanceToSqr(x as double, y as double, z as double) as double
```

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro    | Tipo  |
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

| Parametro    | Tipo  |
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

| Parametro    | Tipo  |
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

| Parametro    | Tipo  |
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

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(entity as Entity) as boolean
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=hasPassenger}

Return Type: boolean

```zenscript
Entity.hasPassenger(predicate as Predicate<Entity>) as boolean
```

| Parametro | Tipo                                                              |
| --------- | ----------------------------------------------------------------- |
| predicate | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; |


:::

:::group{name=hurt}

Return Type: boolean

```zenscript
Entity.hurt(source as DamageSource, amount as float) as boolean
```

| Parametro | Tipo                                            |
| --------- | ----------------------------------------------- |
| sorgente  | [DamageSource](/vanilla/api/world/DamageSource) |
| amount    | float                                           |


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

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
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

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro | Tipo                                             |
| --------- | ------------------------------------------------ |
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

| Parametro | Tipo                                            |
| --------- | ----------------------------------------------- |
| sorgente  | [DamageSource](/vanilla/api/world/DamageSource) |


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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
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

| Parametro | Tipo                                |
| --------- | ----------------------------------- |
| amount    | float                               |
| relative  | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(vec as Vec3)
```

| Parametro | Tipo                                |
| --------- | ----------------------------------- |
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(pos as BlockPos, yaw as float, pitch as float)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |
| yaw       | float                                       |
| pitch     | float                                       |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(x as double, y as double, z as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=moveTo}

```zenscript
Entity.moveTo(x as double, y as double, z as double, yaw as float, pitch as float)
```

| Parametro | Tipo   |
| --------- | ------ |
| x         | double |
| y         | double |
| z         | double |
| yaw       | float  |
| pitch     | float  |


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

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=removeTag}

Return Type: boolean

```zenscript
Entity.removeTag(tagName as string) as boolean
```

| Parametro | Tipo   |
| --------- | ------ |
| tagName   | string |


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

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| message   | [Component](/vanilla/api/text/Component) |


:::

:::group{name=setAirSupply}

```zenscript
Entity.setAirSupply(air as int)
```

| Parametro | Tipo |
| --------- | ---- |
| air       | int  |


:::

:::group{name=setCustomName}

```zenscript
Entity.setCustomName(name as Component?)
```

| Parametro | Tipo                                      |
| --------- | ----------------------------------------- |
| nome      | [Component](/vanilla/api/text/Component)? |


:::

:::group{name=setCustomNameVisible}

```zenscript
Entity.setCustomNameVisible(visible as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| visible   | boolean |


:::

:::group{name=setDeltaMovement}

```zenscript
Entity.setDeltaMovement(deltaMovement as Vec3)
```

| Parametro     | Tipo                                |
| ------------- | ----------------------------------- |
| deltaMovement | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=setDeltaMovement}

```zenscript
Entity.setDeltaMovement(xDelta as double, yDelta as double, zDelta as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| xDelta    | double |
| yDelta    | double |
| zDelta    | double |


:::

:::group{name=setGlowingTag}

```zenscript
Entity.setGlowingTag(glowing as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| glowing   | boolean |


:::

:::group{name=setInvisible}

```zenscript
Entity.setInvisible(invisible as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| invisible | boolean |


:::

:::group{name=setInvulnerable}

```zenscript
Entity.setInvulnerable(invulnerable as boolean)
```

| Parametro    | Tipo    |
| ------------ | ------- |
| invulnerable | boolean |


:::

:::group{name=setIsInPowderSnow}

```zenscript
Entity.setIsInPowderSnow(inPowderSnow as boolean)
```

| Parametro    | Tipo    |
| ------------ | ------- |
| inPowderSnow | boolean |


:::

:::group{name=setItemSlot}

```zenscript
Entity.setItemSlot(slot as EquipmentSlot, stack as ItemStack)
```

| Parametro | Tipo                                                         |
| --------- | ------------------------------------------------------------ |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                     |


:::

:::group{name=setNoGravity}

```zenscript
Entity.setNoGravity(noGravity as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
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

| Parametro | Tipo    |
| --------- | ------- |
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

| Parametro | Tipo                                |
| --------- | ----------------------------------- |
| position  | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=setPos}

```zenscript
Entity.setPos(x as double, y as double, z as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=setPosRaw}

```zenscript
Entity.setPosRaw(x as double, y as double, z as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=setRemainingFireTicks}

```zenscript
Entity.setRemainingFireTicks(ticks as int)
```

| Parametro | Tipo |
| --------- | ---- |
| ticks     | int  |


:::

:::group{name=setSecondsOnFire}

```zenscript
Entity.setSecondsOnFire(seconds as int)
```

| Parametro | Tipo |
| --------- | ---- |
| seconds   | int  |


:::

:::group{name=setShiftKeyDown}

```zenscript
Entity.setShiftKeyDown(keyDown as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| keyDown   | boolean |


:::

:::group{name=setSilent}

```zenscript
Entity.setSilent(silent as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| silent    | boolean |


:::

:::group{name=setSprinting}

```zenscript
Entity.setSprinting(sprinting as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| sprinting | boolean |


:::

:::group{name=setSwimming}

```zenscript
Entity.setSwimming(swimming as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| swimming  | boolean |


:::

:::group{name=setTicksFrozen}

```zenscript
Entity.setTicksFrozen(ticks as int)
```

| Parametro | Tipo |
| --------- | ---- |
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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=startRiding}

Return Type: boolean

```zenscript
Entity.startRiding(entity as Entity, force as boolean) as boolean
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
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

| Parametro | Tipo   |
| --------- | ------ |
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=turn}

```zenscript
Entity.turn(yaw as double, pitch as double)
```

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro | Tipo                                 | Descrizione               |
| --------- | ------------------------------------ | ------------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | The custom data to store. |


:::

:::group{name=updateData}

Updates the NBT data of this Entity.

```zenscript
// Entity.updateData(data as MapData)

myEntity.updateData({key: "value"});
```

| Parametro | Tipo                                 | Descrizione                  |
| --------- | ------------------------------------ | ---------------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | The new Data for this Entity |


:::


## Proprietà

| Nome                         | Tipo                                                                        | Ha Getter | Ha Setter | Descrizione                               |
| ---------------------------- | --------------------------------------------------------------------------- | --------- | --------- | ----------------------------------------- |
| airSupply                    | int                                                                         | sì        | no        |                                           |
| allSlots                     | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | sì        | no        |                                           |
| armorSlots                   | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | sì        | no        |                                           |
| bbHeight                     | float                                                                       | sì        | no        |                                           |
| bbWidth                      | float                                                                       | sì        | no        |                                           |
| blockPosition                | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | sì        | no        |                                           |
| blockX                       | int                                                                         | sì        | no        |                                           |
| blockY                       | int                                                                         | sì        | no        |                                           |
| blockZ                       | int                                                                         | sì        | no        |                                           |
| boundingBoxForCulling        | [AABB](/vanilla/api/util/math/AABB)                                         | sì        | no        |                                           |
| brightness                   | float                                                                       | sì        | no        |                                           |
| canBeCollidedWith            | boolean                                                                     | sì        | no        |                                           |
| canFreeze                    | boolean                                                                     | sì        | no        |                                           |
| commandSenderWorld           | [Level](/vanilla/api/world/Level)                                           | sì        | no        |                                           |
| controllingPassenger         | [Entity](/vanilla/api/entity/Entity)?                                       | sì        | no        |                                           |
| customData                   | [MapData](/vanilla/api/data/MapData)                                        | sì        | no        | Gets the custom NBT data for this Entity. |
| customName                   | [Component](/vanilla/api/text/Component)?                                   | sì        | no        |                                           |
| data                         | [MapData](/vanilla/api/data/MapData)                                        | sì        | no        | Gets the NBT data of this Entity.         |
| deltaMovement                | [Vec3](/vanilla/api/util/math/Vec3)                                         | sì        | sì        |                                           |
| dimensionChangingDelay       | int                                                                         | sì        | no        |                                           |
| direction                    | [Direction](/vanilla/api/util/direction/Direction)                          | sì        | no        |                                           |
| displayName                  | [Component](/vanilla/api/text/Component)                                    | sì        | no        |                                           |
| eyeBlockPosition             | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | sì        | no        |                                           |
| eyeHeight                    | float                                                                       | sì        | no        |                                           |
| eyePosition                  | [Vec3](/vanilla/api/util/math/Vec3)                                         | sì        | no        |                                           |
| eyeY                         | double                                                                      | sì        | no        |                                           |
| feetBlockState               | [BlockState](/vanilla/api/block/BlockState)                                 | sì        | no        |                                           |
| fireImmune                   | boolean                                                                     | sì        | no        |                                           |
| firstPassenger               | [Entity](/vanilla/api/entity/Entity)?                                       | sì        | no        |                                           |
| fluidJumpThreshold           | double                                                                      | sì        | no        |                                           |
| forward                      | [Vec3](/vanilla/api/util/math/Vec3)                                         | sì        | no        |                                           |
| handSlots                    | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | sì        | no        |                                           |
| hasCustomName                | boolean                                                                     | sì        | no        |                                           |
| hasExactlyOnePlayerPassenger | boolean                                                                     | sì        | no        |                                           |
| hasGlowingTag                | boolean                                                                     | sì        | no        |                                           |
| isAlive                      | boolean                                                                     | sì        | no        |                                           |
| isAttackable                 | boolean                                                                     | sì        | no        |                                           |
| isCrouching                  | boolean                                                                     | sì        | no        |                                           |
| isCurrentlyGlowing           | boolean                                                                     | sì        | no        |                                           |
| isCustomNameVisible          | boolean                                                                     | sì        | no        |                                           |
| isDescending                 | boolean                                                                     | sì        | no        |                                           |
| isDiscrete                   | boolean                                                                     | sì        | no        |                                           |
| isFullyFrozen                | boolean                                                                     | sì        | no        |                                           |
| isInLava                     | boolean                                                                     | sì        | no        |                                           |
| isInWall                     | boolean                                                                     | sì        | no        |                                           |
| isInWater                    | boolean                                                                     | sì        | no        |                                           |
| isInWaterOrBubble            | boolean                                                                     | sì        | no        |                                           |
| isInWaterOrRain              | boolean                                                                     | sì        | no        |                                           |
| isInWaterRainOrBubble        | boolean                                                                     | sì        | no        |                                           |
| isInvisible                  | boolean                                                                     | sì        | no        |                                           |
| isInvulnerable               | boolean                                                                     | sì        | no        |                                           |
| isNoGravity                  | boolean                                                                     | sì        | no        |                                           |
| isOnFire                     | boolean                                                                     | sì        | no        |                                           |
| isOnGround                   | boolean                                                                     | sì        | no        |                                           |
| isOnPortalCooldown           | boolean                                                                     | sì        | no        |                                           |
| isPassenger                  | boolean                                                                     | sì        | no        |                                           |
| isPickable                   | boolean                                                                     | sì        | no        |                                           |
| isPushable                   | boolean                                                                     | sì        | no        |                                           |
| isPushedByFluid              | boolean                                                                     | sì        | no        |                                           |
| isRemoved                    | boolean                                                                     | sì        | no        |                                           |
| isShiftKeyDown               | boolean                                                                     | sì        | no        |                                           |
| isSilent                     | boolean                                                                     | sì        | no        |                                           |
| isSpectator                  | boolean                                                                     | sì        | no        |                                           |
| isSprinting                  | boolean                                                                     | sì        | no        |                                           |
| isSteppingCarefully          | boolean                                                                     | sì        | no        |                                           |
| isSuppressingBounce          | boolean                                                                     | sì        | no        |                                           |
| isSwimming                   | boolean                                                                     | sì        | no        |                                           |
| isUnderWater                 | boolean                                                                     | sì        | no        |                                           |
| isVehicle                    | boolean                                                                     | sì        | no        |                                           |
| isVisuallyCrawling           | boolean                                                                     | sì        | no        |                                           |
| isVisuallySwimming           | boolean                                                                     | sì        | no        |                                           |
| level                        | [Level](/vanilla/api/world/Level)                                           | sì        | no        |                                           |
| lookAngle                    | [Vec3](/vanilla/api/util/math/Vec3)                                         | sì        | no        |                                           |
| maxAirSupply                 | int                                                                         | sì        | no        |                                           |
| maxFallDistance              | int                                                                         | sì        | no        |                                           |
| motionDirection              | [Direction](/vanilla/api/util/direction/Direction)                          | sì        | no        |                                           |
| nome                         | [Component](/vanilla/api/text/Component)                                    | sì        | no        |                                           |
| occludesVibrations           | boolean                                                                     | sì        | no        |                                           |
| onPos                        | [BlockPos](/vanilla/api/util/math/BlockPos)                                 | sì        | no        |                                           |
| passengers                   | stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;         | sì        | no        |                                           |
| percentFrozen                | float                                                                       | sì        | no        |                                           |
| pistonPushReaction           | [PushReaction](/vanilla/api/block/material/PushReaction)                    | sì        | no        |                                           |
| portalWaitTime               | int                                                                         | sì        | no        |                                           |
| position                     | [Vec3](/vanilla/api/util/math/Vec3)                                         | sì        | no        |                                           |
| remainingFireTicks           | int                                                                         | sì        | no        |                                           |
| rideableUnderWater           | boolean                                                                     | sì        | no        |                                           |
| rootVehicle                  | [Entity](/vanilla/api/entity/Entity)                                        | sì        | no        |                                           |
| shouldShowName               | boolean                                                                     | sì        | no        |                                           |
| showVehicleHealth            | boolean                                                                     | sì        | no        |                                           |
| soundSource                  | [SoundSource](/vanilla/api/sound/SoundSource)                               | sì        | no        |                                           |
| stringUUID                   | string                                                                      | sì        | no        |                                           |
| tags                         | Set&lt;string&gt;                                               | sì        | no        |                                           |
| teamColor                    | int                                                                         | sì        | no        |                                           |
| ticksFrozen                  | int                                                                         | sì        | no        |                                           |
| ticksRequiredToFreeze        | int                                                                         | sì        | no        |                                           |
| type                         | [EntityType](/vanilla/api/entity/EntityType)                                | sì        | no        |                                           |
| vehicle                      | [Entity](/vanilla/api/entity/Entity)?                                       | sì        | no        |                                           |
| x                            | double                                                                      | sì        | no        |                                           |
| y                            | double                                                                      | sì        | no        |                                           |
| z                            | double                                                                      | sì        | no        |                                           |

