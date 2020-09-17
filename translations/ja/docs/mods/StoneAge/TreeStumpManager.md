# 木の切り取り

## パッケージ
`import mods.stone_ageTreeStumpManager;`

## メソッド
- **文字列名** レシピ名
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) ツール**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) の入力**
- **int chopTimes** チョップ
- **文字列グループ** レシピグループ

## 加算

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack output, IIngredient tool, IIngredient input, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
