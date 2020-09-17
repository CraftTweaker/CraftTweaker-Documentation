# 烤面包

面包车打上食物开始你的日子。

## 默认玩家配方

- 蜜蜂-> 熟牛肉
- 萨荷尔斯-> 熟锯子
- Kebab -> 熟了Kebab

## 移除配方

## 删除匹配的粉丝配方。

```zenscript
mods.cfm.Toaster.remove(@Opinion final IIngredient output, @Opinion final IIngredient input);

// 移除将Toast 从面包切片
mod中移除的配方。 fm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// 删除所有配方
mods.cfm.Toaster.remove();
```

## 添加

添加一个玩具配方。

## 仅支持1大小的输入

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack 输入);

// 添加一个能够从小麦
mods.cfm读取的配方。 oaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// 添加一种使牛肉从牛肉中烹饪的配方
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```