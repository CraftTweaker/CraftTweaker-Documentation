# Melter

## Importing the Package
`mods.nuclearcraft.melter`

## 添加配方
```zenscript
mods.nuclearcraft.melter.addRecipe([itemInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.melter.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.melter.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.melter.removeAllRecipes();
```