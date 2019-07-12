# PlayerOpenContainer

The PlayerOpenContainer Event is fired whenever a player opens a container.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerOpenContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerOpenContainer Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter   | Rückgabetyp                                  |
| ----------- | -------------------------------------------- |
| `canceled`  | boolean                                      |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `container` | [IContainer](/Vanilla/Container/IContainer/) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.