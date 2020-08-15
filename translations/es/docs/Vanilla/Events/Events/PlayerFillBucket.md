# Cubo de relleno de jugador

El Evento PlayerFillBucket se activa cada vez que un jugador llena un cubo.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerFillBucketEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase anterior y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los Eventos PlayerFillBucket implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter           | Tipo de devolución                                    |
| ------------------- | ----------------------------------------------------- |
| `cancelado`         | boolean                                               |
| `jugador`           | [IPlayer](/Vanilla/Players/IPlayer/)                  |
| `resultado`         | [IItemStack](/Vanilla/Items/IItemStack/)              |
| `cubo vacío`        | [IItemStack](/Vanilla/Items/IItemStack/)              |
| `x`                 | int                                                   |
| `y`                 | int                                                   |
| `z`                 | int                                                   |
| `mundo`             | [IWorld](/Vanilla/World/IWorld/)                      |
| `estado de bloqueo` | [Estado de IBlock](/Vanilla/Blocks/IBlockState/)      |
| `bloque`            | [IBlock](/Vanilla/Blocks/IBlock/)                     |
| `dimensión`         | int                                                   |
| `rayTraceResultado` | [IRayTraceResultado](/Vanilla/World/IRayTraceResult/) |

## Métodos

- `event.cancel()` establece el evento como cancelado.

## Configuradores

- `event.result = <minecraft:ender_pearl>` ¡Esto también procesará el evento!