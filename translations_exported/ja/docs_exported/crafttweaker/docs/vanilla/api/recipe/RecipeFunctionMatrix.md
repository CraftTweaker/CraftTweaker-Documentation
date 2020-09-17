# Recipe関数マトリクス

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.recipe.RecipeFunctionMatrix
```

## 機能インターフェイス

このクラスは関数型インターフェイスです。 つまり、ラムダ表記を使用してインスタンスを作成することができます。 ラムダ表記は次のようになります。
```zenscript
(normalOut, inputs) => <item:minecraft:dirt>
```
## メソッド
### プロセス

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMatrix.process(通常はcrafttweaker.api.item.IItemStackとして, crafttweaker.api.item.IItemStack[][] );
```

| パラメータ  | タイプ                                                                   | 説明           |
| ------ | --------------------------------------------------------------------- | ------------ |
| 通常終了   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | 説明が提供されていません |
| inputs | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | 説明が提供されていません |



