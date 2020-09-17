# Triturador de roca

## Importando el Paquete
`mods.nuclearcraft.RockCrusherTriturador de rocas`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.RockCrusher.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerRockCrusher.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.RockCrusher.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.RockCrusher.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3);
mods.nuclearcraft.RockCrusher.removeAllRecipes();RockCrusher.removeAllRecipes();
```