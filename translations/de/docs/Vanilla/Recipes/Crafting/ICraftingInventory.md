# ICraftingInventory

Das ICraftingInventar enthält alle Arten von Informationen über das Inventar, in dem ein Herstellungsprozess durchgeführt wird.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.recipes.ICraftingInventory`

## ZenGetter

| ZenGetter      | Rückgabetyp                                  | Beschreibung                                             |
| -------------- | -------------------------------------------- | -------------------------------------------------------- |
| `player`       | [IPlayer](/Vanilla/Players/IPlayer/)         | der Spieler, der dieses Inventar besitzt                 |
| `grösse`       | int                                          | die Größe des Inventars                                  |
| `width`        | int                                          | die Breite des Inventars                                 |
| `Höhe`         | int                                          | die Höhe des Inventars                                   |
| `Stapelanzahl` | int                                          | die Anzahl der Stacks, die tatsächlich ausgefüllt werden |
| `gegenstände`  | [IItemStack[][]](/Vanilla/Items/IItemStack/) | Die Gegenstände, die im Handwerkstisch vorhanden sind    |
| `itemArray`    | [IItemStack[]](/Vanilla/Items/IItemStack/)   | Die Gegenstände, die im Handwerkstisch vorhanden sind    |

## ZenMethoden

Folgende Methoden sind verfügbar:

`inventory.getStack(index)` gibt den [IItemStack](/Vanilla/Items/IItemStack/) an dem angegebenen Index oder Null zurück, wenn kein Artikel vorhanden ist. Index ist ein int.  
`inventory.setStack(Index, Artikel)` setzt den Stapel am angegebenen Index auf das angegebene Element. Index ist eine Int, Element ist ein IItemStack. Verwenden Sie Null, wenn Sie den Stack an diesem Index löschen möchten.

Der obere linke Stapel ist Position (0, 0), Zeile und Spalte sind Ints.  
`Inventar. etStack(Zeile, Spalte)` gibt den [IItemStack](/Vanilla/Items/IItemStack/) an der angegebenen Stelle oder Null zurück, wenn kein Element vorhanden ist.  
`inventory.setStack(Zeile, Spalte, Artikel)` setzt den Stapel an der angegebenen Position auf das angegebene Element. Artikel ist ein IItemStack. Verwenden Sie Null, wenn Sie den Stapel an dieser Stelle löschen möchten.