# Fission

## Importing the Package
`mods.nuclearcraft.fission`

## 添加配方
```zenscript
mods.nuclearcraft.fission.addRecipe([itemInput, itemOutput, double baseTime, double basePower, double baseHeat, String guiName, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.fission.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fission.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.fission.removeAllRecipes();
```