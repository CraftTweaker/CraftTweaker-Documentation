# Jugador Fundicionado

El Evento de Fundición de Jugadores se activa cada vez que un jugador saca algo de un horno.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerworeltedEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Eventos Jugados implementan las siguientes interfaces y pueden llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter | Tipo de devolución                       |
| --------- | ---------------------------------------- |
| `jugador` | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `salida`  | [IItemStack](/Vanilla/Items/IItemStack/) |