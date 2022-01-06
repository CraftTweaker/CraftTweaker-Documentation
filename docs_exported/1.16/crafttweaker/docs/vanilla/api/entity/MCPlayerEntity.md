# MCPlayerEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.player.MCPlayerEntity;
```


## Extending MCLivingEntity

MCPlayerEntity extends [MCLivingEntity](/vanilla/api/entity/MCLivingEntity). That means all methods available in [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) are also available in MCPlayerEntity

## Methods

:::group{name=addExhaustion}

Return Type: void

```zenscript
MCPlayerEntity.addExhaustion(exhaustion as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| exhaustion | float | No Description Provided |


:::

:::group{name=canUseCommandBlock}

Return Type: boolean

```zenscript
// MCPlayerEntity.canUseCommandBlock() as boolean

myMCPlayerEntity.canUseCommandBlock();
```

:::

:::group{name=drop}

Return Type: boolean

```zenscript
MCPlayerEntity.drop(p_225609_1_ as boolean) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| p_225609_1_ | boolean | No Description Provided |


:::

:::group{name=getCurrentItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCPlayerEntity.getCurrentItem() as IItemStack

myMCPlayerEntity.getCurrentItem();
```

:::

:::group{name=getFoodLevel}

Return Type: int

```zenscript
// MCPlayerEntity.getFoodLevel() as int

myMCPlayerEntity.getFoodLevel();
```

:::

:::group{name=getHeldItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerEntity.getHeldItem(hand as MCHand) as IItemStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| hand | [MCHand](/vanilla/api/util/MCHand) | No Description Provided |


:::

:::group{name=getInventory}

Return Type: [PlayerInventory](/vanilla/api/inventory/PlayerInventory)

```zenscript
// MCPlayerEntity.getInventory() as PlayerInventory

myMCPlayerEntity.getInventory();
```

:::

:::group{name=getInventoryItemStack}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerEntity.getInventoryItemStack(slotIndex as int) as IItemStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| slotIndex | int | No Description Provided |


:::

:::group{name=getLuck}

Return Type: float

```zenscript
// MCPlayerEntity.getLuck() as float

myMCPlayerEntity.getLuck();
```

:::

:::group{name=getMaxInPortalTime}

Return Type: int

```zenscript
// MCPlayerEntity.getMaxInPortalTime() as int

myMCPlayerEntity.getMaxInPortalTime();
```

:::

:::group{name=getName}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCPlayerEntity.getName() as MCTextComponent

myMCPlayerEntity.getName();
```

:::

:::group{name=getPersistentData}

Gets the persisted NBT tag that is saved between deaths.
 Many mods use this to keep track of if they have given the player an item or not.

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// MCPlayerEntity.getPersistentData() as MapData

myMCPlayerEntity.getPersistentData();
```

:::

:::group{name=getPortalCooldown}

Return Type: int

```zenscript
// MCPlayerEntity.getPortalCooldown() as int

myMCPlayerEntity.getPortalCooldown();
```

:::

:::group{name=getSaturationLevel}

Return Type: float

```zenscript
// MCPlayerEntity.getSaturationLevel() as float

myMCPlayerEntity.getSaturationLevel();
```

:::

:::group{name=getSleepTimer}

Return Type: int

```zenscript
// MCPlayerEntity.getSleepTimer() as int

myMCPlayerEntity.getSleepTimer();
```

:::

:::group{name=give}

Return Type: void

```zenscript
MCPlayerEntity.give(stack as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=isCreative}

Return Type: boolean

```zenscript
// MCPlayerEntity.isCreative() as boolean

myMCPlayerEntity.isCreative();
```

:::

:::group{name=isFake}

Return Type: boolean

```zenscript
// MCPlayerEntity.isFake() as boolean

myMCPlayerEntity.isFake();
```

:::

:::group{name=isPushedByWater}

Return Type: boolean

```zenscript
// MCPlayerEntity.isPushedByWater() as boolean

myMCPlayerEntity.isPushedByWater();
```

:::

:::group{name=isSecondaryUseActive}

Return Type: boolean

```zenscript
// MCPlayerEntity.isSecondaryUseActive() as boolean

myMCPlayerEntity.isSecondaryUseActive();
```

:::

:::group{name=isSpectator}

Return Type: boolean

```zenscript
// MCPlayerEntity.isSpectator() as boolean

myMCPlayerEntity.isSpectator();
```

:::

:::group{name=isSwimming}

Return Type: boolean

```zenscript
// MCPlayerEntity.isSwimming() as boolean

myMCPlayerEntity.isSwimming();
```

:::

:::group{name=isUser}

Return Type: boolean

```zenscript
// MCPlayerEntity.isUser() as boolean

myMCPlayerEntity.isUser();
```

:::

:::group{name=needFood}

Return Type: boolean

```zenscript
// MCPlayerEntity.needFood() as boolean

myMCPlayerEntity.needFood();
```

:::

:::group{name=sendMessage}

Return Type: void

```zenscript
MCPlayerEntity.sendMessage(text as MCTextComponent) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| text | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=sendStatusMessage}

Return Type: void

```zenscript
MCPlayerEntity.sendStatusMessage(text as MCTextComponent, actionBar as boolean) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| text | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |
| actionBar | boolean | No Description Provided |


:::

:::group{name=setFoodLevel}

Return Type: void

```zenscript
MCPlayerEntity.setFoodLevel(value as int) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | int | No Description Provided |


:::

:::group{name=swing}

Return Type: void

```zenscript
MCPlayerEntity.swing(hand as MCHand, updateSelf as boolean) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| hand | [MCHand](/vanilla/api/util/MCHand) | No Description Provided |
| updateSelf | boolean | No Description Provided |


:::

:::group{name=unlockRecipes}

Return Type: void

```zenscript
MCPlayerEntity.unlockRecipes(p_193102_1_ as MCResourceLocation[]) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| p_193102_1_ | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)[] | No Description Provided |


:::

:::group{name=updatePersistentData}

Updates the player's persisted data that is saved between deaths.

Return Type: void

```zenscript
MCPlayerEntity.updatePersistentData(data as MapData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| data | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=wakeUp}

Return Type: void

```zenscript
// MCPlayerEntity.wakeUp() as void

myMCPlayerEntity.wakeUp();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| fake | boolean | true | false | No Description Provided |
| foodLevel | int | true | true | No Description Provided |
| inventory | [PlayerInventory](/vanilla/api/inventory/PlayerInventory) | true | false | No Description Provided |
| name | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | true | false | No Description Provided |
| saturationLevel | float | true | false | No Description Provided |

