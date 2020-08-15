# Échangeur de chaleur

## Importation du paquet en cours
`mods.nuclearcraft.heat_exchangeur`

## Ajout de recettes
```zenscript
mods.nuclearcraft.heat_exchanger.addRecipe([fluidInput, fluidOutput, double heatRequired, int temperatureIn, int temperatureOut]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.heat_exchanger.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.heat_exchanger.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.heat_exchanger.removeAllRecipes();
```