# 研磨机

草料可通过热煤取食物。

双方都需要食粮。

## 默认研磨配方

- 蜜蜂-> 熟牛肉
- 萨荷尔斯-> 熟锯子
- Kebab -> 熟了Kebab

## 移除配方

## 删除匹配的网格配方。

```zenscript
mods.cfm.Grill.remove(@Opinion final IIngredient output, @Opinion final IIngredient input);

// 移除需要 Beef
mods.cfm.Grill. emove(null,<minecraft:beef>);
// 删除导致熟锯齿的配方
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// 删除所有配方
mods.cfm.Grill.remove();
```

## 添加

添加研磨机配方。

## 仅支持1大小的输入

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack 输入);

// 添加一个能够从Saus
mod中提取粘贴的配方。 fm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// 添加一个从Stick制造火炬的配方
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```