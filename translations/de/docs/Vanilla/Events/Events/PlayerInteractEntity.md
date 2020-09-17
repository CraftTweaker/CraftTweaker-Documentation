# PlayerInteractEntity

Das PlayerInteractEntity Event wird gefeuert, wenn ein Spieler mit einer Entität interagiert. Es kann abgebrochen werden, um die Interaktion zu verhindern. Wird die Veranstaltung abgebrochen, kann ein bestimmtes Erfolgsergebnis angegeben werden. Standardmäßig wird das Ergebnis übergeben.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerInteractEntityEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerInteractEntity Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Spieler-Interact](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter              | ZenSetter              | Rückgabetyp                           |
| ---------------------- | ---------------------- | ------------------------------------- |
| `player`               |                        | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`               |                        | [IEntity](/Vanilla/Entities/IEntity/) |
| `Stornierungsresultat` | `Stornierungsresultat` | string ("success" / "pass" / "fail")  |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.