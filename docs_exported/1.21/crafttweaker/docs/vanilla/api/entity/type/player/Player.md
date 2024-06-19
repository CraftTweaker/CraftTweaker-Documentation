# Player

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Player;
```


## Extending LivingEntity

Player extends [LivingEntity](/vanilla/api/entity/LivingEntity). That means all methods available in [LivingEntity](/vanilla/api/entity/LivingEntity) are also available in Player

## Methods

:::group{name=addItem}

Return Type: boolean

```zenscript
Player.addItem(stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=attack}

```zenscript
Player.attack(entity as Entity)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=awardStat}

```zenscript
Player.awardStat(stat as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| stat      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=awardStat}

```zenscript
Player.awardStat(stat as ResourceLocation, amount as int)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| stat      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| amount    | int                                                        |


:::

:::group{name=canEat}

Return Type: boolean

```zenscript
Player.canEat(ignoreHunger as boolean) as boolean
```

|  Parameter   |  Type   |
|--------------|---------|
| ignoreHunger | boolean |


:::

:::group{name=canHarmPlayer}

Return Type: boolean

```zenscript
Player.canHarmPlayer(player as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=canUseGameMasterBlocks}

Return Type: boolean

```zenscript
// Player.canUseGameMasterBlocks() as boolean

myPlayer.canUseGameMasterBlocks();
```

:::

:::group{name=causeFoodExhaustion}

```zenscript
Player.causeFoodExhaustion(exhaustion as float)
```

| Parameter  | Type  |
|------------|-------|
| exhaustion | float |


:::

:::group{name=crit}

```zenscript
Player.crit(entity as Entity)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=disableShield}

```zenscript
// Player.disableShield()

myPlayer.disableShield();
```

:::

:::group{name=displayClientMessage}

```zenscript
Player.displayClientMessage(component as Component, actionBar as boolean)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| component | [Component](/vanilla/api/text/Component) |
| actionBar | boolean                                  |


:::

:::group{name=drop}

Return Type: [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)?

```zenscript
Player.drop(stack as ItemStack, traceItem as boolean) as ItemEntity?
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |
| traceItem | boolean                                  |


:::

:::group{name=getAbilities}

Return Type: [Abilities](/vanilla/api/entity/type/player/Abilities)

```zenscript
// Player.getAbilities() as Abilities

myPlayer.getAbilities();
```

:::

:::group{name=getCooldowns}

Return Type: [ItemCooldowns](/vanilla/api/item/ItemCooldowns)

```zenscript
// Player.getCooldowns() as ItemCooldowns

myPlayer.getCooldowns();
```

:::

:::group{name=getCurrentItemAttackStrengthDelay}

Return Type: float

```zenscript
// Player.getCurrentItemAttackStrengthDelay() as float

myPlayer.getCurrentItemAttackStrengthDelay();
```

:::

:::group{name=getDestroySpeed}

Return Type: float

```zenscript
Player.getDestroySpeed(state as BlockState) as float
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=getEnchantmentSeed}

Return Type: int

```zenscript
// Player.getEnchantmentSeed() as int

myPlayer.getEnchantmentSeed();
```

:::

:::group{name=getExperienceLevel}

Return Type: int

```zenscript
// Player.getExperienceLevel() as int

myPlayer.getExperienceLevel();
```

:::

:::group{name=getFoodData}

Return Type: [FoodData](/vanilla/api/food/FoodData)

```zenscript
// Player.getFoodData() as FoodData

myPlayer.getFoodData();
```

:::

:::group{name=getInventory}

Return Type: [Inventory](/vanilla/api/entity/type/player/Inventory)

```zenscript
// Player.getInventory() as Inventory

myPlayer.getInventory();
```

:::

:::group{name=getLuck}

Return Type: float

```zenscript
// Player.getLuck() as float

myPlayer.getLuck();
```

:::

:::group{name=getMainArm}

