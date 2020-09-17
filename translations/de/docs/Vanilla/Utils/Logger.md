# Logger

Wenn die Druckfunktion für Sie nicht ausreicht, können Sie das Logger-Objekt verwenden, um Befehle, Informationswarnungen und mehr zu protokollieren.

## Zugriff auf den Logging Handler

Sie können auf den Formatierungs-Handler mit dem `-Logger` [globalen Schlüsselwort](/Vanilla/Global_Functions/) zugreifen.

## Protokollierung

- logCommand(String-Nachricht);
- logInfo(Zeichenketten);
- logWarnung(String-Nachricht);
- logError(Zeichenketten);

## Barrierefreie, aber nutzlose Methoden

- logError(String-Nachricht, werfbare Ausnahme);
- logPlayer ([IPlayer](/Vanilla/Players/IPlayer/) Spieler);

Du kannst Javas Werfer nicht verwenden, daher ist die erste Methode nutzlos.  
Die zweite Methode macht absolut nichts. Die Implementierung ist buchstäblich leer!