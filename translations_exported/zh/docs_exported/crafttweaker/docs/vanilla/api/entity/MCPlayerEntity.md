# MCPlayerEntity #MC玩家实体

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.player.MCPlayerEntity;
```


## Extending MCLivingEntity

MCPlayerEntity extends [MCLivingEntity](/vanilla/api/entity/MCLivingEntity). That means all methods available in [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) are also available in MCPlayerEntity

## 方法

### addExhaustion #增加饥饿值

Return Type: void

```zenscript
MCPlayerEntity.addExhaustion(exhaustion as float) as void
```

| 参数         | 类型    | 描述                      |
| ---------- | ----- | ----------------------- |
| exhaustion | float | No Description Provided |


### canUseCommandBlock #是否可以使用命令方块

Return Type: boolean

```zenscript
MCPlayerEntity.canUseCommandBlock() as boolean
myMCPlayerEntity.canUseCommandBlock();
```

### drop

Return Type: boolean

```zenscript
MCPlayerEntity.drop(p_225609_1_ as boolean) as boolean
```

| 参数            | 类型      | 描述                      |
| ------------- | ------- | ----------------------- |
| p_225609_1_ | boolean | No Description Provided |


### getCurrentItem

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerEntity.getCurrentItem() as IItemStack
myMCPlayerEntity.getCurrentItem();
```

### getFoodLevel

Return Type: int

```zenscript
MCPlayerEntity.getFoodLevel() as int
myMCPlayerEntity.getFoodLevel();
```

### getInventoryItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerEntity.getInventoryItemStack(slotIndex as int) as IItemStack
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| slotIndex | int | No Description Provided |


### getLuck

Return Type: float

```zenscript
MCPlayerEntity.getLuck() as float
myMCPlayerEntity.getLuck();
```

### getMaxInPortalTime

Return Type: int

```zenscript
MCPlayerEntity.getMaxInPortalTime() as int
myMCPlayerEntity.getMaxInPortalTime();
```

### getName

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCPlayerEntity.getName() as MCTextComponent
myMCPlayerEntity.getName();
```

### getPersistentData

Gets the persisted NBT tag that is saved between deaths. Many mods use this to keep track of if they have given the player an item or not.

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
MCPlayerEntity.getPersistentData() as MapData
myMCPlayerEntity.getPersistentData();
```

### getPortalCooldown

Return Type: int

```zenscript
MCPlayerEntity.getPortalCooldown() as int
myMCPlayerEntity.getPortalCooldown();
```

### getSaturationLevel

Return Type: float

```zenscript
MCPlayerEntity.getSaturationLevel() as float
myMCPlayerEntity.getSaturationLevel();
```

### getSleepTimer

Return Type: int

```zenscript
MCPlayerEntity.getSleepTimer() as int
myMCPlayerEntity.getSleepTimer();
```

### give

Return Type: void

```zenscript
MCPlayerEntity.give(stack as IItemStack) as void
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


### isCreative

Return Type: boolean

```zenscript
MCPlayerEntity.isCreative() as boolean
myMCPlayerEntity.isCreative();
```

### isFake

Return Type: boolean

```zenscript
MCPlayerEntity.isFake() as boolean
myMCPlayerEntity.isFake();
```

### isPushedByWater

Return Type: boolean

```zenscript
MCPlayerEntity.isPushedByWater() as boolean
myMCPlayerEntity.isPushedByWater();
```

### isSecondaryUseActive

Return Type: boolean

```zenscript
MCPlayerEntity.isSecondaryUseActive() as boolean
myMCPlayerEntity.isSecondaryUseActive();
```

### isSpectator

Return Type: boolean

```zenscript
MCPlayerEntity.isSpectator() as boolean
myMCPlayerEntity.isSpectator();
```

### isSwimming

Return Type: boolean

```zenscript
MCPlayerEntity.isSwimming() as boolean
myMCPlayerEntity.isSwimming();
```

### isUser

Return Type: boolean

```zenscript
MCPlayerEntity.isUser() as boolean
myMCPlayerEntity.isUser();
```

### needFood

Return Type: boolean

```zenscript
MCPlayerEntity.needFood() as boolean
myMCPlayerEntity.needFood();
```

### sendMessage

Return Type: void

```zenscript
MCPlayerEntity.sendMessage(text as MCTextComponent) as void
```

| 参数 | 类型                                                 | 描述                      |
| -- | -------------------------------------------------- | ----------------------- |
| 文本 | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


### sendStatusMessage

Return Type: void

```zenscript
MCPlayerEntity.sendStatusMessage(text as MCTextComponent, actionBar as boolean) as void
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| 文本        | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |
| actionBar | boolean                                            | No Description Provided |


### setFoodLevel

Return Type: void

```zenscript
MCPlayerEntity.setFoodLevel(value as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| value | int | No Description Provided |


### unlockRecipes

Return Type: void

```zenscript
MCPlayerEntity.unlockRecipes(p_193102_1_ as MCResourceLocation[]) as void
```

| 参数            | 类型                                                           | 描述                      |
| ------------- | ------------------------------------------------------------ | ----------------------- |
| p_193102_1_ | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)[] | No Description Provided |


### updatePersistentData

Updates the player's persisted data that is saved between deaths.

Return Type: void

```zenscript
MCPlayerEntity.updatePersistentData(data as MapData) as void
```

| 参数   | 类型                                         | 描述                      |
| ---- | ------------------------------------------ | ----------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


### wakeUp

Return Type: void

```zenscript
MCPlayerEntity.wakeUp() as void
myMCPlayerEntity.wakeUp();
```


## 参数

| 名称              | 类型                                                 | 可获得  | 可设置   |
| --------------- | -------------------------------------------------- | ---- | ----- |
| fake            | boolean                                            | true | false |
| foodLevel       | int                                                | true | true  |
| name            | [MCText组件](/vanilla/api/util/text/MCTextComponent) | true | false |
| saturationLevel | float                                              | true | false |

