# Spieler-Tick

Das PlayerTick Event wird für jeden Spieler abgefeuert.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerTickEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerTick Events implementiert die folgenden Schnittstellen und kann auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter | Rückgabetyp                          |
| --------- | ------------------------------------ |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `phase`   | string                               |