# PlayerPickupEntity

Das PlayerPickupEntity Event wird gefeuert, wenn ein Spieler mit einer Entität interagiert.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerPickupEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | Rückgabetyp                           |
| ------------- | ------------------------------------- |
| `abgebrochen` | boolean                               |
| `bearbeitet`  | boolean                               |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `objekt`      | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.
- `event.process()` legt das Ereignis als verarbeitet fest.