# LivingEntity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.LivingEntity;
```


## Extending Entity

LivingEntity extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in LivingEntity

## 使用方式

:::group{name=addEffect}

Return Type: boolean

```zenscript
LivingEntity.addEffect(effectInstance as MobEffectInstance) as boolean
```

| 参数             | 类型                                                                | 描述                      |
| -------------- | ----------------------------------------------------------------- | ----------------------- |
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


:::

:::group{name=addEffect}

Return Type: boolean

```zenscript
LivingEntity.addEffect(effectInstance as MobEffectInstance, entity as Entity) as boolean
```

| 参数             | 类型                                                                | 描述                      |
| -------------- | ----------------------------------------------------------------- | ----------------------- |
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |
| entity         | [Entity](/vanilla/api/entity/Entity)                              | No Description Provided |


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

| 参数     | 类型                                               | 描述                      |
| ------ | ------------------------------------------------ | ----------------------- |
| target | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=canBeAffected}

Return Type: boolean

```zenscript
LivingEntity.canBeAffected(effectInstance as MobEffectInstance) as boolean
```

| 参数             | 类型                                                                | 描述                      |
| -------------- | ----------------------------------------------------------------- | ----------------------- |
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |


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

| 参数    | 类型                                | 描述                      |
| ----- | --------------------------------- | ----------------------- |
| fluid | [Fluid](/vanilla/api/fluid/Fluid) | No Description Provided |


:::

:::group{name=canTakeItem}

Return Type: boolean

```zenscript
LivingEntity.canTakeItem(stack as ItemStack) as boolean
```

| 参数 | 类型                                  | 描述                      |
| -- | ----------------------------------- | ----------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=clearSleepingPos}

Return Type: void

```zenscript
// LivingEntity.clearSleepingPos() as void

myLivingEntity.clearSleepingPos();
```

:::

:::group{name=die}

Return Type: void

```zenscript
LivingEntity.die(source as DamageSource) as void
```

| 参数 | 类型                                              | 描述                      |
| -- | ----------------------------------------------- | ----------------------- |
| 来源 | [DamageSource](/vanilla/api/world/DamageSource) | No Description Provided |


:::

:::group{name=doHurtTarget}

Return Type: boolean

```zenscript
LivingEntity.doHurtTarget(entity as Entity) as boolean
```

| 参数     | 类型                                   | 描述                      |
| ------ | ------------------------------------ | ----------------------- |
| entity | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=eat}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LivingEntity.eat(level as Level, stack as ItemStack) as ItemStack
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| level | [Level](/vanilla/api/world/Level)   | No Description Provided |
| 堆叠    | [物品应用](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=forceAddEffect}

Return Type: void

```zenscript
LivingEntity.forceAddEffect(effectInstance as MobEffectInstance, entity as Entity) as void
```

| 参数             | 类型                                                                | 描述                      |
| -------------- | ----------------------------------------------------------------- | ----------------------- |
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | No Description Provided |
| entity         | [Entity](/vanilla/api/entity/Entity)                              | No Description Provided |


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

Return Type: [AttributeInstance](/vanilla/api/entity/attribute/AttributeInstance)

```zenscript
LivingEntity.getAttribute(attribute as Attribute) as AttributeInstance
```

| 参数        | 类型                                                   | 描述                      |
| --------- | ---------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) | No Description Provided |


:::

:::group{name=getAttributeBaseValue}

Return Type: double

```zenscript
LivingEntity.getAttributeBaseValue(attribute as Attribute) as double
```

| 参数        | 类型                                                   | 描述                      |
| --------- | ---------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) | No Description Provided |


:::

:::group{name=getAttributeValue}

Return Type: double

```zenscript
LivingEntity.getAttributeValue(attribute as Attribute) as double
```

| 参数        | 类型                                                   | 描述                      |
| --------- | ---------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute) | No Description Provided |


:::

:::group{name=getBedOrientation}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// LivingEntity.getBedOrientation() as Direction

myLivingEntity.getBedOrientation();
```

