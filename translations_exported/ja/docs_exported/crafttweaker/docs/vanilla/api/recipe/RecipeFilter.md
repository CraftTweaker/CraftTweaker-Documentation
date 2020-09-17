# RecipeFilter

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.recipe.RecipeFilter
```

## 機能インターフェイス

このクラスは関数型インターフェイスです。 つまり、ラムダ表記を使用してインスタンスを作成することができます。 ラムダ表記は次のようになります。
```zenscript
(name) => false
```
## メソッド
### テスト

戻り値の型: boolean

```zenscript
myRecipeFilter.test(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |



