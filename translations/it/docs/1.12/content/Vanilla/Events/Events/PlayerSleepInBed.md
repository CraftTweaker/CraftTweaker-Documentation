# PlayerSleepInBed

L'evento PlayerSleepInBed è sparato ogni volta che un giocatore dorme. Questo evento può controllare se il giocatore è in grado di dormire impostando `risultato`.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Event interface extensions
PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## Tipi Di Risultati
* NOT_POSSIBLE_HERE
* NOT_POSSIBLE_NOW
* SICUREZZA
* OK
* OTHER_PROBLEM
* FAR_AWAY


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | Return Type                             |
| --------- | --------------------------------------- |
| `x`       | int                                     |
| `y`       | int                                     |
| `z`       | int                                     |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)    |
| `result`  | stringa (i valori possibili sono sopra) |

## ZenSetters
Nell'evento è possibile impostare quanto segue:

| ZenSetter | Parameter Type                          |
| --------- | --------------------------------------- |
| `result`  | stringa (i valori possibili sono sopra) |

