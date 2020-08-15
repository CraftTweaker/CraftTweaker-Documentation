# Decay Generator

## Importation du paquet en cours
`mods.nuclearcraft.decay_generator`

## Ajout de recettes
```zenscript
mods.nuclearcraft.decay_generator.addRecipe([blockInput, blockOutput, double lifetimeTicks, double energyPerSecond, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.decay_generator.removeRecipeWithInput([blockInput]);
mods.nuclearcraft.decay_generator.removeRecipeWithOutput([blockOutput]);
mods.nuclearcraft.decay_generator.removeAllRecipes();
```