# PlayerInteractEntity

El evento PlayerInteractEntity se activa cada vez que un jugador interactúa con una entidad. Se puede cancelar para evitar que la interacción se lleve a cabo. Si el evento es cancelado, se puede proporcionar un resultado específico de éxito, fallar o pasar. Por defecto, el resultado es pasado.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerInteractEntityEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerInteractEntity Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interacto del jugador](/Vanilla/Events/Events/PlayerInteract/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

La siguiente información puede ser recuperada del evento:

| ZenGetter                   | ZenSetters                  | Tipo de devolución                    |
| --------------------------- | --------------------------- | ------------------------------------- |
| `jugador`                   |                             | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`                    |                             | [IEntity](/Vanilla/Entities/IEntity/) |
| `resultados de cancelación` | `resultados de cancelación` | string ("success" / "pass" / "fail")  |

## Métodos

- `event.cancel()` establece el evento como cancelado.