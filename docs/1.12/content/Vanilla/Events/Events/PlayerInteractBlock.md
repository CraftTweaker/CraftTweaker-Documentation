# PlayerInteractBlock

The PlayerInteractBlock Event is fired whenever a player right clicks a block.  
It can be canceled to prevent any other events from taking place.
If the event is canceled, a specific result of success, fail or pass can be provided. By default, the result is pass.


## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerInteractBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- IHasCancellationResult


## ZenGetters/ZenSetters
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `hitvector`     |                 | [IVector3d](/Vanilla/World/IVector3d/)            |
| `useblock`      | `useblock`      | string ("allow" / "deny" / "default")             |
| `useitem`       | `useitem`       | string ("allow" / "deny" / "default")             |


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
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening

 

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  




## Notes
If you browse through the CT source directorys, this eventname is a exclusion to normal syntax.
Its found below `PlayerRightClickBlockEvent` which got renamed in the file to `playerInteractBlock`
