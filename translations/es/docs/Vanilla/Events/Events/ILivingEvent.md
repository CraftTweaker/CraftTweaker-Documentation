# ILivingEvent

Esta interfaz es ampliada por todos los eventos que pueden tener una entidad viviente central.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.ILivingEvent;`

## Extendiendo IEntityEvent

Esta interfaz extiende [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), lo que significa que toda la funcionalidad que IEntityEvent ofrece también está presente en ILivingEvent

## ZenGetters

| nombre           | tipo                                                      |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |