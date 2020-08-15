# Silnik spalinowy

*Wymaga Energii Budowlanej*

Ścieżka klasy: `mods.buildcraft.CombustionEngine`

## Użycie

Aby użyć, zaimportuj klasę z `importuj mods.buildcraft.Silnik spalinowy;` na początku skryptu.

## Dodawanie czystego paliwa

`Silniki spalinowe.addCleanFuel(ciecz, Power PerTick, timePercket);`

- `ciecz` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> Ciecz do użycia jako paliwo
- `powerPerTick` &lt;podwójny> Moc wyjściowa w MJ na tick
- `timePerBucket` &lt;int> Ilość ticków, dla których powinno działać 1000 mB (1 wiadra)

```zenscript
importuj mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## Dodawanie brudnego paliwa

`»Technologia«, zgodnie z uwagą ogólną do technologii, służąca do »rozwoju«, »produkcji« lub »użytkowania« sprzętu lub »oprogramowania« wyszczególnionych w pozycji 1B001 lub 1B003.`

- `lFuel` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> Ciecz do użycia jako paliwo
- `powerPerTick` &lt;podwójny> Moc wyjściowa w MJ na tick
- `timePerBucket` &lt;int> Ilość ticków, dla których powinno działać 1000 mB (1 wiadra)
- `lPozostałość` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> Pozostałość płynu na wiadro oryginalnego paliwa

```zenscript
importuj mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
