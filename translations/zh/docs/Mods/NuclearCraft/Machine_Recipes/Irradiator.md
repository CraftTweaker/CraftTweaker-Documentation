# Irradiator

## Importing the Package
`mods.nuclearcraft.irradiator`

## 添加配方
```zenscript
mods.nuclearcraft.irradiator.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.irradiator.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.irradiator.removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclearcraft.irradiator.removeAllRecipes();
```