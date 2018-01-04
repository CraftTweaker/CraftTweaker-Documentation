# Logger

If the print-function is not enough for you, then you can use the logger Object to log Commands, information warnings and more.

## Accessing the Logging Handler
You can access the Formatting Handler using the `logger` [global keyword](/Vanilla/Global_Functions).

## Logging 

- logCommand(String message);
- logInfo(String message);
- logWarning(String message);
- logError(String message);



## Accessible, but useless Methods

- logError(String message, Throwable exception);
- logPlayer([IPlayer](/Vanilla/Players/IPlayer) player);

You can not use Java's throwables so the first Method is useless.  
The second Method does absolutely nothing. Literally, the implementation is empty!