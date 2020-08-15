# Alloy Furnace

## Importing the Package
`mods.nuclearcraft.AlloyFurnace`

## 添加配方
```zenscript
mods.nuclearcraft.AlloyFurnace.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## 删除配方
```zenscript
mods.nuclearcraft.AlloyFurnace.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2);
mods.nuclearcraft.AlloyFurnace.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.AlloyFurnace.removeAllRecipes();
```