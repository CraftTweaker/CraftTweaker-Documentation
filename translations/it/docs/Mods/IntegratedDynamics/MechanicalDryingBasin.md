# Bacino Di Essiccazione

Questo pacchetto consente di modificare le ricette per il bacino di asciugatura meccanico.

## Importazione del pacchetto

Se vuoi importare questo pacchetto, qui vai:

```zenscript
import mods.integrateddynamics.MechanicalDryingBasin;
```

## Aggiunta Di Ricette

```zenscript
//MechanicalDryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalDryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## Rimozione Ricette

```zenscript
//MechanicalDryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalDryingBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//MechanicalDryingBasin. emoveRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
MechanicalDryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```