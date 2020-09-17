# MCPlayerEntity #MC玩家实体

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## 方法
### addExhaustion #增加饥饿值

通过所提供的数值增加饥饿值

```zenscript
myMCPlayerEntity.addExhaustion(exhaustion as float);
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| exhaustion | 浮点数 | No description provided |


### addExperienceLevel #提升经验等级

提升此玩家的经验等级

```zenscript
myMCPlayerEntity.addExperienceLevel(levels as int);
```

| 参数     | 类型 | 描述                      |
| ------ | -- | ----------------------- |
| levels | 整数 | No description provided |


### addItemStackToInventory #在背包中添加物品堆叠

返回为布尔值

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| 参数            | 类型                                                                | 描述                      |
| ------------- | ----------------------------------------------------------------- | ----------------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### addMovementStat #添加移动统计

为移动统计添加一个值——如跑步、步行、游泳或攀登。

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ as double, p_71000_3_ as double, p_71000_5_ as double);
```

| 参数           | 类型  | 描述                      |
| ------------ | --- | ----------------------- |
| p_71000_1_ | 双精度 | No description provided |
| p_71000_3_ | 双精度 | No description provided |
| p_71000_5_ | 双精度 | No description provided |


### addPotionEffect #添加药水效果

返回为布尔值

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| 参数                     | 类型                                                                                            | 描述                      |
| ---------------------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effectInstanceIn #效果实例 | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### addScore #添加分数

添加到玩家分数

```zenscript
myMCPlayerEntity.addScore(scoreIn as int);
```

| 参数      | 类型 | 描述                      |
| ------- | -- | ----------------------- |
| scoreIn | 整数 | No description provided |


### addTag #添加tag

返回为布尔值

```zenscript
myMCPlayerEntity.addTag(tag as String);
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 标签 | 字符串[string] | No description provided |


### addVelocity #增加速度

为实体的当前速度添加一个值,并设置为true

```zenscript
myMCPlayerEntity.addVelocity(x as double, y as double, z as double);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### allowLogging #允许记录日志

返回为布尔值

```zenscript
myMCPlayerEntity.allowLogging();
```

### attackable #可攻击的

返回为布尔值

```zenscript
myMCPlayerEntity.attackable();
```

### attemptTeleport #是否尝试传送

返回为布尔值

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ as double, p_213373_3_ as double, p_213373_5_ as double, p_213373_7_ as boolean);
```

| 参数            | 类型      | 描述                      |
| ------------- | ------- | ----------------------- |
| p_213373_1_ | 双精度     | No description provided |
| p_213373_3_ | 双精度     | No description provided |
| p_213373_5_ | 双精度     | No description provided |
| p_213373_7_ | boolean | No description provided |


### baseTick #基础游戏刻

Gets called every tick from main Entity class #从主要实体类获取所有游戏刻

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer #可以攻击玩家

返回为布尔值

```zenscript
myMCPlayerEntity.canAttackPlayer(other as crafttweaker.api.entity.player.MCPlayerEntity);
```

| 参数    | 类型                                                                                         | 描述                      |
| ----- | ------------------------------------------------------------------------------------------ | ----------------------- |
| other | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | No description provided |


### canBeAttackedWithItem #可以被物体攻击

如果可能用物品攻击该实体,则返回true

返回为布尔值

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### canBeCollidedWith #具有碰撞箱

如果此实体可以阻止其他实体的移动,则反为真

返回为布尔值

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### canBeHitWithPotion #可以被药水瓶击中

如果实体为盔甲架,则返回false 如果是其他实体生物则返回为true

返回为布尔值

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### canBePushed #可以被推动

如果该实体在与其他实体碰撞时可以被推动,则返回值true

返回为布尔值

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater #可以潜水

返回为布尔值

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### canBreatheUnderwater

返回为布尔值

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat #可以进食

返回为布尔值

```zenscript
myMCPlayerEntity.canEat(ignoreHunger as boolean);
```

| 参数           | 类型      | 描述                      |
| ------------ | ------- | ----------------------- |
| ignoreHunger | boolean | No description provided |


### canHarvestBlock #可以破坏方块

返回为布尔值

```zenscript
myMCPlayerEntity.canHarvestBlock(state as crafttweaker.api.block.MCBlockState);
```

| 参数    | 类型                                                                      | 描述                      |
| ----- | ----------------------------------------------------------------------- | ----------------------- |
| state | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No description provided |


### canPassengerSteer #可以乘坐

返回为布尔值

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit #可以由玩家编辑

返回此玩家是否可以在某个地点使用给定的堆栈修改方块。 <p> 查询位置是 {@code pos.offset(facing.getOpposite()}。 返回：`此玩家是否可以修改当前世界中查询的位置` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowededge

返回为布尔值

```zenscript
myMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, facing as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| 参数    | 类型                                                                | 描述                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| 点     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | No description provided |
| 方向    | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)    | No description provided |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### canRenderOnFire #是否能被渲染为着火