Return Type: [HumanoidArm](/vanilla/api/entity/HumanoidArm)

```zenscript
// Player.getMainArm() as HumanoidArm

myPlayer.getMainArm();
```

:::

:::group{name=getScore}

Return Type: int

```zenscript
// Player.getScore() as int

myPlayer.getScore();
```

:::

:::group{name=getShoulderEntityLeft}

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// Player.getShoulderEntityLeft() as MapData

myPlayer.getShoulderEntityLeft();
```

:::

:::group{name=getShoulderEntityRight}

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// Player.getShoulderEntityRight() as MapData

myPlayer.getShoulderEntityRight();
```

:::

:::group{name=getSleepTimer}

Return Type: int

```zenscript
// Player.getSleepTimer() as int

myPlayer.getSleepTimer();
```

:::

:::group{name=getXpNeededForNextLevel}

Return Type: int

```zenscript
// Player.getXpNeededForNextLevel() as int

myPlayer.getXpNeededForNextLevel();
```

:::

:::group{name=give}

```zenscript
Player.give(stack as IItemStack, slot as int)
```

| Parameter |                    Type                    | Optional | Default Value |
|-----------|--------------------------------------------|----------|---------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | false    |               |
| slot      | int                                        | true     | -1            |


:::

:::group{name=giveExperienceLevels}

```zenscript
Player.giveExperienceLevels(levels as int)
```

| Parameter | Type |
|-----------|------|
| levels    | int  |


:::

:::group{name=giveExperiencePoints}

```zenscript
Player.giveExperiencePoints(amount as int)
```

| Parameter | Type |
|-----------|------|
| amount    | int  |


:::

:::group{name=hasCorrectToolForDrops}

Return Type: boolean

```zenscript
Player.hasCorrectToolForDrops(state as BlockState) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=increaseScore}

```zenscript
Player.increaseScore(score as int)
```

| Parameter | Type |
|-----------|------|
| score     | int  |


:::

:::group{name=isCreative}

Return Type: boolean

```zenscript
// Player.isCreative() as boolean

myPlayer.isCreative();
```

:::

:::group{name=isHurt}

Return Type: boolean

```zenscript
// Player.isHurt() as boolean

myPlayer.isHurt();
```

:::

:::group{name=isLocalPlayer}

Return Type: boolean

```zenscript
// Player.isLocalPlayer() as boolean

myPlayer.isLocalPlayer();
```

:::

:::group{name=isReducedDebugInfo}

Return Type: boolean

```zenscript
// Player.isReducedDebugInfo() as boolean

myPlayer.isReducedDebugInfo();
```

:::

:::group{name=isScoping}

Return Type: boolean

```zenscript
// Player.isScoping() as boolean

myPlayer.isScoping();
```

:::

:::group{name=isSecondaryUseActive}

Return Type: boolean

```zenscript
// Player.isSecondaryUseActive() as boolean

myPlayer.isSecondaryUseActive();
```

:::

:::group{name=isSleepingLongEnough}

Return Type: boolean

```zenscript
// Player.isSleepingLongEnough() as boolean

myPlayer.isSleepingLongEnough();
```

:::

:::group{name=jumpFromGround}

```zenscript
// Player.jumpFromGround()

myPlayer.jumpFromGround();
```

:::

:::group{name=magicCrit}

```zenscript
Player.magicCrit(entity as Entity)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=mayBuild}

Return Type: boolean

```zenscript
// Player.mayBuild() as boolean

myPlayer.mayBuild();
```

:::

:::group{name=playNotifySound}

```zenscript
Player.playNotifySound(event as SoundEvent, source as SoundSource, volume as float, pitch as float)
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| event     | [SoundEvent](/vanilla/api/sound/SoundEvent)   |
| source    | [SoundSource](/vanilla/api/sound/SoundSource) |
| volume    | float                                         |
| pitch     | float                                         |


:::

:::group{name=respawn}

```zenscript
// Player.respawn()

