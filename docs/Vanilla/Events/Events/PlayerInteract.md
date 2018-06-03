# （PlayerInteract）

The PlayerInteract Event is fired whenever a player interacts with a block.

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerInteractEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
PlayerInteract 实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)
- [IEventPositionable](IEventPositionable)


## ZenGetters
从事件中可以获取如下信息：

| ZenGetter    | Return Type                               |
|--------------|-------------------------------------------|
| `canceled`   | boolean                                   |
| `usingItem`  | boolean                                   |
| `usingBlock` | boolean                                   |
| `x`          | int                                       |
| `y`          | int                                       |
| `z`          | int                                       |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer)       |
| `world`      | [IWorld](/Vanilla/World/IWorld)           |
| `block`      | [IBlock](/Vanilla/Blocks/IBlock)          |
| `dimension`  | int                                       |

## ZenMethods

- `event.cancel()` sets the event as cancelled
- `event.useBlock()` sets Block to true
- `event.useItem()` sets Item to true
