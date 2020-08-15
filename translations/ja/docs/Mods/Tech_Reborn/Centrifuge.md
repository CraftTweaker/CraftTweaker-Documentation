# 遠心分離機

## Importing the Package
`mods.techreborn.centrifuge`

## レシピを追加中
```zenscript
mods.techreborn.centrifuge.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.centrifuge.removeInputRecipe(IIngredient iIngredient);
mods.techreborn.centrifuge.removeRecipe(IItemStack output);
mods.techreborn.centrifuge.removeAll();
```