# Spieler Respawn

Das Spielerrespawn-Event wird gefeuert, wenn ein Spieler wiederbelebt wird.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerRespawnEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerRespawn Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter        | Rückgabetyp                                                  |
| ---------------- | ------------------------------------------------------------ |
| `player`         | [IPlayer](/Vanilla/Players/IPlayer/)                         |
| `isEndConquered` | bool (legt fest, ob der Respawn aufgrund des Endportals ist) |