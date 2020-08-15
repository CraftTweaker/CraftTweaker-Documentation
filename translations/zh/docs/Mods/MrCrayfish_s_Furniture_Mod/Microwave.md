# 微波模式

微波为食品加热。

## 默认微波配方

- 蜜蜂-> 熟牛肉
- 马铃薯-> 巴克土豆

## 移除配方

## 删除匹配的微波配方。

```zenscript
mods.cfm.Microwave.remove(@Opinion final IIngredient output, @Opinion final IIngredient input);

// 删除需要 Potato
mods.cfm.Microwave. emove(null,<minecraft:potato>);
// 删除导致熟牛肉的配方
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// 删除所有配方
mods.cfm.Microwave.remove();
```

## 添加

## 添加微波配置。

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack 输入);

// 添加一个从一只甘蔗糖
mod制作4棒的配方。 fm.Microwave.addRecipe(<minecraft:stick>.withamount(4)，<minecraft:reeds>);
```