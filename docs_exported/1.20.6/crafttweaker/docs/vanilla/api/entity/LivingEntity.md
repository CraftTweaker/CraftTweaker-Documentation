# LivingEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.LivingEntity;
```


## Extending Entity

LivingEntity extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in LivingEntity

## Methods

:::group{name=addEffect}

Return Type: boolean

```zenscript
LivingEntity.addEffect(effectInstance as MobEffectInstance) as boolean
```

|   Parameter    |                               Type                                |
|----------------|-------------------------------------------------------------------|
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::

:::group{name=addEffect}

Return Type: boolean

```zenscript
LivingEntity.addEffect(effectInstance as MobEffectInstance, entity as Entity?) as boolean
```

|   Parameter    |                               Type                                |
|----------------|-------------------------------------------------------------------|
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |
| entity         | [Entity](/vanilla/api/entity/Entity)?                             |


:::

:::group{name=attackable}

Return Type: boolean

```zenscript
// LivingEntity.attackable() as boolean

myLivingEntity.attackable();
```

:::

:::group{name=canAttack}

Return Type: boolean

```zenscript
LivingEntity.canAttack(target as LivingEntity) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| target    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=canBeAffected}

Return Type: boolean

```zenscript
LivingEntity.canBeAffected(effectInstance as MobEffectInstance) as boolean
```

|   Parameter    |                               Type                                |
|----------------|-------------------------------------------------------------------|
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::

:::group{name=canBeSeenAsEnemy}

Return Type: boolean

```zenscript
// LivingEntity.canBeSeenAsEnemy() as boolean

myLivingEntity.canBeSeenAsEnemy();
```

:::

:::group{name=canBeSeenByAnyone}

Return Type: boolean

```zenscript
// LivingEntity.canBeSeenByAnyone() as boolean

myLivingEntity.canBeSeenByAnyone();
```

:::

:::group{name=canBreatheUnderwater}

Return Type: boolean

```zenscript
// LivingEntity.canBreatheUnderwater() as boolean

myLivingEntity.canBreatheUnderwater();
```

:::

:::group{name=canSpawnSoulSpeedParticle}

Return Type: boolean

```zenscript
// LivingEntity.canSpawnSoulSpeedParticle() as boolean

myLivingEntity.canSpawnSoulSpeedParticle();
```

:::

:::group{name=canStandOnFluid}

Return Type: boolean

```zenscript
LivingEntity.canStandOnFluid(fluid as Fluid) as boolean
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) |


:::

:::group{name=canTakeItem}

Return Type: boolean

```zenscript
LivingEntity.canTakeItem(stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=clearSleepingPos}

```zenscript
// LivingEntity.clearSleepingPos()

myLivingEntity.clearSleepingPos();
```

:::

:::group{name=die}

```zenscript
LivingEntity.die(source as DamageSource)
```

| Parameter |                          Type                          |
|-----------|--------------------------------------------------------|
| source    | [DamageSource](/vanilla/api/world/damage/DamageSource) |


:::

:::group{name=doHurtTarget}

Return Type: boolean

```zenscript
LivingEntity.doHurtTarget(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=eat}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LivingEntity.eat(level as Level, stack as ItemStack) as ItemStack
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)        |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=forceAddEffect}

```zenscript
LivingEntity.forceAddEffect(effectInstance as MobEffectInstance, entity as Entity?)
```

|   Parameter    |                               Type                                |
|----------------|-------------------------------------------------------------------|
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |
| entity         | [Entity](/vanilla/api/entity/Entity)?                             |


:::

:::group{name=getAbsorptionAmount}

Return Type: float

```zenscript
// LivingEntity.getAbsorptionAmount() as float

myLivingEntity.getAbsorptionAmount();
```

:::

:::group{name=getActiveEffects}

Return Type: [Collection](/vanilla/api/util/collection/Collection)&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

```zenscript
// LivingEntity.getActiveEffects() as Collection<MobEffectInstance>

myLivingEntity.getActiveEffects();
```

:::

:::group{name=getActiveEffectsMap}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)[[MobEffect](/vanilla/api/entity/effect/MobEffect)]

```zenscript
// LivingEntity.getActiveEffectsMap() as MobEffectInstance[MobEffect]

myLivingEntity.getActiveEffectsMap();
```

:::

:::group{name=getAllSlots}

Return Type: stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// LivingEntity.getAllSlots() as stdlib.Iterable<ItemStack>

myLivingEntity.getAllSlots();
```

:::

:::group{name=getArmorCoverPercentage}

Return Type: float

```zenscript
// LivingEntity.getArmorCoverPercentage() as float

myLivingEntity.getArmorCoverPercentage();
```

:::

:::group{name=getArmorSlots}

Return Type: stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// LivingEntity.getArmorSlots() as stdlib.Iterable<ItemStack>

myLivingEntity.getArmorSlots();
```

:::

:::group{name=getArmorValue}

Return Type: int

```zenscript
// LivingEntity.getArmorValue() as int

myLivingEntity.getArmorValue();
```

:::

:::group{name=getArrowCount}

Return Type: int

```zenscript
// LivingEntity.getArrowCount() as int

myLivingEntity.getArrowCount();
```

:::

:::group{name=getAttribute}

Return Type: [AttributeInstance](/vanilla/api/entity/attribute/AttributeInstance)?

```zenscript
LivingEntity.getAttribute(attribute as Attribute) as AttributeInstance?
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) |


:::

:::group{name=getAttributeBaseValue}

Return Type: double

```zenscript
LivingEntity.getAttributeBaseValue(attribute as Attribute) as double
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) |


:::

:::group{name=getAttributeValue}

Return Type: double

```zenscript
LivingEntity.getAttributeValue(attribute as Attribute) as double
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) |


:::

:::group{name=getBedOrientation}

Return Type: [Direction](/vanilla/api/util/direction/Direction)?

```zenscript
// LivingEntity.getBedOrientation() as Direction?

myLivingEntity.getBedOrientation();
```

:::

:::group{name=getEffect}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)?

```zenscript
LivingEntity.getEffect(effect as MobEffect) as MobEffectInstance?
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::

:::group{name=getFallFlyingTicks}

Return Type: int

```zenscript
// LivingEntity.getFallFlyingTicks() as int

myLivingEntity.getFallFlyingTicks();
```

:::

:::group{name=getHandSlots}

Return Type: stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// LivingEntity.getHandSlots() as stdlib.Iterable<ItemStack>

myLivingEntity.getHandSlots();
```

:::

:::group{name=getHealth}

Return Type: float

```zenscript
// LivingEntity.getHealth() as float

myLivingEntity.getHealth();
```

:::

:::group{name=getItemBySlot}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LivingEntity.getItemBySlot(slot as EquipmentSlot) as ItemStack
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=getItemInHand}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LivingEntity.getItemInHand(hand as InteractionHand) as ItemStack
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |


:::

:::group{name=getJumpBoostPower}

Return Type: double

```zenscript
// LivingEntity.getJumpBoostPower() as double

myLivingEntity.getJumpBoostPower();
```

:::

:::group{name=getKillCredit}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)?

```zenscript
// LivingEntity.getKillCredit() as LivingEntity?

myLivingEntity.getKillCredit();
```

:::

:::group{name=getLastClimbablePos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)?

```zenscript
// LivingEntity.getLastClimbablePos() as BlockPos?

myLivingEntity.getLastClimbablePos();
```

:::

:::group{name=getLastDamageSource}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)?

```zenscript
// LivingEntity.getLastDamageSource() as DamageSource?

myLivingEntity.getLastDamageSource();
```

:::

:::group{name=getLastHurtByMob}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)?

```zenscript
// LivingEntity.getLastHurtByMob() as LivingEntity?

myLivingEntity.getLastHurtByMob();
```

:::

:::group{name=getLastHurtByMobTimestamp}

Return Type: int

```zenscript
// LivingEntity.getLastHurtByMobTimestamp() as int

myLivingEntity.getLastHurtByMobTimestamp();
```

:::

:::group{name=getLastHurtMob}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// LivingEntity.getLastHurtMob() as LivingEntity

myLivingEntity.getLastHurtMob();
```

:::

:::group{name=getLastHurtMobTimestamp}

Return Type: int

```zenscript
// LivingEntity.getLastHurtMobTimestamp() as int

myLivingEntity.getLastHurtMobTimestamp();
```

:::

:::group{name=getLootTable}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// LivingEntity.getLootTable() as ResourceLocation

myLivingEntity.getLootTable();
```

