# Arrays

Un array es una Lista de varios elementos DEL MISMO TIPO.


## Declarando Arrays
It is declared using `[` and `]`.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`var arrayDeFloats as float [];` no dará errores de sintaxis, pero al volver a cargar tu juego, obtendrás un error y tu archivo no funcionará.

Para inicializar un array vacío hazlo así: ` var arrayDeFloats as float[] = []; `

```zenscript
//Array que contiene "Hello" y "World"
val arrayDeStrings = ["Hola", "Mundo"] as string[];

//Array que contiene 1-3
val arrayDeInts = [1,2,3] as int[];
```

Si ahora estas pensando: "Espera, ¿no he  visto estos parentesis antes?", es porque si que los has visto antes. Remember `recipes.add(out,[[],[],[]]);`? Esto usa 3 arrays con cada uno conteniendo hasta un máximo de tres entradas para definir lo que es una receta en la mesa de crafteo.

## Dando un tipo a un Array (Inicializar)
You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? Esto es porque ZenScript a veces no puede predecir que tipo de cosas habrá en los miembros de un array. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:
```zenscript
import crafttweaker.item.IItemStack;
val myArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Arrays dentro de Arrays
Puedes insertar un Array dentro de otro.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## Referirse a un objeto dentro de un Array
Te puedes referirse a un elemento dentro de un Array usando el índice (orden ordinal) del mismo. The first item in an Array is No. 0, the 2nd No.1 and so on.

Si te quieres referir a algo que esta en un Array dentro de otro Array, necesitas dos localizadores, cada uno da información de a lo que nos queremos referir.

```zenscript
/*
stringArray[0] is "Hello"
stringArray[1] is "World"
stringArray[2] is "I"
stringArray[3] is "am"
*/
val stringArray = ["Hello","World","I","am"] as string[];

//prints "Hello"
print(stringArray[0]);


//Nested Arrays
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beautiful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];

/*
stringArrayAll[0] is ["Hello","World"]
stringArrayAll[1] is ["I","am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","!"]

stringArrayAll[0][0] is "Hello"
stringArrayAll[0][1] is "World"
etc.
*/

//prints "World"
print(stringArrayAll[0][1]);
```


# Bucles
Un bucle es una función que se repite. Puedes usar un bucle para aplicar la misma acción a todo lo que se encuentre dentro de un Array.

## Bucle for
El bucle for se usa para ir uno por uno a través los miembros de un Array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

```zenscript
import crafttweaker.item.IItemStack;

val array1 = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val array2 = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val array3 = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [indice (opcional), ] nombreElemento in nombreArray {code}

for objeto in array1 {
    //define la variable "objeto" por cada elemento del array.  
  La acción se ejecutará una vez para el objeto <minecraft:dirt>, y después para <minecraft:planks> y <minecraft:diamond>.
    //Usa esta variable a partir de ahora. 
recipes.remove(objeto); 
    recipes.remove(item);
}

for i, item in IArray {
    //defines the variable "i" with each element Number of IArray (i.e. 0,1,2,...)
    //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Just use these variables now!

    //Crafts Item of IArray using item of JArray and KArray (i.e. Dirt with grass and wooden axe, planks with wood and golden shovel, diamond with gold ingot and emerald)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //defines the variable "i" with each number from 0 to 9 (i.e. 0,1,2,...,8,9)
    print(i);
}

for i in 10 .. 

//Craftea un Item del array1 con un Item del array2, y del array3, sin tener en cuenta lo que sean. 
recipes.addShapeless(item,[array1[i],array2[i]]);


for objeto in loadedMods["minecraft"].items {
    //Define la variable "objeto" como uno de los muchos items añadidos por el mod con modid "minecraft" y elimina su receta de crafteo.
    recipes.remove(objeto);
}
```

## Bucle While
The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

```zenscript
var i = 0; 

//Añadira los números que van del 0 a 9 al log, ya que son más pequeños que 10, ya que cuando i = 10 el bucle no se ejecuta.
while i < 10 {
    print(i); 
    i += 1;
} 

print("Despues del bucle i es: " + i);


//Añadira los números que van del 10 - 6 porque cuando i = 5 el bucle se termina forzosamente.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("Despues del segundo bucle i es: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Añadir elementos a un Array

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.   
You use the `+` operator for array Addition:

```zenscript
import crafttweaker.item.IItemStack;

val lingoteHierro = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += lingoteHierro;
for objeto in array {
    print(objeto.displayName);
  // Añadirá Lingote de Hierro al log
}
```
