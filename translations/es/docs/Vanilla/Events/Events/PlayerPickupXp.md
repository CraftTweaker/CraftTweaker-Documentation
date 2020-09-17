# RecogidaXp

El Evento PlayerPickupXp se activa cada vez que un jugador recibe orbes de experiencia.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerPickupXpEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerPickupXp Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter   | Tipo de devolución                        |
| ----------- | ----------------------------------------- |
| `cancelado` | boolean                                   |
| `jugador`   | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `%s`        | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`        | flotante                                  |

## Métodos

- `event.cancel()` establece el evento como cancelado.