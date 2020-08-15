# 冰箱(Freezer)

冻结器是星期五的底部。

它可以用来冻结物品，但需要冰箱运作。

## 默认冻结器配方

- 水箱 -> Ice
- Ice -> 包装冰块
- 岩浆桶-> 黑暗区
- Slimeball -> 雪球
- 有毒马铃薯-> 马铃声
- 旋转的Flesh -> Flesh

## 移除配方

## 删除匹配的冻结器配方。

```zenscript
mods.cfm.Freezer.remove(@Opinion final IIngredient output, @Opinion final IIngredient input);

// 移除导致冰
mods.cfm.Freelzer的配方。 emove(<minecraft:ice>);
// 删除需要Lava 桶的配方
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// 删除所有配方
mods.cfm.Freezer.remove();
```

## 添加

添加冷冻配方。

## 仅支持1大小的输入

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack 输入);

// 添加一个能够从Lava Bucket
mods.cfm.Freelzer.addRecipe(<minecraft:ice>) ithamount(16),<minecraft:lava_bucket>);
// 添加一个使得16个水桶被来自水桶的配方
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>. ithamount(16),<minecraft:water_bucket>);
// 添加一个使水桶从桶中制成的配方
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```