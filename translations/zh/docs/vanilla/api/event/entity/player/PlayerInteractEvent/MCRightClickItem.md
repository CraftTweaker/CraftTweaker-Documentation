# MCRightClickItem

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem
```

## Constructor #构造函数
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem>);
```
| 参数      | 类型                                                                                                                                                                    | 描述                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem](/vanilla/api/event/entity/player/PlayerInteractEvent/MCRightClickItem)> | No description provided |



## 方法
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickItem.getEntityPlayer();
```

### getFace

Returns: `The face involved in this interaction. For all non-block interactions, this will return null.`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCRightClickItem.getFace();
```

### getItemStack

Returns: `The itemstack involved in this interaction, {` @code ItemStack.EMPTY} if the hand was empty.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCRightClickItem.getItemStack();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickItem.getPlayer();
```

### getPos

If the interaction was on an entity, will be a BlockPos centered on the entity. If the interaction was on a block, will be the position of that block. Otherwise, will be a BlockPos centered on the player. Will never be null. Returns: `The position involved in this interaction.`

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCRightClickItem.getPos();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

返回为布尔值

```zenscript
myMCRightClickItem.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

返回为布尔值

```zenscript
myMCRightClickItem.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

返回为布尔值

```zenscript
myMCRightClickItem.isCanceled();
```

### setCanceled

```zenscript
myMCRightClickItem.setCanceled(cancel as boolean);
```

| 参数     | 类型      | 说明                      |
| ------ | ------- | ----------------------- |
| cancel | boolean | No description provided |



