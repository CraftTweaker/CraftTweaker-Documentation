# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ILogger;
```


## 方法

### debug

Logs a debug message.

Return Type: void

```zenscript
ILogger.debug(message as string) as void
logger.debug("message");
```

| 参数      | 类型     | 描述                    |
| ------- | ------ | --------------------- |
| message | string | message to be logged. |


### error

Logs an error message.

Return Type: void

```zenscript
ILogger.error(message as string) as void
logger.error("message");
```

| 参数      | 类型     | 描述                    |
| ------- | ------ | --------------------- |
| message | string | message to be logged. |


### info

Logs an info message.

Return Type: void

```zenscript
ILogger.info(message as string) as void
logger.info("message");
```

| 参数      | 类型     | 描述                    |
| ------- | ------ | --------------------- |
| message | string | message to be logged. |


### trace

Logs a trace message.

Return Type: void

```zenscript
ILogger.trace(message as string) as void
logger.trace("message");
```

| 参数      | 类型     | 描述                   |
| ------- | ------ | -------------------- |
| message | string | message to be logged |


### warning

Logs a warning message.

Return Type: void

```zenscript
ILogger.warning(message as string) as void
logger.warning("message");
```

| 参数      | 类型     | 描述                    |
| ------- | ------ | --------------------- |
| message | string | message to be logged. |



