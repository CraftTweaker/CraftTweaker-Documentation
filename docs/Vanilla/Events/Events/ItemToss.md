# ItemToss

The ItemToss Event is fired whenever an Item is being tossed from a player's inventory.  
Canceling this event will prevent the item from entering the world, thus causing the item to be deleted.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemTossEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## Event interface extensions
PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntityEvent](IEntityEvent)
- [IEventCancelable](IEventCancelable)

## ZenGetter/ZenSetter

| ZenGetter | Type                                         |
|-----------|----------------------------------------------|
| item      | [IEntityItem](/Vanilla/Entities/IEntityItem) |
| player    | [IPlayer](/Vanilla/Players/IPlayer)          |