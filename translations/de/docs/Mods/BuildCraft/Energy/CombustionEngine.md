# Brennmaschine

*Erfordert Bauherstellungsenergie*

Klassenpfad: `mods.buildcraft.CombustionEngine`

## Benutzen

Importieren Sie die Klasse mit `importieren Sie mods.buildcraft.CombustionEngine;` am Anfang deines Skripts.

## Ein sauberer Brennstoff hinzufügen

`CombustionEngine.addCleanFuel(flüssig, powerPerTick, timePerBucket);`

- `liquid` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;doppelte> Leistung in MJ pro Häkchen
- `timePerbucket` &lt;int> Höhe der Ticks, für die 1.000 mB (1 Bucket) laufen sollen

```zenscript
importieren mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## Einen schmutzigen Brennstoff hinzufügen

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue);`

- `lFuel` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;doppelte> Leistung in MJ pro Häkchen
- `timePerbucket` &lt;int> Höhe der Ticks, für die 1.000 mB (1 Bucket) laufen sollen
- `lResidue` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The residue fluid, per bucket of the original fuel

```zenscript
importieren mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
