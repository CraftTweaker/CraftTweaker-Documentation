# Hydraulic Press

## Importing the Package
```zenscript
import mods.magneticraft.HydraulicPress;
```

## Adding Recipes
```zenscript
//mods.magneticraft.HydraulicPress.addRecipe(IItemStack input, IItemStack output, float ticks, int mode, bool oredictFlag);
mods.magneticraft.HydraulicPress.addRecipe(<minecraft:snow>, <minecraft:snowball> * 4, 10, 0, true);
```

## Removing Recipes
```zenscript
//mods.magneticraft.HydraulicPress.removeRecipe(IItemStack input, int mode);
mods.magneticraft.HydraulicPress.removeRecipe(<minecraft:iron_ingot>, 0);
```