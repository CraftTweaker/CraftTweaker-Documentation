# MCPlayerEntity

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Metodi
### addExhaustion

increases exhaustion level by supplied amount

```zenscript
myMCPlayerEntity.addExhaustion(exhaustion as float);
```

| Parametro  | Tipo  | Descrizione                 |
| ---------- | ----- | --------------------------- |
| exhaustion | float | Nessuna descrizione fornita |


### addExperienceLevel

Add experience levels to this player.

```zenscript
myMCPlayerEntity.addExperienceLevel(levels as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| levels    | int  | Nessuna descrizione fornita |


### addItemStackToInventory

Restituisce un booleano

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Parametro     | Tipo                                                              | Descrizione                 |
| ------------- | ----------------------------------------------------------------- | --------------------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### addMovementStat

Adds a value to a movement statistic field - like run, walk, swin or climb.

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ as double, p_71000_3_ as double, p_71000_5_ as double);
```

| Parametro    | Tipo   | Descrizione                 |
| ------------ | ------ | --------------------------- |
| p_71000_1_ | double | Nessuna descrizione fornita |
| p_71000_3_ | double | Nessuna descrizione fornita |
| p_71000_5_ | double | Nessuna descrizione fornita |


### addPotionEffect

Restituisce un booleano

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametro        | Tipo                                                                                          | Descrizione                 |
| ---------------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effectInstanceIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### addScore

Add to player's score

```zenscript
myMCPlayerEntity.addScore(scoreIn as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| scoreIn   | int  | Nessuna descrizione fornita |


### addTag

Restituisce un booleano

```zenscript
myMCPlayerEntity.addTag(tag as String);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| tag       | String | Nessuna descrizione fornita |


### addVelocity

Adds to the current velocity of the entity, and sets  to true.

```zenscript
myMCPlayerEntity.addVelocity(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### allowLogging

Restituisce un booleano

```zenscript
myMCPlayerEntity.allowLogging();
```

### attackable

Restituisce un booleano

```zenscript
myMCPlayerEntity.attackable();
```

### attemptTeleport

Restituisce un booleano

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ as double, p_213373_3_ as double, p_213373_5_ as double, p_213373_7_ as boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| p_213373_1_ | double  | Nessuna descrizione fornita |
| p_213373_3_ | double  | Nessuna descrizione fornita |
| p_213373_5_ | double  | Nessuna descrizione fornita |
| p_213373_7_ | boolean | Nessuna descrizione fornita |


### baseTick

Gets called every tick from main Entity class

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

Restituisce un booleano

```zenscript
myMCPlayerEntity.canAttackPlayer(other as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| other     | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nessuna descrizione fornita |


### canBeAttackedWithItem

Returns true if it's possible to attack this entity with an item.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### canBeCollidedWith

Returns true if other Entities should be prevented from moving through this Entity.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### canBeHitWithPotion

Returns false if the entity is an armor stand. Returns true for all other entity living bases.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### canBePushed

Returns true if this entity should push and be pushed by other entities when colliding.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### canBreatheUnderwater

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Restituisce un booleano

```zenscript
myMCPlayerEntity.canEat(ignoreHunger as boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| ignoreHunger | boolean | Nessuna descrizione fornita |


### canHarvestBlock

Restituisce un booleano

```zenscript
myMCPlayerEntity.canHarvestBlock(state as crafttweaker.api.block.MCBlockState);
```

| Parametro | Tipo                                                                    | Descrizione                 |
| --------- | ----------------------------------------------------------------------- | --------------------------- |
| state     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |


### canPassengerSteer

Restituisce un booleano

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Returns whether this player can modify the block at a certain location with the given stack. <p> The position being queried is {@code pos.offset(facing.getOpposite()))}. Returns: `Whether this player may modify the queried location in the current world` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Restituisce un booleano

```zenscript
myMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, facing as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | Nessuna descrizione fornita |
| facing    | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)    | Nessuna descrizione fornita |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### canRenderOnFire

Return whether this entity should be rendered as on fire.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Restituisce un booleano

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### canSwim

Restituisce un booleano

