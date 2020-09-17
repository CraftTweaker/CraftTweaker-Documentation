# Beczka

## Pakiet
```zenscript
importuj mods.terrafirmacraft.Beczka/bęben
```

## Dodanie
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidStack Output, godz.);
```

## Usuwanie

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- Należy dostarczyć co najmniej jedną pojemność (ciecz lub element) zarówno w celu usunięcia jak i dodania przepisów cyrkulacyjnych.