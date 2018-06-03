# 玩家与实体交互（PlayerInteractEntity）

玩家与实体交互事件在玩家与实体交互时触发。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerInteractEntityEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
玩家与实体交互事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [PlayerInteract](PlayerInteract)
- [IPlayerEvent](IPlayerEvent)


## ZenGetters
从事件中可以获取如下信息：

| ZenGetterZenGetter |             Return Type              |
| :----------------: | :----------------------------------: |
|     `canceled`     |               boolean                |
|      `player`      | [IPlayer](/Vanilla/Players/IPlayer)  |
|      `entity`      | [IEntity](/Vanilla/Entities/IEntity) |

## ZenMethods

- `event.cancel()` 设置事件为可取消的。
