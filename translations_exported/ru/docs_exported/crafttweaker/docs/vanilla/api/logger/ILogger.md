# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ILogger;
```


## Methods

### debug

Logs a debug message.

Return Type: void

```zenscript
ILogger.debug(message as string) as void
logger.debug("message");
```

| Параметр | Тип    | Description           |
| -------- | ------ | --------------------- |
| message  | string | message to be logged. |


### error

Logs an error message.

Return Type: void

```zenscript
ILogger.error(message as string) as void
logger.error("message");
```

| Параметр | Тип    | Description           |
| -------- | ------ | --------------------- |
| message  | string | message to be logged. |


### info

Logs an info message.

Return Type: void

```zenscript
ILogger.info(message as string) as void
logger.info("message");
```

| Параметр | Тип    | Description           |
| -------- | ------ | --------------------- |
| message  | string | message to be logged. |


### trace

Logs a trace message.

Return Type: void

```zenscript
ILogger.trace(message as string) as void
logger.trace("message");
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| message  | string | message to be logged |


### warning

Logs a warning message.

Return Type: void

```zenscript
ILogger.warning(message as string) as void
logger.warning("message");
```

| Параметр | Тип    | Description           |
| -------- | ------ | --------------------- |
| message  | string | message to be logged. |



