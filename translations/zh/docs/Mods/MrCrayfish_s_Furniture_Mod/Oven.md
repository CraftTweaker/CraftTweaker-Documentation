# 微波模式

微波为食品加热。

## 默认微波配方

- 蜜蜂-> 熟牛肉
- Pokchop -> 煮熟的波克chop
- 马铃薯-> 巴克土豆
- 鸡-> 熟鸡肉
- 鱼类-> 熟鱼
- Salmon -> 熟鲑鱼
- Flesh -> 煮熟的Flesh

## 移除配方

## 删除匹配的配方。

```zenscript
mods.cfm.Oven.remove(@Opinion final IIngredient output, @Opinion final IIngredient input);

// 删除导致熟Flesh
mods.cfm.Oven的配方。 emove(<cfm:item_flesh_cooked>);
// 删除需要 Poato
mods.cfm.Oven.remove(null,<minecraft:potato>);
// 删除所有配方
mods.cfm.Oven.remove();
```

## 添加

## 添加一个 oven 配方。

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack 输入);

// 添加一个从一根棍子
mod中制作两个苹果的配方。 fm.Oven.addRecipe(<minecraft:apple>.withamount(2),<minecraft:stick>);
```