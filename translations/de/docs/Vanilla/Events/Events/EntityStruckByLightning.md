# EntityStruckByLightning

Das EntityStruckByLightning-Event wird abgefeuert, wenn ein Blitzschlag eine Einheit trifft.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ntityStruckByLightningEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

LivingEntityUseItem Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter | Rückgabetyp                           |
| --------- | ------------------------------------- |
| `blitzen` | [IEntity](/Vanilla/Entities/IEntity/) |