# Grinder

## Importing the Package
```zenscript
import mods.magneticraft.Grinder;
```

## Adding Recipes
```zenscript
//mods.magneticraft.Grinder.addRecipe(IItemStack input, IItemStack output, IItemStack secondaryOutput, float probability, float ticks, bool oredictFlag);
mods.magneticraft.Grinder.addRecipe(<minecraft:iron_ore>, <minecraft:iron_ingot>, <minecraft:gold_ingot>, 0.5, 80, true);
mods.magneticraft.Grinder.addRecipe(<minecraft:gold_ore>, <minecraft:gold_ingot>, <minecraft:stone>, 0.0, 50, true);
```

## Removing Recipes
```zenscript
//mods.magneticraft.Grinder.removeRecipe(IItemStack input);
mods.magneticraft.Grinder.removeRecipe(<minecraft:iron_ore>);
```