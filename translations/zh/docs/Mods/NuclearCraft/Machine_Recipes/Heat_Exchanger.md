# Heat Exchanger

## Importing the Package
`mods.nuclearcraft.heat_exchanger`

## 添加配方
```zenscript
mods.nuclearcraft.heat_exchanger.addRecipe([fluidInput, fluidOutput, double heatRequired, int temperatureIn, int temperatureOut]);
```

## 删除配方
```zenscript
mods.nuclearcraft.heat_exchanger.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.heat_exchanger.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.heat_exchanger.removeAllRecipes();
```