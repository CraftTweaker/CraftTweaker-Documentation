# InteractBloque Jugador

El evento PlayerInteractBlock se activa cada vez que un jugador hace clic derecho en un bloque.  
Se puede cancelar para evitar que se produzcan otros eventos. Si el evento es cancelado, se puede proporcionar un resultado específico de éxito, fallar o pasar. Por defecto, el resultado es pasado.

## Event Class

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerInteractBlockEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Event interface extensions

Los eventos PlayerInteractBlock implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

The following information can be retrieved from the event:

| zengetter                   | zensetter                   | type                                   |
| --------------------------- | --------------------------- | -------------------------------------- |
| `hitvector`                 |                             | [IVector3d](/Vanilla/World/IVector3d/) |
| `useblock`                  | `useblock`                  | cadena ("allow" / "deny" / "default")  |
| `useitem`                   | `useitem`                   | cadena ("allow" / "deny" / "default")  |
| `resultados de cancelación` | `resultados de cancelación` | string ("success" / "pass" / "fail")   |

## ZenMethods

- `event.cancel()` sets the event as cancelled.