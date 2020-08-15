# Irradiator

## パッケージのインポート
`mods.naturcraft.irradiator`

## レシピを追加中
```zenscript
mods.nuclearcraft.irradiator.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Optional double timeMultiplier, @Optional door processRadiation]);
```

## レシピを削除
```zenscript
mods.nuclearcraft.irradiator.removeRecipeInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.irradiator.removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclecraft.irradiator.removeAllRecipes();
```