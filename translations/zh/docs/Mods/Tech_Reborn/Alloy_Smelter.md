# 合金冶炼器

## 导入软件包
`mods.techreborn.alloySmelter`

## 添加配方
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack output, IIngredient input1, IIngredient input2, int ticktie, int euTick)；
```

## 删除配方
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient componentA, Ingredient componentB);
mods.techreborn.alloySmelter.removeRecipe(IItemStack output);
mods.techreborn.alloySmelter.removeAll();
```