返回该实体能否被渲染为着火

返回为布尔值

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract #是否可以互动

返回为布尔值

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### canSwim #是否可以游泳

返回为布尔值

```zenscript
myMCPlayerEntity.canSwim();
```

### canTrample #是否能被踩踏

返回为布尔值

```zenscript
myMCPlayerEntity.canTrample(state as crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| 参数    | 类型                                                                      | 描述                      |
| ----- | ----------------------------------------------------------------------- | ----------------------- |
| state | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No description provided |
| 点     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | No description provided |
| 下落距离  | 浮点数                                                                     | No description provided |


### canUpdate #是否能被更新

返回为布尔值

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(值为布尔型);
```

| 参数    | 类型      | 描述                      |
| ----- | ------- | ----------------------- |
| value | boolean | No description provided |


### canUseCommandBlock #是否可以使用命令方块

返回为布尔值

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### clearActivePotions #清除药水效果

返回为布尔值

```zenscript
myMCPlayerEntity.clearActivePotions();
```

### clearBedPosition #清除床的位置

```zenscript
myMCPlayerEntity.clearBedPosition();
```

### closeScreen #关闭屏幕

把当前合成栏设置回2x2个格子

```zenscript
myMCPlayerEntity.closeScreen();
```

### curePotionEffects #清除药水效果

返回为布尔值

```zenscript
myMCPlayerEntity.curePotionEffects(治疗的效果为 crafttweaker.api.item.IItemStack);
```

| 参数    | 类型                                                                | 描述                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| 治疗的效果 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### detach #分离

```zenscript
myMCPlayerEntity.detach();
```

### disableShield #禁用盾

```zenscript
myMCPlayerEntity.disableShield（p_190777_1_ 为布尔值）；
```

| 参数            | 类型      | 描述                      |
| ------------- | ------- | ----------------------- |
| p_190777_1_ | boolean | No description provided |


### doesEntityNotTriggerPressurePlate #实体是否会触发压力板

返回此实体是否会触发压力板或绊线。

返回为布尔值

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### equals #等于

返回为布尔值

```zenscript
myMCPlayerEntity.equals(p_equals_1_ as Object);
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_equals_1_ | 对象 | No description provided |


### extinguish

从实体中移除火灾。

```zenscript
myMCPlayerEntity.extinguish();
```

### 落地

```zenscript
myMCPlayerEntity.fall(distance as float, damageMultiplier as float);
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| 距离   | 浮点数 | No description provided |
| 伤害加成 | 浮点数 | No description provided |


### 查找弹药

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(shootable as crafttweaker.api.item.IItemStack);
```

| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| 可拍摄的 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### func_213300_bk

返回为布尔值

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ as double, p_213312_3_ as double, p_213312_5_ as double);
```

| 参数            | 类型  | 描述                      |
| ------------- | --- | ----------------------- |
| p_213312_1_ | 双精度 | No description provided |
| p_213312_3_ | 双精度 | No description provided |
| p_213312_5_ | 双精度 | No description provided |


### 213314_bj

返回为布尔值

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

返回浮点数

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

返回为布尔值

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn as crafttweaker.api.item.IItemStack);

```

| 参数     | 类型                                                                | 描述                      |
| ------ | ----------------------------------------------------------------- | ----------------------- |
| 物品堆栈进入 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### getAIMove速度

用于新的 AI 系统的已移动的

返回浮点数

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAbsortion金额

返回由吸收效果添加的健康数量。

返回浮点数

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### getActivePotionEffect

返回所提供的药水的药水效果，如果它是活跃的，则是无效的。

返回 [craftbinstruer.api.potion.MCPotionEffect实例](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(药水作为craftweer.api.potion.MCPotionEffect);
```

