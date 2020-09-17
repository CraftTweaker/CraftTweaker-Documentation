# PlayerUseItemStart

Das PlayerUseItemStart Event wird gefeuert, wenn ein Spieler anfängt, einen Gegenstand zu verwenden.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerUseItemStartEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerUseItemStart Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | Rückgabetyp                              |
| ------------- | ---------------------------------------- |
| `abgebrochen` | boolean                                  |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `eintrag`     | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen