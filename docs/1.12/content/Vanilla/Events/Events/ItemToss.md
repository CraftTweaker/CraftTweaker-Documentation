# ItemToss

The ItemToss Event is fired whenever an Item is being tossed from a player's inventory.  
Canceling this event will prevent the item from entering the world, thus causing the item to be deleted.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemTossEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:
| ZenGetter | ZenSetter | Type                                         |
|-----------|-----------|----------------------------------------------|
| `item`    |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `player`  |           | [IPlayer](/Vanilla/Player/IPlayer/)          |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |
| `entity`        |                 | [IEntity](/Vanilla/Entities/IEntity/)             |

ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
