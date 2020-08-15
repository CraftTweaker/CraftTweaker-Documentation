# 压缩机

## 导入软件包
`mods.techreborn.compressor`

## 添加配方
```zenscript
mods.techreborn.compressor.addRecipe(IItemStack output1, Ingredient input1, int ticktime, int euTick)；
```

## 删除配方
```zenscript
mods.techreborn.compressor.removeInputRecipe(IIngredient component);
mods.techreborn.compressor.removeRecipe(IItemStack 输出);
mods.techreborn.compressor.removeAll();
```