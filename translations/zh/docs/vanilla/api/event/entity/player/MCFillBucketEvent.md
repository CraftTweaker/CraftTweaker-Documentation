# MCFillBacketEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbinefer.api.event.entity.player.MCFillBucketEvent
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.event.entity.player.MCFillBucketEvent(处理程序作为函数。消费者<crafttweaker.api.event.entity.player.MCFillBucketEvent>);
```
| 参数      | 类型                                                                                                                     | 描述                      |
| ------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | Consumer<[craftmilower.api.event.entity.player.MCFillBucketEvent](/vanilla/api/event/entity/player/MCFillBucketEvent)> | No description provided |



## 方法
### getEmptyBucket

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
a. myMCFillBucketEvent.getEmptyBucket();
```

### getEntityPlayer

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getEntityPlayer();
```

### getfiled Bucket

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
a. myMCFillBucketEvent.getFiledBucket();
```

### getPlayer

返回： `玩家`

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
a. myMCFillBucketEvent.getPlayer();
```

### 突然结果

确定此事件是否需要一个重要的结果值。 注意： HasResult 注解中的事件将会自动添加此方法以返回 true。

返回为布尔值

```zenscript
a. myMCFillBucketEvent.hasResult();
```

### 可取消

确定此函数是否可以取消。 返回： `如果应该允许访问 setcanced
 注意：
 取消批注事件将自动添加此方法以返回 true。`

返回为布尔值

```zenscript
a. myMCFillBucketEvent.isCancelable();
```

### 已取消

确定此事件是否被取消并应停止执行。 返回： `当前取消的状态`

返回为布尔值

```zenscript
a. myMCFillBucketEvent.iscanceled();
```

### 已取消

```zenscript
myMCFillBucketEvent.setCanceled(cancel as boolean)；
```

| 参数 | 类型      | 说明                      |
| -- | ------- | ----------------------- |
| 取消 | boolean | No description provided |


### 已设定的桶数

```zenscript
myMCFillBucketEvent.setfiledBucket(arg0 as craftbiner.api.item.IItemStack);
```

| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| arg0 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |



