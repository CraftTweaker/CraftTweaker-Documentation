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

다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter    | 반환 타입                                |
| ------------ | ------------------------------------ |
| `canceled`   | boolean                              |
| `usingItem`  | boolean                              |
| `usingBlock` | boolean                              |
| `x`          | int                                  |
| `y`          | int                                  |
| `z`          | int                                  |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `world`      | [IWorld](/Vanilla/World/IWorld/)     |
| `block`      | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `dimension`  | int                                  |

## ZenMethods

- `event.cancel()` sets the event as cancelled
- `event.useBlock()` sets Block to true
- `event.useItem()` sets Item to true