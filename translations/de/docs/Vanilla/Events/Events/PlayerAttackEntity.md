# Spieler-AngriffEntität

Das PlayerAttackEntity Event wird gefeuert, wenn ein Spieler eine Entität angreift.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerAttackEntityEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerAttackEntity Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | Rückgabetyp                           |
| ------------- | ------------------------------------- |
| `abgebrochen` | boolean                               |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `objekt`      | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.