# LivingEntity

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.LivingEntity;
```


## Extending Entity

LivingEntity extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in LivingEntity

## Metodi

:::group{name=addEffect}

Return Type: boolean

```zenscript
LivingEntity.addEffect(effectInstance as MobEffectInstance) as boolean
```

| Parametro      | Tipo                                                              |
| -------------- | ----------------------------------------------------------------- |
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) |


:::

:::group{name=addEffect}

Return Type: boolean

```zenscript
LivingEntity.addEffect(effectInstance as MobEffectInstance, entity as Entity?) as boolean
```

| Parametro      | Tipo                                                              |
| -------------- | ----------------------------------------------------------------- |
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

| Parametro | Tipo                                             |
| --------- | ------------------------------------------------ |
| target    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=canBeAffected}

Return Type: boolean

```zenscript
LivingEntity.canBeAffected(effectInstance as MobEffectInstance) as boolean
```

| Parametro      | Tipo                                                              |
| -------------- | ----------------------------------------------------------------- |
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

| Parametro | Tipo                              |
| --------- | --------------------------------- |
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) |


:::

:::group{name=canTakeItem}

Return Type: boolean

```zenscript
LivingEntity.canTakeItem(stack as ItemStack) as boolean
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
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

| Parametro | Tipo                                            |
| --------- | ----------------------------------------------- |
| sorgente  | [DamageSource](/vanilla/api/world/DamageSource) |


:::

:::group{name=doHurtTarget}

Return Type: boolean

```zenscript
LivingEntity.doHurtTarget(entity as Entity) as boolean
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=eat}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LivingEntity.eat(level as Level, stack as ItemStack) as ItemStack
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| level     | [Level](/vanilla/api/world/Level)        |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=forceAddEffect}

```zenscript
LivingEntity.forceAddEffect(effectInstance as MobEffectInstance, entity as Entity?)
```

| Parametro      | Tipo                                                              |
| -------------- | ----------------------------------------------------------------- |
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

Return Type: Collection&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

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

:::group{name=getArmorCoverPercentage}

Return Type: float

```zenscript
// LivingEntity.getArmorCoverPercentage() as float

myLivingEntity.getArmorCoverPercentage();
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

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) |


:::

:::group{name=getAttributeBaseValue}

Return Type: double

```zenscript
LivingEntity.getAttributeBaseValue(attribute as Attribute) as double
```

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) |


:::

:::group{name=getAttributeValue}

Return Type: double

```zenscript
LivingEntity.getAttributeValue(attribute as Attribute) as double
```

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
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

| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::

:::group{name=getFallFlyingTicks}

Return Type: int

```zenscript
// LivingEntity.getFallFlyingTicks() as int

myLivingEntity.getFallFlyingTicks();
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

| Parametro | Tipo                                                         |
| --------- | ------------------------------------------------------------ |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=getItemInHand}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LivingEntity.getItemInHand(hand as InteractionHand) as ItemStack
```

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
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

Return Type: [DamageSource](/vanilla/api/world/DamageSource)?

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

:::group{name=getMobType}

Return Type: [MobType](/vanilla/api/entity/MobType)

```zenscript
// LivingEntity.getMobType() as MobType

myLivingEntity.getMobType();
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

Return Type: [Random](/vanilla/api/util/math/Random)

```zenscript
// LivingEntity.getRandom() as Random

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

| Parametro    | Tipo  |
| ------------ | ----- |
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

| Parametro     | Tipo                                  |
| ------------- | ------------------------------------- |
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

| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::

:::group{name=hasItemInSlot}

Return Type: boolean

```zenscript
LivingEntity.hasItemInSlot(slot as EquipmentSlot) as boolean
```

| Parametro | Tipo                                                         |
| --------- | ------------------------------------------------------------ |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=hasLineOfSight}

Return Type: boolean

