# MCPlayerEntity

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## メソッド
### addExhaustion

供給量で疲労レベルを上げる。

```zenscript
myMCPlayerEntity.addExhaustion(exustrion)
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| <unk> | float型 | 説明が提供されていません |


### addExperienceLevel

このプレイヤーに経験値を追加します。

```zenscript
myMCPlayerEntity.addExperienceLevel(levels as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| レベル   | int | 説明が提供されていません |


### addItemStackToInventory

戻り値ブール値

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| パラメータ         | タイプ                                                               | 説明           |
| ------------- | ----------------------------------------------------------------- | ------------ |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### addMovementStat

移動統計フィールドに値を追加します - ランニング、ウォーキング、スイン、クライミングなど。

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ as double, p_71000_3_ as double, p_71000_5_ as double);
```

| パラメータ        | タイプ    | 説明           |
| ------------ | ------ | ------------ |
| p_71000_1_ | double | 説明が提供されていません |
| p_71000_3_ | double | 説明が提供されていません |
| p_71000_5_ | double | 説明が提供されていません |


### addPotionEffect

戻り値ブール値

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| パラメータ            | タイプ                                                                                           | 説明           |
| ---------------- | --------------------------------------------------------------------------------------------- | ------------ |
| effectInstanceIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | 説明が提供されていません |


### addScore

プレイヤーのスコアに追加

```zenscript
myMCPlayerEntity.addScore(scoreIn as int);
```

| パラメータ   | タイプ | 説明           |
| ------- | --- | ------------ |
| scoreIn | int | 説明が提供されていません |


### addTag

戻り値ブール値

```zenscript
myMCPlayerEntity.addTag(tag as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| タグ    | 文字列型 | 説明が提供されていません |


### addVelocity

エンティティの現在のベロシティーに追加し、true に設定します。

```zenscript
myMCPlayerEntity.addVelocity(x as double, y as double, z as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### ログを許可

戻り値ブール値

```zenscript
myMCPlayerEntity.allowLogging();
```

### 攻撃可能

戻り値ブール値

```zenscript
myMCPlayerEntity.attackable();
```

### attemptTeleport

戻り値ブール値

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ を double, p_213373_3_ を double, p_213373_5_ を double, p_213373_7_ を booleanとして);
```

| パラメータ         | タイプ      | 説明           |
| ------------- | -------- | ------------ |
| p_213373_1_ | double   | 説明が提供されていません |
| p_213373_3_ | double   | 説明が提供されていません |
| p_213373_5_ | double   | 説明が提供されていません |
| p_213373_7_ | boolean型 | 説明が提供されていません |


### baseTick

メインエンティティクラスからすべてのティックを呼び出します

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

戻り値ブール値

```zenscript
myMCPlayerEntity.canAttackPlayer(crafttweaker.api.entity.player.MCPlayerEntity);
```

| パラメータ | タイプ                                                                                        | 説明           |
| ----- | ------------------------------------------------------------------------------------------ | ------------ |
| その他   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | 説明が提供されていません |


### canBeAttackedWithItem

アイテムでこのエンティティを攻撃できる場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### canBeCollidedWith

このエンティティを通じて他のエンティティが移動できない場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### canBeHitWithPotion

エンティティが防具立ての場合は false を返します。 他のすべての住んでいる拠点に対してtrueを返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### canBePushed

衝突時にこのエンティティがプッシュされ、他のエンティティによってプッシュされる場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

戻り値ブール値

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### CanBreatheUnderwater

戻り値ブール値

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

戻り値ブール値

```zenscript
myMCPlayerEntity.canEat(ignoreHunger as boolean);
```

| パラメータ        | タイプ      | 説明           |
| ------------ | -------- | ------------ |
| ignoreHunger | boolean型 | 説明が提供されていません |


### canHarvestBlock

戻り値ブール値

```zenscript
myMCPlayerEntity.canHarvestBlock(crafttweaker.api.block.MCBlockState);
```

| パラメータ | タイプ                                                                     | 説明           |
| ----- | ----------------------------------------------------------------------- | ------------ |
| 状態    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | 説明が提供されていません |


### canPassengerSteer

戻り値ブール値

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

このプレイヤーが指定されたスタックで特定の場所のブロックを変更できるかどうかを返します。 <p> 問い合わせ先の位置は {@code pos.offset(facing.getOpposite())}です。 戻り値: `このプレイヤーが現在の世界のクエリー場所を変更できるかどうか` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

戻り値ブール値

```zenscript
myMCPlayerEntity.canPlayerEdit(crafttweaker.api.util.BlockPosと向きcrafttweaker.api.util.Direction, crafttweaker.api.item.IItemStack);
```

| パラメータ | タイプ                                                               | 説明           |
| ----- | ----------------------------------------------------------------- | ------------ |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | 説明が提供されていません |
| 面を向いて | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)    | 説明が提供されていません |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### canRenderOnFire

