# Dimensión de la entidad

El evento EntityTravelToDimension se dispara cuando una entidad está a punto de viajar a otra dimensión. Si se cancela, la entidad no podrá viajar.

## Notas

`event.dimension` contiene la dimensión a la que la entidad está a punto de viajar.

## Clase de evento
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensiones de la interfaz de eventos
EntityTravelToDimension Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter   | Tipo de devolución |
| ----------- | ------------------ |
| `dimensión` | int                |
