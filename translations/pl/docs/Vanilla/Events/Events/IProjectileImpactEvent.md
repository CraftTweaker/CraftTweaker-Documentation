# IProjectileImpactEvent

This interface is extended by all Events that relate to projectiles (suchs as fireballs, arrows and throwable items).

## Importowanie klasy
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IProjectileImpactEvent;`

## Rozszerzenie IEntityEvent
This interface extends [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), which means that all functionality that IEntityEvent offers is also present in IProjectileImpactEvent.

## ZenGetters

| Nazwa      | typ                                                     |
| ---------- | ------------------------------------------------------- |
| `rayTrace` | [Wynik IRayTraceReult](/Vanilla/World/IRayTraceResult/) |
