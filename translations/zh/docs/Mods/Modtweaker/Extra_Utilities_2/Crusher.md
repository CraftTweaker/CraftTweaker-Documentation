# 磨粉机

ModTweaker allows you to add or remove Extra Utilities 2 Crusher Recipes

## 导入包

You can call the Crusher package using `mods.extrautils2.Crusher`

## 移除配方

```zenscript
//mods.extrautils2.Crusher.remove(IItemStack outout);
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## 添加配方

```zenscript
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
mods.extrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```