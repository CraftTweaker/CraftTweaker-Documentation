# MCResultConsumer

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## 機能インターフェイス

このクラスは関数型インターフェイスです。 つまり、ラムダ表記を使用してインスタンスを作成することができます。 ラムダ表記は次のようになります。
```zenscript
(commandContext, success, result) =>{}
```
## メソッド
### onCommandComplete

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as crafttweaker.api.commands.custom.MCCommandContext success as boolean, result as int);
```

| パラメータ          | タイプ                                                                                                | 説明           |
| -------------- | -------------------------------------------------------------------------------------------------- | ------------ |
| commandContext | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | 説明が提供されていません |
| 成功             | boolean型                                                                                           | 説明が提供されていません |
| result         | int                                                                                                | 説明が提供されていません |



