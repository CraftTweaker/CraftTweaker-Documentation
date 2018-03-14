# 玩家攻击实体

这个事件在玩家攻击任意一个实体时候触发。

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAttackEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter  | Return Type                         |
|------------|-------------------------------------|
| `canceled` | boolean                             |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer) |
| `entity`   | [IEntity](/Vanilla/Entity/IEntity)  |

## ZenMethods

- `event.cancel()` sets the event as cancelled.