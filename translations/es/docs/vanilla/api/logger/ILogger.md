# ILogger

Clase base usada para interactuar con el archivo crafttweaker.log y otros registradores (como el registrador del jugador).

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.ILogger
```

## Métodos
### debug

Registra un mensaje de depuración.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| Parámetro | Tipo   | Descripción               |
| --------- | ------ | ------------------------- |
| mensaje   | Cadena | mensaje a ser registrado. |


### error

Registra un mensaje de error.

```zenscript
logger.error(message as String);
logger.error("message");
```

| Parámetro | Tipo   | Descripción               |
| --------- | ------ | ------------------------- |
| mensaje   | Cadena | mensaje a ser registrado. |


### info

Registra un mensaje de información.

```zenscript
logger.info(message as String);
logger.info("message");
```

| Parámetro | Tipo   | Descripción               |
| --------- | ------ | ------------------------- |
| mensaje   | Cadena | mensaje a ser registrado. |


### advertencia

Registra un mensaje de advertencia.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| Parámetro | Tipo   | Descripción               |
| --------- | ------ | ------------------------- |
| mensaje   | Cadena | mensaje a ser registrado. |



