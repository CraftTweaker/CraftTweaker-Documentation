# Expira

El Evento de Objeto de Expiración se dispara cada vez que un objeto expira (alcanza su vida útil).  
Se puede cancelar para evitar que el objeto sea marcado como muerto.  
Si se cancela, añadirá `extralife` a la vida útil del artículo.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. temExpireEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento de Itidad](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | Ajuste    | Tipo                                          |
| --------- | --------- | --------------------------------------------- |
| objeto    |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | int                                           |