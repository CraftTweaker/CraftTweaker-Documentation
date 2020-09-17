# カスタムコマンド

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.CustomCommands
```

## メソッド
### 引数

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.customCommands.argument(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |


### リテラル

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.customCommands.literal(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |


### registerCommand

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(builder as crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder);
```

| パラメータ | タイプ                                                                                                                 | 説明           |
| ----- | ------------------------------------------------------------------------------------------------------------------- | ------------ |
| ビルダー: | [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | 説明が提供されていません |



