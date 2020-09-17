# プレッシャーチャンバー

プレッシャーチャンバーは、圧縮空気を使用して、1つまたは複数の入力項目を1つ以上の出力項目に変換するマルチブロック構造です。 圧力チャンバーレシピは、変換を実行するために必要なバー内の空気圧である圧力値に関連付けられています。

## 発信中

`mods.emeraticcraft.pressurechamber` を使用して、Pressure Chamber パッケージに電話することができます。

## 削除中

この関数は、与えられた [IItemStack](/Vanilla/Items/IItemStack/) `で見つけた最初のレシピを` 配列から削除します。

```zenscript
mods.emeraticcraft.pressurechamber.removeRecipe(IItemStack[] outputs);
// Example
mods.emeraticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

この関数は *個の* 気圧チャンバーのレシピをすべて削除します。

```zenscript
mods.emeraticcraft.pressurechamber.removeAllRecipes();
```

## 追加中

この機能は、プレッシャーチャンバーに新しいレシピを追加するために使用されます。

```zenscript
mods.emeraticcraft.pressurechamber.addRecipe(IIngredient[] inputs, double press, IItemStack[] outputs);

// Example
mods.emeraticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```