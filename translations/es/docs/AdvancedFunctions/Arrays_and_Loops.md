# Arreglos

Una matriz es una lista que contiene varios elementos del mismo tipo.

## Declarando matrices

Se declara usando ```[``` y ```]```.

**Imortante**: *debe* inicializar arreglos a algo, incluso si es un arreglo vacío.

`var floatArray como float [];` no dará errores de sintaxis, pero al volver a cargar tu juego, obtendrás un error y tu script no funcionará.

En su lugar, inicializa arreglos vacíos como esta `var floatArray como float [] = [];`

```zenscript
//Array que contiene "Hola" y "Mundo"
val stringArray = ["Hola", "Mundo"] como cadena[];

//Array que contiene 1-3
val intArray = [1,2,3] as int[];
```

Si ahora piensas que "espera, ¿no he visto estos paréntesis antes?", lo has hecho. Recordar ```recipes.add(out,[[],[],[]]);```? Esto usa tres arrays con cada uno que contiene hasta tres entradas para definir una receta de tabla de fabricación.

## Arreglos de Emisión

Seguro que has notado que todos los arreglos aquí tienen el `como` declaración anexada.  
¿Por qué preguntas? Esto se debe a que ZenScript a veces no puede predecir qué tipo de elementos de la matriz. ¡Esta puede ser la causa de extraños registros de errores de conversión!  
¡Más vale estar seguro que lo sentimos y enviar los Arrays a sus tipos correctos!  
Además, si usted envía a tipos no primitivos (todo excepto cadenas, ints y lo mismo) asegúrese de [importar](/AdvancedFunctions/Import/) el paquete correspondiente y asegúrese de hacerlo en el TOP del script:

```zenscript
importar crafttweaker.item.IIItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] como ItemStack[];
```

## Arrays anidados

Puedes colocar Arrays en Arrays.

```zenscript
val stringArray1 = ["Hola","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","! ]] como string[][];
```

## Redoblando a los objetos de un Arreglo

Puede referirse a un elemento dentro de una matriz usando su lugar en la lista. El primer elemento de un Arreglo es el No. 0, el segundo No.1 y así sucesivamente.

Si quieres referirte a un elemento en un array anidado, necesita dos o más referentes, ya que cada una elimina una capa de las listas.

```zenscript
/*
stringArray[0] is "Hello"
stringArray[1] is "World"
stringArray[2] is "I"
stringArray[3] is "am"
*/
val stringArray = ["Hola", Mundo","y","am"] como cadena[];

//prints "Hola"
print(stringArray[0]);


//Arrays anidados
val stringArray1 = ["Hola","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","hermoso"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","! ]] como string[][];

/*
stringArrayAll[0] es ["Hola","World"]
stringArrayAll[1] es ["I", am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","! ]

stringArrayAll[0][0] es "Hola"
stringArrayAll[0][1] es "Mundo"
etc.
*/

//prints "Mundo"
print(stringArrayAll[0][1]);
```

# Bucles

Un bucle es una función que se repite. Puedes usar bucles para aplicar una acción a todos los elementos de un Arreglo

## Para bucle

El uso principal del bucle for-se está iterando a través de una matriz. Iterar significa hacer una acción a todos los elementos de una matriz.  
Puedes usar la palabra clave `romper` para romper el bucle de forma premadura.

```zenscript
importar crafttweaker.item. ItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] como ItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] como ItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] como ItemStack[];


//for [Nombre entero, ] elementName en IArray {code}

para elemento en IArray {
    //define la variable "item" con cada elemento de IArray (i. . <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //¡Utilice esta variable ahora!
    //Crafts Item of IArray using item of JArray and KArray (i.e. Dirt with grass and wooden axe, planks with wood and golden shovel, diamond with gold ingot and emerald)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //defines the variable "i" with each number from 0 to 9 (i.e. 0,1,2,...,8,9)
    print(i);
}

for i in 10 ..

    recipes.remove(item);
}

for i, item in IArray {
    //defines the variable "i" with each element Number of IArray (i.e. 0,1,2,...)
    //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Just use these variables now! 20 {
    //define la variable "i" con cada número de 10 a 19 (es decir, 10,11,12,. .,18,19)
    print(i);
}

para elemento en loadedMods["minecraft"]. tems {
    //define la variable "item" con cada elemento añadido por el mod con el modID "minecraft" y elimina sus recetas
    de fabricación. emove(item);
}
```

## Mientras bucle

El bucle while ejecuta el código dado siempre y cuando la condición dada evalúe a `verdadero`.  
Alternativamente, puede detenerlo usando la palabra clave `break`.

```zenscript
var i = 0; 

//Will print 0 - 9, because in the iteration after that, i < 10 is false since i is 10.
while i < 10 {
    print(i); 
    i += 1;
} 

print("Bucle posterior: " + i);


///Imprimirá 10 - 6, porque en la iteración después de que i == 5 y se romperá.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("Después del bucle 2: " + i);


para k en 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Añadiendo elementos a una matriz

Aunque no se recomienda hacerlo, es posible añadir algunos objetos a Arrays.  
Sólo se pueden añadir objetos individuales a un array, no se pueden añadir dos arrays.  
Utilizas el operador `+` para el arreglo adicional:

```zenscript
importar crafttweaker.item. ItemStack;

val iron = <minecraft:iron_ingot>;
var array como ItemStack[] = [hierro, hierro, hierro];

array += hierro;
para artículo en array {
    print(item. isplayName);
}
```