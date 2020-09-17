# 米尔斯顿

## 所属包名
`导入 mods.stone_age。MillstoneManager`

## 使用方式
- **字符串名称** 配方名称
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**
- **int activateCount** 激活毫石计数
- **字符串组** 食谱组

## 添加配方

```zenscript
<recipetype:stone_age:millstone>.addRecipe(String name, IItemStack output, IIngredient input, int activateCount, @OptionalString String group)

<recipetype:stone_age:millstone>.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
MillstoneManager.INSTANCE.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
```
