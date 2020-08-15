# 工业锯木厂

## 导入软件包
`mods.techreborn.industrialSawmill`

## 添加配方
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack outputl, IItemStack output2, IItemStack output3, Ingredient input1, ILiquidStack fluid, int ticktime, int euTick);
mods. echreborn.industrialSawmill.addRecipe(IItemStack outputt1，IItemStack output2，IItemStack output3，Ingredient input1，int ticktime，int euTick)；
mods.techreborn。 ndustrialSawmill.addRecipe(IItemStack output1，IItemStack output2，IItemStack output3，Ingredient input1，int ticktime，int euTick，boolian useOreDic)；
mods.techreborn。 ndustrialSawmill.addRecipe(IItemStack output1,IItemStack output2,IItemStack output3,Ingredient input1,ILiquidStack fluid, int ticktime,int euTickly, boolan useOreDic);
```

## 删除配方
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(IIngredient component);
mods.techreborn.industrialSawmill.removeRecipe(IItemStack output);
mods.techreborn.industrialSawmill.removeAll();
```