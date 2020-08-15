# Spielergröße geändert

The PlayerChangedDimension Event is fired whenever a [player's](/Vanilla/Players/IPlayer/) [dimension/world](/Vanilla/World/IWorld/) changes, for example upon entering/leaving the nether.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerChangedDimensionEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerChandedDimension Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | Rückgabetyp                          |
| ---------- | ------------------------------------ |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `von`      | int                                  |
| `von Welt` | [IWorld](/Vanilla/World/IWorld/)     |
| `zu`       | int                                  |
| `zur Welt` | [IWorld](/Vanilla/World/IWorld/)     |