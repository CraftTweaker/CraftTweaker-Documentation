# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.ILogger
```

## 使用方式
### debug

Logs a debug message.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| 参数      | 类型          | 描述                    |
| ------- | ----------- | --------------------- |
| message | 字符串[string] | message to be logged. |


### error

Logs an error message.

```zenscript
logger.error(message as String);
logger.error("message");
```

| 参数      | 类型          | 描述                    |
| ------- | ----------- | --------------------- |
| message | 字符串[string] | message to be logged. |


### info

Logs an info message.

```zenscript
logger.info(message as String);
logger.info("message");
```

| 参数      | 类型          | 描述                    |
| ------- | ----------- | --------------------- |
| message | 字符串[string] | message to be logged. |


### warning

Logs a warning message.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| 参数      | 类型          | 描述                    |
| ------- | ----------- | --------------------- |
| message | 字符串[string] | message to be logged. |



