# Evento Iproyectil

Esta interfaz se extiende por todos los eventos que se relacionan con proyectiles (tales como bolas de fuego, flechas y objetos lanzables).

## Importar la clase
Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IProjectileImpactEvent;`

## Extendiendo IEntityEvent
Esta interfaz extiende [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), lo que significa que toda la funcionalidad que IEntityEvent ofrece también está presente en IProjectileImpactEvent.

## ZenGetters

| nombre     | tipo                                                  |
| ---------- | ----------------------------------------------------- |
| `rayTrace` | [IRayTraceResultado](/Vanilla/World/IRayTraceResult/) |
