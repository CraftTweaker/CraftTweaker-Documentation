# Arrays

Un array es una Lista de varios elementos DEL MISMO TIPO.

## Declarando Arrays

Se declara como una variable y usando ````[ ```` y ````]````.

Importante: siempre * DEBES * inicializar un array a un tipo, aunque este vacio.

`var arrayDeFloats as float [];` no dará errores de sintaxis, pero al volver a cargar tu juego, obtendrás un error y tu archivo no funcionará.

Para inicializar un array vacío hazlo así: ` var arrayDeFloats as float[] = []; `

```zenscript
//Array que contiene "Hello" y "World"
val arrayDeStrings = ["Hola", "Mundo"] as string[];

//Array que contiene 1-3
val arrayDeInts = [1,2,3] as int[];
```

Si ahora estas pensando: "Espera, ¿no he visto estos parentesis antes?", es porque si que los has visto antes.   
  
Recuerda ```recipes.add(IItemStack,[[],[],[]]);```? Esto usa 3 arrays con cada uno conteniendo hasta un máximo de tres entradas para definir lo que es una receta en la mesa de crafteo.

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
val arrayDeStrings1 = ["¡Hola","Mundo"] as string[];
val arrayDeStrings2 = ["Yo", "Soy"] as string[];
val arrayDeStrings3 = ["una","linda"] as string[];
val arrayDeStringsMúltiple = [stringArray1,stringArray2,stringArray3,["Mariposa","!"]] as string[][];
```

## Referirse a un objeto dentro de un Array

Te puedes referirse a un elemento dentro de un Array usando el índice (orden ordinal) del mismo. Los Arrays empiezan a contar desde 0. Es decir, el primer elemento tiene un índice de 0, el segundo de 1, y así sucesivamente.

Si te quieres referir a algo que esta en un Array dentro de otro Array, necesitas dos localizadores, cada uno da información de a lo que nos queremos referir.

```zenscript
/*
arrayDeStrings[0] es "Hola"
arrayDeStrings[1] es "Mundo"
arrayDeStrings[2] es "Yo"
arrayDeStrings[3] es "soy"
*/
val arrayDeStrings = ["Hola","Mundo","Yo","soy"] as string[];

//añade "Hola" al log
print(arrayDeStrings0]);


//Array dentro de un Array
val arrayDeStrings1 = ["¡Hola","Mundo"] as string[];
val arrayDeStrings2 = ["Yo","soy"] as string[];
val arrayDeStrings3 = ["una","linda"] as string[];
val arrayDeStringsMúltiple = [stringArray1,stringArray2,stringArray3,["Mariposa","!"]] as string[][];

/*
arrayDeStringsMúltiple[0] es ["Hola","Mundo"]
arrayDeStringsMúltiple[1] es ["¡Yo","soy"]
arrayDeStringsMúltiple2] es ["una","linda"]
arrayDeStringsMúltiple[3] es ["Mariposa","!"]

arrayDeStringsMúltiple[0][0] es "Hola"
arrayDeStringsMúltiple[0][1] es "Mundo"
etc.
*/

//añade "Mundo" al log
print(stringArrayAll[0][1]);
```

# Bucles

Un bucle es una función que se repite. Puedes usar un bucle para aplicar la misma acción a todo lo que se encuentre dentro de un Array.

## Bucle for 

El bucle for se usa para ir uno por uno a través los miembros de un Array. Esto sirve para poder repetir la misma acción con todos y cada uno de ellos.

```zenscript
import crafttweaker.item.IItemStack;

val array1 = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val array2 = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val array3 = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [indice (opcional), ] nombreElemento in nombreArray {code}

for objeto in array1 {
    //define la variable "objeto" por cada elemento del array.  <br/>  La acción se ejecutará una vez para el objeto <minecraft:dirt>, y después para <minecraft:planks> y <minecraft:diamond>.
    //Usa esta variable a partir de ahora.

    }


for i in 0 to 10 {
    //define la variable "i" como un número que val del 0 al 9 (10 es el limite), y que va cambiando a medida que el bucle se ejecuta.
    print(i);
}

for i in 10 to 20 { <br/>
    //define la variable "i" como un número que va del 10 al 19 (a 20 no llegará)


    }

for i, objeto in array1 {
    //Define la variable "i" como el indice de cada elemento del array1.
    //Define la variable objeto como el elemento del array1
    //Ahora puedes usar estas variables. <br/>
//Craftea un Item del array1 con un Item del array2, y del array3, sin tener en cuenta lo que sean. 
recipes.addShapeless(item,[array1[i],array2[i]]);


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