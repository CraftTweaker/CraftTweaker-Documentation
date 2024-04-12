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

| ZenGetter    | Return Type                               |
|--------------|-------------------------------------------|
| `x`          | int                                       |
| `y`          | int                                       |
| `z`          | int                                       |
| `face`       | [IFacing](/Vanilla/World/IFacing/)        |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `world`      | [IWorld](/Vanilla/World/IWorld/)          |
| `block`      | [IBlock](/Vanilla/Blocks/IBlock/)         |
|`blockState`  | [IBlockState](/Vanilla/Blocks/IBlockState/)|
| `item`       | [IItemStack](/Vanilla/Items/IItemStack/)  |
| `dimension`  | int                                       |
| `hand`       | string                                    |



## ZenMethods
- `event.damageItem(int amount)` damages the item by the specified amount
