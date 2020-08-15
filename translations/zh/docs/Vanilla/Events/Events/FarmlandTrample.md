# FarmlandTrampleEvent

每当一块农田即将被困时，都会发射法尔特姆普尔事件。 取消该事件将防止方块被陷阱。

## 注

`event.fallDistance` 含有在击中农田之前降落的距离。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.FarmlandTrampleEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
FarmlandTrample Events 实现了以下接口，并且能够调用他们所有的方法/getter/setters：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 类型                                    |
| --------- | --------- | ------------------------------------- |
| `实体`      |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `下落距离`    |           | 浮点数                                   |
