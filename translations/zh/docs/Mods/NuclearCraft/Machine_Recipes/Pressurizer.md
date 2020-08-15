# Pressurizer

## Importing the Package
`mods.nuclearcraft.pressurizer`

## 添加配方
```zenscript
mods.nuclearcraft.pressurizer.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.pressurizer.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.pressurizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.pressurizer.removeAllRecipes();
```