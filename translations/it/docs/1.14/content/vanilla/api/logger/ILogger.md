# ILogger

Base class used to interface with the crafttweaker.log file and other loggers (such as the player logger).

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.ILogger
```

## Metodi
### debug

Logs a debug message.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| Parametro | Tipo   | Descrizione           |
| --------- | ------ | --------------------- |
| message   | String | message to be logged. |


### error

Logs an error message.

```zenscript
logger.error(message as String);
logger.error("message");
```

| Parametro | Tipo   | Descrizione           |
| --------- | ------ | --------------------- |
| message   | String | message to be logged. |


### info

Logs an info message.

```zenscript
logger.info(message as String);
logger.info("message");
```

| Parametro | Tipo   | Descrizione           |
| --------- | ------ | --------------------- |
| message   | String | message to be logged. |


### warning

Logs a warning message.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| Parametro | Tipo   | Descrizione           |
| --------- | ------ | --------------------- |
| message   | String | message to be logged. |



