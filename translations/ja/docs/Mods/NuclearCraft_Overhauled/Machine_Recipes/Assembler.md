# 組立機

## パッケージのインポート
`mods.nuclearcraft.Assembler組立機`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Assembler.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemInput3, IIngredient itemInput4, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## レシピを削除
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Assembler.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemInput3, IIngredient itemInput4);
mods.nuclearcraft.Assembler.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Assembler.removeAllRecipes();Assembler.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Assembler.removeAllRecipes();
```