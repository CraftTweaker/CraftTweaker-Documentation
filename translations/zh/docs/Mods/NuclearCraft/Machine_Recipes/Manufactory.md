# Manufactory

## Importing the Package
`mods.nuclearcraft.manufactory`

## 添加配方
```zenscript
mods.nuclearcraft.manufactory.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.manufactory.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.manufactory.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.manufactory.removeAllRecipes();
```