```zenscript
myMCPlayerEntity.canSwim();
```

### canTrample

Restituisce un booleano

```zenscript
myMCPlayerEntity.canTrample(state as crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| Parametro    | Tipo                                                                    | Descrizione                 |
| ------------ | ----------------------------------------------------------------------- | --------------------------- |
| state        | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |
| pos          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nessuna descrizione fornita |
| fallDistance | float                                                                   | Nessuna descrizione fornita |


### canUpdate

Restituisce un booleano

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(value as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| valore    | boolean | Nessuna descrizione fornita |


### canUseCommandBlock

Restituisce un booleano

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### clearActivePotions

Restituisce un booleano

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

Restituisce un booleano

```zenscript
myMCPlayerEntity.curePotionEffects(curativeItem as crafttweaker.api.item.IItemStack);
```

| Parametro    | Tipo                                                              | Descrizione                 |
| ------------ | ----------------------------------------------------------------- | --------------------------- |
| curativeItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### disableShield

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ as boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| p_190777_1_ | boolean | Nessuna descrizione fornita |


### doesEntityNotTriggerPressurePlate

Return whether this entity should NOT trigger a pressure plate or a tripwire.

Restituisce un booleano

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### equals

Restituisce un booleano

```zenscript
myMCPlayerEntity.equals(p_equals_1_ as Object);
```

| Parametro     | Tipo   | Descrizione                 |
| ------------- | ------ | --------------------------- |
| p_equals_1_ | Object | Nessuna descrizione fornita |


### extinguish

Removes fire from entity.

```zenscript
myMCPlayerEntity.extinguish();
```

### fall

```zenscript
myMCPlayerEntity.fall(distance as float, damageMultiplier as float);
```

| Parametro        | Tipo  | Descrizione                 |
| ---------------- | ----- | --------------------------- |
| distance         | float | Nessuna descrizione fornita |
| damageMultiplier | float | Nessuna descrizione fornita |


### findAmmo

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(shootable as crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| shootable | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### func_213300_bk

Restituisce un booleano

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ as double, p_213312_3_ as double, p_213312_5_ as double);
```

| Parametro     | Tipo   | Descrizione                 |
| ------------- | ------ | --------------------------- |
| p_213312_1_ | double | Nessuna descrizione fornita |
| p_213312_3_ | double | Nessuna descrizione fornita |
| p_213312_5_ | double | Nessuna descrizione fornita |


### func_213314_bj

Restituisce un booleano

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Returns float

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Restituisce un booleano

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn as crafttweaker.api.item.IItemStack);
```

| Parametro   | Tipo                                                              | Descrizione                 |
| ----------- | ----------------------------------------------------------------- | --------------------------- |
| itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


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

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| potionIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


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

Restituisce un intero

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

Restituisce un booleano

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Restituisce un intero

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

Restituisce un [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

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

Restituisce un intero

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

Ritorna una stringa

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getClassification

Returns [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount as boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| forSpawnCount | boolean | Nessuna descrizione fornita |


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

| Parametro   | Tipo  | Descrizione                 |
| ----------- | ----- | --------------------------- |
| adjustTicks | float | Nessuna descrizione fornita |


### getDigSpeed

Returns float

```zenscript
myMCPlayerEntity.getDigSpeed(state as crafttweaker.api.block.MCBlockState);
```

| Parametro | Tipo                                                                    | Descrizione                 |
| --------- | ----------------------------------------------------------------------- | --------------------------- |
| state     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |



Returns float

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as crafttweaker.api.block.MCBlockState, arg1 as crafttweaker.api.util.BlockPos);
```

| Parametro | Tipo                                                                    | Descrizione                 |
| --------- | ----------------------------------------------------------------------- | --------------------------- |
| arg0      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |
| arg1      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nessuna descrizione fornita |


### getDistanceSq

Returns double

