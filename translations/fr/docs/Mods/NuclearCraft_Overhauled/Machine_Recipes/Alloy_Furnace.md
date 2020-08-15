# Four en Alliage

## Importation du paquet en cours
`mods.nuclearcraft.Four d'alliage`

## Ajout de recettes
```zenscript
mods.nuclearcraft.AlloyFurnace.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.AlloyFurnace.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2);
mods.nuclearcraft.AlloyFurnace.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Retirer toutes les recettes ();
```