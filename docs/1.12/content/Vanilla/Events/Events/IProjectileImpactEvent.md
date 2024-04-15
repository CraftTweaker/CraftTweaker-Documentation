# IProjectileImpactEvent 

This interface is extended by all Events that relate to projectiles (suchs as fireballs, arrows and throwable items).

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IProjectileImpactEvent;`

## Extending IEntityEvent
This interface extends [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), which means that all functionality that IEntityEvent offers is also present in IProjectileImpactEvent.

## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `rayTrace`      |                 | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |



## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entity`         |                | [IEntity](/Vanilla/Entity/IEntity/)               |
