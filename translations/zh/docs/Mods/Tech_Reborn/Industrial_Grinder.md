# 工业研磨机

## 导入软件包
`mods.techreborn.industrialGrinder`

## 添加配方
```zenscript
mods.techreborn.inder.addRecipe(IItemStack output1，IItemStack output2，IItemStack output3，IItemStack output4，IIngredient input1，Ingredient input2，int ticktime，int euTick)；
mods. echreborn.inder.addRecipe(IItemStack outputt1，IItemStack output2，IItemStack output3，IItemStack output4，IIngredient input1，Igredient input2，ILiquidStack fluid，int ticktime，int euTick)；
```

## 删除配方
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(IIngredient 成分)；
mods.techreborn.inder.removeRecipe(IItemStack 输出)；
mods.techreborn.industrialGrinder.removeAll();
```