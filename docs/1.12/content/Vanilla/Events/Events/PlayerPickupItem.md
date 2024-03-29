# PlayerPickupItem

The PlayerPickupItem Event is fired whenever a player interacts with an Entity.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerPickupItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                            |
|-------------|----------------------------------------|
| `item`      | [IEntityItem](/Vanilla/Entities/IEntityItem/)| 
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)    |
