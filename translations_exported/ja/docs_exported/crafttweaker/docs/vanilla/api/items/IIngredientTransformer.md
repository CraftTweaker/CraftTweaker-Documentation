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
myIIngredientTransformer.getCommandString(particle as T);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 材料    | T   | 説明が提供されていません |


### 一致

戻り値の型: boolean

```zenscript
myIIngredientTransformer.matches(stack as crafttweaker.api.item.IItemStack);
```

| パラメータ | タイプ                                                               | 説明           |
| ----- | ----------------------------------------------------------------- | ------------ |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |



