# Decay Generator

## Importing the Package
`mods.nuclearcraft.decay_generator`

## Adding Recipes
```zenscript
mods.nuclearcraft.decay_generator.addRecipe([blockInput, blockOutput, double lifetimeTicks, double energyPerSecond, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.decay_generator.removeRecipeWithInput([blockInput]);
mods.nuclearcraft.decay_generator.removeRecipeWithOutput([blockOutput]);
mods.nuclearcraft.decay_generator.removeAllRecipes();
```