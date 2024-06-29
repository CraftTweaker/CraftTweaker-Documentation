# Thermopile

## Importing the Package
```zenscript
import mods.magneticraft.Thermopile;
```

## Adding Recipes
```zenscript
//mods.magneticraft.Thermopile.addRecipe(IItemStack input, float temperature, float conductivity);
//mods.magneticraft.Thermopile.addRecipe(IBlockState block, float temperature, float conductivity);
mods.magneticraft.Thermopile.addRecipe(<minecraft:ice>, 273, 60);
```

## Removing Recipes
```zenscript
//mods.magneticraft.Thermopile.removeRecipe(IItemStack input);
mods.magneticraft.Thermopile.removeRecipe(<minecraft:ice>);
```
