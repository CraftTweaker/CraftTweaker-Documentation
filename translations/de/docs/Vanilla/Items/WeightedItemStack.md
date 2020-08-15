# Gewichteter Gegenstandstapel

Ein Gewichteter Gegenstandsstapel ist wie ein gewöhnlicher [IItemStack](/Vanilla/Items/IItemStack/) hat aber einen Prozentsatz hinzugefügt.  
Sie verwenden diese normalerweise bei prozentualen Aktionen wie Drops oder sekundären Ausgängen.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import craftweaker.item.Gewichteter ArtikelStack;`

## Aufrufen eines gewichteten Gegenstands

Sie können einen gewichteten Artikel von einem [IItemStack](/Vanilla/Items/IItemStack/) ableiten, indem Sie entweder den Modul-Operator oder die Gewichtsfunktion darauf verwenden.

```zenscript
val itemStack = <minecraft:dirt>;

//beide erstellen ein gewichtetes Itemstack Objekt mit einer Chance auf 20%
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack. acht(0.2);
```

## ZenGetter

| ZenGetter | Was macht es                                                   | Rückgabetyp                              |
| --------- | -------------------------------------------------------------- | ---------------------------------------- |
| stapeln   | Gibt den zugehörigen Item Stack zurück                         | [IItemStack](/Vanilla/Items/IItemStack/) |
| zufällig  | Gibt die Chance des Stapels als Dezimalzahl zurück (z.B. 0.2)  | float                                    |
| Prozent   | Gibt die Chance des Stapels als Prozentsatz zurück (z.B. 20.0) | float                                    |