# MCPlayerEntity

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Методы
### addExhaustion

increases exhaustion level by supplied amount

```zenscript
myMCPlayerEntity.addExhaustion(exhaustion as float);
```

| Параметр   | Тип   | Описание             |
| ---------- | ----- | -------------------- |
| exhaustion | float | Описание отсутствует |


### addExperienceLevel

Add experience levels to this player.

```zenscript
myMCPlayerEntity.addExperienceLevel(levels as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| levels   | int | Описание отсутствует |


### addItemStackToInventory

Возвращает boolean

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Параметр      | Тип                                                               | Описание             |
| ------------- | ----------------------------------------------------------------- | -------------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### addMovementStat

Adds a value to a movement statistic field - like run, walk, swin or climb.

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ as double, p_71000_3_ as double, p_71000_5_ as double);
```

| Параметр     | Тип    | Описание             |
| ------------ | ------ | -------------------- |
| p_71000_1_ | double | Описание отсутствует |
| p_71000_3_ | double | Описание отсутствует |
| p_71000_5_ | double | Описание отсутствует |


### addPotionEffect

Возвращает boolean

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Параметр         | Тип                                                                                           | Описание             |
| ---------------- | --------------------------------------------------------------------------------------------- | -------------------- |
| effectInstanceIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### addScore

Add to player's score

