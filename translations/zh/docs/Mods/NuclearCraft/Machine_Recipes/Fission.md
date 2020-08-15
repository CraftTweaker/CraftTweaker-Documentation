# 裂痕模式

## 导入软件包
`nuclearcraft.ff`

## 添加配方
```zenscript
mods.nuclearcraft.fission.addRecipe([itemInput, itemOutput, two baseTime, double basePower, double baseHeat, String guiName, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.fission.removeRecipeWidInput([itemInput]);
mods.nuclearcraft.fission.removeRecipeWOutput([itemOutput]);
mods.nuclearcraft.fission.removeAllRecipes();
```