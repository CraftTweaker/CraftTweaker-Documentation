# ArrowLoose

This event is fired when a player stops using a bow.
## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ArrowLooseEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
ArrowLoose Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `bow`           |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `charge`        | `charge`        | int                                               |
| `world`         |                 | [IWorld](/Vanilla/World/IWorld)                   |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |


## ZenGetters/ZenSetters/ZenMethodes from extensions

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |

ZenMethodes
- `event.cancel();` Methode, returns void (nothing). Can cancel the event and stop smth. from happening

