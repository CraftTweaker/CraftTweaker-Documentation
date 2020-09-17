# Dimensión del jugador cambiada

El evento PlayerChangedDimension es disparado cada vez que el [jugador](/Vanilla/Players/IPlayer/) [dimensión/mundo](/Vanilla/World/IWorld/) cambia, por ejemplo al entrar/salir del ninguno de los dos.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerChangedDimensionEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los Eventos PlayerChandedDimension implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter   | Tipo de devolución                   |
| ----------- | ------------------------------------ |
| `jugador`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `de`        | int                                  |
| `del mundo` | [IWorld](/Vanilla/World/IWorld/)     |
| `a`         | int                                  |
| `al mundo`  | [IWorld](/Vanilla/World/IWorld/)     |