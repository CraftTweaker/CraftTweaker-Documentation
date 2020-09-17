# EntityLivingDeath

Das EntityLivingDeath Event wird gefeuert, wenn eine Entität sterben wird.  
Es kann abgebrochen werden, um die Entität leben zu lassen.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ntityLivingDeathEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter

| ZenGetter      | Type                                            |
| -------------- | ----------------------------------------------- |
| Schadensquelle | [IDamageSource](/Vanilla/Damage/IDamageSource/) |