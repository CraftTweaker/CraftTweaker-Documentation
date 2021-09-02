# Importes

En vez de escribir el nombre de una función todo el rato, la puedes importar para acortarla. Útil cuando se usan funciones propias o de soporte de mods.

## Nota en importes antes de 1.12 

Con Crafttweaker 1.12, hay mucho código que ha cambiado.</br> Antes, todas las funciones internas se usaban con el formato `minetweaker.paquete.funcion`. Ahora `minetweaker`ha sido reemplazado por `crafttweaker`, así que ahora el formato es `crafttweaker.paquete.funcion`.

Si alguna vez tienes errores de importación con scripts de esta wiki, comprueba si tu versión es inferior a 1.12

## Importes básicos

Los importes deben estar en la parte de arriba de un script. Cada script tiene sus propios importes, se declaran por separado. Cuidado de no tener dos funciones con el mismo nombre, en caso de tener eso, hay que renombrar una de ellas con el Importe As

```zenscript
//Esto importará la función de ocultar objetos de JEI
import mods.jei.JEI.removeAndHide;

//Esto importa el paquete de JEI entero 
import mods.jei.JEI;

//removeAndHide es una función, asi que la podemos usar directamente
removeAndHide(<minecraft:dirt>);

//JEI es un paquete entero, así que tenemos que especificar que funcion queremos usar.
JEI.hide(<minecraft:diamond>);
```

## Import As

A veces quieres importar dos funciones con el mismo nombre (Suele pasar con Crusher) o a veces quieres que tus scripts se vean mejor usando nombres personalizados. When adding the AS statement at the end of the import, you can specify the name that the import should listen to.

```zenscript
//This will import the hide function from JEI and make it available under the name "h"
import mods.jei.JEI.hide as h;

//And this will import the removeAndHide function from JEI and make it available under the name "rh"
import mods.jei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```