:::

:::group{name=getEffect}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
LivingEntity.getEffect(effect as MobEffect) as MobEffectInstance
```

| 参数     | 类型                                                | 描述                      |
| ------ | ------------------------------------------------- | ----------------------- |
| effect | [MobEffect](/vanilla/api/entity/effect/MobEffect) | No Description Provided |


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

| 参数   | 类型                                                           | 描述                      |
| ---- | ------------------------------------------------------------ | ----------------------- |
| slot | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | No Description Provided |


:::

:::group{name=getItemInHand}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LivingEntity.getItemInHand(hand as InteractionHand) as ItemStack
```

| 参数   | 类型                                                   | 描述                      |
| ---- | ---------------------------------------------------- | ----------------------- |
| hand | [InteractionHand](/vanilla/api/util/InteractionHand) | No Description Provided |


:::

:::group{name=getJumpBoostPower}

Return Type: double

```zenscript
// LivingEntity.getJumpBoostPower() as double

myLivingEntity.getJumpBoostPower();
```

:::

:::group{name=getKillCredit}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// LivingEntity.getKillCredit() as LivingEntity

myLivingEntity.getKillCredit();
```

:::

:::group{name=getLastClimbablePos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// LivingEntity.getLastClimbablePos() as BlockPos

myLivingEntity.getLastClimbablePos();
```

:::

:::group{name=getLastDamageSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// LivingEntity.getLastDamageSource() as DamageSource

myLivingEntity.getLastDamageSource();
```

:::

:::group{name=getLastHurtByMob}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// LivingEntity.getLastHurtByMob() as LivingEntity

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

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// LivingEntity.getSleepingPos() as BlockPos

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

| 参数           | 类型    | 描述                      |
| ------------ | ----- | ----------------------- |
| partialTicks | float | No Description Provided |


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
LivingEntity.getVisibilityPercent(lookingEntity as Entity) as double
```

| 参数            | 类型                                   | 描述                      |
| ------------- | ------------------------------------ | ----------------------- |
| lookingEntity | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


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

| 参数     | 类型                                                | 描述                      |
| ------ | ------------------------------------------------- | ----------------------- |
| effect | [MobEffect](/vanilla/api/entity/effect/MobEffect) | No Description Provided |


:::

:::group{name=hasItemInSlot}

Return Type: boolean

```zenscript
LivingEntity.hasItemInSlot(slot as EquipmentSlot) as boolean
```

| 参数   | 类型                                                           | 描述                      |
| ---- | ------------------------------------------------------------ | ----------------------- |
| slot | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | No Description Provided |


:::

:::group{name=hasLineOfSight}

Return Type: boolean

```zenscript
LivingEntity.hasLineOfSight(entity as Entity) as boolean
```

| 参数     | 类型                                   | 描述                      |
| ------ | ------------------------------------ | ----------------------- |
| entity | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=heal}

Return Type: void

```zenscript
LivingEntity.heal(amount as float) as void
```

| 参数     | 类型    | 描述                      |
| ------ | ----- | ----------------------- |
| amount | float | No Description Provided |


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

| 参数 | 类型                                              | 描述                      |
| -- | ----------------------------------------------- | ----------------------- |
| 来源 | [DamageSource](/vanilla/api/world/DamageSource) | No Description Provided |


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

| 参数   | 类型                                                 | 描述                      |
| ---- | -------------------------------------------------- | ----------------------- |
| item | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |


:::

:::group{name=isHolding}

Return Type: boolean

```zenscript
LivingEntity.isHolding(predicate as Predicate<ItemStack>) as boolean
```

| 参数        | 类型                                                                    | 描述                      |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| predicate | Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | No Description Provided |


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

Return Type: void

```zenscript
LivingEntity.knockback(x as double, y as double, z as double) as void
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=releaseUsingItem}

Return Type: void

```zenscript
// LivingEntity.releaseUsingItem() as void

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

