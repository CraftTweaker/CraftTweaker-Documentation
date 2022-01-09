# MCCriticalHitEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Constructor #构造函数
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| 参数      | 类型                                                                                                                                | 描述                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | No description provided |



## 使用方式
### getDamageModifier

The damage modifier for the hit.<br> This is by default 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

The orignal damage modifier for the hit wthout any changes.<br> This is 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

返回为布尔值

```zenscript
myMCCriticalHitEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

返回为布尔值

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

返回为布尔值

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Returns true if this hit was critical by vanilla

返回为布尔值

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### setCanceled

```zenscript
myMCCriticalHitEvent.setCanceled(cancel as boolean);
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| cancel | 布尔值 | No description provided |


### setDamageModifier

This set the damage multiplier for the hit. If you set it to 0, then the particles are still generated but damage is not done.

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float);
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| mod | 浮点数 | No description provided |



