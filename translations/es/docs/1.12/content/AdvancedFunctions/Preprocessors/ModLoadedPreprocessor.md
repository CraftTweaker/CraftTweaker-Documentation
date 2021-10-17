# Preprocesador de ModCargado

Este preprocesador sólo carga un archivo si detecta un mod X en la lista de mods.

## Uso
You call the modLoaded Preprocessor by adding `#modloaded modID` to your script file, with `modID` being the modId you want to check for:  
Example: `#modloaded minecraft`

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

También puedes invertir la condición con el operador ` ! ` que representa NO en programación. Un ejemplo de esto sería: ` #modloaded !tconstruct immersiveengineering ` El archivo sólo se ejecutaría si ` immersiveengineering ` se encontrara presente y ` tconstruct ` NO ESTUVIERA en la lista de mods.

## Lo que hace:
Añadir este preprocesador a un archivo hace que el archivo en cuestión solo se execute en el caso de que los idsDeMods que se tengan que comprobar existan en el juego, es decir estén cargados en el juego.