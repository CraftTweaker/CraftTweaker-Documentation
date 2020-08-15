# PlayerUseItemTick

El Evento de PlayerUseItemTick es disparado cada tick que un jugador utiliza consistentemente un objeto.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerUseItemTick`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos PlayerUseItemTick implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter   | Tipo de devolución                       |
| ----------- | ---------------------------------------- |
| `cancelado` | boolean                                  |
| `jugador`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `objeto`    | [IItemStack](/Vanilla/Items/IItemStack/) |
| `duración`  | int                                      |

## Métodos

- `event.cancel()` establece el evento como cancelado