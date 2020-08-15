# Salt Mixer

## Importing the Package
`mods.nuclearcraft.salt_mixer`

## 添加配方
```zenscript
mods.nuclearcraft.salt_mixer.addRecipe([fluidInput1, fluidInput2, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.salt_mixer.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.salt_mixer.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_mixer.removeAllRecipes();
```