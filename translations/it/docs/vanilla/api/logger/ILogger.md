# ILogger

Classe di base utilizzata per interfacciarsi con il file crafttweaker.log e altri logger (come il logger del giocatore).

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.ILogger
```

## Metodi
### debug

Registra un messaggio di debug.

```zenscript
logger.debug(messaggio come Stringa);
logger.debug("message");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| messaggio | Stringa | messaggio da registrare. |


### errore

Registra un messaggio di errore.

```zenscript
logger.error(messaggio come Stringa);
logger.error("messaggio");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| messaggio | Stringa | messaggio da registrare. |


### info

Registra un messaggio di informazioni.

```zenscript
logger.info(messaggio come Stringa);
logger.info("messaggio");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| messaggio | Stringa | messaggio da registrare. |


### avviso

Registra un messaggio di avviso.

```zenscript
logger.warning(messaggio come Stringa);
logger.warning("message");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| messaggio | Stringa | messaggio da registrare. |