このエンティティを火のようにレンダリングするかどうかを返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

戻り値ブール値

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### canSwim

戻り値ブール値

```zenscript
myMCPlayerEntity.canSwim();
```

### canTryample

戻り値ブール値

```zenscript
myMCPlayerEntity.canTrample(crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| パラメータ        | タイプ                                                                     | 説明           |
| ------------ | ----------------------------------------------------------------------- | ------------ |
| 状態           | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | 説明が提供されていません |
| pos          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | 説明が提供されていません |
| fallDistance | float型                                                                  | 説明が提供されていません |


### canUpdate

戻り値ブール値

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(value as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| 値     | boolean型 | 説明が提供されていません |


### canUseCommandBlock

戻り値ブール値

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### clearActivePotions

戻り値ブール値

```zenscript
myMCPlayerEntity.clearActivePotions();
```

### clearBedPosition

```zenscript
myMCPlayerEntity.clearBedPosition();
```

### closeScreen

現在のクラフトのインベントリを2x2マスに戻します

```zenscript
myMCPlayerEntity.closeScreen();
```

### curePotionEffects

戻り値ブール値

```zenscript
myMCPlayerEntity.curePotionEffects(curativeItem as crafttweaker.api.item.IItemStack);
```

| パラメータ        | タイプ                                                               | 説明           |
| ------------ | ----------------------------------------------------------------- | ------------ |
| curativeItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### disableShield

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ as boolean);
```

| パラメータ         | タイプ      | 説明           |
| ------------- | -------- | ------------ |
| p_190777_1_ | boolean型 | 説明が提供されていません |


### doesEntityNotTriggerPressurePlate

このエンティティが圧力プレートまたはトリワイヤをトリガーすべきではないかどうかを返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### 等しい

戻り値ブール値

```zenscript
myMCPlayerEntity.equals(p_equals_1_ as Object);
```

| パラメータ         | タイプ    | 説明           |
| ------------- | ------ | ------------ |
| p_equals_1_ | オブジェクト | 説明が提供されていません |


### extinguish

エンティティから火を削除します。

```zenscript
myMCPlayerEntity.extinguish();
```

### 落下する

```zenscript
myMCPlayerEntity.fall(distance as float, damagEMultiplier as float);
```

| パラメータ            | タイプ    | 説明           |
| ---------------- | ------ | ------------ |
| 距離               | float型 | 説明が提供されていません |
| damageMultiplier | float型 | 説明が提供されていません |


### findAmmo

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(crafttweaker.api.item.IItemStack);
```

| パラメータ | タイプ                                                               | 説明           |
| ----- | ----------------------------------------------------------------- | ------------ |
| 撮影可能  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### func_213300_bk

戻り値ブール値

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ as double, p_213312_3_ as double, p_213312_5_ as double);
```

| パラメータ         | タイプ    | 説明           |
| ------------- | ------ | ------------ |
| p_213312_1_ | double | 説明が提供されていません |
| p_213312_3_ | double | 説明が提供されていません |
| p_213312_5_ | double | 説明が提供されていません |


### func_213314_bj

戻り値ブール値

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

float を返します。

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

戻り値ブール値

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn as crafttweaker.api.item.IItemStack);
```

| パラメータ       | タイプ                                                               | 説明           |
| ----------- | ----------------------------------------------------------------- | ------------ |
| itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### getAIMoveSpeed

新しいAIシステムに使用される移動速度

float を返します。

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAbsorptionAmount

吸収効果によって加えられる体力の量を返します。

float を返します。

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### getActivePotionEffect

は、与えられたポーションがアクティブな場合は PotionEffect を返します。それ以外の場合は null を返します。

戻り値 [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| パラメータ    | タイプ                                                                           | 説明           |
| -------- | ----------------------------------------------------------------------------- | ------------ |
| potionIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | 説明が提供されていません |


### getActivePotionEffects

戻り値 Collection<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### getAdjustedHorizontalFacing

このエンティティの水平面方向を取得し、特別に処理されたエンティティタイプを考慮するように調整します。

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getAdjustedHorizontalFacing();
```

### getAir

Returns int

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

戻り値ブール値

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Returns int

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### getBedDirection

このエンティティがスリープしている場合、カメラの向きを取得します。

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### getBedLocation

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockState

