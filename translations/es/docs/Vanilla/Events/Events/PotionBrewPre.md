# Pociones

Este evento se dispara directamente antes de que tenga lugar la elaboración de vainilla y, si **ha cancelado**, evitará que se produzca la elaboración de cerveza. Si se cancela pero los elementos se modifican, entonces el [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) se disparará automáticamente. Esto permite un simulacro de elaboración "modded".

**Nota**: este evento se dispara justo cuando los cálculos de la receta están teniendo lugar, cuando el "temporizador" alcanza el "progreso máximo".

## Clase de evento
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensiones de la interfaz de eventos
PotionBrewPre Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento de la cerveza](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
