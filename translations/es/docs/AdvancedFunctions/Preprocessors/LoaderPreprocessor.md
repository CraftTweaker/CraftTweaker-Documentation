# Preprocesador de Cargador

El preprocesador del cargador establecerá el cargador del script.

## Llamar

Llamará al preprocesador del cargador añadiendo `#loader loaderName` a su archivo de script con `loaderName` siendo el nombre del cargador al que desea asignar el script.  
Ejemplo: `#loader contenttweaker`

## Qué hace

Los scripts con el preprocesador del cargador sólo serán cargados por el cargador especificado.  
En el ejemplo anterior, el cargador de crafttweaker no tocará el archivo, en su lugar el cargador llamado "contentTweaker" ejecutará ese script.  
Si no especifica ese preprocesador, por defecto será "crafttweaker".