:::

:::group{name=getMainArm}

Return Type: [HumanoidArm](/vanilla/api/entity/HumanoidArm)

```zenscript
// LivingEntity.getMainArm() as HumanoidArm

myLivingEntity.getMainArm();
```

:::

:::group{name=getMainHandItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// LivingEntity.getMainHandItem() as ItemStack

myLivingEntity.getMainHandItem();
```

:::

:::group{name=getMaxHealth}

Return Type: float

```zenscript
// LivingEntity.getMaxHealth() as float

myLivingEntity.getMaxHealth();
```

:::

:::group{name=getNoActionTime}

Return Type: int

```zenscript
// LivingEntity.getNoActionTime() as int

myLivingEntity.getNoActionTime();
```

:::

:::group{name=getOffhandItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// LivingEntity.getOffhandItem() as ItemStack

myLivingEntity.getOffhandItem();
```

:::

:::group{name=getRandom}

Return Type: [RandomSource](/vanilla/api/util/math/RandomSource)

```zenscript
// LivingEntity.getRandom() as RandomSource

myLivingEntity.getRandom();
```

:::

:::group{name=getScale}

Return Type: float

```zenscript
// LivingEntity.getScale() as float

myLivingEntity.getScale();
```

:::

:::group{name=getSleepingPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)?

```zenscript
// LivingEntity.getSleepingPos() as BlockPos?

myLivingEntity.getSleepingPos();
```

:::

:::group{name=getSpeed}

Return Type: float

```zenscript
// LivingEntity.getSpeed() as float

myLivingEntity.getSpeed();
```

:::

:::group{name=getStingerCount}

Return Type: int

```zenscript
// LivingEntity.getStingerCount() as int

myLivingEntity.getStingerCount();
```

:::

:::group{name=getSwimAmount}

Return Type: float

```zenscript
LivingEntity.getSwimAmount(partialTicks as float) as float
```

|  Parameter   | Type  |
|--------------|-------|
| partialTicks | float |


:::

:::group{name=getTicksUsingItem}

Return Type: int

```zenscript
// LivingEntity.getTicksUsingItem() as int

myLivingEntity.getTicksUsingItem();
```

:::

:::group{name=getUseItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// LivingEntity.getUseItem() as ItemStack

myLivingEntity.getUseItem();
```

:::

:::group{name=getUseItemRemainingTicks}

Return Type: int

```zenscript
// LivingEntity.getUseItemRemainingTicks() as int

myLivingEntity.getUseItemRemainingTicks();
```

:::

:::group{name=getUsedItemHand}

Return Type: [InteractionHand](/vanilla/api/util/InteractionHand)

```zenscript
// LivingEntity.getUsedItemHand() as InteractionHand

myLivingEntity.getUsedItemHand();
```

:::

:::group{name=getVisibilityPercent}

Return Type: double

```zenscript
LivingEntity.getVisibilityPercent(lookingEntity as Entity?) as double
```

|   Parameter   |                 Type                  |
|---------------|---------------------------------------|
| lookingEntity | [Entity](/vanilla/api/entity/Entity)? |


:::

:::group{name=getVoicePitch}

Return Type: float

```zenscript
// LivingEntity.getVoicePitch() as float

myLivingEntity.getVoicePitch();
```

:::

:::group{name=hasEffect}

Return Type: boolean

```zenscript
LivingEntity.hasEffect(effect as MobEffect) as boolean
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::

:::group{name=hasItemInSlot}

Return Type: boolean

```zenscript
LivingEntity.hasItemInSlot(slot as EquipmentSlot) as boolean
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=hasLineOfSight}

Return Type: boolean

```zenscript
LivingEntity.hasLineOfSight(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=heal}

```zenscript
LivingEntity.heal(amount as float)
```

| Parameter | Type  |
|-----------|-------|
| amount    | float |


:::

:::group{name=isAffectedByPotions}

Return Type: boolean

```zenscript
// LivingEntity.isAffectedByPotions() as boolean

myLivingEntity.isAffectedByPotions();
```

:::

:::group{name=isAutoSpinAttack}

Return Type: boolean

```zenscript
// LivingEntity.isAutoSpinAttack() as boolean

myLivingEntity.isAutoSpinAttack();
```

:::

:::group{name=isBaby}

Return Type: boolean

```zenscript
// LivingEntity.isBaby() as boolean

myLivingEntity.isBaby();
```

:::

:::group{name=isBlocking}

Return Type: boolean

```zenscript
// LivingEntity.isBlocking() as boolean

myLivingEntity.isBlocking();
```

:::

:::group{name=isCurrentlyGlowing}

Return Type: boolean

```zenscript
// LivingEntity.isCurrentlyGlowing() as boolean

myLivingEntity.isCurrentlyGlowing();
```

:::

:::group{name=isDamageSourceBlocked}

Return Type: boolean

```zenscript
LivingEntity.isDamageSourceBlocked(source as DamageSource) as boolean
```

| Parameter |                          Type                          |
|-----------|--------------------------------------------------------|
| source    | [DamageSource](/vanilla/api/world/damage/DamageSource) |


:::

:::group{name=isDeadOrDying}

Return Type: boolean

```zenscript
// LivingEntity.isDeadOrDying() as boolean

myLivingEntity.isDeadOrDying();
```

:::

:::group{name=isFallFlying}

Return Type: boolean

```zenscript
// LivingEntity.isFallFlying() as boolean

myLivingEntity.isFallFlying();
```

:::

:::group{name=isHolding}

Return Type: boolean

```zenscript
LivingEntity.isHolding(item as ItemDefinition) as boolean
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=isHolding}

Return Type: boolean

```zenscript
LivingEntity.isHolding(predicate as Predicate<ItemStack>) as boolean
```

| Parameter |                           Type                            |
|-----------|-----------------------------------------------------------|
| predicate | Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; |


:::

:::group{name=isInvertedHealAndHarm}

Return Type: boolean

```zenscript
// LivingEntity.isInvertedHealAndHarm() as boolean

myLivingEntity.isInvertedHealAndHarm();
```

:::

:::group{name=isSensitiveToWater}

Return Type: boolean

```zenscript
// LivingEntity.isSensitiveToWater() as boolean

myLivingEntity.isSensitiveToWater();
```

:::

:::group{name=isSleeping}

Return Type: boolean

```zenscript
// LivingEntity.isSleeping() as boolean

myLivingEntity.isSleeping();
```

:::

:::group{name=isSuppressingSlidingDownLadder}

Return Type: boolean

```zenscript
// LivingEntity.isSuppressingSlidingDownLadder() as boolean

myLivingEntity.isSuppressingSlidingDownLadder();
```

:::

:::group{name=isUsingItem}

Return Type: boolean

```zenscript
// LivingEntity.isUsingItem() as boolean

myLivingEntity.isUsingItem();
```

:::

:::group{name=isVisuallySwimming}

Return Type: boolean

```zenscript
// LivingEntity.isVisuallySwimming() as boolean

myLivingEntity.isVisuallySwimming();
```

:::

:::group{name=knockback}

```zenscript
LivingEntity.knockback(x as double, y as double, z as double)
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=releaseUsingItem}

```zenscript
// LivingEntity.releaseUsingItem()

myLivingEntity.releaseUsingItem();
```

:::

:::group{name=removeAllEffects}

Return Type: boolean

```zenscript
// LivingEntity.removeAllEffects() as boolean

myLivingEntity.removeAllEffects();
```

:::

:::group{name=removeEffect}

Return Type: boolean

```zenscript
LivingEntity.removeEffect(effect as MobEffect) as boolean
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::

:::group{name=removeEffectNoUpdate}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
LivingEntity.removeEffectNoUpdate(effect as MobEffect) as MobEffectInstance
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::

:::group{name=setAbsorptionAmount}

```zenscript
LivingEntity.setAbsorptionAmount(absorption as float)
```

| Parameter  | Type  |
|------------|-------|
| absorption | float |


:::

:::group{name=setArrowCount}

```zenscript
LivingEntity.setArrowCount(count as int)
```

| Parameter | Type |
|-----------|------|
| count     | int  |


:::

:::group{name=setDiscardFriction}

```zenscript
LivingEntity.setDiscardFriction(discardFriction as boolean)
```

|    Parameter    |  Type   |
|-----------------|---------|
| discardFriction | boolean |


:::

:::group{name=setHealth}

```zenscript
LivingEntity.setHealth(health as float)
```

| Parameter | Type  |
|-----------|-------|
| health    | float |


:::

:::group{name=setItemInHand}

```zenscript
LivingEntity.setItemInHand(hand as InteractionHand, stack as ItemStack)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)             |


