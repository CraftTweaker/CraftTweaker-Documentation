# MCPlayerEntity #MC玩家实体

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.player.MCPlayerEntity;
```


## Extending MCLivingEntity

MCPlayerEntity extends [MCLivingEntity](/vanilla/api/entity/MCLivingEntity). That means all methods available in [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) are also available in MCPlayerEntity

## 方法

:::group{name=addExhaustion}

Return Type: void

```zenscript
MCPlayerEntity.addExhaustion(exhaustion as float) as void
```

| 参数         | 类型    | 描述                      |
| ---------- | ----- | ----------------------- |
| exhaustion | float | No Description Provided |


:::

:::group{name=canUseCommandBlock}

Return Type: boolean

```zenscript
MCPlayerEntity.canUseCommandBlock() as boolean
myMCPlayerEntity.canUseCommandBlock();
```

:::

:::group{name=drop}

Return Type: boolean

```zenscript
MCPlayerEntity.drop(p_225609_1_ as boolean) as boolean
```

| 参数            | 类型      | 描述                      |
| ------------- | ------- | ----------------------- |
| p_225609_1_ | boolean | No Description Provided |


:::

:::group{name=getCurrentItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerEntity.getCurrentItem() as IItemStack
myMCPlayerEntity.getCurrentItem();
```

:::

:::group{name=getFoodLevel}

Return Type: int

```zenscript
MCPlayerEntity.getFoodLevel() as int
myMCPlayerEntity.getFoodLevel();
```

:::

:::group{name=getInventoryItemStack}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerEntity.getInventoryItemStack(slotIndex as int) as IItemStack
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| slotIndex | int | No Description Provided |


:::

:::group{name=getLuck}

Return Type: float

```zenscript
MCPlayerEntity.getLuck() as float
myMCPlayerEntity.getLuck();
```

:::

:::group{name=getMaxInPortalTime}

Return Type: int

```zenscript
MCPlayerEntity.getMaxInPortalTime() as int
myMCPlayerEntity.getMaxInPortalTime();
```

:::

:::group{name=getName}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCPlayerEntity.getName() as MCTextComponent
myMCPlayerEntity.getName();
```

:::

:::group{name=getPersistentData}

Gets the persisted NBT tag that is saved between deaths. Many mods use this to keep track of if they have given the player an item or not.

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
MCPlayerEntity.getPersistentData() as MapData
myMCPlayerEntity.getPersistentData();
```

:::

:::group{name=getPortalCooldown}

Return Type: int

```zenscript
MCPlayerEntity.getPortalCooldown() as int
myMCPlayerEntity.getPortalCooldown();
```

:::

:::group{name=getSaturationLevel}

Return Type: float

```zenscript
MCPlayerEntity.getSaturationLevel() as float
myMCPlayerEntity.getSaturationLevel();
```

:::

:::group{name=getSleepTimer}

Return Type: int

```zenscript
MCPlayerEntity.getSleepTimer() as int
myMCPlayerEntity.getSleepTimer();
```

:::

:::group{name=give}

Return Type: void

```zenscript
MCPlayerEntity.give(stack as IItemStack) as void
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=isCreative}

Return Type: boolean

```zenscript
MCPlayerEntity.isCreative() as boolean
myMCPlayerEntity.isCreative();
```

:::

:::group{name=isFake}

Return Type: boolean

```zenscript
MCPlayerEntity.isFake() as boolean
myMCPlayerEntity.isFake();
```

:::

:::group{name=isPushedByWater}

Return Type: boolean

```zenscript
MCPlayerEntity.isPushedByWater() as boolean
myMCPlayerEntity.isPushedByWater();
```

:::

:::group{name=isSecondaryUseActive}

Return Type: boolean

```zenscript
MCPlayerEntity.isSecondaryUseActive() as boolean
myMCPlayerEntity.isSecondaryUseActive();
```

:::

:::group{name=isSpectator}

Return Type: boolean

```zenscript
MCPlayerEntity.isSpectator() as boolean
myMCPlayerEntity.isSpectator();
```

:::

:::group{name=isSwimming}

Return Type: boolean

```zenscript
MCPlayerEntity.isSwimming() as boolean
myMCPlayerEntity.isSwimming();
```

:::

:::group{name=isUser}

Return Type: boolean

```zenscript
MCPlayerEntity.isUser() as boolean
myMCPlayerEntity.isUser();
```

:::

:::group{name=needFood}

Return Type: boolean

```zenscript
MCPlayerEntity.needFood() as boolean
myMCPlayerEntity.needFood();
```

:::

:::group{name=sendMessage}

Return Type: void

```zenscript
MCPlayerEntity.sendMessage(text as MCTextComponent) as void
```

| 参数 | 类型                                                 | 描述                      |
| -- | -------------------------------------------------- | ----------------------- |
| 文本 | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=sendStatusMessage}

Return Type: void

```zenscript
MCPlayerEntity.sendStatusMessage(text as MCTextComponent, actionBar as boolean) as void
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| 文本        | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |
| actionBar | boolean                                            | No Description Provided |


:::

:::group{name=setFoodLevel}

Return Type: void

```zenscript
MCPlayerEntity.setFoodLevel(value as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| value | int | No Description Provided |


:::

:::group{name=unlockRecipes}

Return Type: void

```zenscript
MCPlayerEntity.unlockRecipes(p_193102_1_ as MCResourceLocation[]) as void
```

| 参数            | 类型                                                           | 描述                      |
| ------------- | ------------------------------------------------------------ | ----------------------- |
| p_193102_1_ | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)[] | No Description Provided |


:::

:::group{name=updatePersistentData}

Updates the player's persisted data that is saved between deaths.

Return Type: void

```zenscript
MCPlayerEntity.updatePersistentData(data as MapData) as void
```

| 参数   | 类型                                         | 描述                      |
| ---- | ------------------------------------------ | ----------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=wakeUp}

Return Type: void

```zenscript
MCPlayerEntity.wakeUp() as void
myMCPlayerEntity.wakeUp();
```

:::


## 参数

| 名称              | 类型                                                 | 可获得  | 可设置   |
| --------------- | -------------------------------------------------- | ---- | ----- |
| fake            | boolean                                            | true | false |
| foodLevel       | int                                                | true | true  |
| name            | [MCText组件](/vanilla/api/util/text/MCTextComponent) | true | false |
| saturationLevel | float                                              | true | false |