```zenscript
myMCPlayerEntity.addScore(scoreIn as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| scoreIn  | int | Описание отсутствует |


### addTag

Возвращает boolean

```zenscript
myMCPlayerEntity.addTag(tag as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| tag      | String | Описание отсутствует |


### addVelocity

Adds to the current velocity of the entity, and sets  to true.

```zenscript
myMCPlayerEntity.addVelocity(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### allowLogging

Возвращает boolean

```zenscript
myMCPlayerEntity.allowLogging();
```

### attackable

Возвращает boolean

```zenscript
myMCPlayerEntity.attackable();
```

### attemptTeleport

Возвращает boolean

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ as double, p_213373_3_ as double, p_213373_5_ as double, p_213373_7_ as boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| p_213373_1_ | double  | Описание отсутствует |
| p_213373_3_ | double  | Описание отсутствует |
| p_213373_5_ | double  | Описание отсутствует |
| p_213373_7_ | boolean | Описание отсутствует |


### baseTick

Gets called every tick from main Entity class

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

Возвращает boolean

```zenscript
myMCPlayerEntity.canAttackPlayer(other as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание             |
| -------- | ------------------------------------------------------------------------------------------ | -------------------- |
| other    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Описание отсутствует |


### canBeAttackedWithItem

Returns true if it's possible to attack this entity with an item.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### canBeCollidedWith

Returns true if other Entities should be prevented from moving through this Entity.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### canBeHitWithPotion

Returns false if the entity is an armor stand. Returns true for all other entity living bases.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### canBePushed

Returns true if this entity should push and be pushed by other entities when colliding.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### canBreatheUnderwater

Возвращает boolean

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Возвращает boolean

```zenscript
myMCPlayerEntity.canEat(ignoreHunger as boolean);
```

| Параметр     | Тип     | Описание             |
| ------------ | ------- | -------------------- |
| ignoreHunger | boolean | Описание отсутствует |


### canHarvestBlock

Возвращает boolean

```zenscript
myMCPlayerEntity.canHarvestBlock(state as crafttweaker.api.block.MCBlockState);
```

| Параметр | Тип                                                                     | Описание             |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| state    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |


### canPassengerSteer

Возвращает boolean

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Returns whether this player can modify the block at a certain location with the given stack. <p> The position being queried is {@code pos.offset(facing.getOpposite()))}. Returns: `Whether this player may modify the queried location in the current world` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Возвращает boolean

```zenscript
myMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, facing as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| Параметр | Тип                                                               | Описание             |
| -------- | ----------------------------------------------------------------- | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | Описание отсутствует |
| facing   | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)    | Описание отсутствует |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### canRenderOnFire

Return whether this entity should be rendered as on fire.

Возвращает boolean

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Возвращает boolean

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### canSwim

Возвращает boolean

```zenscript
myMCPlayerEntity.canSwim();
```

### canTrample

Возвращает boolean

```zenscript
myMCPlayerEntity.canTrample(state as crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| Параметр     | Тип                                                                     | Описание             |
| ------------ | ----------------------------------------------------------------------- | -------------------- |
| state        | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |
| pos          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Описание отсутствует |
| fallDistance | float                                                                   | Описание отсутствует |


### canUpdate

Возвращает boolean

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(value as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| value    | boolean | Описание отсутствует |


### canUseCommandBlock

Возвращает boolean

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### clearActivePotions

Возвращает boolean

```zenscript
myMCPlayerEntity.clearActivePotions();
```

### clearBedPosition

```zenscript
myMCPlayerEntity.clearBedPosition();
```

### closeScreen

set current crafting inventory back to the 2x2 square

```zenscript
myMCPlayerEntity.closeScreen();
```

### curePotionEffects

Возвращает boolean

```zenscript
myMCPlayerEntity.curePotionEffects(curativeItem as crafttweaker.api.item.IItemStack);
```

| Параметр     | Тип                                                               | Описание             |
| ------------ | ----------------------------------------------------------------- | -------------------- |
| curativeItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### disableShield

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ as boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| p_190777_1_ | boolean | Описание отсутствует |


### doesEntityNotTriggerPressurePlate

Return whether this entity should NOT trigger a pressure plate or a tripwire.

Возвращает boolean

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### equals

Возвращает boolean

```zenscript
myMCPlayerEntity.equals(p_equals_1_ as Object);
```

| Параметр      | Тип    | Описание             |
| ------------- | ------ | -------------------- |
| p_equals_1_ | Object | Описание отсутствует |


### extinguish

Removes fire from entity.

```zenscript
myMCPlayerEntity.extinguish();
```

### fall

```zenscript
myMCPlayerEntity.fall(distance as float, damageMultiplier as float);
```

| Параметр         | Тип   | Описание             |
| ---------------- | ----- | -------------------- |
| distance         | float | Описание отсутствует |
| damageMultiplier | float | Описание отсутствует |


### findAmmo

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(shootable as crafttweaker.api.item.IItemStack);
```

| Параметр  | Тип                                                               | Описание             |
| --------- | ----------------------------------------------------------------- | -------------------- |
| shootable | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### func_213300_bk

Возвращает boolean

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ as double, p_213312_3_ as double, p_213312_5_ as double);
```

| Параметр      | Тип    | Описание             |
| ------------- | ------ | -------------------- |
| p_213312_1_ | double | Описание отсутствует |
| p_213312_3_ | double | Описание отсутствует |
| p_213312_5_ | double | Описание отсутствует |


### func_213314_bj

Возвращает boolean

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Returns float

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Возвращает boolean

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn as crafttweaker.api.item.IItemStack);
```

| Параметр    | Тип                                                               | Описание             |
| ----------- | ----------------------------------------------------------------- | -------------------- |
| itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### getAIMoveSpeed

the movespeed used for the new AI system

Returns float

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAbsorptionAmount

Returns the amount of health added by the Absorption effect.

Returns float

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### getActivePotionEffect

returns the PotionEffect for the supplied Potion if it is active, null otherwise.

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| potionIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### getActivePotionEffects

Returns Collection<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### getAdjustedHorizontalFacing

Gets the horizontal facing direction of this Entity, adjusted to take specially-treated entity types into account.

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getAdjustedHorizontalFacing();
```

### getAir

Возвращает int

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

Возвращает boolean

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Возвращает int

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### getBedDirection

gets the Direction for the camera if this entity is sleeping

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### getBedLocation

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockState

Возвращает [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### getBrightness

Gets how bright this entity is.

Returns float

```zenscript
myMCPlayerEntity.getBrightness();
```

### getBrightnessForRender

Возвращает int

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

Returns String

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getClassification

Returns [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount as boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| forSpawnCount | boolean | Описание отсутствует |


### getCollisionBorderSize

Returns float

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### getCooldownPeriod

Returns float

```zenscript
myMCPlayerEntity.getCooldownPeriod();
```

### getCooledAttackStrength

Returns the percentage of attack power available based on the cooldown (zero to one).

Returns float

```zenscript
myMCPlayerEntity.getCooledAttackStrength(adjustTicks as float);
```

| Параметр    | Тип   | Описание             |
| ----------- | ----- | -------------------- |
| adjustTicks | float | Описание отсутствует |


### getDigSpeed

Returns float

```zenscript
myMCPlayerEntity.getDigSpeed(state as crafttweaker.api.block.MCBlockState);
```

| Параметр | Тип                                                                     | Описание             |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| state    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |



Returns float

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as crafttweaker.api.block.MCBlockState, arg1 as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                                     | Описание             |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| arg0     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |
| arg1     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Описание отсутствует |


### getDistanceSq

Returns double

```zenscript
myMCPlayerEntity.getDistanceSq(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### getEntityId

Возвращает int

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Returns String

```zenscript
myMCPlayerEntity.getEntityString();
```

### getEyeHeight

Returns float

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Возвращает int

```zenscript
myMCPlayerEntity.getFireTimer();
```

### getHealth

Returns float

```zenscript
myMCPlayerEntity.getHealth();
```

### getHeight

Returns float

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### getHorizontalFacing

Gets the horizontal facing direction of this Entity.

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

Возвращает int

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Возвращает int

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Возвращает int

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Возвращает int

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Returns float

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Возвращает int

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

The maximum height from where the entity is alowed to jump (used in pathfinder)

Возвращает int

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

Returns float

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

Return the amount of time this entity should stay in a portal before being transported.

Возвращает int

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

Returns the Y offset from the entity's position for any entity riding this one.

Returns double

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

Gets the current pitch of the entity.

Returns float

```zenscript
myMCPlayerEntity.getPitch(partialTicks as float);
```

| Параметр     | Тип   | Описание             |
| ------------ | ----- | -------------------- |
| partialTicks | float | Описание отсутствует |


### getPortalCooldown

Return the amount of cooldown before this entity can use a portal again.

Возвращает int

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### getPosition

Get the position in the world. <b>{@code null} is not allowed!</b> If you are not an entity in the world, return the coordinates 0, 0, 0

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

Returns float

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Возвращает int

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

Returns float

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### getScore

Возвращает int

```zenscript
myMCPlayerEntity.getScore();
```

### getScoreboardName

Returns a String to use as this entity's name in the scoreboard/entity selector systems

Returns String

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### getSleepTimer

Возвращает int

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmergedHeight

Returns double

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### getSwimAnimation

Returns float

```zenscript
myMCPlayerEntity.getSwimAnimation(partialTicks as float);
```

| Параметр     | Тип   | Описание             |
| ------------ | ----- | -------------------- |
| partialTicks | float | Описание отсутствует |


### getSwingProgress

Gets the progression of the swing animation, ranges from 0.0 to 1.0.

Returns float

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime as float);
```

| Параметр        | Тип   | Описание             |
| --------------- | ----- | -------------------- |
| partialTickTime | float | Описание отсутствует |


### getTags

Returns Set<String>

```zenscript
myMCPlayerEntity.getTags();
```

### getTeleportDirection

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### getTicksElytraFlying

Возвращает int

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### getTotalArmorValue

Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue

Возвращает int

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Returns float

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPSeed

Возвращает int

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

Returns the Y Offset of this entity.

Returns double

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

Gets the current yaw of the entity

Returns float

```zenscript
myMCPlayerEntity.getYaw(partialTicks as float);
```

| Параметр     | Тип   | Описание             |
| ------------ | ----- | -------------------- |
| partialTicks | float | Описание отсутствует |


### giveExperiencePoints

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ as int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_195068_1_ | int | Описание отсутствует |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id as byte);
```

| Параметр | Тип  | Описание             |
| -------- | ---- | -------------------- |
| id       | byte | Описание отсутствует |


### handleWaterMovement

Returns if this entity is in water and will end up adding the waters velocity to the entity

Возвращает boolean

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### hasCustomName

Возвращает boolean

```zenscript
myMCPlayerEntity.hasCustomName();
```

### hasNoGravity

Возвращает boolean

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### hasPermissionLevel

Возвращает boolean

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ as int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_211513_1_ | int | Описание отсутствует |


### hasReducedDebug

Whether the "reducedDebugInfo" option is active for this player.

Возвращает boolean

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Возвращает int

```zenscript
myMCPlayerEntity.hashCode();
```

### heal

Heal living entity (param: amount of half-hearts)

```zenscript
myMCPlayerEntity.heal(healAmount as float);
```

| Параметр   | Тип   | Описание             |
| ---------- | ----- | -------------------- |
| healAmount | float | Описание отсутствует |


### ignoreItemEntityData

Checks if players can use this entity to access operator (permission level 2) commands either directly or indirectly, such as give or setblock. A similar method exists for entities at {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>For example, {@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() command block minecarts} and {@link
 net.minecraft.entity.item.EntityMinecartMobSpawner#ignoreItemEntityData() mob spawner minecarts} (spawning command
 block minecarts or drops) are considered accessible.</p>Returns: `true if this entity offers ways for unauthorized
 players to use restricted commands`

Возвращает boolean

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### isActiveItemStackBlocking

Возвращает boolean

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### isAddedToWorld

Возвращает boolean

```zenscript
myMCPlayerEntity.isAddedToWorld();
```

### isAlive

Returns true if the entity has not been .

Возвращает boolean

```zenscript
myMCPlayerEntity.isAlive();
```

### isAllowEdit

Возвращает boolean

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

If at least 1 entity is riding this one

Возвращает boolean

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### isBurning

Returns true if the entity is on fire. Used by render to add the fire effect on rendering.

Возвращает boolean

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

If Animal, checks if the age timer is negative

Возвращает boolean

```zenscript
myMCPlayerEntity.isChild();
```

### isCreative

Возвращает boolean

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomNameVisible

Возвращает boolean

```zenscript
myMCPlayerEntity.isCustomNameVisible();
```

### isElytraFlying

Возвращает boolean

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Checks if this entity is inside of an opaque block

Возвращает boolean

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Returns true if this entity is undead.

Возвращает boolean

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### isGlowing

Возвращает boolean

```zenscript
myMCPlayerEntity.isGlowing();
```

### isHandActive

Возвращает boolean

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Возвращает boolean

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Возвращает boolean

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Возвращает boolean

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Возвращает boolean

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### isInRangeToRenderDist

Checks if the entity is in range to render.

Возвращает boolean

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(distance as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| distance | double | Описание отсутствует |


### isInWater

Checks if this entity is inside water (if inWater field is true as a result of handleWaterMovement() returning true)

Возвращает boolean

```zenscript
myMCPlayerEntity.isInWater();
```

### isInWaterOrBubbleColumn

Возвращает boolean

```zenscript
myMCPlayerEntity.isInWaterOrBubbleColumn();
```

### isInWaterRainOrBubbleColumn

Возвращает boolean

```zenscript
myMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### isInvisible

Возвращает boolean

```zenscript
myMCPlayerEntity.isInvisible();
```

### isInvisibleToPlayer

Only used by renderer in EntityLivingBase subclasses. Determines if an entity is visible or not to a specific player, if the entity is normally invisible. For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.

Возвращает boolean

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание             |
| -------- | ------------------------------------------------------------------------------------------ | -------------------- |
| player   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Описание отсутствует |


### isInvulnerable

Возвращает boolean

```zenscript
myMCPlayerEntity.isInvulnerable();
```

### isLiving

Возвращает boolean

```zenscript
myMCPlayerEntity.isLiving();
```

### isNonBoss

Returns false if this Entity is a boss, true otherwise.

Возвращает boolean

```zenscript
myMCPlayerEntity.isNonBoss();
```

### isOffsetPositionInLiquid

Checks if the offset position from the entity's current position is inside of a liquid.

Возвращает boolean

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### isOnLadder

Returns true if this entity should move as if it were on a ladder (either because it's actually on a ladder, or for AI reasons)

Возвращает boolean

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Возвращает boolean

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### isPassenger

Возвращает boolean

```zenscript
myMCPlayerEntity.isPassenger();
```

### isPlayerFullyAsleep

Returns whether or not the player is asleep and the screen has fully faded.

Возвращает boolean

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### isPotionActive

Возвращает boolean

```zenscript
myMCPlayerEntity.isPotionActive(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| potionIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### isPotionApplicable

Возвращает boolean

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Параметр       | Тип                                                                                           | Описание             |
| -------------- | --------------------------------------------------------------------------------------------- | -------------------- |
| potioneffectIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### isPushedByWater

Возвращает boolean

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

Returns whether the entity is in a server world

Возвращает boolean

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Returns: `True if this entity will not play sounds`

Возвращает boolean

```zenscript
myMCPlayerEntity.isSilent();
```

### isSleeping

Returns whether player is sleeping or not

Возвращает boolean

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

Returns if this entity is sneaking.

Возвращает boolean

```zenscript
myMCPlayerEntity.isSneaking();
```

### isSpawnForced

Возвращает boolean

```zenscript
myMCPlayerEntity.isSpawnForced();
```

### isSpectator

Returns true if the player is in spectator mode.

Возвращает boolean

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinAttacking

Возвращает boolean

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

Get if the Entity is sprinting.

Возвращает boolean

```zenscript
myMCPlayerEntity.isSprinting();
```

### isSwimming

Возвращает boolean

```zenscript
myMCPlayerEntity.isSwimming();
```

### isUser

returns true if this is an EntityPlayerSP, or the logged in player.

Возвращает boolean

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Checks if this entity is either in water or on an open air block in rain (used in wolves).

Возвращает boolean

```zenscript
myMCPlayerEntity.isWet();
```

### jump

Causes this entity to do an upwards motion (jumping).

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

Called frequently so the entity can update its state every tick as required. For example, zombies and skeletons use this to react to sunlight and start to burn.

```zenscript
myMCPlayerEntity.livingTick();
```

### moveToBlockPosAndAngles

```zenscript
myMCPlayerEntity.moveToBlockPosAndAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn as float, rotationPitchIn as float);
```

| Параметр        | Тип                                                          | Описание             |
| --------------- | ------------------------------------------------------------ | -------------------- |
| pos             | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |
| rotationYawIn   | float                                                        | Описание отсутствует |
| rotationPitchIn | float                                                        | Описание отсутствует |


### onAddedToWorld

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollideWithPlayer

Called by a player entity when they collide with an entity

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание             |
| -------- | ------------------------------------------------------------------------------------------ | -------------------- |
| entityIn | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Описание отсутствует |


### onEnchant

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem as crafttweaker.api.item.IItemStack, cost as int);
```

| Параметр      | Тип                                                               | Описание             |
| ------------- | ----------------------------------------------------------------- | -------------------- |
| enchantedItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |
| cost          | int                                                               | Описание отсутствует |


### onEnterBubbleColumn

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(downwards as boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| downwards | boolean | Описание отсутствует |


### onEnterBubbleColumnWithAirAbove

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAbove(downwards as boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| downwards | boolean | Описание отсутствует |


### onKillCommand

Called by the /kill command.

```zenscript
myMCPlayerEntity.onKillCommand();
```

### onRemovedFromWorld

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### performHurtAnimation

Setups the entity to do the hurt animation. Only used by packets in multiplayer.

```zenscript
myMCPlayerEntity.performHurtAnimation();
```

### preparePlayerToSpawn

Keeps moving the entity up so it isn't colliding with blocks and other requirements for this entity to be spawned (only actually used on players though its also on Entity)

```zenscript
myMCPlayerEntity.preparePlayerToSpawn();
```

### recalculateSize

```zenscript
myMCPlayerEntity.recalculateSize();
```

### remove

```zenscript
myMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(keepData as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| keepData | boolean | Описание отсутствует |


### removeActivePotionEffect

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 as crafttweaker.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| arg0     | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### removePassengers

Dismounts all entities riding this entity from this entity.

```zenscript
myMCPlayerEntity.removePassengers();
```

### removePotionEffect

Возвращает boolean

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| effectIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### removeTag

Возвращает boolean

```zenscript
myMCPlayerEntity.removeTag(tag as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| tag      | String | Описание отсутствует |


### replaceItemInInventory

Возвращает boolean

```zenscript
myMCPlayerEntity.replaceItemInInventory(inventorySlot as int, itemStackIn as crafttweaker.api.item.IItemStack);
```

| Параметр      | Тип                                                               | Описание             |
| ------------- | ----------------------------------------------------------------- | -------------------- |
| inventorySlot | int                                                               | Описание отсутствует |
| itemStackIn   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### resetActiveHand

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### resetPositionToBB

Resets the entity's position to the center (planar) and bottom (vertical) points of its bounding box.

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### respawnPlayer

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### revive

```zenscript
myMCPlayerEntity.revive();
```

### rotateTowards

```zenscript
myMCPlayerEntity.rotateTowards(yaw as double, pitch as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| yaw      | double | Описание отсутствует |
| pitch    | double | Описание отсутствует |


### sendEndCombat

Sends an END_COMBAT packet to the client

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### sendEnterCombat

Sends an ENTER_COMBAT packet to the client

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### sendPlayerAbilities

Sends the player's abilities to the server (if there is one).

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### setAIMoveSpeed

set the movespeed used for the new AI system

```zenscript
myMCPlayerEntity.setAIMoveSpeed(speedIn as float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| speedIn  | float | Описание отсутствует |


### setAbsorptionAmount

```zenscript
myMCPlayerEntity.setAbsorptionAmount(amount as float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| amount   | float | Описание отсутствует |


### setAir

```zenscript
myMCPlayerEntity.setAir(air as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| air      | int | Описание отсутствует |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(count as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| count    | int | Описание отсутствует |


### setBedPosition

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ as crafttweaker.api.util.BlockPos);
```

| Параметр      | Тип                                                          | Описание             |
| ------------- | ------------------------------------------------------------ | -------------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### setCustomNameVisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(alwaysRenderNameTag as boolean);
```

| Параметр            | Тип     | Описание             |
| ------------------- | ------- | -------------------- |
| alwaysRenderNameTag | boolean | Описание отсутствует |


### setEntityId

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| id       | int | Описание отсутствует |


### setFire

Sets entity to burn for x amount of seconds, cannot lower amount of existing fire.

```zenscript
myMCPlayerEntity.setFire(seconds as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| seconds  | int | Описание отсутствует |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ as int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_223308_1_ | int | Описание отсутствует |


### setGlowing

```zenscript
myMCPlayerEntity.setGlowing(glowingIn as boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| glowingIn | boolean | Описание отсутствует |


### setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(yaw as float, pitch as int);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| yaw      | float | Описание отсутствует |
| pitch    | int   | Описание отсутствует |


### setHealth

```zenscript
myMCPlayerEntity.setHealth(health as float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| health   | float | Описание отсутствует |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn as int);
```

| Параметр   | Тип | Описание             |
| ---------- | --- | -------------------- |
| idleTimeIn | int | Описание отсутствует |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### setInvisible

```zenscript
myMCPlayerEntity.setInvisible(invisible as boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| invisible | boolean | Описание отсутствует |


### setInvulnerable

Sets whether this Entity is invulnerable.

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerable as boolean);
```

| Параметр       | Тип     | Описание             |
| -------------- | ------- | -------------------- |
| isInvulnerable | boolean | Описание отсутствует |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(jumping as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| jumping  | boolean | Описание отсутствует |


### setLocationAndAngles

Sets the location and Yaw/Pitch of an entity in the world

```zenscript
myMCPlayerEntity.setLocationAndAngles(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |
| yaw      | float  | Описание отсутствует |
| pitch    | float  | Описание отсутствует |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### setNoGravity

```zenscript
myMCPlayerEntity.setNoGravity(noGravity as boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| noGravity | boolean | Описание отсутствует |


### setPartying

Called when a record starts or stops playing. Used to make parrots start or stop partying.

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| Параметр   | Тип                                                          | Описание             |
| ---------- | ------------------------------------------------------------ | -------------------- |
| pos        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |
| isPartying | boolean                                                      | Описание отсутствует |


### setPortal

Marks the entity as being inside a portal, activating teleportation logic in onEntityUpdate() in the following tick(s).

```zenscript
myMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Описание             |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### setPosition

Sets the x,y,z of the entity from the given parameters. Also seems to set up a bounding box.

```zenscript
myMCPlayerEntity.setPosition(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### setPositionAndRotation

Sets position and rotation, clamping and wrapping params to valid values. Used by network code.

```zenscript
myMCPlayerEntity.setPositionAndRotation(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |
| yaw      | float  | Описание отсутствует |
| pitch    | float  | Описание отсутствует |


### setPositionAndRotationDirect

Sets a target for the client to interpolate towards over the next few ticks

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(x as double, y as double, z as double, yaw as float, pitch as float, posRotationIncrements as int, teleport as boolean);
```

| Параметр              | Тип     | Описание             |
| --------------------- | ------- | -------------------- |
| x                     | double  | Описание отсутствует |
| y                     | double  | Описание отсутствует |
| z                     | double  | Описание отсутствует |
| yaw                   | float   | Описание отсутствует |
| pitch                 | float   | Описание отсутствует |
| posRotationIncrements | int     | Описание отсутствует |
| teleport              | boolean | Описание отсутствует |


### setPositionAndUpdate

Sets the position of the entity and updates the 'last' variables

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### setPositionNonDirty

Возвращает boolean

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug as boolean);
```

| Параметр     | Тип     | Описание             |
| ------------ | ------- | -------------------- |
| reducedDebug | boolean | Описание отсутствует |


### setRenderYawOffset

Set the render yaw offset

```zenscript
myMCPlayerEntity.setRenderYawOffset(offset as float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| offset   | float | Описание отсутствует |


### setRotationYawHead

Sets the head's yaw rotation of the entity.

```zenscript
myMCPlayerEntity.setRotationYawHead(rotation as float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| rotation | float | Описание отсутствует |


### setScore

Set player's score

```zenscript
myMCPlayerEntity.setScore(scoreIn as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| scoreIn  | int | Описание отсутствует |


### setSilent

When set to true the entity will not play sounds.

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| isSilent | boolean | Описание отсутствует |


### setSneaking

Sets the sneaking flag.

```zenscript
myMCPlayerEntity.setSneaking(sneaking as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| sneaking | boolean | Описание отсутствует |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, forced as boolean);
```

| Параметр | Тип                                                          | Описание             |
| -------- | ------------------------------------------------------------ | -------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |
| forced   | boolean                                                      | Описание отсутствует |


### setSprinting

Set sprinting switch for Entity.

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| sprinting | boolean | Описание отсутствует |


### setSwimming

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ as boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| p_204711_1_ | boolean | Описание отсутствует |


### setVelocity

Updates the entity motion clientside, called by packets from the server

```zenscript
myMCPlayerEntity.setVelocity(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| x        | double | Описание отсутствует |
| y        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### shouldHeal

Checks if the player's health is not full and not zero.

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldHeal();
```

### shouldReceiveErrors

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldReceiveErrors();
```

### shouldReceiveFeedback

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldReceiveFeedback();
```

### shouldRenderSneaking

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### shouldRiderFaceForward

Returns true if the entity's rider (EntityPlayer) should face forward when mounted. currently only used in vanilla code by pigs.

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание                             |
| -------- | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| player   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | The player who is riding the entity. |


### shouldRiderSit

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### spawnRunningParticles

Attempts to create sprinting particles if the entity is sprinting and not in water.

```zenscript
myMCPlayerEntity.spawnRunningParticles();
```

### spawnSweepParticles

```zenscript
myMCPlayerEntity.spawnSweepParticles();
```

### startSleeping

```zenscript
myMCPlayerEntity.startSleeping(p_213342_1_ as crafttweaker.api.util.BlockPos);
```

| Параметр      | Тип                                                          | Описание             |
| ------------- | ------------------------------------------------------------ | -------------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### startSpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ as int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_204803_1_ | int | Описание отсутствует |


### stopActiveHand

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### stopRiding

Dismounts this entity from the entity it is riding.

```zenscript
myMCPlayerEntity.stopRiding();
```

### teleportKeepLoaded

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ as double, p_223102_3_ as double, p_223102_5_ as double);
```

| Параметр      | Тип    | Описание             |
| ------------- | ------ | -------------------- |
| p_223102_1_ | double | Описание отсутствует |
| p_223102_3_ | double | Описание отсутствует |
| p_223102_5_ | double | Описание отсутствует |


### tick

Called to update the entity's position/logic.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Returns String

```zenscript
myMCPlayerEntity.toString();
```

### updateRidden

Handles updating while riding another entity

```zenscript
myMCPlayerEntity.updateRidden();
```

### updateSwimming

```zenscript
myMCPlayerEntity.updateSwimming();
```

### wakeUp

```zenscript
myMCPlayerEntity.wakeUp();
```

### wakeUpPlayer

Wake up the player if they're sleeping.

```zenscript
myMCPlayerEntity.wakeUpPlayer(immediately as boolean, updateWorldFlag as boolean, setSpawn as boolean);
```

| Параметр        | Тип     | Описание             |
| --------------- | ------- | -------------------- |
| immediately     | boolean | Описание отсутствует |
| updateWorldFlag | boolean | Описание отсутствует |
| setSpawn        | boolean | Описание отсутствует |


### xpBarCap

This method returns the cap amount of experience that the experience bar can hold. With each level, the experience cap on the player's experience bar is raised by 10.

Возвращает int

```zenscript
myMCPlayerEntity.xpBarCap();
```


