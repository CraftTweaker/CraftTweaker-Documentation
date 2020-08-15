# Spawn del jugador

El evento PlayerSetSpawn se dispara cada vez que la ubicación de un jugador cambia.  
Se puede cancelar para evitar más procesos.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerSetSpawnEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerSetSpawn Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter     | Tipo de devolución                     |
| ------------- | -------------------------------------- |
| `jugador`     | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `es forzado`  | pluma                                  |
| `nuevo Spawn` | [IBlockPos](/Vanilla/World/IBlockPos/) |