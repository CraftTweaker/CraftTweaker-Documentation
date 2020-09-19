# PlayerOpenContainer

El Evento PlayerOpenContainer se activa cada vez que un jugador abre un contenedor.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerOpenContainerEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase anterior y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerOpenContainer Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter    | Tipo de devolución                           |
| ------------ | -------------------------------------------- |
| `jugador`    | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `contenedor` | [Contenedor](/Vanilla/Container/IContainer/) |