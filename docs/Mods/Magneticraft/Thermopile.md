# Thermopile

## Importing the Package
```zenscript
import mods.magneticraft.Thermopile;
```

## Adding Recipes
```zenscript
//mods.magneticraft.Thermopile.addRecipe(IItemStack input, int heat);
//mods.magneticraft.Thermopile.addRecipe(IBlockState block, int heat); 
mods.magneticraft.Thermopile.addRecipe(<minecraft:ice>, -200);
```

## Removing Recipes
```zenscript
//mods.magneticraft.Thermopile.removeRecipe(IItemStack input);
mods.magneticraft.Thermopile.removeRecipe(<minecraft:ice>);
```