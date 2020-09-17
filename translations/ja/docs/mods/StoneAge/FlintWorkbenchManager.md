# Flint Workbench

## パッケージ
`import mods.stone_age.FlintWorkbenchManager;`

## メソッド
- **文字列名** レシピ名
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) ツール** 作成ツール
- **文字列グループ** レシピグループ

## 加算

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(String name, IItemStack output, IIngredient[][] inputMatrix, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:flint_workbench>.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
