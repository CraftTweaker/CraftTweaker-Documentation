# MinecartCollision

El MinecartCollisionEvent se dispara cada vez que una vagoneta choca con una entidad.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. inecartCollisionEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
Los eventos de MinecartCollision implementan las siguientes interfaces y pueden llamar a todos sus métodos/getters/setters también:

- [Evento IMinecart](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters

| ZenGetter      | Tipo                                  |
| -------------- | ------------------------------------- |
| `colisionador` | [IEntity](/Vanilla/Entities/IEntity/) |