```zenscript
myMCPlayerEntity.getDistanceSq(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### getEntityId

Restituisce un intero

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Ritorna una stringa

```zenscript
myMCPlayerEntity.getEntityString();
```

### getEyeHeight

Returns float

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Restituisce un intero

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

Restituisce un intero

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Restituisce un intero

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Restituisce un intero

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Restituisce un intero

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Returns float

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Restituisce un intero

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

The maximum height from where the entity is alowed to jump (used in pathfinder)

Restituisce un intero

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

Restituisce un intero

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

| Parametro    | Tipo  | Descrizione                 |
| ------------ | ----- | --------------------------- |
| partialTicks | float | Nessuna descrizione fornita |


### getPortalCooldown

Return the amount of cooldown before this entity can use a portal again.

Restituisce un intero

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

Restituisce un intero

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

Returns float

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### getScore

Restituisce un intero

```zenscript
myMCPlayerEntity.getScore();
```

### getScoreboardName

Returns a String to use as this entity's name in the scoreboard/entity selector systems

Ritorna una stringa

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### getSleepTimer

Restituisce un intero

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

| Parametro    | Tipo  | Descrizione                 |
| ------------ | ----- | --------------------------- |
| partialTicks | float | Nessuna descrizione fornita |


### getSwingProgress

Gets the progression of the swing animation, ranges from 0.0 to 1.0.

Returns float

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime as float);
```

| Parametro       | Tipo  | Descrizione                 |
| --------------- | ----- | --------------------------- |
| partialTickTime | float | Nessuna descrizione fornita |


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

Restituisce un intero

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### getTotalArmorValue

Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue

Restituisce un intero

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Returns float

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPSeed

Restituisce un intero

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

| Parametro    | Tipo  | Descrizione                 |
| ------------ | ----- | --------------------------- |
| partialTicks | float | Nessuna descrizione fornita |


### giveExperiencePoints

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ as int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_195068_1_ | int  | Nessuna descrizione fornita |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id as byte);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| id        | byte | Nessuna descrizione fornita |


### handleWaterMovement

Returns if this entity is in water and will end up adding the waters velocity to the entity

Restituisce un booleano

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### hasCustomName

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasCustomName();
```

### hasNoGravity

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### hasPermissionLevel

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ as int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_211513_1_ | int  | Nessuna descrizione fornita |


### hasReducedDebug

Whether the "reducedDebugInfo" option is active for this player.

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Restituisce un intero

```zenscript
myMCPlayerEntity.hashCode();
```

### heal

Heal living entity (param: amount of half-hearts)

```zenscript
myMCPlayerEntity.heal(healAmount as float);
```

| Parametro  | Tipo  | Descrizione                 |
| ---------- | ----- | --------------------------- |
| healAmount | float | Nessuna descrizione fornita |


### ignoreItemEntityData

Controlla se i giocatori possono sfruttare questa entità per accedere sia direttamente sia indirettamente a comandi operatore (livello di permesso 2), come per esempio give o setblock. A similar method exists for entities at {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>For example, {@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() command block minecarts} and {@link
 net.minecraft.entity.item.EntityMinecartMobSpawner#ignoreItemEntityData() mob spawner minecarts} (spawning command
 block minecarts or drops) are considered accessible.</p>Returns: `true if this entity offers ways for unauthorized
 players to use restricted commands`

Restituisce un booleano

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### isActiveItemStackBlocking

Restituisce un booleano

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### isAddedToWorld

Restituisce un booleano

```zenscript
myMCPlayerEntity.isAddedToWorld();
```

### isAlive

Returns true if the entity has not been .

Restituisce un booleano

```zenscript
myMCPlayerEntity.isAlive();
```

### isAllowEdit

Restituisce un booleano

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

If at least 1 entity is riding this one

Restituisce un booleano

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### isBurning

Returns true if the entity is on fire. Used by render to add the fire effect on rendering.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

If Animal, checks if the age timer is negative

Restituisce un booleano

```zenscript
myMCPlayerEntity.isChild();
```

### isCreative

Restituisce un booleano

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomNameVisible

Restituisce un booleano

```zenscript
myMCPlayerEntity.isCustomNameVisible();
```

### isElytraFlying

Restituisce un booleano

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Checks if this entity is inside of an opaque block

Restituisce un booleano

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Returns true if this entity is undead.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### isGlowing

Restituisce un booleano

```zenscript
myMCPlayerEntity.isGlowing();
```

### isHandActive

Restituisce un booleano

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Restituisce un booleano

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Restituisce un booleano

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### isInRangeToRenderDist

Checks if the entity is in range to render.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(distance as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| distance  | double | Nessuna descrizione fornita |


### isInWater

Checks if this entity is inside water (if inWater field is true as a result of handleWaterMovement() returning true)

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInWater();
```

