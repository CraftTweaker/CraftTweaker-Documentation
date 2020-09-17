# Flint工作台

## 所属包名
`导入 mods.stone_age.FlintWorkfeer；`

## 方法
- **字符串名称** 配方名称
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 工具** 制作工具
- **字符串组** 食谱组

## 加

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(名称, IItemStack 输出, IIngredient[] inputMatrix, Ingredient tool, @OptionalString String Group)

<recipetype:stone_age:flint_workbench>ddRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbinder.INSTANCE.addRecipe("cobblestone"), <item:minecraft:cobblestone>, [<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
