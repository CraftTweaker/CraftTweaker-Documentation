# Suszony basen

Ten pakiet pozwala na modyfikowanie receptur dla Suchowania Basenu.

## Importowanie pakietu

Jeśli chcesz zaimportować ten pakiet, tutaj:

```zenscript
import mods.integrateddynamics.DryingBasin;
```

## Dodawanie przepisów

```zenscript
//DryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

DryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## Usuwanie przepisów

```zenscript
//DryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
DryginBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//Suche Basin. emoveRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
DryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```