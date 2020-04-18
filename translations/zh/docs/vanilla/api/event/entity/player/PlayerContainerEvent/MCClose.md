# MCClose

这个类由 mod-id 为 `crafttweaker` 的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.PlayerContainerEvent.MCClose
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerContainerEvent.MCClose(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerContainerEvent.MCClose>);
```
| 参数      | 类型                                                                                                                                                    | 描述                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.PlayerContainerEvent.MCClose](/vanilla/api/event/entity/player/PlayerContainerEvent/MCClose)> | No description provided |



## Methods
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCClose.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCClose.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCClose.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCClose.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCClose.isCanceled();
```

### setCanceled

```zenscript
myMCClose.setCanceled(cancel as boolean);
```

| Parameter | 类型      | 说明                      |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



