# Barrel

## Pacchetto
```zenscript
import mods.terrafirmacraft.Barrel;
```

## Addizione
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int hours);
```

## Rimozione

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- At least one output(liquid or item) must be supplied, for both removing and adding recipes.