# MCAmbiguityConsumer

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCAmbiguityConsumer
```

## 機能インターフェイス

このクラスは関数型インターフェイスです。 つまり、ラムダ表記を使用してインスタンスを作成することができます。 ラムダ表記は次のようになります。
```zenscript
(親, 子, 兄弟, 入力) =>{}
```
## メソッド
### 曖昧な

```zenscript
myMCAmbiguityConsummer.bigiguous(parent as crafttweaker.api.commands.custom.MCCommandNode, child as crafttweaker.api.commands.custom.MCCommandNode, sibling as crafttweaker.api.commands.custom.MCCommandNode, inputs as Collection<String>);
```

| パラメータ   | タイプ                                                                                          | 説明           |
| ------- | -------------------------------------------------------------------------------------------- | ------------ |
| 親       | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |
| 子供      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |
| sibling | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |
| inputs  | コレクション&lt;String&gt;                                                             | 説明が提供されていません |



