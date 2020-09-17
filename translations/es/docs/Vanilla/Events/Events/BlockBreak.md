# Evento BlockBreaks

El evento BlockBreak se dispara cada vez que un bloque está siendo roto.  
Puedes cancelar el evento para evitar que el bloque se rompe.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. lockBreakEvent`  
Por supuesto, también puede [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre.

## Extensiones de la interfaz de eventos

BlockBreak Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IBlock](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter     | Ajuste        | Tipo                                 |
| ------------- | ------------- | ------------------------------------ |
| `jugador`     |               | [IPlayer](/Vanilla/Players/IPlayer/) |
| `es Jugador`  |               | pluma                                |
| `experiencia` | `experiencia` | int                                  |