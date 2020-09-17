# IPotion-Brau-Event

Diese Veranstaltung wird um alle Veranstaltungen rund um den Brauständer erweitert, jedoch nicht um die Spieler-basierte Funktion zum Abziehen von Gegenständen aus dem Braustand.

## Diese Klasse importieren
Möglicherweise muss [](/AdvancedFunctions/Import/) die Klasse importieren, um Fehler zu vermeiden.  
`Crafttweaker.event.IPotionBrewEvent importieren;`

## Was kann mit ihnen geschehen?

| ZenGetter | ZenSetter | typ |
| --------- | --------- | --- |
| `lang`    |           | int |

## Methoden

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

Gibt den IItemStack zurück, der in der Liste der Elemente des angegebenen Arrays enthalten ist. Will return an empty IItemStack if the specified index is greater than `length`.

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

Ersetzt den Elementstapel am angegebenen Index durch das angegebene Element. Wenn der th Index größer als die Länge des Element-Arrays ist, passiert nichts.
