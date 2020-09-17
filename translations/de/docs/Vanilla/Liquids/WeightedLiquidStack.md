# Gewichteter Liquidstack

Ein Gewichteter Liquid Stack ist wie ein normaler [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) hat aber einen Prozentsatz hinzugefügt.  
Sie verwenden diese normalerweise bei prozentualen Aktionen wie Drops oder sekundären Ausgängen.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import craftweaker.item.Gewichteter LiquidStack;`

## Aufrufen eines gewichteten LiquidStacks

Sie können einen gewichteten LiquidStack von einem [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ableiten, indem Sie entweder den Modul-Operator oder die Gewichtsfunktion darauf verwenden.

```zenscript
val liquidStack = <liquid:lava>;

//beide erzeugen ein gewichtetes Liquidstack-Objekt mit einer Chance von 20%
val wLiquidStack = liquidStack % 20;
val wLiquidStack2 = liquidStack. acht(0.2);
```

## ZenGetter

| ZenGetter | Was macht es                                                   | Rückgabetyp                                    |
| --------- | -------------------------------------------------------------- | ---------------------------------------------- |
| stapeln   | Gibt den zugehörigen LiquidStack zurück                        | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| zufällig  | Gibt die Chance des Stapels als Dezimalzahl zurück (z.B. 0.2)  | float                                          |
| Prozent   | Gibt die Chance des Stapels als Prozentsatz zurück (z.B. 20.0) | float                                          |