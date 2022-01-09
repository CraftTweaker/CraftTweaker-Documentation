# MCArrowLooseEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.event.entity.player.MCArrowLooseEvent
```

## Constructor #构造函数
```zenscript
new crafttweaker.api.event.entity.player.MCArrowLooseEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCArrowLooseEvent>);
```
| 参数      | 类型                                                                                                                              | 描述                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.MCArrowLooseEvent](/vanilla/api/event/entity/player/MCArrowLooseEvent)> | No description provided |



## 使用方式
### getBow

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCArrowLooseEvent.getBow();
```

### getCharge

返回为int值

```zenscript
myMCArrowLooseEvent.getCharge();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getPlayer();
```

### hasAmmo

返回为布尔值

```zenscript
myMCArrowLooseEvent.hasAmmo();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

返回为布尔值

```zenscript
myMCArrowLooseEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

返回为布尔值

```zenscript
myMCArrowLooseEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

返回为布尔值

```zenscript
myMCArrowLooseEvent.isCanceled();
```

### setCanceled

```zenscript
myMCArrowLooseEvent.setCanceled(cancel as boolean);
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| cancel | 布尔值 | No description provided |


### setCharge

```zenscript
myMCArrowLooseEvent.setCharge(charge as int);
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| charge | int | No description provided |



