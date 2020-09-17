# 研磨机

## 导入软件包
`mods.techreborn.griinder`

## 添加配方
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack output, IIngredient input1, int ticktime, int euTick)；
```

## 删除配方
```zenscript
mods.techreborn.grinder.removeInputRecipe(IIngredient component);
mods.techreborn.grinder.removeRecipe(IItemStack output);
mods.techreborn.grinder.removeAll();
```