# Логгер

Если Вам не хватает функции print, тогда Вы можете использовать объект логгера для логирования команд, предупреждений и так далее.

## Доступ к обработчику логирования

Вы можете получить доступ к обработчику форматирования, используя [глобальное ключеваое слово](/Vanilla/Global_Functions/) `логгера`.

## Логирование

- logCommand(String сообщение);
- logInfo(String сообщение);
- logWarning(String сообщение);
- logError(String сообщение);

## Accessible, but useless Methods

- logError(String message, Throwable exception);
- logPlayer([IPlayer](/Vanilla/Players/IPlayer/) player);

You can not use Java's throwables so the first Method is useless.  
The second Method does absolutely nothing. Literally, the implementation is empty!