| 参数     | 类型                                                | 描述                      |
| ------ | ------------------------------------------------- | ----------------------- |
| effect | [MobEffect](/vanilla/api/entity/effect/MobEffect) | No Description Provided |


:::

:::group{name=removeEffectNoUpdate}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
LivingEntity.removeEffectNoUpdate(effect as MobEffect) as MobEffectInstance
```

| 参数     | 类型                                                | 描述                      |
| ------ | ------------------------------------------------- | ----------------------- |
| effect | [MobEffect](/vanilla/api/entity/effect/MobEffect) | No Description Provided |


:::

:::group{name=setAbsorptionAmount}

Return Type: void

```zenscript
LivingEntity.setAbsorptionAmount(absorption as float) as void
```

| 参数         | 类型    | 描述                      |
| ---------- | ----- | ----------------------- |
| absorption | float | No Description Provided |


:::

:::group{name=setArrowCount}

Return Type: void

```zenscript
LivingEntity.setArrowCount(count as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| count | int | No Description Provided |


:::

:::group{name=setDiscardFriction}

Return Type: void

```zenscript
LivingEntity.setDiscardFriction(discardFriction as boolean) as void
```

| 参数              | 类型  | 描述                      |
| --------------- | --- | ----------------------- |
| discardFriction | 布尔值 | No Description Provided |


:::

:::group{name=setHealth}

Return Type: void

```zenscript
LivingEntity.setHealth(health as float) as void
```

| 参数     | 类型    | 描述                      |
| ------ | ----- | ----------------------- |
| health | float | No Description Provided |


:::

:::group{name=setItemInHand}

Return Type: void

```zenscript
LivingEntity.setItemInHand(hand as InteractionHand, stack as ItemStack) as void
```

| 参数   | 类型                                                   | 描述                      |
| ---- | ---------------------------------------------------- | ----------------------- |
| hand | [InteractionHand](/vanilla/api/util/InteractionHand) | No Description Provided |
| 堆叠   | [物品应用](/vanilla/api/item/ItemStack)                  | No Description Provided |


:::

:::group{name=setJumping}

Return Type: void

```zenscript
LivingEntity.setJumping(jumping as boolean) as void
```

| 参数      | 类型  | 描述                      |
| ------- | --- | ----------------------- |
| jumping | 布尔值 | No Description Provided |


:::

:::group{name=setLastHurtByMob}

Return Type: void

```zenscript
LivingEntity.setLastHurtByMob(entity as LivingEntity) as void
```

| 参数     | 类型                                               | 描述                      |
| ------ | ------------------------------------------------ | ----------------------- |
| entity | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=setLastHurtByPlayer}

Return Type: void

```zenscript
LivingEntity.setLastHurtByPlayer(player as Player) as void
```

| 参数     | 类型                                               | 描述                      |
| ------ | ------------------------------------------------ | ----------------------- |
| player | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=setLastHurtMob}

Return Type: void

```zenscript
LivingEntity.setLastHurtMob(entity as Entity) as void
```

| 参数     | 类型                                   | 描述                      |
| ------ | ------------------------------------ | ----------------------- |
| entity | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=setNoActionTime}

Return Type: void

```zenscript
LivingEntity.setNoActionTime(idleTime as int) as void
```

| 参数       | 类型  | 描述                      |
| -------- | --- | ----------------------- |
| idleTime | int | No Description Provided |


:::

:::group{name=setSleepingPos}

Return Type: void

```zenscript
LivingEntity.setSleepingPos(pos as BlockPos) as void
```

| 参数 | 类型                                          | 描述                      |
| -- | ------------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=setSpeed}

Return Type: void

```zenscript
LivingEntity.setSpeed(speed as float) as void
```

| 参数    | 类型    | 描述                      |
| ----- | ----- | ----------------------- |
| speed | float | No Description Provided |


:::

:::group{name=setStingerCount}

Return Type: void

```zenscript
LivingEntity.setStingerCount(count as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| count | int | No Description Provided |


:::

:::group{name=shouldDiscardFriction}

Return Type: boolean

```zenscript
// LivingEntity.shouldDiscardFriction() as boolean

myLivingEntity.shouldDiscardFriction();
```

:::

:::group{name=startAutoSpinAttack}

Return Type: void

```zenscript
LivingEntity.startAutoSpinAttack(ticks as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| ticks | int | No Description Provided |


:::

:::group{name=startSleeping}

Return Type: void

```zenscript
LivingEntity.startSleeping(pos as BlockPos) as void
```

| 参数 | 类型                                          | 描述                      |
| -- | ------------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=startUsingItem}

Return Type: void

```zenscript
LivingEntity.startUsingItem(param0 as InteractionHand) as void
```

| 参数     | 类型                                                   | 描述                      |
| ------ | ---------------------------------------------------- | ----------------------- |
| param0 | [InteractionHand](/vanilla/api/util/InteractionHand) | No Description Provided |


:::

:::group{name=stopSleeping}

Return Type: void

```zenscript
// LivingEntity.stopSleeping() as void

myLivingEntity.stopSleeping();
```

:::

:::group{name=stopUsingItem}

Return Type: void

```zenscript
// LivingEntity.stopUsingItem() as void

myLivingEntity.stopUsingItem();
```

:::

:::group{name=swing}

Return Type: void

```zenscript
LivingEntity.swing(hand as InteractionHand) as void
```

| 参数   | 类型                                                   | 描述                      |
| ---- | ---------------------------------------------------- | ----------------------- |
| hand | [InteractionHand](/vanilla/api/util/InteractionHand) | No Description Provided |


:::

:::group{name=swing}

Return Type: void

```zenscript
LivingEntity.swing(hand as InteractionHand, updateSelf as boolean) as void
```

| 参数         | 类型                                                   | 描述                      |
| ---------- | ---------------------------------------------------- | ----------------------- |
| hand       | [InteractionHand](/vanilla/api/util/InteractionHand) | No Description Provided |
| updateSelf | 布尔值                                                  | No Description Provided |


:::

:::group{name=travel}

Return Type: void

```zenscript
LivingEntity.travel(vec as Vec3) as void
```

| 参数  | 类型                                  | 描述                      |
| --- | ----------------------------------- | ----------------------- |
| vec | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::


## 参数

