# PlayerAnvilUpdate

El evento PlayerAnvilUpdate se dispara cuando un jugador coloca objetos tanto en la ranura izquierda como derecha de un yunque.
 * Si el evento es cancelado, el comportamiento de la vainilla no se ejecutará, y la salida será nula.
 * Si el evento no se cancela, pero la salida no es nula, establecerá la salida y no ejecutará el comportamiento de vainilla.
 * si la salida es nula, y el evento no se cancela, el comportamiento de vainilla se ejecutará.

## Event Class
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerAnvilUpdateEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Event interface extensions
PlayerAnvilUpdate Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetter        | type                                     | Description                                                                                                            |
| -------------------- | ---------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `elemento izquierdo` |                  | [IItemStack](/Vanilla/Items/IItemStack/) | El lado izquierdo de la entrada.                                                                                       |
| `elemento derecho`   |                  | [IItemStack](/Vanilla/Items/IItemStack/) | El lado derecho de la entrada.                                                                                         |
| `outputItem`         | `outputItem`     | [IItemStack](/Vanilla/Items/IItemStack/) | Establezca esto para establecer la pila de salida.                                                                     |
| `itemName`           |                  | string                                   | El nombre para establecer el elemento, si el usuario especificó uno.                                                   |
| `xpCost`             | `xpCost`         | int                                      | El costo base, establezca esto para cambiarlo si la salida != null.                                                    |
| `costo material`     | `costo material` | int                                      | El número de objetos de la ranura derecha a consumir durante la reparación. Dejar como 0 para consumir la pila entera. |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
