# Player

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Player;
```


## Extending LivingEntity

Player extends [LivingEntity](/vanilla/api/entity/LivingEntity). That means all methods available in [LivingEntity](/vanilla/api/entity/LivingEntity) are also available in Player

## 使用方式

:::group{name=addItem}

Return Type: boolean

```zenscript
Player.addItem(stack as ItemStack) as boolean
```

| 参数 | 类型                                  | 描述                      |
| -- | ----------------------------------- | ----------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=attack}

Return Type: void

```zenscript
Player.attack(entity as Entity) as void
```

| 参数     | 类型                                   | 描述                      |
| ------ | ------------------------------------ | ----------------------- |
| entity | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=awardStat}

Return Type: void

```zenscript
Player.awardStat(stat as ResourceLocation) as void
```

| 参数   | 类型                                             | 描述                      |
| ---- | ---------------------------------------------- | ----------------------- |
| stat | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=awardStat}

Return Type: void

```zenscript
Player.awardStat(stat as ResourceLocation, amount as int) as void
```

| 参数     | 类型                                             | 描述                      |
| ------ | ---------------------------------------------- | ----------------------- |
| stat   | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |
| amount | int                                            | No Description Provided |


:::

:::group{name=canEat}

Return Type: boolean

```zenscript
Player.canEat(ignoreHunger as boolean) as boolean
```

| 参数           | 类型  | 描述                      |
| ------------ | --- | ----------------------- |
| ignoreHunger | 布尔值 | No Description Provided |


:::

:::group{name=canHarmPlayer}

Return Type: boolean

```zenscript
Player.canHarmPlayer(player as Player) as boolean
```

| 参数     | 类型                                               | 描述                      |
| ------ | ------------------------------------------------ | ----------------------- |
| player | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=canUseGameMasterBlocks}

Return Type: boolean

```zenscript
// Player.canUseGameMasterBlocks() as boolean

myPlayer.canUseGameMasterBlocks();
```

:::

:::group{name=causeFoodExhaustion}

Return Type: void

```zenscript
Player.causeFoodExhaustion(exhaustion as float) as void
```

| 参数         | 类型    | 描述                      |
| ---------- | ----- | ----------------------- |
| exhaustion | float | No Description Provided |


:::

:::group{name=crit}

Return Type: void

```zenscript
Player.crit(entity as Entity) as void
```

| 参数     | 类型                                   | 描述                      |
| ------ | ------------------------------------ | ----------------------- |
| entity | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=disableShield}

Return Type: void

```zenscript
Player.disableShield(usingAxe as boolean) as void
```

| 参数       | 类型  | 描述                      |
| -------- | --- | ----------------------- |
| usingAxe | 布尔值 | No Description Provided |


:::

:::group{name=displayClientMessage}

Return Type: void

```zenscript
Player.displayClientMessage(component as Component, actionBar as boolean) as void
```

| 参数        | 类型                                       | 描述                      |
| --------- | ---------------------------------------- | ----------------------- |
| component | [Component](/vanilla/api/text/Component) | No Description Provided |
| actionBar | 布尔值                                      | No Description Provided |


:::

:::group{name=drop}

Return Type: [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)

```zenscript
Player.drop(stack as ItemStack, traceItem as boolean) as ItemEntity
```

| 参数        | 类型                                  | 描述                      |
| --------- | ----------------------------------- | ----------------------- |
| 堆叠        | [物品应用](/vanilla/api/item/ItemStack) | No Description Provided |
| traceItem | 布尔值                                 | No Description Provided |


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

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| state | [BlockState](/vanilla/api/block/BlockState) | No Description Provided |


:::

:::group{name=getEnchantmentSeed}

Return Type: int

```zenscript
// Player.getEnchantmentSeed() as int

myPlayer.getEnchantmentSeed();
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

Return Type: void

```zenscript
Player.give(stack as IItemStack, slot as int) as void
```

| 参数   | 类型                                         | 描述                      | 可选    | DefaultValue |
| ---- | ------------------------------------------ | ----------------------- | ----- | ------------ |
| 堆叠   | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided | false |              |
| slot | int                                        | No Description Provided | true  | -1           |


:::

:::group{name=giveExperienceLevels}

Return Type: void

```zenscript
Player.giveExperienceLevels(levels as int) as void
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| levels | int | No Description Provided |


:::

:::group{name=giveExperiencePoints}

Return Type: void

```zenscript
Player.giveExperiencePoints(amount as int) as void
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |


:::

:::group{name=hasCorrectToolForDrops}

Return Type: boolean

```zenscript
Player.hasCorrectToolForDrops(state as BlockState) as boolean
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| state | [BlockState](/vanilla/api/block/BlockState) | No Description Provided |


:::

:::group{name=increaseScore}

Return Type: void

```zenscript
Player.increaseScore(score as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| score | int | No Description Provided |


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

Return Type: void

```zenscript
// Player.jumpFromGround() as void

myPlayer.jumpFromGround();
```

:::

:::group{name=magicCrit}

Return Type: void

```zenscript
Player.magicCrit(entity as Entity) as void
```

| 参数     | 类型                                   | 描述                      |
| ------ | ------------------------------------ | ----------------------- |
| entity | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=mayBuild}