戻り値 [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### getBrightness

このエンティティの明るさを取得します。

float を返します。

```zenscript
myMCPlayerEntity.getBrightness();
```

### getBrightnessForRender

Returns int

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

戻り値の文字列

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getClassification

戻り値 [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount as boolean);
```

| パラメータ         | タイプ      | 説明           |
| ------------- | -------- | ------------ |
| forSpawnCount | boolean型 | 説明が提供されていません |


### getCollisionBorderSize

float を返します。

```zenscript
myMCPlayerEntity.getCollisionBorderSiz();
```

### getResoldownPeriod

float を返します。

```zenscript
myMCPlayerEntity.getCooldownPeriod();
```

### getCooledAttackStrength

クールダウンに基づいて攻撃力のパーセンテージを返します（0から1）。

float を返します。

```zenscript
myMCPlayerEntity.getCooledAttackStrength(float型としてTicksを調整);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 調整開始日 | float型 | 説明が提供されていません |


### getDigSpeed

float を返します。

```zenscript
myMCPlayerEntity.getDigSpeed(state as crafttweaker.api.block.MCBlockState);
```

| パラメータ | タイプ                                                                     | 説明           |
| ----- | ----------------------------------------------------------------------- | ------------ |
| 状態    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | 説明が提供されていません |



float を返します。

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as crafttweaker.api.block.MCBlockState, arg1 as crafttweaker.api.util.BlockPos);
```

| パラメータ | タイプ                                                                     | 説明           |
| ----- | ----------------------------------------------------------------------- | ------------ |
| arg0  | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | 説明が提供されていません |
| arg1  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | 説明が提供されていません |


### getDistanceSq

Double を返します。

```zenscript
myMCPlayerEntity.getDistanceSq(x as double, y as double, z as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### getEntityId

Returns int

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

戻り値の文字列

```zenscript
myMCPlayerEntity.getEntityString();
```

### getEyeHeight

float を返します。

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Returns int

```zenscript
myMCPlayerEntity.getFireTimer();
```

### getHealth

float を返します。

```zenscript
myMCPlayerEntity.getHealth();
```

### getHeight

float を返します。

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### getHorizontalFacing

このエンティティの水平面方向を取得します。

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

Returns int

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Returns int

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Returns int

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Returns int

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

float を返します。

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Returns int

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

エンティティが割り当てられている場所からの最大高さ (パスファインダーで使用)

Returns int

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

float を返します。

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

このエンティティが転送される前にポータルに滞在する時間を返します。

Returns int

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

これに乗っているすべてのエンティティの位置からYオフセットを返します。

Double を返します。

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

図形の現在のピッチを取得します。

float を返します。

```zenscript
myMCPlayerEntity.getPitch(partialTicks as float);
```

| パラメータ        | タイプ    | 説明           |
| ------------ | ------ | ------------ |
| partialTicks | float型 | 説明が提供されていません |


### getPortalCooldown

このエンティティが再びポータルを使用できるまでのクールダウン量を返します。

Returns int

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### getPosition

世界での地位を手に入れよう。 <b>{@code null} is not allowed!</b> If you are not an entity in the world, return the coordinates 0, 0, 0

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

float を返します。

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Returns int

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

float を返します。

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### getScore

Returns int

```zenscript
myMCPlayerEntity.getScore();
```

### getScoreboardName

スコアボード/エンティティセレクタシステムでこのエンティティの名前として使用する文字列を返します。

戻り値の文字列

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### getSleepTimer

Returns int

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmergedHeight

Double を返します。

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### getSwimAnimation

float を返します。

```zenscript
myMCPlayerEntity.getSwimAnimation(partialTicks as float);
```

| パラメータ        | タイプ    | 説明           |
| ------------ | ------ | ------------ |
| partialTicks | float型 | 説明が提供されていません |


### getSwingProgress

スイングアニメーションの進行を取得します。範囲は 0.0 から 1.0 です。

float を返します。

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime as float);
```

| パラメータ           | タイプ    | 説明           |
| --------------- | ------ | ------------ |
| partialTickTime | float型 | 説明が提供されていません |


### getTags

返品セット<String>

```zenscript
myMCPlayerEntity.getTags();
```

### getTeleportDirection

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### getTicksElytraFlying

Returns int

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### getTotalArmorValue

InventoryPlayer.getTotalArmorValue の呼び出しによって決定された現在のアーマー値を返します。

Returns int

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

float を返します。

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPseed

Returns int

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

このエンティティのYオフセットを返します。

Double を返します。

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

エンティティの現在のヨーを取得します

float を返します。

```zenscript
myMCPlayerEntity.getYaw(partialTicks as float);
```

| パラメータ        | タイプ    | 説明           |
| ------------ | ------ | ------------ |
| partialTicks | float型 | 説明が提供されていません |


### giveExperiencePoints

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ を int);
```