| 参数 | 类型                                                                    | 描述                      |
| -- | --------------------------------------------------------------------- | ----------------------- |
| 药水 | [制作效果.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No description provided |


### getActivePotionEffects

返回收藏<[craftminstruer.api.potion.MCPotionEffect实例](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### 获取调整水平面

获取这个实体的水平正向方向，调整以考虑到特殊处理的实体类型。

返回 [craftbinstruer.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getAdjustedHorizontalFacing();
```

### getAir

返回为int值

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

返回为布尔值

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

返回为int值

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### 获取贝德方向

如果该实体正在睡觉，则获取相机方向

返回 [craftbinstruer.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### getBedlocation

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockState

返回值 [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### 获取亮度

获取这个实体的亮度。

返回浮点数

```zenscript
myMCPlayerEntity.getBrightness();
```

### getBrightnessForender

返回为int值

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

返回字符串[String]

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### get分类

返回 [craftbinstruer.api.entity.MCEntityClassis](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount作为布尔值)；
```

| 参数             | 类型      | 描述                      |
| -------------- | ------- | ----------------------- |
| forSpawnCounty | boolean | No description provided |


### getCollisionBorderSize

返回浮点数

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### getCooldown会计期间

返回浮点数

```zenscript
myMCPlayerEntity.getCooldownPeriod();
```

### getCooledAttackStower

返回基于冷却时间的攻击能量百分比(从零到一)。

返回浮点数

```zenscript
myMCPlayerEntity.getCooledAttackStrength(调整工单为浮点数)；
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| 调整工单 | 浮点数 | No description provided |


### getDigSpeed

返回浮点数

```zenscript
myMCPlayerEntity.getDigSpeed(state as craftweeper.api.block.MCBlockState);
```

| 参数    | 类型                                                                      | 描述                      |
| ----- | ----------------------------------------------------------------------- | ----------------------- |
| state | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No description provided |



返回浮点数

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as craftweeper.api.block.MCBlockState, arg1 as craftbiner.api.util.BlockPos);
```

| 参数   | 类型                                                                      | 描述                      |
| ---- | ----------------------------------------------------------------------- | ----------------------- |
| arg0 | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No description provided |
| arg1 | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | No description provided |


### getDistanceSq

双倍返回

```zenscript
myMCPlayerEntity.getDistanceSq(x 倍，倍于倍，倍于倍，倍于倍)；
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### getEntityId

返回为int值

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

返回字符串[String]

```zenscript
myMCPlayerEntity.getEntityString();
```

### getEye高度

返回浮点数

```zenscript
myMCPlayerEntity.getEyeHight();
```

### getFireTimer

返回为int值

```zenscript
myMCPlayerEntity.getFireTimer();
```

### getHealth

返回浮点数

```zenscript
myMCPlayerEntity.getHealth();
```

### 获取高度

返回浮点数

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

### 获取水平面

获取此实体的水平正向方向。

返回 [craftbinstruer.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

返回为int值

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

返回为int值

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

返回为int值

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

返回为int值

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

返回浮点数

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

返回为int值

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

实体的最大高度 (用于路径查找器)

返回为int值

```zenscript
myMCPlayerEntity.getMaxFallHight();
```

### getMaxHealth

返回浮点数

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

返回该实体在传输前应停留在门户网站的时间。

返回为int值

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

返回任何实体乘坐这个实体的位置的 Y 偏移。

双倍返回

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

获取实体的当前音量。

返回浮点数

```zenscript
myMCPlayerEntity.getPitch(partialTicks as float)；
```

| 参数      | 类型  | 描述                      |
| ------- | --- | ----------------------- |
| 部分Ticks | 浮点数 | No description provided |


### getPortalCooldown

在此实体再次使用门户之前返回冷却量。

返回为int值

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### 获取位置

获得世界上的位置。 <b>{@code null} 是不允许的！</b> 如果您在世界上不是一个实体，返回 坐标0, 0, 0

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

返回浮点数

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

返回为int值

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

返回浮点数

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### 获取得分

返回为int值

```zenscript
myMCPlayerEntity.getScore();
```

### getScreboard名称

返回一个字符串作为该实体在计分板/实体选择器系统中的名称

返回字符串[String]

```zenscript
myMCPlayerEntity.getScorreboardName();
```

### getSleepTimer

返回为int值

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmergedheight

双倍返回

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### getSwim动画

返回浮点数

```zenscript
myMCPlayerEntity.getSwimanimation(partialTicks as float)；
```

| 参数      | 类型  | 描述                      |
| ------- | --- | ----------------------- |
| 部分Ticks | 浮点数 | No description provided |


### getSwingProgress

获取回旋动画的进度，从0.0到1.0不等。

返回浮点数

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime as float);
```

| 参数              | 类型  | 描述                      |
| --------------- | --- | ----------------------- |
| partialTickTime | 浮点数 | No description provided |


### 获取标签

返回集<String>

```zenscript
myMCPlayerEntity.getTags();
```

### getTeleportDirection

返回 [craftbinstruer.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### getTicksElytraFlying

返回为int值

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### getTotalArmorValue

返回当前装甲值作为调用到InventoryPlayer.getTotalArmorValue

返回为int值

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

返回浮点数

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPSeed

返回为int值

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

返回此实体的 Y 偏移。

双倍返回

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

获取当前实体的 yawa

返回浮点数

```zenscript
myMCPlayerEntity.getYaw(partialTicks as float)；
```

| 参数      | 类型  | 描述                      |
| ------- | --- | ----------------------- |
| 部分Ticks | 浮点数 | No description provided |


### 赠送经验点

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_int)；
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_195068_1_ | 整数 | No description provided |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id as byte);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| id | 字节 | No description provided |


### 手水运动

返回如果该实体在水中并最终会将水的速度添加到该实体中

返回为布尔值

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### hasCustom名称

返回为布尔值

```zenscript
myMCPlayerEntity.hasCustomName();
```

### 急性重力

返回为布尔值

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### hasmission级别

返回为布尔值

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_int)；
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_211513_1_ | 整数 | No description provided |


### 加速调试器

"reducedDebugInfo"选项是否对此玩家生效。

返回为布尔值

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

返回为int值

```zenscript
myMCPlayerEntity.hashCode();
```

### 恢复

治愈生命实体(参数：半心数)

```zenscript
myMCPlayerEntity.heal(治疗Amount as float)；
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| 治疗量 | 浮点数 | No description provided |


### 忽略项目属性数据

检查玩家是否可以使用此实体访问运算符 (权限级别2) 直接或 间接命令，例如授予或设置块。 对于{@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}中的实体存在类似的方法。<p>例如，{@link
 net.minecraft.entity.itey.EntityMinecartCommandBlock#ignoreItemEntityData() 命令 block minecarts} 和 {@link
 net.minecraft.entity.itey.item.EntityMinecartt MobSpawner#ignoreItemEntityData() mob spawner minecarts} (spawning 命令
 blockminecarts 或 drops) 都可以访问。</p>Returns: `true if this entity offers ways for unauthorized
 players to use restricted commands`

返回为布尔值

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### 禁用物品封禁

返回为布尔值

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### isaddedToWorld

返回为布尔值

```zenscript
myMCPlayerEntity.isaddedToWorld();
```

### isAlive

如果实体不是, 则返回 true。

返回为布尔值

```zenscript
myMCPlayerEntity.isAlive();
```

### 编辑

返回为布尔值

```zenscript
myMCPlayerEntity.isallowedit();
```

### isBeingRidden

如果至少有一个实体乘坐这个实体

返回为布尔值

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### isBurning

如果实体在火星上，则返回 true。 用于渲染时添加火焰效果。

返回为布尔值

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

如果动物的话，请检查年龄计时器是否为负数

返回为布尔值

```zenscript
myMCPlayerEntity.isChild();
```

### 有创意的

返回为布尔值

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomName可见

返回为布尔值

```zenscript
myMCPlayerEntity.isCustomNameVisible();
```

### isElytraFlim

返回为布尔值

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

检查此实体是否在一个不透明方块内

返回为布尔值

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

如果此实体未亡，则返回 true。

返回为布尔值

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### isGlowing

返回为布尔值

```zenscript
myMCPlayerEntity.isGlowing();
```

### isHandActive

返回为布尔值

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

返回为布尔值

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

返回为布尔值

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

返回为布尔值

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

返回为布尔值

```zenscript
myMCPlayerEntity.isInrangeToRender3d(fx as touble, y as 加倍, z as 加倍);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### isInRangeToRenderDist

检查实体是否在要渲染的范围内。

返回为布尔值

```zenscript
myMCPlayerEntity.isInrangeToRenderDist(距离加倍)；
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 距离 | 双精度 | No description provided |


### isInWater

检查这个实体是否在水中(如果水域因手水移动而是真的) 返回 true)

返回为布尔值

```zenscript
myMCPlayerEntity.isInWater();
```

### isInWaterOrbblet列

返回为布尔值

```zenscript
myMCPlayerEntity.isInWaterOrBubblColumn();
```

### isInWaterRainOrbblet列

返回为布尔值

```zenscript
myMCPlayerEntity.isInWaterRainOrBubblColumn();
```

### 不可见

返回为布尔值

```zenscript
myMCPlayerEntity.isInvisible();
```

### 不可见的 ToPlayer

仅供渲染器在 EntityLivingBase 子类中使用。 如果实体通常是不可见的，则确定实体是否为特定玩家可见性。 对于EntityLivingBase子类，隐藏时返回 false将使实体变得半透明。

返回为布尔值

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(player as craftbiner.api.entity.player.MCPlayerEntity);
```

| 参数  | 类型                                                                                         | 描述                      |
| --- | ------------------------------------------------------------------------------------------ | ----------------------- |
| 播放器 | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | No description provided |


### isInvulnerable

返回为布尔值

```zenscript
myMCPlayerEntity.isInvulable();
```

### 活着的

返回为布尔值

```zenscript
myMCPlayerEntity.isLiving();
```

### isNonBoss

如果此实体是老板，则返回 false，否则为 true。

返回为布尔值

```zenscript
myMCPlayerEntity.isNonBoss();
```

### isOffsetPositionInLiquid

检查实体当前位置的偏移位置是否在液体内。

返回为布尔值

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(fx as touble, y as 加倍, z as 加倍);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### isOnLader

如果这个实体应该移动像它在梯子上一样, 则返回 true(因为它实际上在梯子上, 或 for AI 理由)

返回为布尔值

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

返回为布尔值

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### 乘客人

返回为布尔值

```zenscript
myMCPlayerEntity.isPassenger();
```

### isPlayerFullyleep

返回玩家是否睡眠，屏幕已完全淡入。

返回为布尔值

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### 处于活动状态

返回为布尔值

```zenscript
myMCPlayerEntity.isPotionActive(药水作为craftbiner.api.potion.MCPotionEffect);
```

| 参数 | 类型                                                                    | 描述                      |
| -- | --------------------------------------------------------------------- | ----------------------- |
| 药水 | [制作效果.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No description provided |


### isPotionable

返回为布尔值

```zenscript
myMCPlayerEntity.isPotionApplicable(pottioneffectin as craftweer.api.potion.MCPotionEffectInstance)；
```

| 参数   | 类型                                                                                            | 描述                      |
| ---- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 药水效果 | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### isPushedByWater

返回为布尔值

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

返回实体是否在服务器世界

返回为布尔值

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

返回： `如果此实体不会播放声音`

返回为布尔值

```zenscript
myMCPlayerEntity.isSilent();
```

### 正在睡眠

返回玩家是否睡眠

返回为布尔值

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

如果此实体正在潜入，则返回此实体。

返回为布尔值

```zenscript
myMCPlayerEntity.isSneaking();
```

### Spawn强制使用

返回为布尔值

```zenscript
myMCPlayerEntity.isSpawnForced();
```

### isSpectator

如果玩家处于投影模式则返回 true。

返回为布尔值

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinattacking

返回为布尔值

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

如果实体正在冲浪，就会得到帮助。

返回为布尔值

```zenscript
myMCPlayerEntity.isSprinting();
```

### isSwiming

返回为布尔值

```zenscript
myMCPlayerEntity.isSwimming();
```

### 用户

如果这是一个 EntityPlayerSP或登录的玩家则返回 true。

返回为布尔值

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

检查该实体是否在水中，或在雨水中的空格(用在狼中)。

返回为布尔值

```zenscript
myMCPlayerEntity.isWet();
```

### 跳转

导致该实体提出上游动议（jumping）。

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

经常呼叫，以便实体能够根据需要更新其每个状态。 例如，僵尸和骨头 用来对日光做出反应并开始燃烧。

```zenscript
myMCPlayerEntity.livingTick();
```

### 移动ToBlockPosAndAngles

```zenscript
myMCPlayerEntity.moveToBlockPosAndangles(pos as craftbiner.api.util.BlockPos, rotationYawIn as float, rotationPitchin as float);
```

| 参数      | 类型                                                           | 描述                      |
| ------- | ------------------------------------------------------------ | ----------------------- |
| 点       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |
| 旋转Yawin | 浮点数                                                          | No description provided |
| 旋转音调    | 浮点数                                                          | No description provided |


### 已添加到世界中

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollideWidPlayer

当玩家与实体碰撞时被玩家实体调用

```zenscript
myMCPlayerEntity.onCollideWillayer(entityIn as craftbiner.api.entity.player.MCPlayerEntity)；
```

| 参数       | 类型                                                                                         | 描述                      |
| -------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| entityIn | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | No description provided |


### 松开的

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem as craftbiner.api.item.IItemStack, cost as int);
```

| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| 附魔物品 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |
| 费用   | 整数                                                                | No description provided |


### onEnterBubblable列

```zenscript
myMCPlayerEnterBubblColumn(降级为布尔值)；
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 下移 | boolean | No description provided |


### onEnterBubblColumnWiAirabove

```zenscript
myMCPlayerEnterBubblColumnWiAirAbove(下载为布尔值)；
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 下移 | boolean | No description provided |


### onKillCommand

由 /miller 命令呼叫。

```zenscript
myMCPlayerEntity.onKillCommand();
```

### onRemovedFromWorld

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### 执行休眠动画

设置实体进行伤害动画。 仅在多人游戏中使用数据包。

```zenscript
myMCPlayerEntity.performance HurtAnimation();
```

### 准备播放器生成器

保持实体向上移动，所以它不会与方块和其他要求碰撞才能生成这个实体 (实际上只用于玩家，尽管它也在实体上)

```zenscript
myMCPlayerEntity.preparrePlayerToSpawn();
```

### 重新计算大小

```zenscript
myMCPlayerEntity.重新计算Size();
```

### remove #移除

```zenscript
myMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(keepData as boolean);
```

| 参数   | 类型      | 描述                      |
| ---- | ------- | ----------------------- |
| 保存数据 | boolean | No description provided |


### 移除启用药水效果

返回 [craftbinstruer.api.potion.MCPotionEffect实例](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 as craftbiner.api.potion.MCPotionEffect);
```

| 参数   | 类型                                                                    | 描述                      |
| ---- | --------------------------------------------------------------------- | ----------------------- |
| arg0 | [制作效果.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No description provided |


### removePassengers

将该实体的所有实体从该实体中拔除。

```zenscript
myMCPlayerEntity.removePassengers();
```

### 移除药水效果

返回为布尔值

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as craftweeker.api.potion.MCPotionEffect);
```

| 参数 | 类型                                                                    | 描述                      |
| -- | --------------------------------------------------------------------- | ----------------------- |
| 特效 | [制作效果.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No description provided |


### removeTag

返回为布尔值

```zenscript
myMCPlayerEntity.removeTag(标记为字符串)；
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 标签 | 字符串[string] | No description provided |


### 替换物品库存

返回为布尔值

```zenscript
myMCPlayerEntity.replaceItemInventory(inventorySlot为int, itemStackin as craftbiner.api.IItemStack);
```

| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| 背包   | 整数                                                                | No description provided |
| 物品应用 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### 重置激活

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### 重置位置ToBB

将该实体的位置重置为其边界盒的中心点(行星)和底点(垂直)。

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### 重生玩家

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### 重生

```zenscript
myMCPlayerEntity.revve();
```

### 旋转方向

```zenscript
myMCPlayerEntity.rotateTows(yaw as mouble, pitch as 加倍);
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| 亚乌文 | 双精度 | No description provided |
| 音调  | 双精度 | No description provided |


### sendEndCombat

向客户端发送一个 END_COMBAT 包

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### 发送娱乐作战模式

向客户端发送ENTER_COMBAT 包

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### 发送玩家能力

将玩家的能力发送到服务器 (如果有一个)。

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### 设置移动速度

设置用于新的 AI 系统的移动文件

```zenscript
myMCPlayerEntity.setAIMoveSpeed(speedin as float);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 速度 | 浮点数 | No description provided |


### set吸收金额

```zenscript
myMCPlayerEntity.setAbsorptionAmount(浮点数)；
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 金额 | 浮点数 | No description provided |


### setAir

```zenscript
myMCPlayerEntity.setAir(空气为int);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| 空格 | 整数 | No description provided |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(计数为相关)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| 计数 | 整数 | No description provided |


### 设定贝德位置

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_as craftbiner.api.util.BlockPos);
```

| 参数            | 类型                                                           | 描述                      |
| ------------- | ------------------------------------------------------------ | ----------------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### setCustomName可见

```zenscript
myMCPlayerEntity.setCustomNameVisible(始终作为布尔值)
```

| 参数                  | 类型      | 描述                      |
| ------------------- | ------- | ----------------------- |
| alwaysRenderNameTag | boolean | No description provided |


### 设置 Id

```zenscript
myMCPlayerEntity.setEntityId(id 为int)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| id | 整数 | No description provided |


