# EntityLivingFall

Das EntityLivingfall-Event wird gefeuert, wenn eine EntityLivingfall-Einheit fallen soll.  
Es kann abgebrochen werden, um die Entität vor dem Sturz zu schützen.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ntityLivingFallEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter            | ZenSetter            | Type  |
| -------------------- | -------------------- | ----- |
| disance              | disance              | float |
| SchadenMultiplikator | SchadenMultiplikator | float |