# PlayerInteract

The PlayerInteract Event is fired whenever a player interacts with a block.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerInteract Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter    | 返回值类型                                    |
| ------------ | ---------------------------------------- |
| `canceled`   | 布尔值                                      |
| `usingItem`  | 布尔值                                      |
| `usingBlock` | 布尔值                                      |
| `x`          | int                                      |
| `y`          | int                                      |
| `z`          | int                                      |
| `face`       | [IFacing](/Vanilla/World/IFacing/)       |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `world`      | [IWorld](/Vanilla/World/IWorld/)         |
| `block #方块`  | [IBlock](/Vanilla/Blocks/IBlock/)        |
| `item`       | [IItemStack](/Vanilla/Items/IItemStack/) |
| `dimension`  | int                                      |

## ZenMethods

- `event.cancel()` sets the event as cancelled
- `event.useBlock()` sets usingBlock to true
- `event.useItem()` sets usingItem to true
- `event.damageItem(int amount)` damages the item by the specified amount
