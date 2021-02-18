# Preprocesador de ModCargado

Este preprocesador sólo carga un archivo si detecta un mod X en la lista de mods. 

## Uso

Puedes usar el preprocesador añadiendo ` #modloaded idDeMod ` a tu archivo zs, siendo el ` idDeMod ` el modId que quieres comprobar que exista. Un ejemplo de esto seria ` #modloaded tconstruct `.

Si listas más de un mod el archivo solo se ejecutará si todos los mods están presentes. Ejemplo: ` #modloaded tconstruct immersiveengineering </0>.</p>

<p>También puedes invertir la condición con el operador <code> ! ` que representa NO en programación. Un ejemplo de esto sería:  #modloaded !tconstruct immersiveengineering </0>

El archivo sólo se ejecutaría si <code> immersiveengineering </0> se encontrara presente y <code> tconstruct </0> NO ESTUVIERA en la lista de mods.
</p>

<h2>Lo que hace:</h2>

<p>Añadir este preprocesador a un archivo hace que el archivo en cuestión solo se execute en el caso de que los idsDeMods que se tengan que comprobar existan en el juego, es decir estén cargados en el juego.</p>