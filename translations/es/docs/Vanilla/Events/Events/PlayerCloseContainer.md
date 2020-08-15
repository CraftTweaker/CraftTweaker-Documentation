# Contenedor cerrado jugador

El evento PlayerCloseContainer se activa cada vez que un jugador cierra un contenedor.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerCloseContainerEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
PlayerCloseContainer Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter    | Tipo de devolución                           |
| ------------ | -------------------------------------------- |
| `contenedor` | [Contenedor](/Vanilla/Container/IContainer/) |
