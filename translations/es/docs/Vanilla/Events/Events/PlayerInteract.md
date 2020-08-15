# Interacto del jugador

El evento PlayerInteract se activa cada vez que un jugador interactúa con un bloque.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerInteractEvent`  
Por supuesto, también puede [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre.

## Extensiones de la interfaz de eventos

Los eventos PlayerInteract implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter       | Tipo de devolución                   |
| --------------- | ------------------------------------ |
| `cancelado`     | boolean                              |
| `usando ítem`   | boolean                              |
| `usando Bloque` | boolean                              |
| `x`             | int                                  |
| `y`             | int                                  |
| `z`             | int                                  |
| `jugador`       | [IPlayer](/Vanilla/Players/IPlayer/) |
| `mundo`         | [IWorld](/Vanilla/World/IWorld/)     |
| `bloque`        | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `dimensión`     | int                                  |

## Métodos

- `event.cancel()` establece el evento como cancelado
- `event.useBlock()` establece el bloque como verdadero
- `event.useItem()` establece Elemento a verdadero