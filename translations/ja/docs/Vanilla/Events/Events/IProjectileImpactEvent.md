# IProjectileImpactEvent

This interface is extended by all Events that relate to projectiles (suchs as fireballs, arrows and throwable items).

## クラスのインポート
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IProjectileImpactEvent;`

## Extending IEntityEvent
This interface extends [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), which means that all functionality that IEntityEvent offers is also present in IProjectileImpactEvent.

## ZenGetters

| 名前         | タイプ                                                |
| ---------- | -------------------------------------------------- |
| `rayTrace` | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |
