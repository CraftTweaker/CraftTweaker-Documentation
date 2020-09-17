# MCArrowNockEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.event.entity.player.MCArrowNockEvent
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.event.entity.player.MCArrowNockEvent(处理函数。消费者<crafttweaker.api.event.entity.player.MCArrowNockEvent>)；
```
| 参数      | 类型                                                                                                                   | 描述                      |
| ------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | Consumer<[craftmiliter.api.event.entity.player.MCArrowNockEvent](/vanilla/api/event/entity/player/MCArrowNockEvent)> | No description provided |



## 方法
### getBow

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCarrowNockEvent.getBow();
```

### getEntityPlayer

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowNockEvent.getEntityPlayer();
```

### getPlayer

返回： `玩家`

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowNockEvent.getPlayer();
```

### hasAmmo

返回为布尔值

```zenscript
myMCArrowNockEvent.hasAmmo();
```

### 突然结果

确定此事件是否需要一个重要的结果值。 注意： HasResult 注解中的事件将会自动添加此方法以返回 true。

返回为布尔值

```zenscript
myMCArrowNockEvent.hasResult();
```

### 可取消

确定此函数是否可以取消。 返回： `如果应该允许访问 setcanced
 注意：
 取消批注事件将自动添加此方法以返回 true。`

返回为布尔值

```zenscript
myMCArrowNockEvent.isCancelable();
```

### 已取消

确定此事件是否被取消并应停止执行。 返回： `当前取消的状态`

返回为布尔值

```zenscript
myMCArrowNockEvent.isCanceled();
```

### 已取消

```zenscript
myMCArrowNockEvent.setCanceled(cancel as boolean)；
```

| 参数 | 类型      | 说明                      |
| -- | ------- | ----------------------- |
| 取消 | boolean | No description provided |



