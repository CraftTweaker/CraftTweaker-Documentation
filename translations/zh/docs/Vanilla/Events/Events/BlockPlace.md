
# BlockPlace事件

每当方块放置时，方块会被发射。 您可以取消该事件以防止方块被放置.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockPlaceEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
BlockPlace Events 实现了以下接口，并且能够同时调用他们的所有方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 类型                                          |
| --------- | --------- | ------------------------------------------- |
| `播放器`     |           | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `当前的`     |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `放置对齐`    |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `手`       |           | 字符串[string]                                 |