| 名称                             | 类型                                                                                                                   | 可获得  | 可设置   | 描述                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| absorptionAmount               | float                                                                                                                | true | false | No Description Provided |
| activeEFfectsMap               | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)[[MobEffect](/vanilla/api/entity/effect/MobEffect)] | true | false | No Description Provided |
| activeEffects                  | Collection&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;                      | true | false | No Description Provided |
| armorCoverPercentage           | float                                                                                                                | true | false | No Description Provided |
| armorValue                     | int                                                                                                                  | true | false | No Description Provided |
| arrowCount                     | int                                                                                                                  | true | false | No Description Provided |
| attackable #可攻击的               | 布尔值                                                                                                                  | true | false | No Description Provided |
| bedOrientation                 | [Direction](/vanilla/api/util/direction/Direction)                                                                   | true | false | No Description Provided |
| canBeSeenAsEnemy               | 布尔值                                                                                                                  | true | false | No Description Provided |
| canBeSeenByAnyone              | 布尔值                                                                                                                  | true | false | No Description Provided |
| canBreatheUnderwater #可以水下呼吸   | 布尔值                                                                                                                  | true | false | No Description Provided |
| fallFlyingTicks                | int                                                                                                                  | true | false | No Description Provided |
| health                         | float                                                                                                                | true | false | No Description Provided |
| isAffectedByPotions            | 布尔值                                                                                                                  | true | false | No Description Provided |
| isAutoSpinAttack               | 布尔值                                                                                                                  | true | false | No Description Provided |
| isBaby                         | 布尔值                                                                                                                  | true | false | No Description Provided |
| isBlocking                     | 布尔值                                                                                                                  | true | false | No Description Provided |
| isCurrentlyGlowing             | 布尔值                                                                                                                  | true | false | No Description Provided |
| isDeadOrDying                  | 布尔值                                                                                                                  | true | false | No Description Provided |
| isFallFlying                   | 布尔值                                                                                                                  | true | false | No Description Provided |
| isInvertedHealAndHarm          | 布尔值                                                                                                                  | true | false | No Description Provided |
| isSensitiveToWater             | 布尔值                                                                                                                  | true | false | No Description Provided |
| isSleeping                     | 布尔值                                                                                                                  | true | false | No Description Provided |
| isSuppressingSlidingDownLadder | 布尔值                                                                                                                  | true | false | No Description Provided |
| isUsingItem                    | 布尔值                                                                                                                  | true | false | No Description Provided |
| isVisuallySwimming             | 布尔值                                                                                                                  | true | false | No Description Provided |
| jumpBoostPower                 | double                                                                                                               | true | false | No Description Provided |
| killCredit                     | [LivingEntity](/vanilla/api/entity/LivingEntity)                                                                     | true | false | No Description Provided |
| lastClimbablePos               | [BlockPos](/vanilla/api/util/math/BlockPos)                                                                          | true | false | No Description Provided |
| lastDamageSource               | [DamageSource](/vanilla/api/world/DamageSource)                                                                      | true | false | No Description Provided |
| lastHurtByMob                  | [LivingEntity](/vanilla/api/entity/LivingEntity)                                                                     | true | false | No Description Provided |
| lastHurtByMobTimestamp         | int                                                                                                                  | true | false | No Description Provided |
| lastHurtMob                    | [LivingEntity](/vanilla/api/entity/LivingEntity)                                                                     | true | false | No Description Provided |
| lastHurtMobTimestamp           | int                                                                                                                  | true | false | No Description Provided |
| lootTable                      | [资源位置](/vanilla/api/resource/ResourceLocation)                                                                       | true | false | No Description Provided |
| mainArm                        | [HumanoidArm](/vanilla/api/entity/HumanoidArm)                                                                       | true | false | No Description Provided |
| mainHandItem                   | [物品应用](/vanilla/api/item/ItemStack)                                                                                  | true | false | No Description Provided |
| maxHealth                      | float                                                                                                                | true | false | No Description Provided |
| mobType                        | [MobType](/vanilla/api/entity/MobType)                                                                               | true | false | No Description Provided |
| noActionTime                   | int                                                                                                                  | true | false | No Description Provided |
| offHandItem                    | [物品应用](/vanilla/api/item/ItemStack)                                                                                  | true | false | No Description Provided |
| random                         | [Random](/vanilla/api/util/math/Random)                                                                              | true | false | No Description Provided |
| scale                          | float                                                                                                                | true | false | No Description Provided |
| shouldDiscardFriction          | 布尔值                                                                                                                  | true | false | No Description Provided |
| sleepingPos                    | [BlockPos](/vanilla/api/util/math/BlockPos)                                                                          | true | false | No Description Provided |
| speed                          | float                                                                                                                | true | false | No Description Provided |
| stingerCount                   | int                                                                                                                  | true | false | No Description Provided |
| ticksUsingItem                 | int                                                                                                                  | true | false | No Description Provided |
| useItem                        | [物品应用](/vanilla/api/item/ItemStack)                                                                                  | true | false | No Description Provided |
| useItemRemainingTicks          | int                                                                                                                  | true | false | No Description Provided |
| usedItemHand                   | [InteractionHand](/vanilla/api/util/InteractionHand)                                                                 | true | false | No Description Provided |
| voicePitch                     | float                                                                                                                | true | false | No Description Provided |

