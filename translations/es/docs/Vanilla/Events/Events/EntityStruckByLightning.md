# EntityStruckByLightning

El evento EntityStructural ByLightning se dispara cada vez que un rayo está a punto de golpear a una entidad.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ntityStruckByLightningEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos LivingEntityUseItem implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter     | Tipo de devolución                    |
| ------------- | ------------------------------------- |
| `iluminación` | [IEntity](/Vanilla/Entities/IEntity/) |