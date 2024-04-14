# PlayerLeftClickBlock

The PlayerLeftClickBlock Event is fired whenever a player left clicks a block.  
It can be canceled to prevent any other events from taking place.
If the player holds down the left click, the event will fire again even if it has been canceled.
Canceling this event will prevent the left click from being registered, preventing block breaking (although not in creative mode).
If the event is canceled, a specific result of success, fail or pass can be provided. By default, the result is pass.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLeftClickBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerLeftClickBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IHasCancellationResult] (no doc page so far)




## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `hitvector`          |                      | [IVector3d](/Vanilla/World/IVector3d/)|
| `useblock`           | `useblock`           | string ("allow" / "deny" / "default") |
| `useitem`            | `useitem`            | string ("allow" / "deny" / "default") |



## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `cancellationResult` | `cancellationResult` | string ("success" / "pass" / "fail")    |
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `face`          |                 | [IFacing](/Vanilla/World/IFacing/)                |
| `item`          |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `dimension`     |                 | int                                               |
| `hand`          |                 | string                                            |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
| `canceled`      | `canceled`      | bool                                              |

ZenMethods
- `event.damageItem(int amount)` damages the item by the specified amount
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  
