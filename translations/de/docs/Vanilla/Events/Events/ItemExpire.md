# ItemAblauf

Das ItemExpire Event wird abgefeuert, wenn ein Item abläuft (erreicht seine Macimumlebensdauern).  
Es kann abgebrochen werden, um zu verhindern, dass der Gegenstand als tot markiert wird.  
Bei Stornierung wird `extralife` zur Lebensdauer des Artikels hinzugefügt.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. temExpireEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | Type                                          |
| --------- | --------- | --------------------------------------------- |
| eintrag   |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | int                                           |