# ProjectileImpactThrowable

This event is fired whenever a throwable projectile impacts an entity but before damage, etc, is calculated. It is **cancelable**, and if canceled, the impact will not be processed.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ProjectileImpactThrowableEvent;`

## Extending IEntityEvent
ProjectileImpactThrowable Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters and ZenSetters

The following information can be retrieved from the event:

| ZenGetter        | ZenSetter           | Type                                                               |
|------------------|---------------------|--------------------------------------------------------------------|
| `throwable`       |                     | [IEntity](/Vanilla/Entities/IEntity/)                              |
| `thrower`        |                     | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)          |
