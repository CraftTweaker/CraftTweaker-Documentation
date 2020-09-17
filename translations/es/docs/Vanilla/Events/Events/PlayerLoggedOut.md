# Sesión de Jugador

El Evento PlayerLoggedOut se activa cuando un jugador cierra la sesión.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerLoggedOutEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase anterior y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos PlayerLoggedIn implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter | Tipo de devolución                   |
| --------- | ------------------------------------ |
| `jugador` | [IPlayer](/Vanilla/Players/IPlayer/) |