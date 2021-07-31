# PlayerPickupEntity

The PlayerPickupEntity Event is fired whenever a player interacts with an Entity.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter   | Rückgabetyp                           |
| ----------- | ------------------------------------- |
| `canceled`  | boolean                               |
| `processed` | boolean                               |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `entity`    | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
- `event.process()` sets the event as processed.