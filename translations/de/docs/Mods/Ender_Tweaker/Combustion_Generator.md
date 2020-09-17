# Brennstoffgenerator

## Paket

`importieren mods.enderio.CombustionGen;`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Treibstoff** Der flüssige Treibstoff hinzugefügt werden.
- **int powerPerCycleRF** Menge an Energie, die pro Tick in einer Basismaschine erzeugt wird.
- **int TotalBurnTime** Gesamte Brennzeit von einer Eimer Kraftstoff.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Kühlmittel** Das Flüssigkeitskühlmittel hinzugefügt werden.
- **float degreesCoolingPerMB** Wie viel Wärme im Generator kann ein mB des zugefügten Kühlmittels absorbieren, bis es die ganze Art und Weise erwärmt?

## Brennstoff hinzufügen

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack Kraftstoff, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## Kühlmittel hinzufügen

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack fluid coolant, float degreesCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## Treibstoff entfernen

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## Kühlmittel entfernen

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack coolant);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```