# Spieler SleepInBett

Das Spieler-SleepInBed Event wird gefeuert, wenn ein Spieler schläft. Dieses Ereignis kann bestimmen, ob der Spieler schlafen kann, indem `Ergebnis` gesetzt wird.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerSleepInBedEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

Spieler SleepInBed Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getter/Setter auch aufrufen:

* [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
* [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## Ergebnisarten

* HIER 
* NOT_POPUP_NOW 
* Nicht anzeigen 
* Ok 
* Anderer PROBLEM 
* Farbe abwarten 

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | Rückgabetyp                          |
| ---------- | ------------------------------------ |
| `x`        | int                                  |
| `y`        | int                                  |
| `z`        | int                                  |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `ergebnis` | string (mögliche Werte sind oben)    |

## ZenSetter

Folgendes kann im Event festgelegt werden:

| ZenSetter  | Parametertyp                      |
| ---------- | --------------------------------- |
| `ergebnis` | string (mögliche Werte sind oben) |