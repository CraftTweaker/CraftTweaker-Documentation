# PlayerUseItemTick

Der PlayerUseItemTick Event wird abgefeuert jeder Tick, den ein Spieler durchweg benutzt einen Gegenstand.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerUseItemTick`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerUseItemTick Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | Rückgabetyp                              |
| ------------- | ---------------------------------------- |
| `abgebrochen` | boolean                                  |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `eintrag`     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `dauern`      | int                                      |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen