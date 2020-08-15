# Spieler BrewedTrank

Das PlayerBrewedPotion Event wird gefeuert, wenn ein Spieler einen Trank vom Brauständer abholt.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerBrewedPotionEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerBrewedPotion Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getter/Setter auch aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter | Rückgabetyp                              |
| --------- | ---------------------------------------- |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `trank`   | [IItemStack](/Vanilla/Items/IItemStack/) |
| `Hand`    | string                                   |