# Importar función

En lugar de escribir todo el nombre de la función, puede importar una función para satisfacer sus necesidades. Útil cuando se usan funciones de mod.

## Nota sobre importaciones anteriores a 1.12

Con CraftTweaker 1.12, un montón de código ha cambiado.  
Antes bien, todas las funciones internas fueron llamadas usando `minetweaker.package.function`. Ahora, `minetweaker` ha sido reemplazado por `crafttweaker`, así que ahora sais `crafttweaker.name.function`!

Si alguna vez experimenta algún problema importando scripts de esta wiki, puede que desee comprobar si su versión de MC está por debajo de 1.12.

## Importación básica

Las importaciones deben ser declaradas en la parte superior de un Script. Tendrá que declarar las importaciones para cada script por separado. Ten cuidado de no importar dos funciones con el mismo nombre, usa la función AS para eso

```zenscript
//Esto importará la función de ocultar de JEI
import mods.jei.JEI.removeAndHide;

//Y esto importará el paquete JEI
importar mods.jei. EI;

//removeAndHide es una función, así que podemos usarla
removeAndHide(<minecraft:dirt>);

//JEI es un paquete, así que necesitamos especificar qué función queremos usar
JEI. ide(<minecraft:diamond>);
```

## Importar como

A veces quiere importar dos funciones con el mismo nombre o simplemente quiere mantener el aspecto de sus scripts usando nombres personalizados. Al añadir la sentencia AS al final de la importación, puede especificar el nombre al que la importación debe escuchar.

```zenscript
//Esto importará la función de oculto de JEI y la hará disponible bajo el nombre "h"
import mods.jei.JEI. además de h;

//Y esto importará la función removeAndHide de JEI y lo hará disponible bajo el nombre "rh"
mods de importación. ei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```