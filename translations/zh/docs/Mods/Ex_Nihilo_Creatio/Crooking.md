# 裁剪：

## 所属包名
```zenscirpt
德涅希拉克雷蒂奥.Crook
```
## 使用方式

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 输入** 输入.
- **[IItemStack](/Vanilla/Items/IItemStack/) 奖励** 有机会掉落的物品。
- **浮动几率** 几率介于 0-1 之间。
- **幸运几率** 几率介于0-1之间。

## 添加配方

```zenscript
mods.exnihilocreatio.crook.addRecipe(IIngredient, IItemStack, Float);

mods.exnihilocreatio.crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## 删除配方

```zenscript
mods.exnihilocreatio.crook.removeAll();
```