# PlayerOpenContainer

Das PlayerOpenContainer Event wird gefeuert, wenn ein Spieler einen Container öffnet.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerOpenContainerEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerOpenContainer Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | Rückgabetyp                                  |
| ------------- | -------------------------------------------- |
| `abgebrochen` | boolean                                      |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `behälter`    | [IContainer](/Vanilla/Container/IContainer/) |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.