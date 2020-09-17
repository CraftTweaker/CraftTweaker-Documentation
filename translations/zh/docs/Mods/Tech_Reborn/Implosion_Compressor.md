# 渗透压缩器

## 导入软件包
`mods.techreborn.implosionCompressor`

## 添加配方
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack outputt1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick)；
```

## 删除配方
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(IIngredient component);
mods.techreborn.implosionCompressor.removeRecipeipe(IItemStack output);
mods.techreborn.implosionCompressor.removeAll();
```