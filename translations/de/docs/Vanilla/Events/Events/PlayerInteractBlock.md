# Spieler-Interaktblock

Das PlayerInteractBlock Event wird gefeuert, wenn ein Spieler mit der rechten Maustaste auf einen Block klickt.  
Es kann abgebrochen werden, um zu verhindern, dass andere Ereignisse stattfinden. Wird die Veranstaltung abgebrochen, kann ein bestimmtes Erfolgsergebnis angegeben werden. Standardmäßig wird das Ergebnis übergeben.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerInteractBlockEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerInteractBlock Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Spieler-Interact](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| zengetter              | zengetter              | typ                                            |
| ---------------------- | ---------------------- | ---------------------------------------------- |
| `hitvector`            |                        | [ivector3d](/vanilla/world/ivector3d/)         |
| `useblock`             | `useblock`             | string ("erlaubt" / "verweigern" / "Standard") |
| `useitem`              | `useitem`              | string ("erlaubt" / "verweigern" / "Standard") |
| `Stornierungsresultat` | `Stornierungsresultat` | string ("success" / "pass" / "fail")           |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.