# 化学リアクタ

## パッケージのインポート
`mods.nuclecraft.chemical_reactor`

## レシピを追加中
```zenscript
mods.nuclearcraft.chemical_reactor.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Optional double timeMultiplier, @Optional door processRadiation]);
```

## レシピを削除
```zenscript
mods.nuclearcraft.chemical_removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclecraft.chemical_removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclecraft.chemical_reactor.removeAllRecipes();
```