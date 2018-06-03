# 玩家打开容器（PlayerOpenContainer）

玩家打开容器事件在玩家打开容器时触发。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerOpenContainerEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
玩家打开容器事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)


## ZenGetters
从事件中可以获取如下信息：

| ZenGetter   | Return Type                                 |
|-------------|---------------------------------------------|
| `canceled`  | boolean                                     |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)         |
| `container` | [IContainer](/Vanilla/Container/IContainer) |

## ZenMethods

- `event.cancel()` 设置事件为可取消的。
