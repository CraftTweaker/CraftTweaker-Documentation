# Moteur à Combustion

*Nécessite une Fabrication de Construction d'Énergie*

Chemin de classe : `mods.buildcraft.CombustionEngine`

## Utiliser

Pour l'utiliser, importez la classe avec `import mods.buildcraft.CombustionEngine;` au début de votre script.

## Ajouter un carburant propre

`CombustionEngine.addCleanFuel(liquide, powerPerTick, timePerBucket);`

- `liquid` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;double> puissance sortie en MJ par tick
- `timePerBucket` &lt;int> Quantité de ticks que 1000 mB (1 secket) doivent exécuter pour

```zenscript
Importer mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## Ajouter un carburant sale

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue);`

- `lFuel` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;double> puissance sortie en MJ par tick
- `timePerBucket` &lt;int> Quantité de ticks que 1000 mB (1 secket) doivent exécuter pour
- `lResidue` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The residue fluid, per bucket of the original fuel

```zenscript
Importer mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
