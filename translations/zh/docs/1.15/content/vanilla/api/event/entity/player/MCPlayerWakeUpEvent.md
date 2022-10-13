# MCPlayerWakeUpEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Constructor #构造函数
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| 参数      | 类型                                                                                                                                  | 描述                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | No description provided |



## 使用方式
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

返回为布尔值

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

返回为布尔值

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

返回为布尔值

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerWakeUpEvent.setCanceled(cancel as boolean);
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| cancel | 布尔值 | No description provided |


### shouldSetSpawn

Indicates if the player's sleep was considered successful. In vanilla, this is used to determine if the spawn chunk is to be set to the bed's position.

返回为布尔值

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### updateWorld

Indicates if the server should be notified of sleeping changes. This will only be false if the server is considered 'up to date' already, because, for example, it initiated the call.

返回为布尔值

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### wakeImmediately

Used for the 'wake up animation'. This is false if the player is considered 'sleepy' and the overlay should slowly fade away.

返回为布尔值

```zenscript
myMCPlayerWakeUpEvent.wakeImmediately();
```