### isInWaterOrBubbleColumn

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInWaterOrBubbleColumn();
```

### isInWaterRainOrBubbleColumn

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### isInvisible

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInvisible();
```

### isInvisibleToPlayer

Only used by renderer in EntityLivingBase subclasses. Determines if an entity is visible or not to a specific player, if the entity is normally invisible. For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| player    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nessuna descrizione fornita |


### isInvulnerable

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInvulnerable();
```

### isLiving

Restituisce un booleano

```zenscript
myMCPlayerEntity.isLiving();
```

### isNonBoss

Returns false if this Entity is a boss, true otherwise.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isNonBoss();
```

### isOffsetPositionInLiquid

Checks if the offset position from the entity's current position is inside of a liquid.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### isOnLadder

Returns true if this entity should move as if it were on a ladder (either because it's actually on a ladder, or for AI reasons)

Restituisce un booleano

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Restituisce un booleano

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### isPassenger

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPassenger();
```

### isPlayerFullyAsleep

Returns whether or not the player is asleep and the screen has fully faded.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### isPotionActive

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPotionActive(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| potionIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


### isPotionApplicable

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametro      | Tipo                                                                                          | Descrizione                 |
| -------------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| potioneffectIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### isPushedByWater

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

Returns whether the entity is in a server world

Restituisce un booleano

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Returns: `True if this entity will not play sounds`

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSilent();
```

### isSleeping

Returns whether player is sleeping or not

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

Returns if this entity is sneaking.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSneaking();
```

### isSpawnForced

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSpawnForced();
```

### isSpectator

Returns true if the player is in spectator mode.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinAttacking

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

Get if the Entity is sprinting.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSprinting();
```

### isSwimming

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSwimming();
```

### isUser

returns true if this is an EntityPlayerSP, or the logged in player.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Checks if this entity is either in water or on an open air block in rain (used in wolves).

Restituisce un booleano

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

| Parametro       | Tipo                                                         | Descrizione                 |
| --------------- | ------------------------------------------------------------ | --------------------------- |
| pos             | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |
| rotationYawIn   | float                                                        | Nessuna descrizione fornita |
| rotationPitchIn | float                                                        | Nessuna descrizione fornita |


### onAddedToWorld

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollideWithPlayer

Called by a player entity when they collide with an entity

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| entityIn  | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nessuna descrizione fornita |


### onEnchant

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem as crafttweaker.api.item.IItemStack, cost as int);
```

| Parametro     | Tipo                                                              | Descrizione                 |
| ------------- | ----------------------------------------------------------------- | --------------------------- |
| enchantedItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |
| cost          | int                                                               | Nessuna descrizione fornita |


### onEnterBubbleColumn

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(downwards as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| downwards | boolean | Nessuna descrizione fornita |


### onEnterBubbleColumnWithAirAbove

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAbove(downwards as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| downwards | boolean | Nessuna descrizione fornita |


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

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| keepData  | boolean | Nessuna descrizione fornita |


### removeActivePotionEffect

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 as crafttweaker.api.potion.MCPotionEffect);
```

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| arg0      | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


### removePassengers

Dismounts all entities riding this entity from this entity.

```zenscript
myMCPlayerEntity.removePassengers();
```

### removePotionEffect

Restituisce un booleano

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| effectIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


### removeTag

Restituisce un booleano

