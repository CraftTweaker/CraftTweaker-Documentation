# PlayerAnvilUpdate

El evento PlayerAnvilUpdate se dispara cuando un jugador coloca objetos tanto en la ranura izquierda como derecha de un yunque.
 * Si el evento es cancelado, el comportamiento de la vainilla no se ejecutará, y la salida será nula.
 * Si el evento no se cancela, pero la salida no es nula, establecerá la salida y no ejecutará el comportamiento de vainilla.
 * si la salida es nula, y el evento no se cancela, el comportamiento de vainilla se ejecutará.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerAnvilUpdateEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
PlayerAnvilUpdate Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
La siguiente información puede ser recuperada del evento:

| ZenGetter            | Ajuste           | tipo                                     | Descripción                                                                                                            |
| -------------------- | ---------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `elemento izquierdo` |                  | [IItemStack](/Vanilla/Items/IItemStack/) | El lado izquierdo de la entrada.                                                                                       |
| `elemento derecho`   |                  | [IItemStack](/Vanilla/Items/IItemStack/) | El lado derecho de la entrada.                                                                                         |
| `outputItem`         | `outputItem`     | [IItemStack](/Vanilla/Items/IItemStack/) | Establezca esto para establecer la pila de salida.                                                                     |
| `itemName`           |                  | cadena                                   | El nombre para establecer el elemento, si el usuario especificó uno.                                                   |
| `xpCost`             | `xpCost`         | int                                      | El costo base, establezca esto para cambiarlo si la salida != null.                                                    |
| `costo material`     | `costo material` | int                                      | El número de objetos de la ranura derecha a consumir durante la reparación. Dejar como 0 para consumir la pila entera. |

## Métodos

- `event.cancel()` establece el evento como cancelado.
