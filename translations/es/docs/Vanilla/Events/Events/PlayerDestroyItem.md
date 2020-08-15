# PlayerDestroyItem

El evento DestroyItem jugador se dispara cuando un jugador destruye un objeto.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerDestroyItemEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos PlayerDestroyItem implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter       | Tipo de devolución                       |
| --------------- | ---------------------------------------- |
| `jugador`       | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `ítem original` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `mano`          | cadena                                   |