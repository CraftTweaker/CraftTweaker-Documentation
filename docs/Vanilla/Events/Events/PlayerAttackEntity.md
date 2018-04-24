# 玩家攻击实体

这个事件在玩家攻击任意一个实体时候触发。

## 事件类
你需要使用以下方式作为函数头以创建此类:  
`crafttweaker.event.PlayerAttackEntityEvent`  
你当然可以先[导入](/AdvancedFunctions/Import)类然后再使用。


## Event interface extensions
PlayerAttackEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

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
