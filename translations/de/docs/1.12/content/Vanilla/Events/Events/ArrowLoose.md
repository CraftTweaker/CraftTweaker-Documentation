# ArrowLoose

This event is fired when a player stops using a bow.
## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ArrowLooseEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
ArrowLoose Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:

| ZenGetter | ZenSetter | Type                                     |
| --------- | --------- | ---------------------------------------- |
| `bow`     |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `charge`  | `charge`  | int                                      |
| `world`   |           | String                                   |
| `player`  |           | [IPlayer](/Vanilla/Players/IPlayer/)     |
