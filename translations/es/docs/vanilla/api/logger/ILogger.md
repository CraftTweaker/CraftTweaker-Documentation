# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.ILogger
```

## Métodos
### debug

Logs a debug message.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| Parámetro | Tipo   | Descripción           |
| --------- | ------ | --------------------- |
| message   | Cadena | message to be logged. |


### error

Logs an error message.

```zenscript
logger.error(message as String);
logger.error("message");
```

| Parámetro | Tipo   | Descripción           |
| --------- | ------ | --------------------- |
| message   | Cadena | message to be logged. |


### info

Logs an info message.

```zenscript
logger.info(message as String);
logger.info("message");
```

| Parámetro | Tipo   | Descripción           |
| --------- | ------ | --------------------- |
| message   | Cadena | message to be logged. |


### warning

Logs a warning message.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| Parámetro | Tipo   | Descripción           |
| --------- | ------ | --------------------- |
| message   | Cadena | message to be logged. |



