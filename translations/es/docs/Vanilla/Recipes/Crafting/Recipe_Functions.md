# Funciones de Receta

# IRecipeFunción

Algunas recetas soportan funciones personalizadas para determinar programáticamente su salida.  
Esto puede ser especialmente útil si necesitas parte de la información del artículo de entrada, como el valor del daño.  
Esta es una llamada IRecipeFunction.

## Ejemplo para reparar un pico

```zenscript
val diaPick = <minecraft:diamond_pickaxe>;

//we start normal, by writing the output
recipes.addShapeless("pickrepair",diaPick,

//seguido por el arreglo de entrada. Un cambio sin embargo - marcamos el pico de diamante, así que podemos usarlo en la función más adelante
[diaPick. nyDamage().marked("mark"),<minecraft:diamond>],

//ahora comenzamos a declarar la función. 
//It necesita 3 parámetros, uno para la salida, uno para las entradas y otro para la información de fabricación. 
//Sólo necesitaremos el parámetro de entrada.
function(out, ins, cInfo){

    //ahora devolvemos el pico con 0 DMG o daño corriente -10, sea cual sea el nivel más alto. Esto es para prevenir valores de daños negativos.
    return ins.mark.withDamage(max(0,ins.mark.damage - 10));
}, 
//No necesitamos una receta aquí por lo que solo establecerla nula
nula);
```

## Cómo configurar una IRecipeFunction

Como podría haber visto en el ejemplo anterior, hay una función con 3 parámetros:  
No tienes que llamarlos de esta manera, pueden tener ningún nombre.

`out` es la salida de la receta y un objeto ItemStack.  
`ins` es un mapa con las marcas como claves y las entradas marcadas como valores.  
`cInfo` es un objeto ICraftingInfo

La función debe devolver el ItemStack que la receta debe salir.

Puedes invalidar una receta devolviendo `nulo` para que no se pueda fabricar bajo ciertas condiciones.

Modificar el `in` aquí es una mala idea. esta función activa para cada cambio en la rejilla de fabricación, no cuando se extrae el resultado.

# IReceta

Pero CraftTweaker va más allá de simplemente calcular las salidas usando funciones.  
Con una función de receta también puedes determinar qué debe ocurrir cuando un usuario fabrica el artículo.  
Un objeto IRecipeAction viene después de una IRecipeFunction!

```zenscript
val stone = <minecraft:stone>;

recetas.addShapeless("experiencestone",stone,[stone,stone,stone,stone,stone],
//IrecipeFunction, simplemente devuelve la salida, esta vez no nos interesa.
function(out,ins,cInfo){
    return out;
},
//IRecipeAction
function(out,cInfo,player){
    player.xp += 1;
});
```

Esto da al jugador que realiza el nivel de la receta 1 cada vez que se completa la fabricación. Again, we have a function with 3 Parameters:  
`out` is the recipe's output and an IItemStack object.  
`cInfo` is an ICraftingInfo Object  
`player` is the player performing the recipe and an [IPlayer](/Vanilla/Players/IPlayer/) object.