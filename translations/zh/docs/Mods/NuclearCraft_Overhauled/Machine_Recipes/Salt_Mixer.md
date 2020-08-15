# Salt Mixer

## Importing the Package
`mods.nuclearcraft.SaltMixer`

## 添加配方
```zenscript
mods.nuclearcraft.SaltMixer.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## 删除配方
```zenscript
mods.nuclearcraft.SaltMixer.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.SaltMixer.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltMixer.removeAllRecipes();
```