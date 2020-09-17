# PlayerLeftClickBlock

Das PlayerLeftClickBlock Event wird gefeuert, wenn ein Spieler einen Block links klickt.  
Es kann abgebrochen werden, um zu verhindern, dass andere Ereignisse stattfinden. Wenn der Spieler den Linksklick gedrückt hält, feuert das Event auch dann, wenn es abgebrochen wurde. Das Abbrechen dieses Ereignisses verhindert, dass der Linksklick registriert wird. Dies verhindert Blockbrüche (wenn auch nicht im kreativen Modus). Wird die Veranstaltung abgebrochen, kann ein bestimmtes Erfolgsergebnis angegeben werden. Standardmäßig wird das Ergebnis übergeben.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerLeftClickBlockEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
PlayerLeftClickBlock Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Spieler-Interact](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter              | ZenSetter              | typ                                            |
| ---------------------- | ---------------------- | ---------------------------------------------- |
| `hitvector`            |                        | [ivector3d](/vanilla/world/ivector3d/)         |
| `useblock`             | `useblock`             | string ("erlaubt" / "verweigern" / "Standard") |
| `useitem`              | `useitem`              | string ("erlaubt" / "verweigern" / "Standard") |
| `Stornierungsresultat` | `Stornierungsresultat` | string ("success" / "pass" / "fail")           |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.
