# Arrays

Un array es una Lista de varios elementos DEL MISMO TIPO.

## Declarando Arrays

Se declara como una variable y usando ````[ ```` y ````]````.

Importante: siempre * DEBES * inicializar un array a un tipo, aunque este vacio.

`var floatArray as float [];` no dará errores de sintaxis, pero al volver a cargar tu juego, obtendrás un error y tu archivo no funcionará.

Para inicializar un array vacío hazlo así: ` var floatArray as float[] = []; `

```zenscript
//Array que contiene "Hello" y "World"
val stringArray = ["Hello", "World"] as string[];

//Array que contiene 1-3
val intArray = [1,2,3] as int[];
```

Si ahora estas pensando: "Espera, ¿no he visto estos parentesis antes?", es porque si que los has visto antes.   
  
Recuerda ```recipes.add(out,[[],[],[]]);```? Esto usa 3 arrays con cada uno conteniendo hasta un máximo de tres entradas para definir lo que es una receta en la craftingTable.

## Dando un tipo a un Array (Inicializar)

Seguramente te habrás dado cuenta que todos los arrays tiene la palabra clave ` as ` (tipo) en alguna parte. ¿Por qué? Esto es porque ZenScript a veces no puede predecir que tipo de cosas habrá en los miembros de un array. Ésta podría ser la razón a errores de conversión de tipo.   
Mas vale prevenir que curar, y darle un tipo a tu Array, que debería ser único.   
Deberías tener en cuenta que si le das un tipo (en Inglés casteas) a un tipo no primitivo (es decir que no viene de por si en un lenguaje de programación y que es propio de Minecraft), deberías ` importar ` el tipo arriba de todo del archivo.

```zenscript
import crafttweaker.item.IItemStack;
val myArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Arrays dentro de Arrays

Puedes insertar un Array dentro de otro.

```zenscript
val stringArray1 = ["¡Hola","Mundo"] as string[];
val stringArray2 = ["Soy"] as string[];
val stringArray3 = ["una","mariposa"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["preciosa","!"]] as string[][];
```

## Referirse a un objeto dentro de un Array

Te puedes referirse a un elemento dentro de un Array usando el índice (orden ordinal) del mismo. Los Arrays empiezan a contar desde 0. Es decir, el primer elemento tiene un índice de 0, el segundo de 1, y así sucesivamente.

Si te quieres referir a algo que esta en un Array dentro de otro Array, necesitas dos localizadores, cada uno da información de a lo que nos queremos referir.

```zenscript
/*
stringArray[0] is "Hola"
stringArray[1] is "Mundo"
stringArray[2] is "Yo"
stringArray[3] is "soy"
*/
val stringArray = ["Hola","Mundo","Yo","soy"] as string[];

//añade "Hola" al log
print(stringArray[0]);


//Array dentro de un Array
val stringArray1 = ["¡Hola","Mundo"] as string[];
val stringArray2 = ["Yo","soy"] as string[];
val stringArray3 = ["una","linda"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Mariposa","!"]] as string[][];

/*
stringArrayAll[0] es ["Hola","Mundo"]
stringArrayAll[1] es ["¡Yo","soy"]
stringArrayAll[2] es ["una","linda"]
stringArrayAll[3] es ["Mariposa","!"]

stringArrayAll[0][0] es "Hola"
stringArrayAll[0][1] es "Mundo"
etc.
*/

//añade "Mundo" al log
print(stringArrayAll[0][1]);
```

# Bucles

Un bucle es una función que se repite. Puedes usar un bucle para aplicar la misma acción a todo lo que se encuentre dentro de un Array.

## Bucle for 

El bucle for se usa para usar todos los miembros de un Array Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

```zenscript
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [IntegerName, ] elementName in IArray {code}

for item in IArray {
    //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Just use this variable now!
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
    //defines the variable "i" with each number from 10 to 19 (i.e. 10,11,12,...,18,19)
    print(i);
}

for item in loadedMods["minecraft"].items {
    //defines the variable "item" with each item added by the mod with the modID "minecraft" and removes its crafting recipe
    recipes.remove(item);
}
```

## While Loop

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

```zenscript
var i = 0; 

//Will print 0 - 9, because in the iteration after that, i < 10 is false since i is 10 then.
while i < 10 {
    print(i); 
    i += 1;
} 

print("After loop: " + i);


//Will print 10 - 6, because in the iteration after that i == 5 and it will break.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("After loop 2: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Adding items to an Array

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```