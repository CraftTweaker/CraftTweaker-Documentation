# PlayerSleepInBed

El Evento PlayerSleepInBed se activa cada vez que un jugador duerme. Este evento puede controlar si el jugador es capaz de dormir estableciendo `resultado`.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Event interface extensions
PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## Tipos de resultado
* NOT_POSSIBLE
* NOT_POSSIBLE_NOW
* NOT_SAPE
* Ok
* Otro_PROBLEM
* FARE_DESC


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | Return Type                                |
| --------- | ------------------------------------------ |
| `x`       | int                                        |
| `y`       | int                                        |
| `z`       | int                                        |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)       |
| `result`  | cadena (los valores posibles están arriba) |

## ZenSetters
Lo siguiente puede establecerse en el evento:

| ZenSetter | Parameter Type                             |
| --------- | ------------------------------------------ |
| `result`  | cadena (los valores posibles están arriba) |

