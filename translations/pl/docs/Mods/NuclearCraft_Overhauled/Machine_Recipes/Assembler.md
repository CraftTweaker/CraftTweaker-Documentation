# Assembler

## Importing the Package
`mods.nuclearcraft.Assembler`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Assembler.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemInput3, IIngredient itemInput4, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Assembler.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemInput3, IIngredient itemInput4);
mods.nuclearcraft.Assembler.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Assembler.removeAllRecipes();
```