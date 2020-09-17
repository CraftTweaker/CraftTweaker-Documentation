# EntityLivingAttacked

Das EntityLivingAttacked Event wird abgefeuert, wenn eine Einheit angegriffen wird.  
Es kann abgebrochen werden, um zu verhindern, dass die Einheit Schaden nimmt.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ntityLivingAttackedEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter

| ZenGetter      | Type                                            |
| -------------- | ----------------------------------------------- |
| Schadensquelle | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| beträge        | float                                           |