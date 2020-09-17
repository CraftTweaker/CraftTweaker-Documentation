# Recogida del reproductor

El Evento de Recogida de Jugador se dispara después de que un jugador haya interactuado con un objeto de entidad y se haya recogido un objeto o una cantidad de un objeto. Este evento tendrá lugar después de que [Jugador de recogida](/Vanilla/Events/Events/PlayerPickupItem/) haya sido disparado.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerItemPickupEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
PlayerItemPickup Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter          | Tipo de devolución                            |
| ------------------ | --------------------------------------------- |
| `pila Copia`       | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `entidad original` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Notas

`StackCopy` es una copia del elemento contenido dentro del elemento original de la entidad, representando lo que fue recogido y colocado en el inventario del jugador. `originalEntity` es la entidad de artículos con cualquier cantidad restante de la pila de artículos (si el jugador no ha recogido la cantidad completa).
