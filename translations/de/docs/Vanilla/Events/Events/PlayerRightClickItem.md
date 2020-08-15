# Spieler RechtsklickItem

Das Event des PlayerRightClickItem wird kurz vor dem Start eines Gegenstands abgefeuert. Es wird nicht abgefeuert, wenn der Spieler einen Block oder eine Einheit anvisiert. Es kann abgebrochen werden, um andere Ereignisse zu verhindern. Wenn das Ereignis abgesagt wird, kann ein bestimmtes Ergebnis der Erlaubnis, Verweigerung oder Weitergabe angegeben werden. Standardmäßig wird das Ergebnis übergeben.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerRightClickItemEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
PlayerRightClickItem Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Spieler-Interact](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetter
Die folgenden Informationen können in der Veranstaltung angepasst werden.

| ZenGetter              | ZenSetter              | typ                                            |
| ---------------------- | ---------------------- | ---------------------------------------------- |
| `Stornierungsresultat` | `Stornierungsresultat` | string ("erlaubt" / "verweigern" / "Standard") |
