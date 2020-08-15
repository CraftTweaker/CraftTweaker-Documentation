# 玩家拾取实体

每当玩家与某个实体发生互动时都会触发玩家PickupEnty 事件。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                 |
| --------- | ------------------------------------- |
| `已取消`     | boolean                               |
| `已处理`     | boolean                               |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `实体`      | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` 将事件设置为取消。
- `event.process()` 设置事件已处理.