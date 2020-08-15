# IProcessableEvent

Esta interfaz es extendida por todos los eventos que pueden ser procesados.  
Estos eventos se establecerán como procesados después de que todo lo que están hechos para que hayan sido completados y otros manejadores de eventos ya no deberían cambiar el evento.  
¡Ten en cuenta que todavía pueden!

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IPlayerEvent;`

## ¿Qué se puede hacer con estos

- `event.process();` método, devuelve vacío (nada)
- `event.processed;` getter, devuelve un bool