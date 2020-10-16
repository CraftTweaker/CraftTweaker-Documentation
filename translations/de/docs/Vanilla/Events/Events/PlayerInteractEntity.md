# PlayerInteractEntity

The PlayerInteractEntity Event is fired whenever a player interacts with an Entity. It can be canceled to prevent the interaction from taking place. Wird die Veranstaltung abgebrochen, kann ein bestimmtes Erfolgsergebnis angegeben werden. Standardmäßig wird das Ergebnis übergeben.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerInteractEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter              | ZenSetters             | Rückgabetyp                           |
| ---------------------- | ---------------------- | ------------------------------------- |
| `player`               |                        | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`               |                        | [IEntity](/Vanilla/Entities/IEntity/) |
| `Stornierungsresultat` | `Stornierungsresultat` | string ("success" / "pass" / "fail")  |

## ZenMethods

- `event.cancel()` sets the event as cancelled.