| パラメータ         | タイプ | 説明           |
| ------------- | --- | ------------ |
| p_195068_1_ | int | 説明が提供されていません |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id as byte);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| id    | バイト | 説明が提供されていません |


### handleWaterMovement

このエンティティが水中にある場合、水の速度をエンティティに加えることになるかどうかを返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### hasCustomName

戻り値ブール値

```zenscript
myMCPlayerEntity.hasCustomName();
```

### hasNoGravity

戻り値ブール値

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### hasPermissionLevel

戻り値ブール値

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ を int);
```

| パラメータ         | タイプ | 説明           |
| ------------- | --- | ------------ |
| p_211513_1_ | int | 説明が提供されていません |


### hasReducedDebug

"reducedDebugInfo" オプションがこのプレーヤーでアクティブかどうか。

戻り値ブール値

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Returns int

```zenscript
myMCPlayerEntity.hashCode();
```

### 治癒する

生きているエンティティを回復する（パラメ：半分ハートの量）

```zenscript
myMCPlayerEntity.heal(healAmount as float);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 治療量   | float型 | 説明が提供されていません |


### ignoreItemEntityData

プレイヤーがこのエンティティを使用して、直接または (give や setblockなど) のいずれかで、オペレータ(権限レベル 2)コマンドにアクセスできるかどうかを確認します。 {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}にも同様の方法が存在します。<p>例えば、{@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() コマンド block minecarts} and {@link
 net.minecraft.entity.item.EntityMinecraftMobSpawner#reignoreItemEntityData() (spawning command
 block minecartsまたはdrops) はアクセス可能であると見なされます。</p>戻り値: `このエンティティが許可されていない
 プレイヤーが制限されたコマンドを使用する方法を提供する場合はtrue`

戻り値ブール値

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### isActiveItemStackBlocking

戻り値ブール値

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### isAddedToWorld

戻り値ブール値

```zenscript
myMCPlayerEntity.isAddedToWorld();
```

### isAlive

エンティティがされていない場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isAlive();
```

### isAllowEdit

戻り値ブール値

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

少なくとも1つのエンティティがこのエンティティに乗っている場合

戻り値ブール値

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### isBurning

エンティティが燃えている場合は true を返します。 renderでレンダリング時の火災効果を追加するために使用されます。

戻り値ブール値

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

Animalの場合、年齢タイマーが負かどうかをチェックします

戻り値ブール値

```zenscript
myMCPlayerEntity.isChild();
```

### isCreative

戻り値ブール値

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomNameVisible

戻り値ブール値

```zenscript
myMCPlayerEntity.isCustomNameVisible();
```

### isElytraFlying

戻り値ブール値

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

この図形が不透明なブロックの中にあるかどうかをチェックします。

戻り値ブール値

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

このエンティティがアンデッドの場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### isGlowing

戻り値ブール値

```zenscript
myMCPlayerEntity.isGlowing();
```

### isHandActive

戻り値ブール値

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

戻り値ブール値

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

戻り値ブール値

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

戻り値ブール値

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

戻り値ブール値

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x as double, y as double, z as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### isInRangeToRenderDist

エンティティが範囲内にあるかどうかを確認します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(distance as as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 距離    | double | 説明が提供されていません |


### isInWater

このエンティティが水中にあるかどうかをチェックします(handleWaterMovement() が true を返した結果として inWater フィールドが真の場合)

戻り値ブール値

```zenscript
myMCPlayerEntity.isInWater();
```

### isInWaterOrBubbleカラム

戻り値ブール値

```zenscript
myMCPlayerEntity.isInWaterOrBubbleColumn();
```

### isInWaterRainOrBubbleColumn

戻り値ブール値

```zenscript
myMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### isInvisible

戻り値ブール値

```zenscript
myMCPlayerEntity.isInvisible();
```

### isInvisibleToPlayer

EntityLivingBase サブクラスのレンダラーによってのみ使用されます。 エンティティが通常非表示の場合、エンティティが特定のプレイヤーに表示されるかどうかを決定します。 EntityLivingBaseサブクラスの場合、見えない場合にfalseを返すと、エンティティが半透明になります。

戻り値ブール値

```zenscript
myMCPlayerEntity.isInvibleToPlayer(playeras crafttweaker.api.entity.player.MCPlayerEntity);
```

| パラメータ | タイプ                                                                                        | 説明           |
| ----- | ------------------------------------------------------------------------------------------ | ------------ |
| プレイヤー | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | 説明が提供されていません |


### isInvulnerable

戻り値ブール値

```zenscript
myMCPlayerEntity.isInvulnerable();
```

### isLiving

戻り値ブール値

```zenscript
myMCPlayerEntity.isLiving();
```

### isNonBoss

