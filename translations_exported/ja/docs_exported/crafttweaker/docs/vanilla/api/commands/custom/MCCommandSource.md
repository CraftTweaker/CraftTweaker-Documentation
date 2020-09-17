# MCCommandSource

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## メソッド
### getName

戻り値の型: String

```zenscript
myMCCommandSource.getName();
```

### getPlayer

戻り値の型: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### getPlayerNames

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### getTeamNames

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

戻り値の型: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ を int);
```

| パラメータ         | タイプ | 説明           |
| ------------- | --- | ------------ |
| p_197034_1_ | int | 説明が提供されていません |


### isPlayer

戻り値の型: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### sendErrorMessage

```zenscript
myMCCommandSource.sendErrorMessage(message as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| メッセージ | 文字列型 | 説明が提供されていません |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allowLogging as boolean);
```

| パラメータ   | タイプ      | 説明           |
| ------- | -------- | ------------ |
| フィードバック | 文字列型     | 説明が提供されていません |
| ログを許可   | boolean型 | 説明が提供されていません |


### withFeedback無効

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### minPermissionLevel

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ を int);
```

| パラメータ         | タイプ | 説明           |
| ------------- | --- | ------------ |
| p_197026_1_ | int | 説明が提供されていません |


### withPermissionLevel

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ を int);
```

| パラメータ         | タイプ | 説明           |
| ------------- | --- | ------------ |
| p_197033_1_ | int | 説明が提供されていません |



