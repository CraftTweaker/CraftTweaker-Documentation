# 爆発の作成

爆発クラフトは、地面にあるアイテムであるときに爆発にさらすことで、他のアイテムに変換するために使用されます。 設定可能な(ランダム)損失率を指定できます。 デフォルトでは、これは20%の損失率で鉄インゴットを圧縮された鉄インゴットに変換するために使用されます。

## 発信中

`mods.emeraticcraft.explosioncrafting` を使って爆発製作パッケージを呼び出すことができます。

## 削除中

この関数は、与えられた [IIngredient](/Vanilla/Variable_Types/IIngredient/) `出力` で見つけた最初のレシピを削除します。

```zenscript
mods.emeraticcraft.expulsioncraft.removeRecipe(IIngredient output);
// Example
mods.emeraticcraft.explosioncraft.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

この機能は、 *個の* 個の爆破製作レシピを削除します。

```zenscript
mods.emeraticcraft.expulsioncraft.removeAllRecipes();
```

## 追加中

これらの機能は、新たな爆発製作レシピを追加するために使用されます。

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(IItemStack input, IItemStack output, int loss_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe(IOreDictEntry input, IItemStack output, int loss_rate);

// Example
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
// An expert-mode pack might make plain iron a very poor choice, and steel much better.
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// A way to make lots of Nether Brick, for (on average) 4x the cost of Netherrack
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```