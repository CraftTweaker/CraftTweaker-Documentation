# Manufactory

## Importing the Package
`mods.nuclearcraft.Manufactory`

## 添加配方
```zenscript
mods.nuclearcraft.Manufactory.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## 删除配方
```zenscript
mods.nuclearcraft.Manufactory.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();
```