myPlayer.respawn();
```

:::

:::group{name=sendMessage}

```zenscript
Player.sendMessage(text as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| text      | [Component](/vanilla/api/text/Component) |


:::

:::group{name=setEntityOnShoulder}

Return Type: boolean

```zenscript
Player.setEntityOnShoulder(entityData as MapData) as boolean
```

| Parameter  |                 Type                 |
|------------|--------------------------------------|
| entityData | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=setExperienceLevel}

```zenscript
Player.setExperienceLevel(level as int)
```

| Parameter | Type |
|-----------|------|
| level     | int  |


:::

:::group{name=setMainArm}

```zenscript
Player.setMainArm(arm as HumanoidArm)
```

| Parameter |                      Type                      |
|-----------|------------------------------------------------|
| arm       | [HumanoidArm](/vanilla/api/entity/HumanoidArm) |


:::

:::group{name=setReducedDebugInfo}

```zenscript
Player.setReducedDebugInfo(reducedDebugInfo as boolean)
```

|    Parameter     |  Type   |
|------------------|---------|
| reducedDebugInfo | boolean |


:::

:::group{name=setScore}

```zenscript
Player.setScore(score as int)
```

| Parameter | Type |
|-----------|------|
| score     | int  |


:::

:::group{name=stopSleeping}

```zenscript
// Player.stopSleeping()

myPlayer.stopSleeping();
```

:::

:::group{name=sweepAttack}

```zenscript
// Player.sweepAttack()

myPlayer.sweepAttack();
```

:::


## Properties

|              Name              |                          Type                          | Has Getter | Has Setter |                            Description                            |
|--------------------------------|--------------------------------------------------------|------------|------------|-------------------------------------------------------------------|
| abilities                      | [Abilities](/vanilla/api/entity/type/player/Abilities) | true       | false      |                                                                   |
| canUseGameMasterBlocks         | boolean                                                | true       | false      |                                                                   |
| cooldowns                      | [ItemCooldowns](/vanilla/api/item/ItemCooldowns)       | true       | false      |                                                                   |
| currentItemAttackStrengthDelay | float                                                  | true       | false      |                                                                   |
| enchantmentSeed                | int                                                    | true       | false      |                                                                   |
| experienceLevel                | int                                                    | true       | true       |                                                                   |
| foodData                       | [FoodData](/vanilla/api/food/FoodData)                 | true       | false      |                                                                   |
| inventory                      | [Inventory](/vanilla/api/entity/type/player/Inventory) | true       | false      |                                                                   |
| isCreative                     | boolean                                                | true       | false      |                                                                   |
| isFakePlayer                   | boolean                                                | true       | false      | Checks if this player is a fake player, mainly used for machines. |
| isHurt                         | boolean                                                | true       | false      |                                                                   |
| isLocalPlayer                  | boolean                                                | true       | false      |                                                                   |
| isReducedDebugInfo             | boolean                                                | true       | false      |                                                                   |
| isScoping                      | boolean                                                | true       | false      |                                                                   |
| isSecondaryUseActive           | boolean                                                | true       | false      |                                                                   |
| isSleepingLongEnough           | boolean                                                | true       | false      |                                                                   |
| luck                           | float                                                  | true       | false      |                                                                   |
| mainArm                        | [HumanoidArm](/vanilla/api/entity/HumanoidArm)         | true       | false      |                                                                   |
| mayBuild                       | boolean                                                | true       | false      |                                                                   |
| score                          | int                                                    | true       | false      |                                                                   |
| shoulderEntityLeft             | [MapData](/vanilla/api/data/MapData)                   | true       | false      |                                                                   |
| shoulderEntityRight            | [MapData](/vanilla/api/data/MapData)                   | true       | false      |                                                                   |
| sleepTimer                     | int                                                    | true       | false      |                                                                   |
| xpNeededForNextLevel           | int                                                    | true       | false      |                                                                   |