```zenscript
LivingEntity.hasLineOfSight(entity as Entity) as boolean
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=heal}

```zenscript
LivingEntity.heal(amount as float)
```

| Parametro | Tipo  |
| --------- | ----- |
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

| Parametro | Tipo                                            |
| --------- | ----------------------------------------------- |
| sorgente  | [DamageSource](/vanilla/api/world/DamageSource) |


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

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=isHolding}

Return Type: boolean

```zenscript
LivingEntity.isHolding(predicate as Predicate<ItemStack>) as boolean
```

| Parametro | Tipo                                                                  |
| --------- | --------------------------------------------------------------------- |
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

| Parametro | Tipo   |
| --------- | ------ |
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

| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |


:::

:::group{name=removeEffectNoUpdate}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)?

```zenscript
LivingEntity.removeEffectNoUpdate(effect as MobEffect?) as MobEffectInstance?
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect)? |


:::

:::group{name=setAbsorptionAmount}

```zenscript
LivingEntity.setAbsorptionAmount(absorption as float)
```

| Parametro  | Tipo  |
| ---------- | ----- |
| absorption | float |


:::

:::group{name=setArrowCount}

```zenscript
LivingEntity.setArrowCount(count as int)
```

| Parametro | Tipo |
| --------- | ---- |
| count     | int  |


:::

:::group{name=setDiscardFriction}

```zenscript
LivingEntity.setDiscardFriction(discardFriction as boolean)
```

| Parametro       | Tipo    |
| --------------- | ------- |
| discardFriction | boolean |


:::

:::group{name=setHealth}

```zenscript
LivingEntity.setHealth(health as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| health    | float |


:::

:::group{name=setItemInHand}

```zenscript
LivingEntity.setItemInHand(hand as InteractionHand, stack as ItemStack)
```

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)             |


:::

:::group{name=setJumping}

```zenscript
LivingEntity.setJumping(jumping as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| jumping   | boolean |


:::

:::group{name=setLastHurtByMob}

```zenscript
LivingEntity.setLastHurtByMob(entity as LivingEntity?)
```

| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity)? |


:::

:::group{name=setLastHurtByPlayer}

```zenscript
LivingEntity.setLastHurtByPlayer(player as Player?)
```

| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player)? |


:::

:::group{name=setLastHurtMob}

```zenscript
LivingEntity.setLastHurtMob(entity as Entity)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=setNoActionTime}

```zenscript
LivingEntity.setNoActionTime(idleTime as int)
```

| Parametro | Tipo |
| --------- | ---- |
| idleTime  | int  |


:::

:::group{name=setSleepingPos}

```zenscript
LivingEntity.setSleepingPos(pos as BlockPos)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setSpeed}