このエンティティが上司の場合は false を返し、それ以外の場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isNonBoss();
```

### isOffsetPositionInLiquid

エンティティの現在位置からのオフセット位置が液体の内部にあるかどうかを確認します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x as double, y as double, z as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### isOnLadder

このエンティティがはしごの上にあるかのように動く場合は true を返します（実際ははしごの上にあるため） もしくは の理由で)

戻り値ブール値

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

戻り値ブール値

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### isPassenger

戻り値ブール値

```zenscript
myMCPlayerEntity.isPassenger();
```

### isPlayerFullyAsleep

プレイヤーがスリープ状態で画面が完全にフェード状態になっているかどうかを返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### isPotionActive

戻り値ブール値

```zenscript
myMCPlayerEntity.isPotionActive(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| パラメータ    | タイプ                                                                           | 説明           |
| -------- | ----------------------------------------------------------------------------- | ------------ |
| potionIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | 説明が提供されていません |


### isPotionApplicable

戻り値ブール値

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| パラメータ          | タイプ                                                                                           | 説明           |
| -------------- | --------------------------------------------------------------------------------------------- | ------------ |
| potioneffectIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | 説明が提供されていません |


### isPushedByWater

戻り値ブール値

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

エンティティがサーバーのワールドにあるかどうかを返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

戻り値: `このエンティティがサウンドを再生しない場合は True`

戻り値ブール値

```zenscript
myMCPlayerEntity.isSilent();
```

### アイスリープ

プレイヤーが眠っているかどうかを返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

このエンティティがスニークしている場合に返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isSneaking();
```

### isSpawnForceed

戻り値ブール値

```zenscript
myMCPlayerEntity.isSpawnForce();
```

### isSpectator

プレイヤーが観戦モードの場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinAttacking

戻り値ブール値

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

エンティティがスプリントされている場合は取得します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isSprinting();
```

### isSwimming

戻り値ブール値

```zenscript
myMCPlayerEntity.isSwiming();
```

### isUser

は、EntityPlayerSP またはログインしたプレーヤーの場合は true を返します。

戻り値ブール値

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

このエンティティが水中か雨の中で空気のブロックにあるかどうかをチェックします（オオカミで使用されます）。

戻り値ブール値

```zenscript
myMCPlayerEntity.isWet();
```

### ジャンプ

このエンティティを上向きの動作 (ジャンプ) させます。

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

頻繁に呼び出されるので、エンティティは必要に応じて毎にその状態を更新することができます。 例えば、ゾンビや骸骨 はこれを使って日光に反応し、燃え始めます。

```zenscript
myMCPlayerEntity.livingTick();
```

### moveToBlockPosAndAngles

```zenscript
myMCPlayerEntity.moveToBlockPosAndAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn as float, rotationPitchIn as float);
```

| パラメータ           | タイプ                                                          | 説明           |
| --------------- | ------------------------------------------------------------ | ------------ |
| pos             | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 説明が提供されていません |
| rotationYawIn   | float型                                                       | 説明が提供されていません |
| rotationPitchIn | float型                                                       | 説明が提供されていません |


### onAddedToWorld

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollideWithPlayer

プレイヤーがエンティティと衝突したときに呼び出されます

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn as crafttweaker.api.entity.player.MCPlayerEntity);
```

| パラメータ    | タイプ                                                                                        | 説明           |
| -------- | ------------------------------------------------------------------------------------------ | ------------ |
| entityIn | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | 説明が提供されていません |


### onEnchant

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem as crafttweaker.api.item.IItemStack, cost as int);
```

| パラメータ         | タイプ                                                               | 説明           |
| ------------- | ----------------------------------------------------------------- | ------------ |
| エンチャントされたアイテム | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |
| コスト           | int                                                               | 説明が提供されていません |


