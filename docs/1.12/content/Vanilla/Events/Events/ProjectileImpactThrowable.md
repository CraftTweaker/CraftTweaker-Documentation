# ProjectileImpactThrowable

This event is fired whenever a throwable projectile impacts an entity but before damage, etc, is calculated. It is **cancelable**, and if canceled, the impact will not be processed.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ProjectileImpactThrowableEvent;`

## Event interface extensions
ProjectileImpactThrowable Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IProjectileImpactEvent](/Vanilla/Events/Events/IProjectileImpactEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter        | ZenSetter           | Type                                                               |
|------------------|---------------------|--------------------------------------------------------------------|
| `throwable`      |                     | [IEntityThrowable](/Vanilla/Entities/IEntity/IEntityThrowable/)                              |
| `thrower`        |                     | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)          |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |
| `rayTrace`      |                 | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |

ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening


## Extensions from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entity`        |                 | [IEntity](/Vanilla/Entity/IEntity/)               |
