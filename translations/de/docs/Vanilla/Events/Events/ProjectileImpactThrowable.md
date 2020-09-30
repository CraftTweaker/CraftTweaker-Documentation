# ProjectileImpactThrowable

This event is fired whenever a throwable projectile impacts an entity but before damage, etc, is calculated. It is **cancelable**, and if canceled, the impact will not be processed.

## Diese Klasse importieren
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ProjectileImpactThrowableEvent;`

## Extending IEntityEvent
ProjectileImpactThrowable Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters and ZenSetters

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | ZenSetter | Type                                                      |
| ---------- | --------- | --------------------------------------------------------- |
| `fireball` |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `shooter`  |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
