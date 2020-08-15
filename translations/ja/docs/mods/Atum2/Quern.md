# Quern

## パッケージ
`mods.atum.Quern;`

## レシピを追加

`mods.atum.Quern.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `回転` 0 を超える任意の数

指定された入力 & 出力でレシピを追加し、指定された回転でクエリを完了します。

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## レシピを削除する

### 出力によるレシピの削除

`mods.atum.Quern.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

出力結果が与えられた [IItemStack](/vanilla/api/items/IItemStack) であるすべてのレシピを削除します。

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### 出力 & 入力でレシピを削除

`mods.atum.Quern.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

指定された出力 & 入力で特定のレシピを削除します。

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### その他の削除方法

Quernレシピを削除する他の方法については、 [Recipe Manager](/recipes/recipe_managers) を参照してください。
