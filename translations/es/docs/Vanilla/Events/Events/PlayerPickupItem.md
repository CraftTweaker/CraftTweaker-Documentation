# Elemento de recogida

El evento PlayerPickupItem se activa cada vez que un jugador interactúa con una entidad.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerPickupItemEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos PlayerPickupItem implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter | Tipo de devolución                            |
| --------- | --------------------------------------------- |
| `objeto`  | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `jugador` | [IPlayer](/Vanilla/Players/IPlayer/)          |