# IProjectileImpactEvent

Questa interfaccia è estesa da tutti gli Eventi che si riferiscono a proiettili (quali palline da fuoco, frecce e oggetti lanciabili).

## Importare la classe
Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IProjectileImpactEvent;`

## Estendere IEntityEvent
Questa interfaccia estende [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), il che significa che tutte le funzionalità offerte da IEntityEvent sono presenti anche in IProjectileImpactEvent.

## ZenGetters

| nome       | tipo                                               |
| ---------- | -------------------------------------------------- |
| `rayTrace` | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |
