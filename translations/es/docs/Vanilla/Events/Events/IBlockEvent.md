# Evento IBlock

Esta interfaz es ampliada por todos los eventos que pueden tratar con bloques en el mundo.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IBlockEvent;`

## Extendiendo IEventPositionable

Esta interfaz extiende [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), lo que significa que toda la funcionalidad que ofrece IEventPositionable también está presente en IBlockEvent

## ZenGetters

| nombre            | tipo                                             |
| ----------------- | ------------------------------------------------ |
| mundo             | [IWorld](/Vanilla/World/IWorld/)                 |
| estado de bloqueo | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |
| bloque            | [IBlock](/Vanilla/Blocks/IBlock/)                |