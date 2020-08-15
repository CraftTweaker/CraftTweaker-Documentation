# Isotope Separator

## Importing the Package
`mods.nuclearcraft.Separator`

## 添加配方
```zenscript
mods.nuclearcraft.Separator.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## 删除配方
```zenscript
mods.nuclearcraft.Separator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Separator.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2);
mods.nuclearcraft.Separator.removeAllRecipes();
```