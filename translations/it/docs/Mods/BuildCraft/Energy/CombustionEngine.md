# Motore A Combustione

*Richiede Energia BuildCraft*

Percorso di classe: `mods.buildcraft.CombustionEngine`

## Uso

Per usare, importa la classe con `import mods.buildcraft.CombustionEngine;` all'inizio del tuo script.

## Aggiungere un combustibile pulito

`CombustionEngine.addCleanFuel(liquido, powerPerTick, timePerBucket);`

- `liquid` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> Il liquido da utilizzare come carburante
- `powerPerTick` &lt;doppio> Potenza in MJ per tick
- `timePerBucket` &lt;int> Quantità di zecche che 1.000 mB (1 secchio) dovrebbero funzionare per

```zenscript
importa mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## Aggiungere un carburante sporco

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue);`

- `lFuel` <[ILiquididStack](/Vanilla/Liquids/ILiquidStack)> Il liquido da usare come carburante
- `powerPerTick` &lt;doppio> Potenza in MJ per tick
- `timePerBucket` &lt;int> Quantità di zecche che 1.000 mB (1 secchio) dovrebbero funzionare per
- `lResidue` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> Il fluido residuo, per secchio del combustibile originale

```zenscript
importa mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