### onEnterBubbleカラム

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(downwards as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| 下     | boolean型 | 説明が提供されていません |


### onEnterBubbleColumnWithAirAver

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAive(downwards as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| 下     | boolean型 | 説明が提供されていません |


### onKillCommand

/kill コマンドによって呼び出されます。

```zenscript
myMCPlayerEntity.onKillCommand();
```

### onRemovedFromWorld

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### performHurtAnimation

傷つけたアニメーションを実行するエンティティを設定します。 マルチプレイヤーのパケットでのみ使用されます。

```zenscript
myMCPlayerEntity.performantAnimation();
```

### preparePlayerToSpawn

エンティティを上に移動させて、このエンティティがスポーンされるブロックやその他の要件と衝突しないようにします。 (エンティティでも実際に使用されているもののみ)

```zenscript
myMCPlayerEntity.preparePlayerToSpawn();
```

### 再計算サイズ

```zenscript
myMCPlayerEntity.recalculateSize();
```

### 削除

```zenscript
myMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(keepData as boolean);
```

| パラメータ  | タイプ      | 説明           |
| ------ | -------- | ------------ |
| キープデータ | boolean型 | 説明が提供されていません |


### removeActivePotionEffect

戻り値 [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 as crafttweaker.api.potion.MCPotionEffect);
```

| パラメータ | タイプ                                                                           | 説明           |
| ----- | ----------------------------------------------------------------------------- | ------------ |
| arg0  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | 説明が提供されていません |


### removePassengers

このエンティティに乗っているすべてのエンティティをアンマウントします。

```zenscript
myMCPlayerEntity.removePassengers();
```

### removePotionEffect

戻り値ブール値

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| パラメータ    | タイプ                                                                           | 説明           |
| -------- | ----------------------------------------------------------------------------- | ------------ |
| effectIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | 説明が提供されていません |


### removeTag

戻り値ブール値

```zenscript
myMCPlayerEntity.removeTag(tag as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| タグ    | 文字列型 | 説明が提供されていません |


### replaceItemInInventory

戻り値ブール値

```zenscript
myMCPlayerEntity.replaceItemInInventory(inventorySlot を int, itemStackIn as crafttweaker.api.item.IItemStack);
```

| パラメータ         | タイプ                                                               | 説明           |
| ------------- | ----------------------------------------------------------------- | ------------ |
| inventorySlot | int                                                               | 説明が提供されていません |
| itemStackIn   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### resetActiveHand

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### resetPositionToBB

エンティティの位置をその境界ボックスの中心点(平面)と下点(垂直方向)にリセットします。

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### respawnPlayer

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### 蘇生する

```zenscript
myMCPlayerEntity.revive();
```

### rotateTowards

```zenscript
myMCPlayerEntity.rotateTowards(yaw as double, pitch as double);
```

| パラメータ    | タイプ    | 説明           |
| -------- | ------ | ------------ |
| ヨー...    | double | 説明が提供されていません |
| ピッチ(ピッチ) | double | 説明が提供されていません |


### sendEndCombat

END_COMBAT パケットをクライアントに送信

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### sendEnterCombat

ENTER_COMBAT パケットをクライアントに送信する

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### sendPlayerAbilities

プレイヤーの能力をサーバーに送信します(存在する場合)。

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### setAIMoveSpeed

新しいAIシステムに使用する移動速度を設定する

```zenscript
myMCPlayerEntity.setAImoveSpeed(speedIn as float);
```

| パラメータ   | タイプ    | 説明           |
| ------- | ------ | ------------ |
| speedIn | float型 | 説明が提供されていません |


### setAbsorptionAmount

```zenscript
myMCPlayerEntity.setAbsorptionAmount(amount as float);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 金額    | float型 | 説明が提供されていません |


### setAir

```zenscript
myMCPlayerEntity.setAir(air as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 空気    | int | 説明が提供されていません |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(count as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| カウント  | int | 説明が提供されていません |


### setBedPosition

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ as crafttweaker.api.util.BlockPos);
```

| パラメータ         | タイプ                                                          | 説明           |
| ------------- | ------------------------------------------------------------ | ------------ |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 説明が提供されていません |


### setCustomNameVisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(alwaysRenderNameTag as boolean);
```

| パラメータ               | タイプ      | 説明           |
| ------------------- | -------- | ------------ |
| alwaysRenderNameTag | boolean型 | 説明が提供されていません |


### setEntityId

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| id    | int | 説明が提供されていません |


### setFire

エンティティを x 秒間焼却するように設定します。既存の火炎の量を減らすことはできません。

```zenscript
myMCPlayerEntity.setFire(seconds as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 秒     | int | 説明が提供されていません |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ を int);
```

| パラメータ         | タイプ | 説明           |
| ------------- | --- | ------------ |
| p_223308_1_ | int | 説明が提供されていません |


### setGlowing

```zenscript
myMCPlayerEntity.setGlowing(glowingIn as boolean);
```

| パラメータ     | タイプ      | 説明           |
| --------- | -------- | ------------ |
| glowingIn | boolean型 | 説明が提供されていません |


### setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(floatとしてyaw、intとしてピッチ);
```

| パラメータ    | タイプ    | 説明           |
| -------- | ------ | ------------ |
| ヨー...    | float型 | 説明が提供されていません |
| ピッチ(ピッチ) | int    | 説明が提供されていません |


### setHealth

```zenscript
myMCPlayerEntity.setHealth(health as float);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 健康    | float型 | 説明が提供されていません |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn as int);
```

| パラメータ      | タイプ | 説明           |
| ---------- | --- | ------------ |
| idleTimeIn | int | 説明が提供されていません |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### setInvisible

```zenscript
myMCPlayerEntity.setInvisible(invisible as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| 見えない  | boolean型 | 説明が提供されていません |


### setInvulnerable

エンティティが無敵であるかどうかを設定します。

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerable as boolean);
```

| パラメータ          | タイプ      | 説明           |
| -------------- | -------- | ------------ |
| isInvulnerable | boolean型 | 説明が提供されていません |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(jump as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| ジャンプ  | boolean型 | 説明が提供されていません |


### setLocationAndAngles

ワールド内のエンティティの位置とヨー/ピッチを設定します

```zenscript
myMCPlayerEntity.setLocationAndAngles(x as double, y as double, z as double, yaw as float, pitch as float);
```

| パラメータ    | タイプ    | 説明           |
| -------- | ------ | ------------ |
| x        | double | 説明が提供されていません |
| y        | double | 説明が提供されていません |
| z        | double | 説明が提供されていません |
| ヨー...    | float型 | 説明が提供されていません |
| ピッチ(ピッチ) | float型 | 説明が提供されていません |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x as double, y as double, z as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### setNoGravity

```zenscript
myMCPlayerEntity.setNoGravity(noGravity as boolean);
```

| パラメータ     | タイプ      | 説明           |
| --------- | -------- | ------------ |
| noGravity | boolean型 | 説明が提供されていません |


### setPartying

レコードが開始または再生を停止したときに呼び出されます。 オウムを開始またはパーティーを停止させるために使用されます。

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| パラメータ      | タイプ                                                          | 説明           |
| ---------- | ------------------------------------------------------------ | ------------ |
| pos        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 説明が提供されていません |
| isPartying | boolean型                                                     | 説明が提供されていません |


### setPortal

エンティティをポータル内にあることをマークし、次の tick(s) で onEntityUpdate() 内でテレポーテーションロジックをアクティブにします。

```zenscript
myMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| パラメータ | タイプ                                                          | 説明           |
| ----- | ------------------------------------------------------------ | ------------ |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 説明が提供されていません |


### setPosition

与えられたパラメータからエンティティのx,y,zを設定します。 また、バウンディングボックスを設定しているようです。

```zenscript
myMCPlayerEntity.setPosition(x を double, y を double, z を double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### setPositionAndRotation

位置と回転、クランプ、およびラップパラメータを有効な値に設定します。 ネットワークコードで使用されます。

```zenscript
myMCPlayerEntity.setPositionAndRotation(x を double, y を double, z を double, yaw を float, pitch を float, pitch を float);
```

| パラメータ    | タイプ    | 説明           |
| -------- | ------ | ------------ |
| x        | double | 説明が提供されていません |
| y        | double | 説明が提供されていません |
| z        | double | 説明が提供されていません |
| ヨー...    | float型 | 説明が提供されていません |
| ピッチ(ピッチ) | float型 | 説明が提供されていません |


### setPositionAndRotationDirect

クライアントが次の数ティックに向かって補間するターゲットを設定します

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(xをdouble, yをdouble, zをdouble, yawをfloat, pitchをfloat, posRotationIncrements を int, teleport を boolean);
```

| パラメータ                 | タイプ      | 説明           |
| --------------------- | -------- | ------------ |
| x                     | double   | 説明が提供されていません |
| y                     | double   | 説明が提供されていません |
| z                     | double   | 説明が提供されていません |
| ヨー...                 | float型   | 説明が提供されていません |
| ピッチ(ピッチ)              | float型   | 説明が提供されていません |
| posRotationIncrements | int      | 説明が提供されていません |
| テレポートする               | boolean型 | 説明が提供されていません |


### setPositionAndUpdate

図形の位置を設定し、'last' 変数を更新します。

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x as double, y as double, z as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### setPositionNonDirty

戻り値ブール値

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebugをbooleanとして);
```

| パラメータ        | タイプ      | 説明           |
| ------------ | -------- | ------------ |
| reducedDebug | boolean型 | 説明が提供されていません |


### setRenderYawOffset

レンダリングヨーオフセットを設定

```zenscript
myMCPlayerEntity.setRenderYawOffset(offset as float);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| オフセット | float型 | 説明が提供されていません |


### setRotationYawHead

エンティティの頭のヨー回転を設定します。

```zenscript
myMCPlayerEntity.setRotationYawHead(rotation as float型);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 回転    | float型 | 説明が提供されていません |


### setScore

プレイヤーのスコアを設定

```zenscript
myMCPlayerEntity.setScore(scoreIn as int);
```

| パラメータ   | タイプ | 説明           |
| ------- | --- | ------------ |
| scoreIn | int | 説明が提供されていません |


### setSilent

true に設定すると、エンティティはサウンドを再生しません。

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| パラメータ    | タイプ      | 説明           |
| -------- | -------- | ------------ |
| isSilent | boolean型 | 説明が提供されていません |


### setSnaking

スニークフラグを設定します。

```zenscript
myMCPlayerEntity.setSneaking(sneaking as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| 卑劣な   | boolean型 | 説明が提供されていません |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, forced as boolean);
```

| パラメータ | タイプ                                                          | 説明           |
| ----- | ------------------------------------------------------------ | ------------ |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 説明が提供されていません |
| 強制的に  | boolean型                                                     | 説明が提供されていません |


### setSprinting

エンティティのスプリントスイッチを設定します。

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| パラメータ  | タイプ      | 説明           |
| ------ | -------- | ------------ |
| スプリント中 | boolean型 | 説明が提供されていません |


### setSwimming

```zenscript
myMCPlayerEntity.setSwiming(p_204711_1_ as boolean);
```

| パラメータ         | タイプ      | 説明           |
| ------------- | -------- | ------------ |
| p_204711_1_ | boolean型 | 説明が提供されていません |


### setVelocity

サーバーからのパケットによって呼び出されたエンティティモーションクライアント側を更新します

```zenscript
myMCPlayerEntity.setVelocity(x as double, y as double, z as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| x     | double | 説明が提供されていません |
| y     | double | 説明が提供されていません |
| z     | double | 説明が提供されていません |


### 体力を回復する

プレイヤーの体力が一杯でもゼロでもないかどうかをチェックします。

戻り値ブール値

```zenscript
myMCPlayerEntity.shouldHeal();
```

### shouldReceiveError

戻り値ブール値

```zenscript
myMCPlayerEntity.shouldReceiveErrors();
```

### 受信フィードバック

戻り値ブール値

```zenscript
myMCPlayerEntity.shouldReceiveFeedback();
```

### shouldRenderSnake

戻り値ブール値

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### shouldRiderFaceForward

マウント時にエンティティのライダー(EntityPlayer)が前方に向かう場合は true を返します。 現在は豚のバニラコードでしか使われていません

戻り値ブール値

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(playeras crafttweaker.api.entity.player.MCPlayerEntity);
```

| パラメータ | タイプ                                                                                        | 説明                 |
| ----- | ------------------------------------------------------------------------------------------ | ------------------ |
| プレイヤー | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | エンティティに乗っているプレイヤー。 |


### shouldRiderSit

戻り値ブール値

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### spawnRunningParticles

実体が、水の中でなく、ばねている場合、ばねている粒子を作成しようとします。

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

| パラメータ         | タイプ                                                          | 説明           |
| ------------- | ------------------------------------------------------------ | ------------ |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 説明が提供されていません |


### startSpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ を int);
```

| パラメータ         | タイプ | 説明           |
| ------------- | --- | ------------ |
| p_204803_1_ | int | 説明が提供されていません |


### stopActiveHand

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### stopRiding

このエンティティをそれが乗っているエンティティからアンマウントします。

```zenscript
myMCPlayerEntity.stopRiding();
```

### テレポートKeepLoaded

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ as double, p_223102_3_ as double, p_223102_5_ as double);
```

| パラメータ         | タイプ    | 説明           |
| ------------- | ------ | ------------ |
| p_223102_1_ | double | 説明が提供されていません |
| p_223102_3_ | double | 説明が提供されていません |
| p_223102_5_ | double | 説明が提供されていません |


### ティック(tick)

エンティティの位置/ロジックを更新するために呼び出されます。

```zenscript
myMCPlayerEntity.tick();
```

### toString

戻り値の文字列

```zenscript
myMCPlayerEntity.toString();
```

### updateRidden

別のエンティティに乗っている間に更新を処理します。

```zenscript
myMCPlayerEntity.updateRidden();
```

### updateSwimming

```zenscript
myMCPlayerEntity.updateSwiming();
```

### ウェイクアップ

```zenscript
myMCPlayerEntity.wakeUp();
```

### ウェイクアッププレイヤー

スリープ状態になったらプレイヤーを起動してください。

```zenscript
myMCPlayerEntity.wakeUpPlayer(boolean, updateWorldFlag を boolean, setSpawn を boolean);
```

| パラメータ           | タイプ      | 説明           |
| --------------- | -------- | ------------ |
| すぐに             | boolean型 | 説明が提供されていません |
| updateWorldFlag | boolean型 | 説明が提供されていません |
| setSpawn        | boolean型 | 説明が提供されていません |


### xpBarCap

このメソッドは、エクスペリエンスバーが保持できる経験値の上限を返します。 各レベルでは、プレイヤーの経験値バーの キャップが10上昇します。

Returns int

```zenscript
myMCPlayerEntity.xpBarCap();
```


