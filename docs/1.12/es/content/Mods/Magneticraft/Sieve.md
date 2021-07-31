# Sieve

## Importing the Package
```zenscript
import mods.magneticraft.Sieve;
```

## Adding Recipes
```zenscript
//mods.magneticraft.Sieve.addRecipe(IItemStack input, IItemStack output1, float output1Probability, IItemStack output2, float output2Probability, IItemStack output3, float output3Probability, float ticks, bool oredictFlag);
mods.magneticraft.Sieve.addRecipe(<minecraft:iron_ore>, <minecraft:iron_ingot>, 1.0, <minecraft:gold_ingot>, 0.25, <minecraft:gravel>, 0.15, 40, true);
mods.magneticraft.Sieve.addRecipe(<minecraft:iron_ore>, <minecraft:iron_ingot>, 1.0, <minecraft:stone>, 0.0, <minecraft:stone>, 0.0, 100, true);
```

## Removing Recipes
```zenscript
//mods.magneticraft.Sieve.removeRecipe(IItemStack input);
mods.magneticraft.Sieve.removeRecipe(<magneticraft:rocky_chunks>);
```