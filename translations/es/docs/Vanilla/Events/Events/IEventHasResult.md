# IEventHasResult

Esta interfaz es extendida por todos los Eventos que tienen un resultado que es usado por el evento. El resultado de un evento puede ser uno de los tres valores:

- permitir
- negar
- por defecto

El significado de estos depende del contexto. Generalmente, negar un evento evita que se produzca una acción específica relacionada con un evento (incluso si no se garantizaba que ocurriera). De la misma manera, permitir un evento forzará un comportamiento (aunque no estuviera garantizado). Por defecto simplemente hace que el evento continúe con su lógica normal. No todos los eventos usan todos los resultados.

## Importar la clase
Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IEventHasResult;`

## ¿Qué se puede hacer con ellos?

- `event.result` Obtenido, devuelve un valor de cadena de `por defecto`, `denegar` o `permitir`
- `event.deny()` Método establece el resultado del evento en `denegar`
- `event.allow()` Método establece el resultado del evento en `permitir`
- `event.default()` Método establece el resultado del evento en `predeterminado`
