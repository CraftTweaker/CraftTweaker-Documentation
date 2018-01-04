# PlayerInteract

The PlayerInteract Event is fired whenever a player interacts with a block.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter    | Return Type                               |
|--------------|-------------------------------------------|
| `canceled`   | boolean                                   |
| `usingItem`  | boolean                                   |
| `usingBlock` | boolean                                   |
| `x`          | int                                       |
| `y`          | int                                       |
| `z`          | int                                       |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer)       |
| `blocks`     | [IBlockGroup](/Vanilla/World/IBlockGroup) |
| `block`      | [IBlock](/Vanilla/Block/IBlock)           |
| `dimension`  | [IDimension](/Vanilla/World/IDimension)   |

## ZenMethods

- `event.cancel()` sets the event as cancelled
- `event.useBlock()` sets Block to true
- `event.useItem()` sets Item to true