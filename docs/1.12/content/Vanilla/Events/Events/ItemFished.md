# ItemFishedEvent

This event is fired to when a player is about to fish up an item. Cancelling the event will prevent the player from receiving an item, but the rod will still take damage.

## Notes

Additional damage can be done to the rod by setting `event.additionalDamage`. A list of IItemStacks (which is **not modifiable**) that are going to be fished up is contained within `event.drops`.

## Event Class
You will need to cast the event in the function header as this class:  
`import crafttweaker.event.ItemFishedEvent;`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
ItemFished Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter          | ZenSetter          | Type                                              |
|--------------------|--------------------|---------------------------------------------------|
| `damage`           |                    | int                                               |
|                    | `additionalDamage` | int                                               | 
| `drops`            |                    | [IItemStack](/Vanilla/Items/IItemStack/)[]        |
| `fishHook`         |                    | [IEntityFishHook](/Vanilla/Entities/IEntityFishHook/) |


## ZenGetters/ZenSetters/ZenMethods
The following information can be retrieved/set during the event:

| ZenGetter          | ZenSetter          | Type                                              |
|--------------------|--------------------|---------------------------------------------------|
| `player`           |                    | [IPlayer](/Vanilla/Player/IPlayer/)               |
| `canceled`         | `canceled`         | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening

