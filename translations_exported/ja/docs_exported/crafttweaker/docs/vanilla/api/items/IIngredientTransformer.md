# IIngredientTransformer

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## メソッド
### getCommandString

戻り値の型: String

```zenscript
myIIngredientTransformer.getCommandString(transformedIngredient)
```

| パラメータ                 | タイプ | 説明           |
| --------------------- | --- | ------------ |
| transformedIngredient | T   | 説明が提供されていません |


### 変換する

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myIIngredientTransformer.transform(stack as crafttweaker.api.item.IItemStack);
```

| パラメータ | タイプ                                                               | 説明           |
| ----- | ----------------------------------------------------------------- | ------------ |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |



