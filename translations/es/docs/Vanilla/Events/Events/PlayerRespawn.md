# Reaparición del jugador

El Evento de Respawn de Jugador se dispara cada vez que un jugador reaparece.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerRespawnEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerRespawn Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter        | Tipo de devolución                                         |
| ---------------- | ---------------------------------------------------------- |
| `jugador`        | [IPlayer](/Vanilla/Players/IPlayer/)                       |
| `isEndConquered` | bool (estados si la reaparición es debido al portal final) |