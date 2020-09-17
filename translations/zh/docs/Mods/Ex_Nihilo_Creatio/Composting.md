# 编译

## 所属包名
```zenscript
德语词组
```

## 使用方式

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 输入** 输入.
- **浮动几率** 应在0-1之间。
- **字符串颜色** 颜色是十六进制的。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。

## 添加配方

不为 IIngredient 使用数组。

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngredient, Float chance, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## 移除

```zenscript
compos.removeAll();
```