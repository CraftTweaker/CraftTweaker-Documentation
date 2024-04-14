# PlayerInteractEntity

The PlayerInteractEntity Event is fired whenever a player interacts with an Entity.
It can be canceled to prevent the interaction from taking place.
If the event is canceled, a specific result of success, fail or pass can be provided. By default, the result is pass.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerInteractEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)



## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetters           |  Type                                 |
|----------------------|----------------------|---------------------------------------|
| `target`             |                      | [IEntity](/Vanilla/Entities/IEntity/) |



## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `face`          |                 | [IFacing](/Vanilla/World/IFacing/)                |
| `item`          |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `dimension`     |                 | int                                               |
| `hand`          |                 | string                                            |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
- `event.damageItem(int amount)` damages the item by the specified amount

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
