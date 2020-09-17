# Spieler angemeldet

Das PlayerLoggedIn-Event wird gefeuert, wenn sich ein Spieler einloggt.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerLoggedInEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerLoggedIn Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter | Rückgabetyp                          |
| --------- | ------------------------------------ |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/) |