```zenscript
LivingEntity.setSpeed(speed as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| speed     | float |


:::

:::group{name=setStingerCount}

```zenscript
LivingEntity.setStingerCount(count as int)
```

| Parametro | Tipo |
| --------- | ---- |
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

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=startUsingItem}

```zenscript
LivingEntity.startUsingItem(param0 as InteractionHand)
```

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
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

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |


:::

:::group{name=swing}

```zenscript
LivingEntity.swing(hand as InteractionHand, updateSelf as boolean)
```

| Parametro  | Tipo                                                 |
| ---------- | ---------------------------------------------------- |
| hand       | [InteractionHand](/vanilla/api/util/InteractionHand) |
| updateSelf | boolean                                              |


:::

:::group{name=travel}

```zenscript
LivingEntity.travel(vec as Vec3)
```

| Parametro | Tipo                                |
| --------- | ----------------------------------- |
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::


## Proprietà

| Nome                           | Tipo                                                                                                                 | Ha Getter | Ha Setter |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| absorptionAmount               | float                                                                                                                | sì        | no        |
| activeEFfectsMap               | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)[[MobEffect](/vanilla/api/entity/effect/MobEffect)] | sì        | no        |
| activeEffects                  | Collection&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;                      | sì        | no        |
| armorCoverPercentage           | float                                                                                                                | sì        | no        |
| armorValue                     | int                                                                                                                  | sì        | no        |
| arrowCount                     | int                                                                                                                  | sì        | no        |
| attackable                     | boolean                                                                                                              | sì        | no        |
| bedOrientation                 | [Direction](/vanilla/api/util/direction/Direction)?                                                                  | sì        | no        |
| canBeSeenAsEnemy               | boolean                                                                                                              | sì        | no        |
| canBeSeenByAnyone              | boolean                                                                                                              | sì        | no        |
| canBreatheUnderwater           | boolean                                                                                                              | sì        | no        |
| fallFlyingTicks                | int                                                                                                                  | sì        | no        |
| health                         | float                                                                                                                | sì        | no        |
| isAffectedByPotions            | boolean                                                                                                              | sì        | no        |
| isAutoSpinAttack               | boolean                                                                                                              | sì        | no        |
| isBaby                         | boolean                                                                                                              | sì        | no        |
| isBlocking                     | boolean                                                                                                              | sì        | no        |
| isCurrentlyGlowing             | boolean                                                                                                              | sì        | no        |
| isDeadOrDying                  | boolean                                                                                                              | sì        | no        |
| isFallFlying                   | boolean                                                                                                              | sì        | no        |
| isInvertedHealAndHarm          | boolean                                                                                                              | sì        | no        |
| isSensitiveToWater             | boolean                                                                                                              | sì        | no        |
| isSleeping                     | boolean                                                                                                              | sì        | no        |
| isSuppressingSlidingDownLadder | boolean                                                                                                              | sì        | no        |
| isUsingItem                    | boolean                                                                                                              | sì        | no        |
| isVisuallySwimming             | boolean                                                                                                              | sì        | no        |
| jumpBoostPower                 | double                                                                                                               | sì        | no        |
| killCredit                     | [LivingEntity](/vanilla/api/entity/LivingEntity)?                                                                    | sì        | no        |
| lastClimbablePos               | [BlockPos](/vanilla/api/util/math/BlockPos)?                                                                         | sì        | no        |
| lastDamageSource               | [DamageSource](/vanilla/api/world/DamageSource)?                                                                     | sì        | no        |
| lastHurtByMob                  | [LivingEntity](/vanilla/api/entity/LivingEntity)?                                                                    | sì        | no        |
| lastHurtByMobTimestamp         | int                                                                                                                  | sì        | no        |
| lastHurtMob                    | [LivingEntity](/vanilla/api/entity/LivingEntity)                                                                     | sì        | no        |
| lastHurtMobTimestamp           | int                                                                                                                  | sì        | no        |
| lootTable                      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                           | sì        | no        |
| mainArm                        | [HumanoidArm](/vanilla/api/entity/HumanoidArm)                                                                       | sì        | no        |
| mainHandItem                   | [ItemStack](/vanilla/api/item/ItemStack)                                                                             | sì        | no        |
| maxHealth                      | float                                                                                                                | sì        | no        |
| mobType                        | [MobType](/vanilla/api/entity/MobType)                                                                               | sì        | no        |
| noActionTime                   | int                                                                                                                  | sì        | no        |
| offHandItem                    | [ItemStack](/vanilla/api/item/ItemStack)                                                                             | sì        | no        |
| random                         | [Random](/vanilla/api/util/math/Random)                                                                              | sì        | no        |
| scale                          | float                                                                                                                | sì        | no        |
| shouldDiscardFriction          | boolean                                                                                                              | sì        | no        |
| sleepingPos                    | [BlockPos](/vanilla/api/util/math/BlockPos)?                                                                         | sì        | no        |
| speed                          | float                                                                                                                | sì        | no        |
| stingerCount                   | int                                                                                                                  | sì        | no        |
| ticksUsingItem                 | int                                                                                                                  | sì        | no        |
| useItem                        | [ItemStack](/vanilla/api/item/ItemStack)                                                                             | sì        | no        |
| useItemRemainingTicks          | int                                                                                                                  | sì        | no        |
| usedItemHand                   | [InteractionHand](/vanilla/api/util/InteractionHand)                                                                 | sì        | no        |
| voicePitch                     | float                                                                                                                | sì        | no        |

