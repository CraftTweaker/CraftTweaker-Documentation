# Poste de cerveza

Este evento se dispara inmediatamente después de que una poción haya sido "elaborada" por la entidad de baldosas para la elaboración de la pieza, cuando los elementos de salida ya han sido reemplazados. Si el evento [PotionBrewPreevent](/Vanilla/Events/Events/PotionBrewPre/) ha sido cancelado pero se han modificado las pilas de elementos dentro del stand de cerveza, este evento también será disparado.

Si el pre-evento es cancelado sin modificar las pilas de artículos, este evento **no** será disparado.

## Clase de evento
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPostEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensiones de la interfaz de eventos
Los eventos PotionBrewPost implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento de la cerveza](/Vanilla/Events/Events/IPotionBrewEvent/)
