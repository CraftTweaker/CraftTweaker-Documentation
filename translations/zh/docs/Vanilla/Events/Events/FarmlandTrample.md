# FarmlandTrampleEvent

The FarmlandTrample Event is fired whenever a farmland is about to be trampled. Canceling the event will prevent the block from being trampled.

## 注

`event.fallDistance` contains the distance fallen before hitting the farmland.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.FarmlandTrampleEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
FarmlandTrample Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 类型                                    |
| --------- | --------- | ------------------------------------- |
| `实体`      |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `下落距离`    |           | 浮点数                                   |
