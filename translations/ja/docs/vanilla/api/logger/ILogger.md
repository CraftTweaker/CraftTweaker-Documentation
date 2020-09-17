# ILogger

crafttweaker.logファイルやその他のロガー(プレイヤーロガーなど)とインターフェースするために使用される基本クラス。

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.ILogger
```

## メソッド
### debug

デバッグメッセージを記録します。

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| パラメータ | タイプ  | 説明         |
| ----- | ---- | ---------- |
| メッセージ | 文字列型 | 記録されるメッセージ |


### エラー

エラーメッセージをログに記録します。

```zenscript
logger.error(message as String);
logger.error("message");
```

| パラメータ | タイプ  | 説明         |
| ----- | ---- | ---------- |
| メッセージ | 文字列型 | 記録されるメッセージ |


### 情報

情報メッセージをログに記録します。

```zenscript
logger.info(message as String);
logger.info("message");
```

| パラメータ | タイプ  | 説明         |
| ----- | ---- | ---------- |
| メッセージ | 文字列型 | 記録されるメッセージ |


### 警告

警告メッセージをログに記録します。

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| パラメータ | タイプ  | 説明         |
| ----- | ---- | ---------- |
| メッセージ | 文字列型 | 記録されるメッセージ |



