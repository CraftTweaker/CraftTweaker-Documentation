# 玩家右击方块（PlayerRightClickBlock）

玩家右击方块事件在玩家右击方块时触发。  
可以被设置为取消，从而阻止其他事件发生。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerRightClickBlockEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
玩家右击方块事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [PlayerInteract](PlayerInteract)
- [IPlayerEvent](IPlayerEvent)


## ZenGetters
从事件中可以获取如下信息：

| ZenGetter   | ZenGetter  |  Type                                 |
|-------------|------------|---------------------------------------|
| `hitVector` |            | [IVector3d](/Vanilla/World/IVector3d) |
| `useBlock`  | `useBlock` | string ("ALLOW" / "DENY" / "DEFAULT") |
| `useItem`   | `useItem`  | string ("ALLOW" / "DENY" / "DEFAULT") |

## ZenMethods

- `event.cancel()` 设置事件为可取消的。
