# Evento IJugador

Esta interfaz se extiende por todos los eventos que tienen un jugador.  
Esto significa que puedes usar el getter de abajo para acceder al jugador.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IPlayerEvent;`

## Extender ILivingEvent

Esta interfaz extiende [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), lo que significa que toda la funcionalidad que ofrece ILivingEvent también está presente en IPlayerEvent

## ZenGetters

| nombre  | tipo                                 |
| ------- | ------------------------------------ |
| jugador | [IPlayer](/Vanilla/Players/IPlayer/) |