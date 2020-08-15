# 区块断开

每当一个方块被损坏时都会触发BlockBreak 事件。  
您可以取消该事件以防止方块被损坏。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockBreakEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

BlockBreak 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter  | ZenSetter | 类型                                   |
| ---------- | --------- | ------------------------------------ |
| `播放器`      |           | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer` |           | 布尔值                                  |
| `体验`       | `体验`      | 整数                                   |