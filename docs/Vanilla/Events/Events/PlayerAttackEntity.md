# 玩家攻击实体（PlayerAttackEntityEvent）

这个事件在玩家攻击任意一个实体时候触发。

## 事件类
你需要使用以下方式作为函数头以创建此类:  
`crafttweaker.event.PlayerAttackEntityEvent`  
你当然可以先[导入](/AdvancedFunctions/Import)类然后再使用。


## 事件接口拓展
玩家攻击实体事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)


## ZenGetters
可以从事件中检索以下信息:

| ZenGetter  | Return Type                          |
|------------|--------------------------------------|
| `canceled` | boolean                              |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer)  |
| `entity`   | [IEntity](/Vanilla/Entities/IEntity) |

## ZenMethods

- `event.cancel()` 将事件设置为取消。
