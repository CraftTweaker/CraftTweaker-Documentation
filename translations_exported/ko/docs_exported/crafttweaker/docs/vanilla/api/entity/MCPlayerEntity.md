# MCPlayerEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.player.MCPlayerEntity;
```


## Extending MCLivingEntity

MCPlayerEntity extends [MCLivingEntity](/vanilla/api/entity/MCLivingEntity). That means all methods available in [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) are also available in MCPlayerEntity

## Methods

### canUseCommandBlock

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

| Parameter     | Type    | Description             |
| ------------- | ------- | ----------------------- |
| p_225609_1_ | boolean | No Description Provided |


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

### getPortalCooldown

Return Type: int

```zenscript
MCPlayerEntity.getPortalCooldown() as int
myMCPlayerEntity.getPortalCooldown();
```

### getSleepTimer

Return Type: int

```zenscript
MCPlayerEntity.getSleepTimer() as int
myMCPlayerEntity.getSleepTimer();
```

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

### sendMessage

Return Type: void

```zenscript
MCPlayerEntity.sendMessage(text as MCTextComponent) as void
```

| Parameter | Type                                                      | Description             |
| --------- | --------------------------------------------------------- | ----------------------- |
| text      | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


### unlockRecipes

Return Type: void

```zenscript
MCPlayerEntity.unlockRecipes(p_193102_1_ as MCResourceLocation[]) as void
```

| Parameter     | Type                                                         | Description             |
| ------------- | ------------------------------------------------------------ | ----------------------- |
| p_193102_1_ | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)[] | No Description Provided |


### wakeUp

Return Type: void

```zenscript
MCPlayerEntity.wakeUp() as void
myMCPlayerEntity.wakeUp();
```


## Properties

| 이름   | Type    | Has Getter | Has Setter |
| ---- | ------- | ---------- | ---------- |
| fake | boolean | true       | false      |

