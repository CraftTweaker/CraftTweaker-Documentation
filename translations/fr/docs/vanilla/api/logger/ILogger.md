# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.ILogger
```

## Méthodes
### debug

Logs a debug message.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| Paramètre | Type de texte        | Libellé               |
| --------- | -------------------- | --------------------- |
| message   | Chaîne de caractères | message to be logged. |


### error

Logs an error message.

```zenscript
logger.error(message as String);
logger.error("message");
```

| Paramètre | Type de texte        | Libellé               |
| --------- | -------------------- | --------------------- |
| message   | Chaîne de caractères | message to be logged. |


### Infos

Logs an info message.

```zenscript
logger.info(message as String);
logger.info("message");
```

| Paramètre | Type de texte        | Libellé               |
| --------- | -------------------- | --------------------- |
| message   | Chaîne de caractères | message to be logged. |


### warning

Logs a warning message.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| Paramètre | Type de texte        | Libellé               |
| --------- | -------------------- | --------------------- |
| message   | Chaîne de caractères | message to be logged. |



