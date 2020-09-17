# Hammering

## 所属包名
```zenscirpt
`mods.exnihilocreatio.Hammer`
```

## 使用方式

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 输入** 需要损坏的方块。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 块损坏后掉落的物品
- **内部刀具等级** 工具级以打破方块。
- **浮动几率** 几率介于 0-1 之间。
- **幸运几率** 几率介于0-1之间。

## 添加配方

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngredient, IItemStack, Int, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## 移除

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
