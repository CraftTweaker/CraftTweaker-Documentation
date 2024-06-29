# Sieve

## Importing the Package
```zenscript
import mods.magneticraft.Sieve;
```

## Adding Recipes
```zenscript
//mods.magneticraft.Sieve.addRecipe(IIngredient input, IItemStack output1, float output1Probability, IItemStack output2, float output2Probability, IItemStack output3, float output3Probability, float ticks);
mods.magneticraft.Sieve.addRecipe(<minecraft:iron_ore>, <minecraft:iron_ingot>, 1.0, <minecraft:gold_ingot>, 0.25, <minecraft:gravel>, 0.15, 40.0);
mods.magneticraft.Sieve.addRecipe(<minecraft:iron_ore>, <minecraft:iron_ingot>, 1.0, <minecraft:stone>, 0.4, null, 0.5, 100.0);
```

## Removing Recipes
```zenscript
//mods.magneticraft.Sieve.removeRecipe(IItemStack input);
mods.magneticraft.Sieve.removeRecipe(<magneticraft:rocky_chunks>);
```
