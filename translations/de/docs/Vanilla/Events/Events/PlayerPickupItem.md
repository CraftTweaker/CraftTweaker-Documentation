# Spieler PickupItem

Das SpielerPickupItem Event wird gefeuert, wenn ein Spieler mit einer Entität interagiert.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerPickupItemEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerPickupItem Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getter/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter | Rückgabetyp                                   |
| --------- | --------------------------------------------- |
| `eintrag` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)          |