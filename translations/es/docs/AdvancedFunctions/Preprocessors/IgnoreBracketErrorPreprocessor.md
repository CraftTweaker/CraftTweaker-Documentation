# Ignorar errores de corchete preprocesador

Este preprocesador establece su script para ignorar errores de backet.  
Esto NO corrige mágicamente en modo alguno su script, suprime el registro de errores.

## Llamar

Puede llamar al preprocesador IgnoreBracketErrors colocando `#ignoreBracketErrors` dentro de su archivo de script.  
Este preprocesador es específico de archivos, por lo que llamarlo en un archivo no afecta a los demás (al menos no por lo que concierne al procesador.

## Qué hace

Cuando se llama al preprocesador en un archivo, se eliminarán todos los registros de errores de corchete.  
Esto no cambia las líneas afectadas de ninguna manera, en su lugar el único cambio es que su registro no contendrá las líneas relacionadas.