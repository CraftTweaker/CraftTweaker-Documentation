# Logger

Si la función de impresión no es suficiente para usted, entonces puede utilizar el Logger Object para registrar Comandos, avisos de información y más.

## Accediendo al gestor de registro

Puede acceder al Formatting Handler usando la `palabra clave global` [del registrador](/Vanilla/Global_Functions/).

## Loggando

- logCommand(String message);
- logInfo(String message);
- logAdning(String message);
- logError(String message);

## Métodos accesibles, pero inútiles

- logError(String message, Throwable exception);
- logplayer([IPlayer](/Vanilla/Players/IPlayer/) jugador);

No puedes usar los lanzables de Java por lo que el primer método es inútil.  
El segundo método no hace absolutamente nada. Literalmente, la aplicación está vacía.