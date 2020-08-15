# Steam Turbine

## Importing the Package
`mods.nuclearcraft.turbine`

## 添加配方
```zenscript
mods.nuclearcraft.turbine.addRecipe([fluidInput, fluidOutput, double powerPerMB, double expansionLevel]);
```

## 删除配方
```zenscript
mods.nuclearcraft.turbine.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.turbine.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.turbine.removeAllRecipes();
```