# CropGrowPreEvent

Das CropGrowPre Event wird gefeuert, wenn Ernten zu wachsen versuchen. It has a **result** which determines whether the default behaviour occurs or not:

- **Erlaube**: die Ernte ist gezwungen, zu wachsen.
- **lehne**ab: die Ernte kann nicht angebaut werden.
- **Standard**: Der Angriff verwendet das Standardverhalten von Vanille.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ropGrowPreEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
CropGrowPost Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter             | ZenSetter | Type                                        |
| --------------------- | --------- | ------------------------------------------- |
| `originalBlockstatus` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`       |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
