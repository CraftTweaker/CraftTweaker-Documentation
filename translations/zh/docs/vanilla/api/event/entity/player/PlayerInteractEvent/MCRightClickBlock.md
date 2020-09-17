# MCRightClickBlock

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock(处理程序作为函数。消费者<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock>);
```
| 参数      | 类型                                                                                                                                                        | 描述                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | 消费者<[craftmiliter.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock](/vanilla/api/event/entity/player/PlayerInteractEvent/MCRightClickBlock)> | No description provided |



## 方法
### getEntityPlayer

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickBlock.getEntityPlayer();
```

### getFace

返回： `这种互动所涉及的脸。 对于所有非方块交互，这将返回 null。`

返回 [craftbinstruer.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCRightClickBlock.getFacebook();
```

### getItemStack

返回： `这种互动涉及的物品堆栈，如果手是空的，则` @code ItemStack.EMPTY}

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCRightClickBlock.getItemStack();
```

### getPlayer

返回： `玩家`

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickBlock.getPlayer();
```

### getPos

如果这种互动是在一个实体上进行的，将是一个以该实体为中心的区块。 如果交互在一个块上，将是该块的位置。 否则，将成为一个以玩家为中心的BlockPos。 永远不会是空的。 返回： `此互动涉及的位置。`

返回 [craftbinstruer.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCRightClickBlock.getPos();
```

### 突然结果

确定此事件是否需要一个重要的结果值。 注意： HasResult 注解中的事件将会自动添加此方法以返回 true。

返回为布尔值

```zenscript
myMCRightClickBlock.hasResult();
```

### 可取消

确定此函数是否可以取消。 返回： `如果应该允许访问 setcanced
 注意：
 取消批注事件将自动添加此方法以返回 true。`

返回为布尔值

```zenscript
myMCRightClickBlock.isCancelable();
```

### 已取消

确定此事件是否被取消并应停止执行。 返回： `当前取消的状态`

返回为布尔值

```zenscript
myMCRightClickBlock.isCanceled();
```

### 已取消

```zenscript
myMCRightClickBlock.setCanceled(被用布尔值代替)；
```

| 参数  | 类型      | 说明                      |
| --- | ------- | ----------------------- |
| 已取消 | boolean | No description provided |



