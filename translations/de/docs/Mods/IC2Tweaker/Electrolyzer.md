# Elektrolyzer

## Paket

`importieren mods.ic2.Electrolyzer;`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] Ausgabe** Anordnung aller Ausgänge. Jeder Slot entspricht der Richtung Down-Up-Nord-Süd-West-Ost. Folgende Null können weggelassen werden.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **int power** Power consumption, measured in EU/tick
- **@Optional int time** Time cost. Standardmäßig 200 wenn nicht angegeben.

## Addition

```zenscript
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] Outputs, ILiquidStack Input, int power, @Optional int time);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```