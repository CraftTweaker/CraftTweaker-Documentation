# PlayerSleepInBed

Das Spieler-SleepInBed Event wird gefeuert, wenn ein Spieler schläft. Dieses Ereignis kann bestimmen, ob der Spieler schlafen kann, indem `Ergebnis` gesetzt wird.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Erweiterte Event-Schnittellen
PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## Ergebnisarten
* HIER
* NOT_POPUP_NOW
* Nicht anzeigen
* Ok
* Anderer PROBLEM
* Farbe abwarten


## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter | Rückgabetyp                          |
| --------- | ------------------------------------ |
| `x`       | int                                  |
| `y`       | int                                  |
| `z`       | int                                  |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `result`  | string (mögliche Werte sind oben)    |

## ZenSetters
Folgendes kann im Event festgelegt werden:

| ZenSetter | Parameter Type                    |
| --------- | --------------------------------- |
| `result`  | string (mögliche Werte sind oben) |

