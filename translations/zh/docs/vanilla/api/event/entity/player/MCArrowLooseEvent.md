# MCArrowLooseEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.event.entity.player.MCarrowLooseEvent
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.event.entity.player.MCArrowLooseEvent(处理程序作为函数。消费者<crafttweaker.api.event.entity.player.MCArrowLooseEvent>);
```
| 参数      | 类型                                                                                                                    | 描述                      |
| ------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | Consumer<[craftmiliter.api.event.entity.player.MCArrowLoosevent](/vanilla/api/event/entity/player/MCArrowLooseEvent)> | No description provided |



## 方法
### getBow

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCArrowLooseEvent.getBow();
```

### getcharge

返回为int值

```zenscript
myMCarrowLoosevent.getCharge();
```

### getEntityPlayer

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCarrowLoosevent.getEntityPlayer();
```

### getPlayer

返回： `玩家`

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCarrowLoosevent.getPlayer();
```

### hasAmmo

返回为布尔值

```zenscript
myMCArrowLooseEvent.hasAmmo();
```

### 突然结果

确定此事件是否需要一个重要的结果值。 注意： HasResult 注解中的事件将会自动添加此方法以返回 true。

返回为布尔值

```zenscript
myMCarrowLoosevent.hasResult();
```

### 可取消

确定此函数是否可以取消。 返回： `如果应该允许访问 setcanced
 注意：
 取消批注事件将自动添加此方法以返回 true。`

返回为布尔值

```zenscript
myMCArrowLoosevent.isCancelable();
```

### 已取消

确定此事件是否被取消并应停止执行。 返回： `当前取消的状态`

返回为布尔值

```zenscript
myMCarrowLoosevent.iscanceled();
```

### 已取消

```zenscript
myMCArrowLoosevent.setCancel as boolean;
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 取消 | boolean | No description provided |


### 设置充电

```zenscript
myMCarrowLoosevent.setCharge(充电);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| 费用 | 整数 | No description provided |



