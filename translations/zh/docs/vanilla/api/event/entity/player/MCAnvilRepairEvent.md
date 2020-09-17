# MCAnvilRepairEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbinvest.api.event.entity.player.MCAnvilRepairEvent
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.event.entity.player.MCAnvilRepairEvent(处理函数。消费者<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>)；
```
| 参数      | 类型                                                                                                                       | 描述                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| handler | Consumer<[craftmiliter.api.event.entity.player.MCAnvilRepairEvent](/vanilla/api/event/entity/player/MCAnvilRepairEvent)> | No description provided |



## 方法
### getBreakChance

返回浮点数

```zenscript
myMCAnvilRepairEvent.getBreakChance();
```

### getEntityPlayer

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getEntityPlayer();
```

### getIngredient输入

将第二个项目输入到铁轨 返回： `第二个输入栏位`

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getIngredientInput();
```

### getItemInput

将第一个项目输入到铁轨 返回： `第一个输入栏位`

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemInput();
```

### getItemResults

从铁轨 返回获取输出结果： `输出`

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemResult();
```

### getPlayer

返回： `玩家`

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getPlayer();
```

### 突然结果

确定此事件是否需要一个重要的结果值。 注意： HasResult 注解中的事件将会自动添加此方法以返回 true。

返回为布尔值

```zenscript
myMCAnvilRepairEvent.hasResult();
```

### 可取消

确定此函数是否可以取消。 返回： `如果应该允许访问 setcanced
 注意：
 取消批注事件将自动添加此方法以返回 true。`

返回为布尔值

```zenscript
myMCAnvilRepairEvent.isCancelable();
```

### 已取消

确定此事件是否被取消并应停止执行。 返回： `当前取消的状态`

返回为布尔值

```zenscript
myMCAnvilRepairEvent.isCancelled();
```

### setBreakChance

```zenscript
myMCAnvilRepairEvent.setBreakChance(浮点数)；
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| 断裂概率 | 浮点数 | No description provided |


### 已取消

```zenscript
myMCAnvilRepairEvent.setCanceled(cancel as boolean)；
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 取消 | boolean | No description provided |



