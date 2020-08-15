# ILogger

Base-Klasse, die verwendet wird, um mit der crafttweaker.log Datei und anderen Loggern (wie der Player-Logger) zu arbeiten.

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.ILogger
```

## Methoden
### debug

Protokolliert eine Debug-Nachricht.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| Parameter | Type   | Beschreibung                   |
| --------- | ------ | ------------------------------ |
| nachricht | String | zu protokollierende Nachricht. |


### fehlerhaft

Protokolliert eine Fehlermeldung.

```zenscript
logger.error(message as String);
logger.error("message");
```

| Parameter | Type   | Beschreibung                   |
| --------- | ------ | ------------------------------ |
| nachricht | String | zu protokollierende Nachricht. |


### info

Protokolliert eine Info-Nachricht.

```zenscript
logger.info(message as String);
logger.info("message");
```

| Parameter | Type   | Beschreibung                   |
| --------- | ------ | ------------------------------ |
| nachricht | String | zu protokollierende Nachricht. |


### warnung

Protokolliert eine Warnmeldung.

```zenscript
logger.warning(Nachricht als String);
logger.warning("message");
```

| Parameter | Type   | Beschreibung                   |
| --------- | ------ | ------------------------------ |
| nachricht | String | zu protokollierende Nachricht. |



