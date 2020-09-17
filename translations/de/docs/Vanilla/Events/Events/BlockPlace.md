
# Blockplatz-Ereignis

Das BlockBreak Event wird abgefeuert, wenn ein Block platziert wird. Sie können das Ereignis abbrechen, um zu verhindern, dass der Block platziert wird.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. lockPlaceEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
BlockPlace Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter         | ZenSetter | Type                                        |
| ----------------- | --------- | ------------------------------------------- |
| `player`          |           | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `aktuell`         |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `platziert gegen` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `Hand`            |           | String                                      |
