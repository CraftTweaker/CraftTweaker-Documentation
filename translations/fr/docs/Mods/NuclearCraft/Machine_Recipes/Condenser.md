# Condenseur

## Importation du paquet en cours
`mods.nuclearcraft.condenseur`

## Ajout de recettes
```zenscript
mods.nuclearcraft.condenser.addRecipe([fluidInput, fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.condenser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.condenser.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.condenser.removeAllRecipes();
```