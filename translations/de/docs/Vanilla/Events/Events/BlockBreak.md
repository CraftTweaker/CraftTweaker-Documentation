# BreakEvent blockieren

Das BlockBreak Event wird abgefeuert, wenn ein Block gebrochen wird.  
Du kannst das Ereignis abbrechen, um zu verhindern, dass der Block unterbrochen wird.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. lockBreakEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

BlockBreak Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter   | ZenSetter   | Type                                 |
| ----------- | ----------- | ------------------------------------ |
| `player`    |             | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer`  |             | bool                                 |
| `erfahrung` | `erfahrung` | int                                  |