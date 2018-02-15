# PlayerPickupItem

The PlayerPickupItem Event is fired whenever a player interacts with an Entity.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                            |
|-------------|----------------------------------------|
| `item`      | [IItemStack](/Vanilla/Items/IItemStack)| 
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)    |