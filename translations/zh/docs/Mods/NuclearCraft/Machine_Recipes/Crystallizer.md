# Crystallizer

## Importing the Package
`mods.nuclearcraft.crystallizer`

## 添加配方
```zenscript
mods.nuclearcraft.crystallizer.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.crystallizer.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.crystallizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.crystallizer.removeAllRecipes();
```