:::

:::group{name=setItemSlot}

```zenscript
LivingEntity.setItemSlot(slot as EquipmentSlot, stack as ItemStack)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                     |


:::

:::group{name=setJumping}

```zenscript
LivingEntity.setJumping(jumping as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| jumping   | boolean |


:::

:::group{name=setLastHurtByMob}

```zenscript
LivingEntity.setLastHurtByMob(entity as LivingEntity?)
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity)? |


:::

:::group{name=setLastHurtByPlayer}

```zenscript
LivingEntity.setLastHurtByPlayer(player as Player?)
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player)? |


:::

:::group{name=setLastHurtMob}

```zenscript
LivingEntity.setLastHurtMob(entity as Entity)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=setNoActionTime}

```zenscript
LivingEntity.setNoActionTime(idleTime as int)
```

| Parameter | Type |
|-----------|------|
| idleTime  | int  |


:::

:::group{name=setSleepingPos}

```zenscript
LivingEntity.setSleepingPos(pos as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setSpeed}

```zenscript
LivingEntity.setSpeed(speed as float)
```

| Parameter | Type  |
|-----------|-------|
| speed     | float |


:::

:::group{name=setStingerCount}

```zenscript
LivingEntity.setStingerCount(count as int)
```

| Parameter | Type |
|-----------|------|
| count     | int  |


