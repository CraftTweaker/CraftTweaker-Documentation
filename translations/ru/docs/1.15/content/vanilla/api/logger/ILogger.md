# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.ILogger
```

## Методы
### debug

Logs a debug message.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| Параметр | Тип    | Описание              |
| -------- | ------ | --------------------- |
| message  | String | message to be logged. |


### error

Logs an error message.

```zenscript
logger.error(message as String);
logger.error("message");
```

| Параметр | Тип    | Описание              |
| -------- | ------ | --------------------- |
| message  | String | message to be logged. |


### info

Logs an info message.

```zenscript
logger.info(message as String);
logger.info("message");
```

| Параметр | Тип    | Описание              |
| -------- | ------ | --------------------- |
| message  | String | message to be logged. |


### warning

Logs a warning message.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| Параметр | Тип    | Описание              |
| -------- | ------ | --------------------- |
| message  | String | message to be logged. |



