# PlayerUseItemTick

The PlayerUseItemTick Event is fired each tick a player consistently uses an item.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseItemTick`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerUseItemTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)



## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `item`          |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `duration`      |                 | int                                               |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |
