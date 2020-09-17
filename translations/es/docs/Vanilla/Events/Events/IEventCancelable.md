# IEventCancelable

Esta interfaz es extendida por todos los eventos que pueden ser cancelados.  
Esto significa que puedes cancelarlos usando CrT o comprobar si han sido cancelados.

Tenga en cuenta que los eventos que hayan sido cancelados antes de que CrT los reciba no serán verificados por los controladores.  
Además, si registras múltiples manejadores, y uno de ellos cancela el evento, ¡los otros manejadores CrT seguirán recibiendo!

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IEventCancelable;`

## ¿Qué se puede hacer con ellos?

- `event.cancel();` método, devuelve vacío (nada).
- `event.canceled;` Obtiene, devuelve un bool.
- `event.canceled = true;` Setter