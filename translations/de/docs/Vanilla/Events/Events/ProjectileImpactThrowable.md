# ProjektileImpactThrowable

Dieses Ereignis wird abgefeuert, wenn ein werfbares Projektil eine Entität berührt, aber vor dem Schaden, etc, berechnet wird. Es ist **widerrufbar**, und wenn abgebrochen, wird der Effekt nicht bearbeitet.

## Diese Klasse importieren
Möglicherweise muss [](/AdvancedFunctions/Import/) die Klasse importieren, um Fehler zu vermeiden.  
`Crafttweaker.event.ProjectileImpactThrowableEvent;`

## IEntityEvent wird erweitert
ProjectileImpactThrowable Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters und ZenSetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | ZenSetter | Type                                                      |
| ---------- | --------- | --------------------------------------------------------- |
| `fireball` |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `schießen` |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
