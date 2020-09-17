# 树状石头

## 所属包名
`导入 mods.stone_age。TreeStumpManager`

## 使用方式
- **字符串名称** 配方名称
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 工具**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**
- **整流时间** 聊天时间
- **字符串组** 食谱组

## 添加配方

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(名称, IItemStack 输出, IIngredient 工具, IIngredient input, int chopTimes, @OptionalString String Group)

<recipetype:stone_age:tree_stump>ddRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, , <item:minecraft:oak_log>, , 2, );
TreeStumumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2)
```
