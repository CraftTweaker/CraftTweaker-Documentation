# Ingot Former

## Importing the Package
`mods.nuclearcraft.ingot_former`

## 添加配方
```zenscript
mods.nuclearcraft.ingot_former.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.ingot_former.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.ingot_former.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.ingot_former.removeAllRecipes();
```