Return Type: boolean

```zenscript
// Player.mayBuild() as boolean

myPlayer.mayBuild();
```

:::

:::group{name=playNotifySound}

Return Type: void

```zenscript
Player.playNotifySound(event as SoundEvent, source as SoundSource, volume as float, pitch as float) as void
```

| 参数     | 类型                                            | 描述                      |
| ------ | --------------------------------------------- | ----------------------- |
| event  | [SoundEvent](/vanilla/api/sound/SoundEvent)   | No Description Provided |
| 来源     | [SoundSource](/vanilla/api/sound/SoundSource) | No Description Provided |
| volume | float                                         | No Description Provided |
| pitch  | float                                         | No Description Provided |


:::

:::group{name=respawn}

Return Type: void

```zenscript
// Player.respawn() as void

myPlayer.respawn();
```

:::

:::group{name=sendMessage}

Return Type: void

```zenscript
Player.sendMessage(text as Component) as void
```

| 参数 | 类型                                       | 描述                      |
| -- | ---------------------------------------- | ----------------------- |
| 文本 | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=setEntityOnShoulder}

Return Type: boolean

```zenscript
Player.setEntityOnShoulder(entityData as MapData) as boolean
```

| 参数         | 类型                                         | 描述                      |
| ---------- | ------------------------------------------ | ----------------------- |
| entityData | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=setMainArm}

Return Type: void

```zenscript
Player.setMainArm(arm as HumanoidArm) as void
```

| 参数  | 类型                                             | 描述                      |
| --- | ---------------------------------------------- | ----------------------- |
| arm | [HumanoidArm](/vanilla/api/entity/HumanoidArm) | No Description Provided |


:::

:::group{name=setReducedDebugInfo}

Return Type: void

```zenscript
Player.setReducedDebugInfo(reducedDebugInfo as boolean) as void
```

| 参数               | 类型  | 描述                      |
| ---------------- | --- | ----------------------- |
| reducedDebugInfo | 布尔值 | No Description Provided |


:::

:::group{name=setScore}

Return Type: void

```zenscript
Player.setScore(score as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| score | int | No Description Provided |


:::

:::group{name=stopSleeping}

Return Type: void

```zenscript
// Player.stopSleeping() as void

myPlayer.stopSleeping();
```

:::

:::group{name=sweepAttack}

Return Type: void

```zenscript
// Player.sweepAttack() as void

myPlayer.sweepAttack();
```

:::


## 参数

| 名称                             | 类型                                                     | 可获得  | 可设置   | 描述                      |
| ------------------------------ | ------------------------------------------------------ | ---- | ----- | ----------------------- |
| abilities                      | [Abilities](/vanilla/api/entity/type/player/Abilities) | true | false | No Description Provided |
| canUseGameMasterBlocks         | 布尔值                                                    | true | false | No Description Provided |
| cooldowns                      | [ItemCooldowns](/vanilla/api/item/ItemCooldowns)       | true | false | No Description Provided |
| currentItemAttackStrengthDelay | float                                                  | true | false | No Description Provided |
| enchantmentSeed                | int                                                    | true | false | No Description Provided |
| foodData                       | [FoodData](/vanilla/api/food/FoodData)                 | true | false | No Description Provided |
| inventory                      | [Inventory](/vanilla/api/entity/type/player/Inventory) | true | false | No Description Provided |
| isCreative                     | 布尔值                                                    | true | false | No Description Provided |
| isHurt                         | 布尔值                                                    | true | false | No Description Provided |
| isLocalPlayer                  | 布尔值                                                    | true | false | No Description Provided |
| isReducedDebugInfo             | 布尔值                                                    | true | false | No Description Provided |
| isScoping                      | 布尔值                                                    | true | false | No Description Provided |
| isSecondaryUseActive           | 布尔值                                                    | true | false | No Description Provided |
| isSleepingLongEnough           | 布尔值                                                    | true | false | No Description Provided |
| luck                           | float                                                  | true | false | No Description Provided |
| mainArm                        | [HumanoidArm](/vanilla/api/entity/HumanoidArm)         | true | false | No Description Provided |
| mayBuild                       | 布尔值                                                    | true | false | No Description Provided |
| score                          | int                                                    | true | false | No Description Provided |
| shoulderEntityLeft             | [MapData #地图数据](/vanilla/api/data/MapData)             | true | false | No Description Provided |
| shoulderEntityRight            | [MapData #地图数据](/vanilla/api/data/MapData)             | true | false | No Description Provided |
| sleepTimer                     | int                                                    | true | false | No Description Provided |
| xpNeededForNextLevel           | int                                                    | true | false | No Description Provided |

