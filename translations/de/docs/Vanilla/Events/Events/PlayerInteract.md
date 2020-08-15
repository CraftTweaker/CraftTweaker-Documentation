# Spieler-Interact

Das Interact Event wird abgefeuert, wenn ein Spieler mit einem Block interagiert.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerInteractEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerInteract Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter         | Rückgabetyp                          |
| ----------------- | ------------------------------------ |
| `abgebrochen`     | boolean                              |
| `benutze Element` | boolean                              |
| `usingBlock`      | boolean                              |
| `x`               | int                                  |
| `y`               | int                                  |
| `z`               | int                                  |
| `player`          | [IPlayer](/Vanilla/Players/IPlayer/) |
| `Welt`            | [IWorld](/Vanilla/World/IWorld/)     |
| `blockieren`      | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `maße`            | int                                  |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen
- `event.useBlock()` setzt Block auf true
- `event.useItem()` setzt Element auf true