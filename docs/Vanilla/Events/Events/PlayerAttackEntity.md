# 玩家攻击实体

这个事件在玩家攻击任意一个实体时候触发。

## 事件类
你需要使用以下方式作为函数头以创建此类:  
`crafttweaker.event.PlayerAttackEntityEvent`  
你当然可以先[导入](/AdvancedFunctions/Import)类然后再使用。


## ZenGetters
可以从事件中检索以下信息:

| ZenGetter  | 返回类型                         |
|------------|-------------------------------------|
| `canceled` | boolean                             |
| `player`（玩家）| [IPlayer](/Vanilla/Players/IPlayer) |
| `entity`（实体）| [IEntity](/Vanilla/Entity/IEntity)  |

## ZenMethods

- `event.cancel()` 将事件设置为取消。
