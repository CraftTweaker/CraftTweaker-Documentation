# Entidad de ataque del jugador

El evento de Entidad de Ataque de Jugadores se dispara cuando un jugador ataca a una Entidad.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerAttackEntityEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerAttackEntity Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter   | Tipo de devolución                    |
| ----------- | ------------------------------------- |
| `cancelado` | boolean                               |
| `jugador`   | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `entidad`   | [IEntity](/Vanilla/Entities/IEntity/) |

## Métodos

- `event.cancel()` establece el evento como cancelado.