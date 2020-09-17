# ÍtemToss

El Evento de Objeto se dispara cada vez que un objeto está siendo tostado desde el inventario de un jugador.  
Cancelar este evento evitará que el elemento entre en el mundo, haciendo que el elemento sea eliminado.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. temTossEvent`  
Puede, por supuesto, también [importar la clase](/AdvancedFunctions/Import/) antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento de Itidad](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | Tipo                                          |
| --------- | --------------------------------------------- |
| objeto    | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| jugador   | [IPlayer](/Vanilla/Players/IPlayer/)          |