### setFire

将实体设置为燃烧x秒，不能降低现有火焰的数量。

```zenscript
myMCPlayerEntity.setFire(秒为int)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| 秒  | 整数 | No description provided |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_int)；
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_223308_1_ | 整数 | No description provided |


### setGlowing

```zenscript
myMCPlayerEntity.setGlowingglowingin as boolean;
```

| 参数        | 类型      | 描述                      |
| --------- | ------- | ----------------------- |
| glowingIn | boolean | No description provided |


### 设置头旋转

```zenscript
myMCPlayerEntity.setHeadRotation(yaw as float, pitch as int)；
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| 亚乌文 | 浮点数 | No description provided |
| 音调  | 整数  | No description provided |


### 设置生命值

```zenscript
myMCPlayerEntity.setHealth(health as float);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 健康 | 浮点数 | No description provided |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn as int)；
```

| 参数         | 类型 | 描述                      |
| ---------- | -- | ----------------------- |
| idleTimeIn | 整数 | No description provided |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### 设置不可见

```zenscript
myMCPlayerEntity.setInvisible(不可见为布尔值)；
```

| 参数  | 类型      | 描述                      |
| --- | ------- | ----------------------- |
| 不可见 | boolean | No description provided |


### setInvulnerable

设置这个实体是否不受伤害。

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerable as boolean);
```

| 参数             | 类型      | 描述                      |
| -------------- | ------- | ----------------------- |
| isInvulnerable | boolean | No description provided |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(jumping as boolean);
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 跳转 | boolean | No description provided |


### setlocationAndAngles

设置一个实体在世界上的位置和Yaw/Pitch

```zenscript
myMCPlayerEntity.setLocationAndAngles(x as 加倍，y as 加倍，z as 加倍，yaw as float，pitch as float)；
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| x   | 双精度 | No description provided |
| 年   | 双精度 | No description provided |
| z   | 双精度 | No description provided |
| 亚乌文 | 浮点数 | No description provided |
| 音调  | 浮点数 | No description provided |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x 双倍，当双倍，当z倍)；
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### 设置重力