:::

:::group{name=shouldDiscardFriction}

Return Type: boolean

```zenscript
// LivingEntity.shouldDiscardFriction() as boolean

myLivingEntity.shouldDiscardFriction();
```

:::

:::group{name=startSleeping}

```zenscript
LivingEntity.startSleeping(pos as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=startUsingItem}

```zenscript
LivingEntity.startUsingItem(param0 as InteractionHand)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| param0    | [InteractionHand](/vanilla/api/util/InteractionHand) |


:::

:::group{name=stopSleeping}

```zenscript
// LivingEntity.stopSleeping()

myLivingEntity.stopSleeping();
```

:::

:::group{name=stopUsingItem}

```zenscript
// LivingEntity.stopUsingItem()

myLivingEntity.stopUsingItem();
```

:::

:::group{name=swing}

```zenscript
LivingEntity.swing(hand as InteractionHand)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |


:::

:::group{name=swing}

```zenscript
LivingEntity.swing(hand as InteractionHand, updateSelf as boolean)
```

| Parameter  |                         Type                         |
|------------|------------------------------------------------------|
| hand       | [InteractionHand](/vanilla/api/util/InteractionHand) |
| updateSelf | boolean                                              |


:::

:::group{name=travel}

```zenscript
LivingEntity.travel(vec as Vec3)
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::


## Properties

