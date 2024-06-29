# Hydraulic Press

## Importing the Package
```zenscript
import mods.magneticraft.HydraulicPress;
```

## Adding Recipes
The modes for the Hydraulic Press can be 0, 1 or 2, and correspond to the light, medium and heavy modes respectively.
Light mode is used for standard plates, medium mode for double plates and heavy mode for heavy plates.
```zenscript
//mods.magneticraft.HydraulicPress.addRecipe(IIngredient input, IItemStack output, float ticks, int mode);
mods.magneticraft.HydraulicPress.addRecipe(<minecraft:snow>, <minecraft:snowball> * 4, 10.0, 0);
```

## Removing Recipes
```zenscript
//mods.magneticraft.HydraulicPress.removeRecipe(IItemStack input, int mode);
mods.magneticraft.HydraulicPress.removeRecipe(<minecraft:iron_ingot>, 0);
```
