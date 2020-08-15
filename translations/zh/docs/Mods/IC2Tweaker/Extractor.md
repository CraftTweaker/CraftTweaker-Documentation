# 提取器

## 所属包名

`导入 mods.ic2.提取器;`

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**

## 添加配方

```zenscript
mods.ic2.Extractor.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Extractor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## 移除

- 如果使用 Ic2 Experimental, 若要删除配方，只需在 `config/ic2/extractor.ini` 中删除相应的行
- 如果使用 Ic2 Classic，移除配方，只需在 `config/ic2/ic2machineRecipes.json` 中禁用相应的配方。