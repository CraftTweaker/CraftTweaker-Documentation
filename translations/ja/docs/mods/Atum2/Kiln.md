# Kiln

Kilnはビルディングブロックを迅速に処理するために使用されるマルチブロックで、炉内で何かを精錬することによって得ることができます。

## パッケージ
`mods.atum.Kiln;`

## ブラック リスト

Kilnのレシピは、バニラかまどのレシピに基づいており、建築ブロック以外のすべてを整理します。 ブラックリストは、バニラかまどからレシピをつかむことをさらに最小限に抑えるための方法です。

`mods.atum.Kiln.blacklist(id);`

- `id` ブラックリストに入れるべき入力ブロック/アイテムの名前空間ID。

指定されたアイテム/ブロックを持つレシピを削除します。窯がバニラかまどから取り出すレシピを削除します

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## レシピを追加

`mods.atum.Kiln.addRecipe(input, output, experience, @Optional cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `経験` 浮動小数点数
- `cookTime` Integer number (空白の場合、デフォルトは 75)

指定された入力、出力、経験 & 調理時間

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## レシピを削除する

除去方法は、Atum(または他のMod)によってキルンのために特別に追加されたレシピのためにのみ機能します デフォルトでは、Atumでは、これはMarlからWhite Ceramic Tile Blockのレシピにのみなります。 何か他のものを削除したい場合は、おそらくブラックリスト(上記のドキュメント)を探しています。

### 出力によるレシピの削除

`mods.atum.Kiln.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

出力結果が与えられた [IItemStack](/vanilla/api/items/IItemStack) であるすべてのレシピを削除します。

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### 出力 & 入力でレシピを削除

`mods.atum.Kiln.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

指定された出力 & 入力で特定のレシピを削除します。

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### その他の削除方法

紡績ホイールのレシピを削除する他の方法については、 [レシピマネージャー](/recipes/recipe_managers) を参照してください。
