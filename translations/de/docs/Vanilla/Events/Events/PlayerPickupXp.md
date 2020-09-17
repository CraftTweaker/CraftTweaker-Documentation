# PlayerPickupXp

Das PlayerPickupXp Event wird abgefeuert, wenn ein Spieler Erfahrungsorbs erfährt.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerPickupXpEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerPickupXp Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getter/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | Rückgabetyp                               |
| ------------- | ----------------------------------------- |
| `abgebrochen` | boolean                                   |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `entityXp`    | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`          | float                                     |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.