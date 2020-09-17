# Clic izquierdo del jugador

El Evento PlayerLeftClickBlock se activa cada vez que un jugador izquierdo hace clic en un bloque.  
Se puede cancelar para evitar que se produzcan otros eventos. Si el jugador mantiene pulsado el botón izquierdo, el evento se disparará de nuevo incluso si ha sido cancelado. Cancelar este evento evitará que el clic izquierdo se registre, evitando la ruptura de bloques (aunque no en modo creativo). Si el evento es cancelado, se puede proporcionar un resultado específico de éxito, fallar o pasar. Por defecto, el resultado es pasado.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerLeftClickBlockEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
Los eventos PlayerLeftClickBlock implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interacto del jugador](/Vanilla/Events/Events/PlayerInteract/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
La siguiente información puede ser recuperada del evento:

| ZenGetter                   | Ajuste                      | tipo                                   |
| --------------------------- | --------------------------- | -------------------------------------- |
| `hitvector`                 |                             | [ivector3d](/vanilla/world/ivector3d/) |
| `useblock`                  | `useblock`                  | cadena ("allow" / "deny" / "default")  |
| `useitem`                   | `useitem`                   | cadena ("allow" / "deny" / "default")  |
| `resultados de cancelación` | `resultados de cancelación` | string ("success" / "pass" / "fail")   |

## Métodos

- `event.cancel()` establece el evento como cancelado.
