# 重置器

ModTinflow允许您添加或删除额外工具 2 恢复器配方

## 导入包

您可以使用 `mods.extrautils2.Resonator` 来调用恢复器包

## 移除配方

```zenscript
//mods.exautils2.Resonator.remove(临时应用退出)；
mods.extrautils2.Resonator.remove(<minecraft:redstone>)；
```

## 添加配方

```zenscript
<br />//1 GP = 100 energy
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @opulian addOwnerTag);
mods. xtrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```