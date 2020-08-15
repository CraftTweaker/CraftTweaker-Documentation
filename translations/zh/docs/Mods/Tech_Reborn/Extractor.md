# 提取器

## 导入软件包
`techreborn.extractor`

## 添加配方
```zenscript
mods.techreborn.extractor.addRecipe(IItemStack output, IIngredient input1, int ticktime, int euTick)；
```

## 删除配方
```zenscript
mods.techreborn.extractor.removeInputRecipe(IIngredient component);
mods.techreborn.extractor.removeRecipe(IItemStack output);
mods.techreborn.extractor.removeAll();
```