```zenscript
myMCPlayerEntity.removeTag(tag as String);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| tag       | String | Nessuna descrizione fornita |


### replaceItemInInventory

Restituisce un booleano

```zenscript
myMCPlayerEntity.replaceItemInInventory(inventorySlot as int, itemStackIn as crafttweaker.api.item.IItemStack);
```

| Parametro     | Tipo                                                              | Descrizione                 |
| ------------- | ----------------------------------------------------------------- | --------------------------- |
| inventorySlot | int                                                               | Nessuna descrizione fornita |
| itemStackIn   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


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

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| yaw       | double | Nessuna descrizione fornita |
| pitch     | double | Nessuna descrizione fornita |


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

| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| speedIn   | float | Nessuna descrizione fornita |


### setAbsorptionAmount

```zenscript
myMCPlayerEntity.setAbsorptionAmount(amount as float);
```

| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| amount    | float | Nessuna descrizione fornita |


### setAir

```zenscript
myMCPlayerEntity.setAir(air as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| air       | int  | Nessuna descrizione fornita |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(count as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| count     | int  | Nessuna descrizione fornita |


### setBedPosition

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ as crafttweaker.api.util.BlockPos);
```

| Parametro     | Tipo                                                         | Descrizione                 |
| ------------- | ------------------------------------------------------------ | --------------------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### setCustomNameVisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(alwaysRenderNameTag as boolean);
```

| Parametro           | Tipo    | Descrizione                 |
| ------------------- | ------- | --------------------------- |
| alwaysRenderNameTag | boolean | Nessuna descrizione fornita |


### setEntityId

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| id        | int  | Nessuna descrizione fornita |


### setFire

Sets entity to burn for x amount of seconds, cannot lower amount of existing fire.

```zenscript
myMCPlayerEntity.setFire(seconds as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| seconds   | int  | Nessuna descrizione fornita |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ as int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_223308_1_ | int  | Nessuna descrizione fornita |


### setGlowing

```zenscript
myMCPlayerEntity.setGlowing(glowingIn as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| glowingIn | boolean | Nessuna descrizione fornita |


### setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(yaw as float, pitch as int);
```

| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| yaw       | float | Nessuna descrizione fornita |
| pitch     | int   | Nessuna descrizione fornita |


### setHealth

```zenscript
myMCPlayerEntity.setHealth(health as float);
```

| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| health    | float | Nessuna descrizione fornita |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn as int);
```

| Parametro  | Tipo | Descrizione                 |
| ---------- | ---- | --------------------------- |
| idleTimeIn | int  | Nessuna descrizione fornita |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### setInvisible

```zenscript
myMCPlayerEntity.setInvisible(invisible as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| invisible | boolean | Nessuna descrizione fornita |


### setInvulnerable

Sets whether this Entity is invulnerable.

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerable as boolean);
```

| Parametro      | Tipo    | Descrizione                 |
| -------------- | ------- | --------------------------- |
| isInvulnerable | boolean | Nessuna descrizione fornita |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(jumping as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| jumping   | boolean | Nessuna descrizione fornita |


### setLocationAndAngles

Sets the location and Yaw/Pitch of an entity in the world

```zenscript
myMCPlayerEntity.setLocationAndAngles(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |
| yaw       | float  | Nessuna descrizione fornita |
| pitch     | float  | Nessuna descrizione fornita |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### setNoGravity

```zenscript
myMCPlayerEntity.setNoGravity(noGravity as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| noGravity | boolean | Nessuna descrizione fornita |


### setPartying

Called when a record starts or stops playing. Used to make parrots start or stop partying.

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| Parametro  | Tipo                                                         | Descrizione                 |
| ---------- | ------------------------------------------------------------ | --------------------------- |
| pos        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |
| isPartying | boolean                                                      | Nessuna descrizione fornita |


### setPortal

Marks the entity as being inside a portal, activating teleportation logic in onEntityUpdate() in the following tick(s).

```zenscript
myMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| Parametro | Tipo                                                         | Descrizione                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### setPosition

Sets the x,y,z of the entity from the given parameters. Also seems to set up a bounding box.

```zenscript
myMCPlayerEntity.setPosition(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### setPositionAndRotation

Sets position and rotation, clamping and wrapping params to valid values. Used by network code.

```zenscript
myMCPlayerEntity.setPositionAndRotation(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |
| yaw       | float  | Nessuna descrizione fornita |
| pitch     | float  | Nessuna descrizione fornita |


### setPositionAndRotationDirect

Sets a target for the client to interpolate towards over the next few ticks

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(x as double, y as double, z as double, yaw as float, pitch as float, posRotationIncrements as int, teleport as boolean);
```

| Parametro             | Tipo    | Descrizione                 |
| --------------------- | ------- | --------------------------- |
| x                     | double  | Nessuna descrizione fornita |
| y                     | double  | Nessuna descrizione fornita |
| z                     | double  | Nessuna descrizione fornita |
| yaw                   | float   | Nessuna descrizione fornita |
| pitch                 | float   | Nessuna descrizione fornita |
| posRotationIncrements | int     | Nessuna descrizione fornita |
| teleport              | boolean | Nessuna descrizione fornita |


### setPositionAndUpdate

Sets the position of the entity and updates the 'last' variables

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### setPositionNonDirty

Restituisce un booleano

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug as boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| reducedDebug | boolean | Nessuna descrizione fornita |


### setRenderYawOffset

Set the render yaw offset

```zenscript
myMCPlayerEntity.setRenderYawOffset(offset as float);
```

| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| offset    | float | Nessuna descrizione fornita |


### setRotationYawHead

Sets the head's yaw rotation of the entity.

```zenscript
myMCPlayerEntity.setRotationYawHead(rotation as float);
```

| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| rotation  | float | Nessuna descrizione fornita |


### setScore

Set player's score

```zenscript
myMCPlayerEntity.setScore(scoreIn as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| scoreIn   | int  | Nessuna descrizione fornita |


### setSilent

When set to true the entity will not play sounds.

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| isSilent  | boolean | Nessuna descrizione fornita |


### setSneaking

Sets the sneaking flag.

```zenscript
myMCPlayerEntity.setSneaking(sneaking as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| sneaking  | boolean | Nessuna descrizione fornita |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, forced as boolean);
```

| Parametro | Tipo                                                         | Descrizione                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |
| forced    | boolean                                                      | Nessuna descrizione fornita |


### setSprinting

Set sprinting switch for Entity.

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| sprinting | boolean | Nessuna descrizione fornita |


### setSwimming

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ as boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| p_204711_1_ | boolean | Nessuna descrizione fornita |


### setVelocity

Updates the entity motion clientside, called by packets from the server

```zenscript
myMCPlayerEntity.setVelocity(x as double, y as double, z as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | double | Nessuna descrizione fornita |
| y         | double | Nessuna descrizione fornita |
| z         | double | Nessuna descrizione fornita |


### shouldHeal

Checks if the player's health is not full and not zero.

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldHeal();
```

### shouldReceiveErrors

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldReceiveErrors();
```

### shouldReceiveFeedback

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldReceiveFeedback();
```

### shouldRenderSneaking

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### shouldRiderFaceForward

Returns true if the entity's rider (EntityPlayer) should face forward when mounted. currently only used in vanilla code by pigs.

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                          |
| --------- | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| player    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | The player who is riding the entity. |


### shouldRiderSit

Restituisce un booleano

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

| Parametro     | Tipo                                                         | Descrizione                 |
| ------------- | ------------------------------------------------------------ | --------------------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### startSpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ as int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_204803_1_ | int  | Nessuna descrizione fornita |


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

| Parametro     | Tipo   | Descrizione                 |
| ------------- | ------ | --------------------------- |
| p_223102_1_ | double | Nessuna descrizione fornita |
| p_223102_3_ | double | Nessuna descrizione fornita |
| p_223102_5_ | double | Nessuna descrizione fornita |


### tick

Called to update the entity's position/logic.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Ritorna una stringa

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

| Parametro       | Tipo    | Descrizione                 |
| --------------- | ------- | --------------------------- |
| immediately     | boolean | Nessuna descrizione fornita |
| updateWorldFlag | boolean | Nessuna descrizione fornita |
| setSpawn        | boolean | Nessuna descrizione fornita |


### xpBarCap

This method returns the cap amount of experience that the experience bar can hold. With each level, the experience cap on the player's experience bar is raised by 10.

Restituisce un intero

```zenscript
myMCPlayerEntity.xpBarCap();
```


