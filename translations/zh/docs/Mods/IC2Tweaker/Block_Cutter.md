# 阻止切特

## 所属包名

`导入 mods.ic2.BlockCutter;`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**
- **@Optional int hardness** 最低耐受性要求。

## 添加配方

```zenscript
mods.ic2.BlockCutter.addRecipe(StemStack output, IIngredient input, @Opinent hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## 移除

现在只需删除 `config/ic2/block_cutter.ini` 中的相应行.