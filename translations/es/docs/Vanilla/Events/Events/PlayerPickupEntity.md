# Entidad de recogida del jugador

El evento PlayerPickupEntity se activa cada vez que un jugador interactúa con una entidad.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerPickupEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter   | Tipo de devolución                    |
| ----------- | ------------------------------------- |
| `cancelado` | boolean                               |
| `procesado` | boolean                               |
| `jugador`   | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `entidad`   | [IEntity](/Vanilla/Entities/IEntity/) |

## Métodos

- `event.cancel()` establece el evento como cancelado.
- `event.process()` establece el evento como procesado.