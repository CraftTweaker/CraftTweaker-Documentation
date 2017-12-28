# PlayerSmelted

The PlayerSmelted Event is fired whenever a player takes something out of a furnace.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSmeltedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                            |
|-------------|----------------------------------------|
| `player`    | [IPlayer](/Vanilla/Game/IPlayer)       |
| `output`    | [IItemStack](/Vanilla/Item/IItemStack) |