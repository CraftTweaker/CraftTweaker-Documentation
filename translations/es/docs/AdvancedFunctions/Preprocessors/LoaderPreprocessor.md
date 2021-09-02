# Prepocesador de Cargado 

El Preprocesador de cargado establecerá el cargador que leerá tu archivo. 

## Uso

Puedes usar el Preprocesador de cargado añadiendo `#loader nombreDeCargador` a tu archivo. nombreDeCargador debería de ser el cargador que debería leer tu archivo. Un ejemplo es ` #loader contenttweaker` que preparará tu archivo para ser leído como un archivo de ContentTweaker.

## Lo que hace:

Los scripts con el preprocesador del cargador sólo serán cargados por los cargadores especificados.  
En el primer ejemplo anterior, el cargador de crafttweaker no tocará el archivo, en su lugar el cargador llamado "contenttweaker" ejecutará ese script.  
En el segundo ejemplo, los cargadores llamados "preinit", "crafttweaker" y "gregtech" ejecutarán cada uno ese script.  
Si no especifica ese preprocesador, por defecto será sólo "crafttweaker".  
Es altamente recomendable que defina solo un cargador para un script ejecutando cualquier código, como ejecutarlo varias veces con diferentes cargadores normalmente provocará errores o comportamientos indefinidos.  
Definir múltiples cargadores es útil para declarar [variables estáticas](/AdvancedFunctions/Global_Static_Variables/) y [funciones personalizadas](/AdvancedFunctions/Custom_Functions/) en scripts de utilidad que están disponibles durante la ejecución de múltiples cargadores mediante [referencias de guiones cruzados](/AdvancedFunctions/Cross-Script_Reference/).