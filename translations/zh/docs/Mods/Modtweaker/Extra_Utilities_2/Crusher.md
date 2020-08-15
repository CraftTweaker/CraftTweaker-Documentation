# 磨粉机

ModTinflow允许您添加或删除额外工具 2 Crusher 配方

## 导入包

您可以使用 `mods.extrautils2.Crusher` 来调用Crusher包

## 移除配方

```zenscript
//mods.extrautils2.Crusher.remove(ItemStack out);
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## 添加配方

```zenscript
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondary Chance);
mods. xtrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```