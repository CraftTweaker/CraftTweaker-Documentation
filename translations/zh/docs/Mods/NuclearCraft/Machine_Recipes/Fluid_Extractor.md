# 液体提取器

## 导入软件包
`nuclearcraft.提取器`

## 添加配方
```zenscript
mods.nuclearcraft.extractor.addRecipe([itemInput, itemOut, fluidOutput, @Optional double timeMultipier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.extractor.removeRecipeWidInput([itemInput]);
mods.nuclearcraft.extractor.removeRecipeWOutput([itemOut, fluidOutput]);
mods.nuclearcraft.extractor.removeAllRecipes();
```