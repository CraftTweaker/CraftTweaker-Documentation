
# BlockPlaceEvent

The BlockBreak Event is fired whenever a block is being placed. You can cancel the event to prevent the block from being placed.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockPlaceEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
BlockPlace Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter       | ZenSetter | 类型                                          |
| --------------- | --------- | ------------------------------------------- |
| `播放器`           |           | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `当前的`           |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `placedAgainst` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `手`             |           | 字符串[string]                                 |
