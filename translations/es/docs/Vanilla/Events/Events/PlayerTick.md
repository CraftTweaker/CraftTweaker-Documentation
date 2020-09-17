# Tick de jugador

El Evento de PlayerTick se activa cada tick para cada jugador.

## Clase de evento

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensiones de la interfaz de eventos

PlayerTick Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter | Tipo de devolución                   |
| --------- | ------------------------------------ |
| `jugador` | [IPlayer](/Vanilla/Players/IPlayer/) |
| `fase`    | cadena                               |