|              Name              |                                                              Type                                                              | Has Getter | Has Setter |                        Description                        |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------|------------|------------|-----------------------------------------------------------|
| absorptionAmount               | float                                                                                                                          | true       | false      |                                                           |
| activeEffects                  | [Collection](/vanilla/api/util/collection/Collection)&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | true       | false      |                                                           |
| activeEffectsMap               | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)[[MobEffect](/vanilla/api/entity/effect/MobEffect)]           | true       | false      |                                                           |
| allSlots                       | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;                                                                | true       | false      |                                                           |
| armorCoverPercentage           | float                                                                                                                          | true       | false      |                                                           |
| armorSlots                     | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;                                                                | true       | false      |                                                           |
| armorValue                     | int                                                                                                                            | true       | false      |                                                           |
| arrowCount                     | int                                                                                                                            | true       | false      |                                                           |
| attackable                     | boolean                                                                                                                        | true       | false      |                                                           |
| bedOrientation                 | [Direction](/vanilla/api/util/direction/Direction)?                                                                            | true       | false      |                                                           |
| canBeSeenAsEnemy               | boolean                                                                                                                        | true       | false      |                                                           |
| canBeSeenByAnyone              | boolean                                                                                                                        | true       | false      |                                                           |
| canBreatheUnderwater           | boolean                                                                                                                        | true       | false      |                                                           |
| fallFlyingTicks                | int                                                                                                                            | true       | false      |                                                           |
| handSlots                      | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;                                                                | true       | false      |                                                           |
| health                         | float                                                                                                                          | true       | false      |                                                           |
| isAffectedByPotions            | boolean                                                                                                                        | true       | false      |                                                           |
| isAutoSpinAttack               | boolean                                                                                                                        | true       | false      |                                                           |
| isBaby                         | boolean                                                                                                                        | true       | false      |                                                           |
| isBlocking                     | boolean                                                                                                                        | true       | false      |                                                           |
| isCurrentlyGlowing             | boolean                                                                                                                        | true       | false      |                                                           |
| isDeadOrDying                  | boolean                                                                                                                        | true       | false      |                                                           |
| isFallFlying                   | boolean                                                                                                                        | true       | false      |                                                           |
| isInvertedHealAndHarm          | boolean                                                                                                                        | true       | false      |                                                           |
| isSensitiveToWater             | boolean                                                                                                                        | true       | false      |                                                           |
| isSleeping                     | boolean                                                                                                                        | true       | false      |                                                           |
| isSuppressingSlidingDownLadder | boolean                                                                                                                        | true       | false      |                                                           |
| isUsingItem                    | boolean                                                                                                                        | true       | false      |                                                           |
| isVisuallySwimming             | boolean                                                                                                                        | true       | false      |                                                           |
| jumpBoostPower                 | double                                                                                                                         | true       | false      |                                                           |
| killCredit                     | [LivingEntity](/vanilla/api/entity/LivingEntity)?                                                                              | true       | false      |                                                           |
| lastClimbablePos               | [BlockPos](/vanilla/api/util/math/BlockPos)?                                                                                   | true       | false      |                                                           |
| lastDamageSource               | [DamageSource](/vanilla/api/world/damage/DamageSource)?                                                                        | true       | false      |                                                           |
| lastHurtByMob                  | [LivingEntity](/vanilla/api/entity/LivingEntity)?                                                                              | true       | false      |                                                           |
| lastHurtByMobTimestamp         | int                                                                                                                            | true       | false      |                                                           |
| lastHurtMob                    | [LivingEntity](/vanilla/api/entity/LivingEntity)                                                                               | true       | false      |                                                           |
| lastHurtMobTimestamp           | int                                                                                                                            | true       | false      |                                                           |
| lootTable                      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                                     | true       | false      |                                                           |
| lootTableSeed                  | long                                                                                                                           | true       | false      | Gets the seed used when generating loot from this entity. |
| mainArm                        | [HumanoidArm](/vanilla/api/entity/HumanoidArm)                                                                                 | true       | false      |                                                           |
| mainHandItem                   | [ItemStack](/vanilla/api/item/ItemStack)                                                                                       | true       | false      |                                                           |
| maxHealth                      | float                                                                                                                          | true       | false      |                                                           |
| noActionTime                   | int                                                                                                                            | true       | false      |                                                           |
| offHandItem                    | [ItemStack](/vanilla/api/item/ItemStack)                                                                                       | true       | false      |                                                           |
| random                         | [RandomSource](/vanilla/api/util/math/RandomSource)                                                                            | true       | false      |                                                           |
| scale                          | float                                                                                                                          | true       | false      |                                                           |
| shouldDiscardFriction          | boolean                                                                                                                        | true       | false      |                                                           |
| sleepingPos                    | [BlockPos](/vanilla/api/util/math/BlockPos)?                                                                                   | true       | false      |                                                           |
| speed                          | float                                                                                                                          | true       | false      |                                                           |
| stingerCount                   | int                                                                                                                            | true       | false      |                                                           |
| ticksUsingItem                 | int                                                                                                                            | true       | false      |                                                           |
| useItem                        | [ItemStack](/vanilla/api/item/ItemStack)                                                                                       | true       | false      |                                                           |
| useItemRemainingTicks          | int                                                                                                                            | true       | false      |                                                           |
| usedItemHand                   | [InteractionHand](/vanilla/api/util/InteractionHand)                                                                           | true       | false      |                                                           |
| voicePitch                     | float                                                                                                                          | true       | false      |                                                           |

