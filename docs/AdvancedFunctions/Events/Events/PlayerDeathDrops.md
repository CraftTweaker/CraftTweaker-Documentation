# PlayerDeathDrops

The PlayerDeathDrops Event is fired whenever a player's items fall to the ground due to his/her death.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter      | Return Type                                          |
|----------------|------------------------------------------------------|
| `player`       | [IPlayer](/Vanilla/Game/IPlayer)                     |
| `items`        | [`List<IEntityItem>`](/Vanilla/Entities/IEntityItem) |
| `damageSource` | [IDamageSource](/Vanilla/Damage/IDamageSource)       |