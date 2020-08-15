# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.ILogger
```

## メソッド
### debug

Logs a debug message.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| パラメータ   | タイプ  | 説明                    |
| ------- | ---- | --------------------- |
| message | 文字列型 | message to be logged. |


### error

Logs an error message.

```zenscript
logger.error(message as String);
logger.error("message");
```

| パラメータ   | タイプ  | 説明                    |
| ------- | ---- | --------------------- |
| message | 文字列型 | message to be logged. |


### 情報

Logs an info message.

```zenscript
logger.info(message as String);
logger.info("message");
```

| パラメータ   | タイプ  | 説明                    |
| ------- | ---- | --------------------- |
| message | 文字列型 | message to be logged. |


### warning

Logs a warning message.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| パラメータ   | タイプ  | 説明                    |
| ------- | ---- | --------------------- |
| message | 文字列型 | message to be logged. |



