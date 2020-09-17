# Hueso del jugador

El evento Bonemeal de Jugador se activa cuando un jugador usa harina de huesos en un bloque.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerBonemealEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los Eventos PlayerBonemeal implementan las siguientes interfaces y pueden llamar a todos sus métodos/getters/setters también:

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
| `bloquear Pos`      | [IBlockPos](/Vanilla/World/IBlockPos/)           |
| `dimensión`         | int                                              |
| `objeto`            | [IItemStack](/Vanilla/Items/IItemStack/)         |

## Métodos

- `event.cancel()` establece el evento como cancelado
- `event.process()` establece el evento como procesado