# 紡績ホイール

## パッケージ
`mods.atum.SpinningWheel;`

## レシピを追加

`mods.atum.SpinningWheel.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `回転` 0 を超える任意の数

指定された入力 & 出力でレシピを追加します。指定された回転でレシピを完了します。

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## レシピを削除する

### 出力によるレシピの削除

`mods.atum.SpinningWheel.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

出力結果が与えられた [IItemStack](/vanilla/api/items/IItemStack) であるすべてのレシピを削除します。

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### 出力 & 入力でレシピを削除

`mods.atum.SpinningWheel.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

指定された出力 & 入力で特定のレシピを削除します。

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### その他の削除方法

紡績ホイールのレシピを削除する他の方法については、 [レシピマネージャー](/recipes/recipe_managers) を参照してください。