```zenscript
myMCPlayerEntity.setNoGravity(nocravity as boolean);
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 重力 | boolean | No description provided |


### 正在设置

当记录开始或停止播放时拨打电话。 用于制作parrots 开始或停止配置。

```zenscript
myMCPlayerEntity.setPartying(pos as craftbiner.api.util.BlockPos, isPartying as boolean);
```

| 参数  | 类型                                                           | 描述                      |
| --- | ------------------------------------------------------------ | ----------------------- |
| 点   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |
| 组队中 | boolean                                                      | No description provided |


### setPortal

将该实体标记为在一个门户中，激活传送逻辑在 onEntityUpdate() 中，以下 tick(s)。

```zenscript
myMCPlayerEntity.setPortal(pos as craftwiner.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### 设置位置

设置给定参数中的实体x,y,z。 也似乎设置了一个边界盒。

```zenscript
myMCPlayerEntity.setPosition(fx as 两倍，y as 两倍，z 双倍)；
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### 设置位置AndRotation

设置位置和旋转、夹和包装参数为有效值。 用于网络代码。

```zenscript
myMCPlayerEntity.setPositionAndRotation(x as double, y as double, z as double, yaw as float, pitch as float);
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| x   | 双精度 | No description provided |
| 年   | 双精度 | No description provided |
| z   | 双精度 | No description provided |
| 亚乌文 | 浮点数 | No description provided |
| 音调  | 浮点数 | No description provided |


### setPositionAndRotationDirect

为客户端设置一个目标，以便在以后的几个刻度

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(x as double, y as double, z as double, yaw as float, poster RotationInc., as boolean);
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| x      | 双精度     | No description provided |
| 年      | 双精度     | No description provided |
| z      | 双精度     | No description provided |
| 亚乌文    | 浮点数     | No description provided |
| 音调     | 浮点数     | No description provided |
| 帖子旋转增量 | 整数      | No description provided |
| 传送器    | boolean | No description provided |


### setPositionAndUpdate

设置实体的位置并更新“最后”变量

```zenscript
myMCPlayerEntity.setPositionAndUpdate(fx as mouble, y as 加倍, z as 加倍);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### 设置位置NonDirty

返回为布尔值

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### 已设置简化调试

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug作为布尔值);
```

| 参数   | 类型      | 描述                      |
| ---- | ------- | ----------------------- |
| 简化调试 | boolean | No description provided |


### setRenderYawOffset

设置 render yaw 偏移

```zenscript
myMCPlayerEntity.setRenderYawOffset(偏移为浮点型)；
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| 偏移量 | 浮点数 | No description provided |


### setRotationYawHead

设置实体头部的亚乌旋转.

```zenscript
myMCPlayerEntity.setRotationYawHead(旋转为浮点数)；
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 旋转 | 浮点数 | No description provided |


### 设置得分

设置玩家得分

```zenscript
myMCPlayerEntity.setScorree(按原样)；
```

| 参数      | 类型 | 描述                      |
| ------- | -- | ----------------------- |
| scoreIn | 整数 | No description provided |


### setSilent

当设置为 true时，实体将不会播放声音。

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| 参数       | 类型      | 描述                      |
| -------- | ------- | ----------------------- |
| isSilent | boolean | No description provided |


### SetSneaking

设置潜行标志.

```zenscript
myMCPlayerEntity.setSneaking(sneaking as boolean)；
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 潜行 | boolean | No description provided |


### SpetwnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as craftbiner.api.util.BlockPos, forced as boolean);
```

| 参数  | 类型                                                           | 描述                      |
| --- | ------------------------------------------------------------ | ----------------------- |
| 点   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |
| 强制的 | boolean                                                      | No description provided |


### setSprinting

设置实体的打印开关。

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 刻录 | boolean | No description provided |


### 游泳集

```zenscript
myMCPlayerEntity.setSwiming(p_204711_1_as boolean);
```

| 参数            | 类型      | 描述                      |
| ------------- | ------- | ----------------------- |
| p_204711_1_ | boolean | No description provided |


### setVelocity

更新通过服务器数据包调用的实体移动客户端。

```zenscript
myMCPlayerEntity.setVelocity(fx as double, y as 加倍, z as 加倍);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| 年  | 双精度 | No description provided |
| z  | 双精度 | No description provided |


### 应愈合

检查玩家的健康状况是否不完整而不是零。

返回为布尔值

```zenscript
myMCPlayerEntity.shouldHeal();
```

### 应该接收错误

返回为布尔值

```zenscript
myMCPlayerEntity.shouldReceiveErrors();
```

### 应该接受反馈

返回为布尔值

```zenscript
myMCPlayerEntity.shouldReceiveFeedback();
```

### RenderSneaking

返回为布尔值

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### 应该RiderFaceward

如果实体的行程器 (EntityPlayer) 挂载时向前应返回 true。 目前仅用作猪的原版代码。

返回为布尔值

```zenscript
myMCPlayerEntity.shouldRiderFaceward(player as craftweeker.api.entity.player.MCPlayerEntity);
```

| 参数  | 类型                                                                                         | 描述         |
| --- | ------------------------------------------------------------------------------------------ | ---------- |
| 播放器 | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | 正在骑乘实体的玩家。 |


### 肩膀胱Sit

返回为布尔值

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### 生成 NRunning粒子

试图在实体正在旋转时而不是在水中创建印制粒子。

```zenscript
myMCPlayerEntity.spawnRunningParticles();
```

### 生下滑粒子

```zenscript
myMCPlayerEntity.spawnSwepParticles();
```

### 开始睡眠

```zenscript
myMCPlayerEntity.startSleeping(p_213342_1_as craftbiner.api.util.BlockPos);
```

| 参数            | 类型                                                           | 描述                      |
| ------------- | ------------------------------------------------------------ | ----------------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### 启动SpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_int)；
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_204803_1_ | 整数 | No description provided |


### 停止激活

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### 停车

将此实体从它正在行驶的实体中拔除。

```zenscript
myMCPlayerEntity.stopRiding();
```

### 遥控器已加载

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ 为双倍，p_223102_3_ 为双倍，p_223102_5_ 为双倍；
```

| 参数            | 类型  | 描述                      |
| ------------- | --- | ----------------------- |
| p_223102_1_ | 双精度 | No description provided |
| p_223102_3_ | 双精度 | No description provided |
| p_223102_5_ | 双精度 | No description provided |


### 刻度

呼吁更新该实体的立场/逻辑。

```zenscript
myMCPlayerEntity.tick();
```

### toString

返回字符串[String]

```zenscript
myMCPlayerEntity.toString();
```

### 更新Ridden

在乘坐另一个实体时处理更新

```zenscript
myMCPlayerEntity.updateRidden();
```

### 更新Swiming

```zenscript
myMCPlayerEntity.updateSwimming();
```

### 唤醒

```zenscript
myMCPlayerEntity.wakeUp();
```

### 唤醒UpPlayer

当玩家睡觉时唤醒他们。

```zenscript
myMCPlayerEntity.wakeUpPlayer(立即作为布尔型，更新世界旗帜为布尔型，设置生成为布尔型)；
```

| 参数              | 类型      | 描述                      |
| --------------- | ------- | ----------------------- |
| 马上的             | boolean | No description provided |
| updateWorldFlag | boolean | No description provided |
| setSpawn        | boolean | No description provided |


### xpBarCap

这个方法返回经验栏可以保留的最大体验量。 在每个关卡中，玩家体验栏上的 上限提高了10。

返回为int值

```zenscript
myMCPlayerEntity.xpBarCap();
```


