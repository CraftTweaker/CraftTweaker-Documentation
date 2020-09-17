# Assembleur

## Importation du paquet en cours
`mods.nuclearcraft.Assembleur`

## Ajout de recettes
```zenscript
mods.nuclearcraft.Assembler.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemInput3, IIngredient itemInput4, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.Assembler.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemInput3, IIngredient itemInput4);
mods.nuclearcraft.Assembler.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Assembler.removeAllRecipes();
```