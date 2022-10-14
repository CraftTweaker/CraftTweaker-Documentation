# Player

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Player;
```


## Extending LivingEntity

Player extends [LivingEntity](/vanilla/api/entity/LivingEntity). That means all methods available in [LivingEntity](/vanilla/api/entity/LivingEntity) are also available in Player

## Metodi

:::group{name=addItem}

Return Type: boolean

```zenscript
Player.addItem(stack as ItemStack) as boolean
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=attack}

```zenscript
Player.attack(entity as Entity)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=awardStat}

```zenscript
Player.awardStat(stat as ResourceLocation)
```

| Parametro | Tipo                                                       |
| --------- | ---------------------------------------------------------- |
| stat      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=awardStat}

```zenscript
Player.awardStat(stat as ResourceLocation, amount as int)
```

| Parametro | Tipo                                                       |
| --------- | ---------------------------------------------------------- |
| stat      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| amount    | int                                                        |


:::

:::group{name=canEat}

Return Type: boolean

```zenscript
Player.canEat(ignoreHunger as boolean) as boolean
```

| Parametro    | Tipo    |
| ------------ | ------- |
| ignoreHunger | boolean |


:::

:::group{name=canHarmPlayer}

Return Type: boolean

```zenscript
Player.canHarmPlayer(player as Player) as boolean
```

| Parametro | Tipo                                             |
| --------- | ------------------------------------------------ |
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

| Parametro  | Tipo  |
| ---------- | ----- |
| exhaustion | float |


:::

:::group{name=crit}

```zenscript
Player.crit(entity as Entity)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=disableShield}

```zenscript
Player.disableShield(usingAxe as boolean)
```

| Parametro | Tipo    |
| --------- | ------- |
| usingAxe  | boolean |


:::

:::group{name=displayClientMessage}

```zenscript
Player.displayClientMessage(component as Component, actionBar as boolean)
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| component | [Component](/vanilla/api/text/Component) |
| actionBar | boolean                                  |


:::

:::group{name=drop}

Return Type: [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)?

```zenscript
Player.drop(stack as ItemStack, traceItem as boolean) as ItemEntity?
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
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

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
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

| Parametro | Tipo                                       | Optional | Default Value |
| --------- | ------------------------------------------ | -------- | ------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | no       |               |
| slot      | int                                        | sì       | -1            |


:::

:::group{name=giveExperienceLevels}

```zenscript
Player.giveExperienceLevels(levels as int)
```

| Parametro | Tipo |
| --------- | ---- |
| levels    | int  |


:::

:::group{name=giveExperiencePoints}

```zenscript
Player.giveExperiencePoints(amount as int)
```

| Parametro | Tipo |
| --------- | ---- |
| amount    | int  |


:::

:::group{name=hasCorrectToolForDrops}

Return Type: boolean

```zenscript
Player.hasCorrectToolForDrops(state as BlockState) as boolean
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=increaseScore}

```zenscript
Player.increaseScore(score as int)
```

| Parametro | Tipo |
| --------- | ---- |
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

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
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

| Parametro | Tipo                                          |
| --------- | --------------------------------------------- |
| event     | [SoundEvent](/vanilla/api/sound/SoundEvent)   |
| sorgente  | [SoundSource](/vanilla/api/sound/SoundSource) |
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

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| testo     | [Component](/vanilla/api/text/Component) |


:::

:::group{name=setEntityOnShoulder}

Return Type: boolean

```zenscript
Player.setEntityOnShoulder(entityData as MapData) as boolean
```

| Parametro  | Tipo                                 |
| ---------- | ------------------------------------ |
| entityData | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=setExperienceLevel}

```zenscript
Player.setExperienceLevel(level as int)
```

| Parametro | Tipo |
| --------- | ---- |
| level     | int  |


:::

:::group{name=setMainArm}

```zenscript
Player.setMainArm(arm as HumanoidArm)
```

| Parametro | Tipo                                           |
| --------- | ---------------------------------------------- |
| arm       | [HumanoidArm](/vanilla/api/entity/HumanoidArm) |


:::

:::group{name=setReducedDebugInfo}

```zenscript
Player.setReducedDebugInfo(reducedDebugInfo as boolean)
```

| Parametro        | Tipo    |
| ---------------- | ------- |
| reducedDebugInfo | boolean |


:::

:::group{name=setScore}

```zenscript
Player.setScore(score as int)
```

| Parametro | Tipo |
| --------- | ---- |
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


## Proprietà

| Nome                           | Tipo                                                   | Ha Getter | Ha Setter |
| ------------------------------ | ------------------------------------------------------ | --------- | --------- |
| abilities                      | [Abilities](/vanilla/api/entity/type/player/Abilities) | sì        | no        |
| canUseGameMasterBlocks         | boolean                                                | sì        | no        |
| cooldowns                      | [ItemCooldowns](/vanilla/api/item/ItemCooldowns)       | sì        | no        |
| currentItemAttackStrengthDelay | float                                                  | sì        | no        |
| enchantmentSeed                | int                                                    | sì        | no        |
| experienceLevel                | int                                                    | sì        | sì        |
| foodData                       | [FoodData](/vanilla/api/food/FoodData)                 | sì        | no        |
| inventory                      | [Inventory](/vanilla/api/entity/type/player/Inventory) | sì        | no        |
| isCreative                     | boolean                                                | sì        | no        |
| isHurt                         | boolean                                                | sì        | no        |
| isLocalPlayer                  | boolean                                                | sì        | no        |
| isReducedDebugInfo             | boolean                                                | sì        | no        |
| isScoping                      | boolean                                                | sì        | no        |
| isSecondaryUseActive           | boolean                                                | sì        | no        |
| isSleepingLongEnough           | boolean                                                | sì        | no        |
| luck                           | float                                                  | sì        | no        |
| mainArm                        | [HumanoidArm](/vanilla/api/entity/HumanoidArm)         | sì        | no        |
| mayBuild                       | boolean                                                | sì        | no        |
| score                          | int                                                    | sì        | no        |
| shoulderEntityLeft             | [MapData](/vanilla/api/data/MapData)                   | sì        | no        |
| shoulderEntityRight            | [MapData](/vanilla/api/data/MapData)                   | sì        | no        |
| sleepTimer                     | int                                                    | sì        | no        |
| xpNeededForNextLevel           | int                                                    | sì        | no        |

