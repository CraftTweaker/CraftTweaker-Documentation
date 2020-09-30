# Barrel

## Package
```zenscript
import mods.terrafirmacraft.Barrel;
```

## Addition
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int hours);
```

## Removal

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- At least one output(liquid or item) must be supplied, for both removing and adding recipes.