# SpielerBreakSpeed

Das PlayerBreakSpeed Event wird abgefeuert, wenn ein Spieler versucht, einen Block zu zerstören.  
Es kann abgebrochen werden, um zu verhindern, dass der Spieler diesen Block zerstören kann.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerBreakSpeedEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerBreakSpeed Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter     | ZenSetter | Type                                        |
| ------------- | --------- | ------------------------------------------- |
| blockstatus   |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| blockieren    |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
| originalSpeed |           | float                                       |
| newSpeed      | newSpeed  | float                                       |