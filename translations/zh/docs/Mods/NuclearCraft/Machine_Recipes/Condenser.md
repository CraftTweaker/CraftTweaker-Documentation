# 冷凝器

## Importing the Package
`mods.nuclearcraft.condenser`

## 添加配方
```zenscript
mods.nuclearcraft.condenser.addRecipe([fluidInput, fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature]);
```

## 删除配方
```zenscript
mods.nuclearcraft.condenser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.condenser.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.condenser.removeAllRecipes();
```