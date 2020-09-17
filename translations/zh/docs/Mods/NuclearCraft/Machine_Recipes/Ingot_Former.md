# 倒计时

## 导入软件包
`先前的 mods.nuclearcraft.ingot`

## 添加配方
```zenscript
mods.nuclearcraft.ingot_former.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerment Multiplier, @Optional double processRadiation]);
```

## 删除配方
```zenscript
mods.nuclearcraft.ingot_former.removeRecipeWidInput([fluidInput]);
mods.nuclearcraft.ingot_former.removeRecipeWOutput([itemOutput]);
mods.nuclearcraft.ingot_former.removeAllRecipes();
```