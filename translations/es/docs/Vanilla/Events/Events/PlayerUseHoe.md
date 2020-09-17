# Jugador con azada

El Evento PlayerUseHoe se activa cada vez que un jugador usa su azada... Si sabe a qué me refiero.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerUseHoeEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos PlayerUseHoe implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter           | Tipo de devolución                               |
| ------------------- | ------------------------------------------------ |
| `cancelado`         | boolean                                          |
| `procesado`         | boolean                                          |
| `x`                 | int                                              |
| `y`                 | int                                              |
| `z`                 | int                                              |
| `jugador`           | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `mundo`             | [IWorld](/Vanilla/World/IWorld/)                 |
| `bloque`            | [IBlock](/Vanilla/Blocks/IBlock/)                |
| `estado de bloqueo` | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |
| `dimensión`         | int                                              |
| `objeto`            | [IItemStack](/Vanilla/Items/IItemStack/)         |

## Métodos

- `event.cancel()` establece el evento como cancelado
- `event.process()` establece el evento como procesado