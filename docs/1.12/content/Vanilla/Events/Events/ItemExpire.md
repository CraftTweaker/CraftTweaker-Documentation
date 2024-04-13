# ItemExpire

The ItemExpire Event is fired whenever an Item expires (reaches its maximum lifespan).  
It can be canceled to prevent the item from being flagged as dead.  
If canceled it will add `extralife` to the item's lifetime.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemExpireEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | Type                                         |
|-----------|-----------|----------------------------------------------|
| `item`      |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `extraLife` | `extraLife` | int                                          |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |
| `entity`        |                 | [IEntity](/Vanilla/Entities/IEntity/)             |

ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
