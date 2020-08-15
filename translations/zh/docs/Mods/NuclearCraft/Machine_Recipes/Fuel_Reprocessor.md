# Fuel Reprocessor

## Importing the Package
`mods.nuclearcraft.fuel_reprocessor`

## 添加配方
```zenscript
mods.nuclearcraft.fuel_reprocessor.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, itemOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.fuel_reprocessor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fuel_reprocessor.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3, itemOutput4]);
mods.nuclearcraft.fuel_reprocessor.removeAllRecipes();
```